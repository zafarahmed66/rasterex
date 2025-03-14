---
title: The RxSymbols Object
---

**Component name:** `RxSymbolCom.dll`

## RxSymbols Methods

### Close

Closes all currently opened libraries. If `RxSymbols` is connected to a server, the connection will be closed.

#### Syntax

```cpp
Close()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GenerateDataMatrixDIB

Creates a DataMatrix-encoded barcode image based on the input parameters.

#### Syntax

```cpp
GenerateDataMatrixDIB(BSTR Text, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the DataMatrix barcode standard.
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GenerateQR

Creates a QR-encoded barcode image based on the input parameters. QR, or Quick Response Code, is one of the most commonly used barcode standards.

#### Syntax

```cpp
GenerateQR(BSTR Text, int Size, int Margin, int Level, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the QR barcode standard.
- **Size**: Size scale to use for the returned image. Recommended value: `2`.
- **Margin**: Margin scale; the number of pixels for the margin is `Margin * 2` pixels.
- **Level**: Error correction level; the following values are supported:
  - `7%`
  - `15%`
  - `25%`
  - `30%`
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- Check [Appendix A](/docs/RxSDK_for_Server/RxSymbol/appendixes.mdx#appendix-a-barcode-appearances) for more information about barcodes and examples of how they look.
- For more information about QR encoding, we recommend that you take a look at: [https://en.wikipedia.org/wiki/QR_code](https://en.wikipedia.org/wiki/QR_code).

### GenerateQRMeta

Creates a QR-encoded barcode metafile based on the input parameters.

#### Syntax

```cpp
GenerateQRMeta(BSTR Text, int Size, int Margin, int Level, OLE_HANDLE *Meta)
```

#### Parameters

- **Text**: Text to encode using the QR barcode standard.
- **Size**: Size scale to use for the returned image. Recommended value: `2`.
- **Margin**: Margin scale; the number of pixels for the margin is `Margin * 2` pixels.
- **Level**: See the `GenerateQR` method for more information.
- **Meta**: Returned `HENHMETAFILE` handle that contains metafile data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetAztecBarcodeDIB

Creates an Aztec-encoded 2D barcode image based on the input parameters.

#### Syntax

```cpp
GetAztecBarcodeDIB(BSTR Text, LONG Size, LONG Type, LONG ErrorCorrection, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the Aztec barcode standard.
- **Size**: Size scale to use for the returned image. Recommended value: `2`.
- **Type**: Currently only type `0` is supported. Set to `0`.
- **ErrorCorrection**: Percentage for redundancy error correction. Recommended value is `23`.
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- Check [Appendix A](/docs/RxSDK_for_Server/RxSymbol/appendixes.mdx#appendix-a-barcode-appearances) for more information about barcodes and examples of how they look.
- For more information about Aztec encoding, we recommend that you take a look at: [https://en.wikipedia.org/wiki/Aztec_Code](https://en.wikipedia.org/wiki/Aztec_Code).

### GetCode128BarcodeDIB

Creates a Code 128-encoded barcode image based on the input parameters.

#### Syntax

```cpp
GetCode128BarcodeDIB(BSTR Text, BSTR LabelText, BOOL IncludeText, double Height, double NarrowBar, double Ratio, int Subset, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the Code 128 barcode standard.
- **LabelText**: Optional text that will be displayed on top of the barcode.
- **IncludeText**: If `true`, the actual text will be displayed at the bottom of the image.
- **Height**: Scales the height of the barcode. A scaling of `1.0` will give a 96-pixel height image (1 inch). Note that the image will be higher if you enable text display and/or use a label.
- **NarrowBar**: Width for the narrow bar.
- **Ratio**: Ratio between narrow and wide bars. Can be between `2.0` and `3.0`. We recommend using `3.0` for the ratio.
- **Subset**: Three different encodings that support different character subsets; use one of the available values from the list below:
  | ID | Name | Characters Allowed |
  |-----|-------|---------------------------------------------|
  | 0 | 128A | ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4 |
  | 1 | 128B | ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4 |
  | 2 | 128C | 00–99 and FNC1 |
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- For more information about Code 128 encoding, we recommend that you take a look at: [https://en.wikipedia.org/wiki/Code_128](https://en.wikipedia.org/wiki/Code_128).

### GetCode39BarcodeDIB

Creates a Code 39-encoded barcode image based on the input parameters.

#### Syntax

```cpp
GetCode39BarcodeDIB(BSTR Text, BSTR LabelText, BOOL IncludeText, double Height, double NarrowBar, double Ratio, int Subset, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the Code 39 barcode standard.
- **LabelText**: Optional text that will be displayed on top of the barcode.
- **IncludeText**: If `true`, the actual text will be displayed at the bottom of the image.
- **Height**: Scales the height of the barcode. A scaling of `1.0` will give a 96-pixel height image (1 inch). Note that the image will be higher if you enable text display and/or use a label.
- **NarrowBar**: Width for the narrow bar.
- **Ratio**: Ratio between narrow and wide bars. Can be from `2.0` to `3.0`. We recommend using `3.0` for the ratio.
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- The Code 39 specification supports only 43 characters, consisting of:
  - Uppercase letters (A through Z)
  - Numeric digits (0 through 9)
  - 6 special characters (-, ., $, /, +, %, and space)
- For more information about Code 39 encoding, we recommend that you take a look at: [https://en.wikipedia.org/wiki/Code_39](https://en.wikipedia.org/wiki/Code_39).

### GetCode93BarcodeDIB

Creates a Code 93-encoded barcode image based on the input parameters.

#### Syntax

```cpp
GetCode93BarcodeDIB(BSTR Text, BSTR LabelText, BOOL IncludeText, double Height, double NarrowBar, double Ratio, int Subset, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the Code 93 barcode standard.
- **LabelText**: Optional text that will be displayed on top of the barcode.
- **IncludeText**: If `true`, the actual text will be displayed at the bottom of the image.
- **Height**: Scales the height of the barcode. A scaling of `1.0` will give a 96-pixel height image (1 inch). Note that the image will be higher if you enable text display and/or use a label.
- **NarrowBar**: Width for the narrow bar.
- **Ratio**: Ratio between narrow and wide bars. Can be from `2.0` to `3.0`. We recommend using `3.0` for the ratio.
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- The Code 93 specification supports the following characters:
  - Uppercase letters (A through Z)
  - Numeric digits (0 through 9)
  - 6 special characters (-, ., $, /, +, %, and space)
- For more information about Code 93 encoding, we recommend that you take a look at: [https://en.wikipedia.org/wiki/Code_93](https://en.wikipedia.org/wiki/Code_93).

### GetPDF417BarcodeDIB

Creates a PDF417-encoded barcode image based on the input parameters.

#### Syntax

```cpp
GetPDF417BarcodeDIB(BSTR Text, OLE_HANDLE *DIB)
```

#### Parameters

- **Text**: Text to encode using the PDF417 barcode standard.
- **DIB**: Returned `HGLOBAL` handle that contains DIB data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- For more information about PDF417 encoding, we recommend that you take a look at: [https://en.wikipedia.org/wiki/PDF417](https://en.wikipedia.org/wiki/PDF417).

### OpenFolder

Searches for and loads all available Rasterex symbol libraries located in the given folder. The folder may be a shared network folder or a folder on the local system.

#### Syntax

```cpp
OpenFolder(BSTR Folder)
```

#### Parameters

- **Folder**: Folder that `RxSymbols` should locate and load symbols from.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### OpenInternetServer

Connects to a valid `RxCSISAPI` installation that supports Rasterex symbol libraries. If the connection succeeds, symbols will be loaded from this server.

#### Syntax

```cpp
OpenInternetServer(BSTR IsapiUrl)
```

#### Parameters

- **IsapiUrl**: Full URL to a running `RxCSISAPI.dll`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### OpenServer

Obsolete function because the socket server is no longer updated. We recommend that you use either `RxViewServer` or a shared network path instead.

#### Syntax

```cpp
OpenServer(BSTR ServerAddress, long Port)
```

#### Parameters

- **ServerAddress**: Address where the server is located.
- **Port**: TCP/IP port where the socket server is listening.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetBarcodeFontSettings

Sets the font name, weight, and height for the font to be used to display labels and text.

#### Syntax

```cpp
SetBarcodeFontSettings(BSTR FontFace, LONG Height, LONG Weight)
```

#### Parameters

- **FontFace**: Facename for the font to use for labels and text display. The default font face is `"Arial"`.
- **Height**: Font height in pixels.
- **Weight**: Specifies the weight, or boldness, of the font. Normal font is `400`, bold is `700`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxSymbols Properties

### ActiveLibrary

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the index for the active library. Library index is zero-based (the first library is value `0`).

### ActiveSymbol

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the index for the active library symbol. Symbol index is zero-based (the first symbol is value `0`).

### LibraryName

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the name of the active library.

### NumberOfLibraries

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the total number of symbol libraries found and loaded.

### NumberOfSymbols

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the total number of symbols in the active library.

### SymbolData

- **Type**: `ULONG` (HANDLE)
- **Access**: Read only
- **Description**: Returns image data for the active symbol. The returned handle is a `HENHMETAFILE` that contains an enhanced metafile.

### SymbolDescription

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Optional description for the active symbol. A description can be added using the Rasterex Symbol Library Manager. Returns an empty string (`""`) if no description is available.

### SymbolDPI

- **Type**: `long`
- **Access**: Read only
- **Description**: Optional DPI (dots per inch) value for the active symbol. A symbol DPI value can be added using the Rasterex Symbol Library Manager. Returns `96` if no user-defined DPI is defined.

### SymbolHyperlink

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Optional hyperlink for the active symbol. A hyperlink can be added using the Rasterex Symbol Library Manager. Returns an empty string (`""`) if no hyperlink is defined.

### SymbolName

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the name of the active symbol.

### SymbolPartID

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Optional part ID for the active symbol. A part ID can be added using the Rasterex Symbol Library Manager. Returns an empty string (`""`) if no part ID is defined.

### SymbolPreview

- **Type**: `ULONG` (HANDLE)
- **Access**: Read only
- **Description**: Returns an image preview for the active symbol. The handle is an `HGLOBAL` that contains a DIB image.

### SymbolScale

- **Type**: `double`
- **Access**: Read only
- **Description**: Optional insertion scale for the active symbol. A symbol scale can be added using the Rasterex Symbol Library Manager. Returns `1.0` if no symbol scale is defined.

### Version

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the version of the currently installed `RxSymbolCOM` component. The string contains: Product Version, Main Revision, Sub Revision, and Build Number.
