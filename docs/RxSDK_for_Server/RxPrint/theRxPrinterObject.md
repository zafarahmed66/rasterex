---
title: The RxPrinter Object
---

**Component name:** `RxPrintCOM.dll`

## Printing Process

To print a document using the `RxPrintCom` object, follow these steps:

1. Load a document.
2. Select a printer using `SelectPrinter` or set `UseDefaultPrinter` to `true`.
3. Call the `StartDoc()` method. This method has one parameter: the name of the job.
4. For each page in the document, call the `StartPage` method.
5. Print the document using the `Print()` method. You can get the printer device using the `PrintDC` property if you want to draw more information to the device before ending the page.
6. Call the `EndPage()` method.
7. Call the `EndDoc()` method.

The document will now be placed in the printer queue and then printed.

## Sample Code

The SDK contains a simple C# console application that demonstrates how to load a document and print it on either the default printer or a selected printer. You can select a printer from a list of available printers presented by the application. The sample is named `rxPrintDocument`.

You will also find complete applications with printing support written in both C++, C#, and Delphi included with the SDK.

## RxPrinter Methods

### EndDoc

Finishes printing of the current printed document.

#### Syntax

```cpp
EndDoc()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### EndPage

Finishes printing of the current printed page.

#### Syntax

```cpp
EndPage()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetPaperBinInfo

Returns the name of a paper bin. The number of available paper bins can be found by reading the `PaperBins` property. Paper bins are also known as trays.

#### Syntax

```cpp
GetPaperBinInfo(long Index, BSTR *Name)
```

#### Parameters

- **Index**: Paper bin index (zero-based).
- **Name**: Returned name of the paper bin. This name can later be used by `SelectPaperBin`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetPrinterInfo

Returns information about an installed printer.

#### Syntax

```cpp
GetPrinterInfo(long Index, BSTR *Name)
```

#### Parameters

- **Index**: Index of the printer to query.
- **Name**: Returned name of the printer. This name can later be used by `SelectPrinter`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Print

Prints the given document's active page on the currently selected printer. Parameters like scale and rotation will control how the document is printed. A printer must have been selected using either the `SelectPrinter` or `UseDefaultPrinter` method.

#### Syntax

```cpp
Print(LPDISPATCH Doc, double Rotation, long OffsetX, long OffsetY, double FileL, double FileT, double ScaleX, double ScaleY)
```

#### Parameters

- **Doc**: Document (`IRxDoc`) pointer.
- **Rotation**: Rotation factor in degrees.
- **OffsetX**: Left start position (printer device coordinates).
- **OffsetY**: Top start position (printer device coordinates).
- **FileL**: X coordinate of the point in the document that corresponds to the printer start position.
- **FileT**: Y coordinate of the point in the document that corresponds to the printer start position.
- **ScaleX**: X-scaling factor.
- **ScaleY**: Y-scaling factor.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PrintDocument

See the `Print` method above.

### PrintToDC

Prints the given document's active page on the given printer device context. Parameters like scale and rotation will control how the document is printed. Use this method if you create the printer context yourself. If you are using MFC, you will get the printer device from the framework; this method can be used to print using that device.

#### Syntax

```cpp
PrintToDC(long DC, LPDISPATCH Doc, double Rotation, long OffsetX, long OffsetY, double FileL, double FileT, double ScaleX, double ScaleY)
```

#### Parameters

- **DC**: Handle of the printer device context.
- **Doc**: Document (`IRxDoc`) pointer.
- **Rotation**: Rotation factor in degrees.
- **OffsetX**: Left start position (printer device coordinates).
- **OffsetY**: Top start position (printer device coordinates).
- **FileL**: X coordinate of the point in the document that corresponds to the printer start position.
- **FileT**: Y coordinate of the point in the document that corresponds to the printer start position.
- **ScaleX**: X-scaling factor.
- **ScaleY**: Y-scaling factor.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PrintClippedToDC

Prints the given document's active page on the given printer device context. Parameters like scale and rotation will control how the document is printed. Use this method if you create the printer context yourself. If you are using MFC or other frameworks, you will get the printer device from the framework; this method can be used to print using that device. The document will be clipped to the given destination values (`lOffsetX`, `lOffsetY`, `lDestW`, `lDestH`).

#### Syntax

```cpp
PrintClippedToDC(long DC, LPDISPATCH Doc, double Rotation, long OffsetX, long OffsetY, long DestW, long DestH, double FileL, double FileT, double ScaleX, double ScaleY)
```

#### Parameters

- **DC**: Handle of the printer device context.
- **Doc**: Document (`IRxDoc`) pointer.
- **Rotation**: Rotation factor in degrees.
- **OffsetX**: Left start position (printer device coordinates).
- **OffsetY**: Top start position (printer device coordinates).
- **DestW**: Width of the destination area in pixels. Used for clipping.
- **DestH**: Height of the destination area in pixels. Used for clipping.
- **FileL**: X coordinate of the point in the document that corresponds to the printer start position.
- **FileT**: Y coordinate of the point in the document that corresponds to the printer start position.
- **ScaleX**: X-scaling factor.
- **ScaleY**: Y-scaling factor.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SelectPaperBin

Selects the paper bin to use for printing. The name of the requested paper bin must be one of the strings returned by `GetPaperBinInfo`.

#### Syntax

```cpp
SelectPaperBin(BSTR Name)
```

#### Parameters

- **Name**: Name of the paper bin to use.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SelectPrinter

Selects a specific printer based on the printer name. Printer names can be obtained by using the `GetPrinterInfo` method.

#### Syntax

```cpp
SelectPrinter(BSTR Name)
```

#### Parameters

- **Name**: Name of the printer to select for printing operations.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetPaperSizeInch

Selects paper size and orientation based on the given paper size in inches. If the paper size is not found, the nearest paper size will be chosen.

#### Syntax

```cpp
SetPaperSizeInch(double w, double h)
```

#### Parameters

- **w**: Requested paper width in inches.
- **h**: Requested paper height in inches.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetPaperSizeMM

Selects paper size and orientation based on the given paper size in millimeters. If the paper size is not found, the nearest paper size will be chosen.

#### Syntax

```cpp
SetPaperSizeMM(double w, double h)
```

#### Parameters

- **w**: Requested paper width in mm.
- **h**: Requested paper height in mm.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetPDFConfig

Customizes the PDF renderer using this method.

#### Syntax

```cpp
SetPDFConfig(enumPDFConfig ID, VARIANT Param)
```

#### Parameters

- **ID**: One of the following available IDs:
  - `0`: Disable anti-aliasing. Usually used for printing PDF files where grayscale can give faint results. `Param` is a boolean.
  - `1`: Set the DPI value used when printing PDF files. The default DPI is set to 300. The `Param` type must be an integer or long value.
- **Param**: Value to set for the given configuration ID. The content depends on `ID` (see above).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### StartDoc

Starts printing of a new document.

#### Syntax

```cpp
StartDoc(BSTR JobName)
```

#### Parameters

- **JobName**: Name of the print job. This name will be shown in the printer queue.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### StartPage

Starts printing of a new page.

#### Syntax

```cpp
StartPage()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### UseDefaultPrinter

Sets up `IRxPrinter` to use the default printer for subsequent print operations.

#### Syntax

```cpp
UseDefaultPrinter()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxPrinter Properties

### AllowHybridBmpPrint

- **Type**: `long`
- **Access**: Read and write
- **Description**: Allows mixed raster and vector information to be printed as a single bitmap.

### AllowTransparentRaster

- **Type**: `long`
- **Access**: Read and write
- **Description**: Allows transparent raster images to be printed. Some devices (e.g., Postscript) have problems with transparent raster images; setting this property to zero may help solve printing problems on these devices.

### ApplyPenTableToText

- **Type**: `long`
- **Access**: Read and write
- **Description**: If enabled (non-zero), pen table settings will also affect text entities in vector files. Set to zero to prevent text entities from being affected by the pen table. The default value is `1`.

### BitsPerPixel

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the number of bits per pixel. Use this to determine the number of colors supported by the device:
  | Bits per Pixel | Available Colors |
  |----------------|-----------------------|
  | 1 | 2 |
  | 4 | 16 |
  | 8 | 256 |
  | 24 | 16.7 Million (true color) |

### CompareMode

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the documents will be drawn using compare mode.

### Descriptor

- **Type**: `long`
- **Access**: Read only
- **Description**: This property is only for internal usage.

### FillPolygons

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the polygons in this document will be drawn in filled mode. If `false`, they will be drawn outlined.

### HorizontalDPI

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the horizontal resolution of the printer in dots per inch.

### InstalledPrinters

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the number of installed printers.

### InvertRaster

- **Type**: `long`
- **Access**: Read and write
- **Description**: Will invert monochrome raster images during printing.

### KeepDrawColors

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the document colors will always be used when drawing. Normally, colors that are too close to the background color will be inverted.

### LineWeights

- **Type**: `long`
- **Access**: Read and write
- **Description**: If the property is set to `true`, line weights will be displayed (if defined in the drawing).

### Monochrome

- **Type**: `long`
- **Access**: Read and write
- **Description**: Set to `true` if files should be printed using only one color (`MonoColor`).

### MonoColor

- **Type**: `long`
- **Access**: Read and write
- **Description**: Color to use for mono-color drawing. The `Monochrome` property must also be enabled.

### Orientation

- **Type**: `long`
- **Access**: Read and write
- **Description**: Selects paper orientation:
  | Value | Paper Orientation |
  |-------|-------------------|
  | 1 | Portrait |
  | 2 | Landscape |

### PaperBins

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the number of available paper sources (trays) for the active printer. Use `GetPaperBinInfo` to get the name of paper bins, and use `SelectPaperBin` to select a paper bin for printing.

### PaperHeight

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the height of the currently selected printer paper size in printer device coordinates.

### PaperOffsetX

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the horizontal offset from the paper edge to the start of the printable area in printer device coordinates.

### PaperOffsetY

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the vertical offset from the paper edge to the start of the printable area in printer device coordinates.

### PaperSize

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the paper size to be used when printing.

### PaperWidth

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the width of the currently selected printer paper size in printer device coordinates.

### PenTableScale

- **Type**: `double`
- **Access**: Read and write
- **Description**: Sets the scale factor to use for pen table widths when drawing the document. The default scale is `1.0`.

### PrintDC

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the DC (device context) of the currently selected printer.

### PrinterHeight

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the height of the currently selected printer's printable area in printer device coordinates.

### PrinterWidth

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the width of the currently selected printer's printable area in printer device coordinates.

### RasterDrawMethod

- **Type**: `long`
- **Access**: Read and write
- **Description**: Controls how monochrome raster documents are printed. The following values are supported:
  | Value | Method to be Used |
  |-------|------------------------|
  | 0 | No special method is used (Normal) |
  | 1 | Anti-aliasing will be used (Scale to gray) |
  | 2 | Black pixels will be preserved (Preserve black) |

### ShowExtents

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the extents of the document will be printed by the print methods.

### ShowGrid

- **Type**: `long`
- **Access**: Read and write
- **Description**: If set to `true`, spreadsheet grid lines will be printed.

### UseExtPen

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, lines will be drawn with higher quality but a little slower. Disable this function to increase printing speed.

### UsePenTable

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, pen tables are used when drawing the document.

### UsePlotLayerSettings

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, any layer with a plottable state set to `false` will not be drawn.

### Version

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the version of the currently installed `RxPrintCom` component.

### VerticalDPI

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the vertical resolution of the printer in dots per inch.

## IRxPrinter Events

`RxPrinter` can call the following events during printing:

### BeforePrint

This event is fired before `RxPrintCom` sends data to the printer for each page. Information can be added to the given `hDC` (`lDC`). Standard GDI functions like `TextOut`, `MoveTo`, `LineTo`, etc., can be used. Useful for adding headers, footers, watermarks, or stamps to the printed page.

#### Syntax

```cpp
BeforePrint(LONG lDC, LONG lLayout, LONG lPage, LONG lWidth, LONG lHeight)
```

#### Parameters

- **lDC**: Windows GDI `hDC`.
- **lLayout**: The layout index that is converted.
- **lPage**: The page index that is converted.
- **lWidth**: The width of the converted raster image.
- **lHeight**: The height of the converted raster image.

#### DispatchID

- `1`

### AfterPrint

This event is fired after `RxPrintCom` has sent all data to the printer for each page. Information can be added to the given `hDC` (`lDC`). Standard GDI functions like `TextOut`, `MoveTo`, `LineTo`, etc., can be used. Useful for adding headers, footers, watermarks, or stamps to the printed page.

#### Syntax

```cpp
AfterPrint(LONG lDC, LONG lLayout, LONG lPage, LONG lWidth, LONG lHeight)
```

#### Parameters

- **lDC**: Windows GDI `hDC`.
- **lLayout**: The layout index that is converted.
- **lPage**: The page index that is converted.
- **lWidth**: The width of the converted raster image.
- **lHeight**: The height of the converted raster image.

#### DispatchID

- `2`
