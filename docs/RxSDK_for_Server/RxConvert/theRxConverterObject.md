---
title: The RxConverter Object
---

**Component name:** `RxConverter.dll`

## RxConverter Methods

### ConvertToPDF

Converts the given document to PDF format. The method will search among known paper sizes (using DPI); if a paper size is found, the file will be converted to fit this format. If a paper size is not found, the given paper format will be used. If the method should not search for known paper sizes but only use the provided paper format, set `ForcePaper` to a non-zero value.

#### Syntax

```cpp
ConvertToPDF(BSTR FileName, LPDISPATCH Doc, BSTR PaperFormat, double DPI, long Page, long ForcePaper)
```

#### Parameters

- **FileName**: Name of the new PDF file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **PaperFormat**: Name of the paper format to use. Supported paper formats are:
  - `"A0"`, `"A1"`, `"A2"`, `"A3 Extra"`, `"A3"`,
  - `"A4 Extra"`, `"A4 Plus"`, `"A4"`, `"A5 Extra"`, `"A5"`, `"A6"`, `"A7"`, `"B0"`, `"B1"`, `"B2"`, `"B3"`, `"B4"`,
  - `"B5 Extra"`, `"B5"`, `"B6"`, `"B7"`, `"C4"`, `"C5"`, `"C6"`, `"Letter"`, `"Tabloid"`, `"Engineering C"`, `"Engineering D"`, `"Engineering E"`,
  - `"Architectural A"`, `"Architectural B"`, `"Architectural C"`, `"Architectural D"`, `"Architectural E"`, `"Architectural E2"`, `"Letter"`, `"Legal"`, `"Tabloid"`, `"Slide"`, `"Ledger"`, `"Executive"`, `"Statement"`
- **DPI**: DPI of the given document. Set to `0.0` if not known.
- **Page**: Page to convert. Set to `-1` to convert all pages.
- **ForcePaper**: Set to non-zero to force the conversion to use the given paper format. If set to zero, the method will try to use the original paper format for the document. Will use the given `PaperFormat` if no paper format is found.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### ConvertToPDF2

Converts the given file to PDF format. By using this method, you can set a maximum limit for paper size (e.g., A0) and define a default paper size to use for files that have larger extents than the given limit. This method accepts a file name as the input file, not an `RxDoc` instance.

#### Syntax

```cpp
ConvertToPDF2(BSTR InputFileName, BSTR OutputFileName, BSTR MaxPaperFormat, BSTR DefaultPaperFormat, double UPI, long Page)
```

#### Parameters

- **InputFileName**: Name of the input file to convert.
- **OutputFileName**: Name of the new PDF file to create.
- **MaxPaperFormat**: Name of the paper format to use as a limit. See `ConvertToPDF` for a list of paper formats.
- **DefaultPaperFormat**: Name of the paper format to use if the file extent is larger than the limit. See `ConvertToPDF` for a list of paper formats.
- **UPI**: DPI to use for the input file. Set to `0.0` if not known.
- **Page**: Page to convert from the input file. Set to `-1` to convert all pages.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### CreateSearchablePDF

Creates a searchable PDF file from a scanned document. This method supports input file formats like TIFF, PNG, and more. You can check if the system supports OCR with the `IsOCRAvailable` property. If you want to run OCR on scanned PDF files, you can first convert them to TIFF using the `RxPDFCOM` `PDFToTIFF` method. Please check the `RxPDFCOM` documentation for more information.

#### Syntax

```cpp
CreateSearchablePDF(BSTR InputFileName, BSTR OutputFileName)
```

#### Parameters

- **InputFileName**: Name of the input raster file.
- **OutputFileName**: Name of the new searchable PDF file to create.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Publish

Publishes (converts) any file to Rasterex Content Format (rxc). This method is only used by `RxViewServer`.

#### Syntax

```cpp
Publish(BSTR FileName, LPDISPATCH Doc, BOOL Thumbnail, long Width, long Height, double DPI)
```

#### Parameters

- **FileName**: Name of the published file (always Rasterex Content Format).
- **Doc**: Document (`IRxDoc`) pointer.
- **Thumbnail**: `TRUE` = thumbnail included, `FALSE` = thumbnail not included.
- **Width**: Width of the thumbnail in pixels.
- **Height**: Height of the thumbnail in pixels.
- **DPI**: Not used. Set to `0`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PublishPackage

Converts the given document to Rasterex Content Package format.  
**Deprecated.**

#### Syntax

```cpp
PublishPackageEx(BSTR FileName, LPDISPATCH Doc, double DPI, RX_PACKAGE_OPTIONS Options, long Width, long Height)
```

#### Parameters

- **FileName**: Name of the created package file.
- **Doc**: Document (`IRxDoc`) pointer.
- **DPI**: DPI of the given document. Set to `0.0` if not known.
- **Options**: Options:
  - `0` - Use default settings.
  - `1` - Minimize memory usage (may work slower).
  - `2` - Fast mode conversion.
  - `4` - Create thumbnail image (must set width/height).
- **Width**: Width of the thumbnail image in pixels.
- **Height**: Height of the thumbnail image in pixels.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PublishPackageEx

Converts the given document to Rasterex Content Package format.  
**Deprecated.**

#### Syntax

```cpp
PublishPackageEx(BSTR FileName, LPDISPATCH Doc, double dDPI, RX_PACKAGE_OPTIONS uOptions, long lWidth, long lHeight, long SecureFlags, BSTR Password)
```

#### Parameters

- **FileName**: Name of the created package file.
- **Doc**: Document (`IRxDoc`) pointer.
- **dDPI**: DPI of the given document. Set to `0.0` if not known.
- **uOptions**: Options:
  - `0` - Use default settings.
  - `1` - Minimize memory usage (may work slower).
  - `2` - Fast mode conversion.
  - `4` - Create thumbnail image (must set width/height).
- **lWidth**: Width of the thumbnail image in pixels.
- **lHeight**: Height of the thumbnail image in pixels.
- **SecureFlags**: Security flags to use with the package file (can be combined):
  - `1` - Viewer cannot print the content of this package.
  - `2` - Viewer cannot perform measurements.
  - `4` - Viewer cannot add markups.
  - `8` - Viewer cannot convert the contents of this package.
- **Password**: Password needed to open the created package file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PublishWeb

Publishes the given document to Rasterex RxView360 file formats. The number of files and file formats used will depend on the original document. The main file should be called `data.xml`, and this file will include references to all other files that will be created.

#### Syntax

```cpp
PublishWeb(BSTR FileName, LPDISPATCH Doc, RX_WEBPUBLISH_OPTIONS uOptions)
```

#### Parameters

- **FileName**: Name of the created XML publishing file. Should normally be `data.xml`.
- **Doc**: Document (`IRxDoc`) pointer.
- **uOptions**: Options to control the generation of RxView360 file format:
  | Value | Description |
  |-------|--------------------------------------------------|
  | 0 | Use default settings (no change). |
  | 1 | Minimize memory usage (may work slower). |
  | 2 | Fast mode conversion. |
  | 4 | Create thumbnail images during conversion. |
  | 8 | Do not add cache folder to URLs; only include actual filenames. |
  | 10 | Disable use of LibreOffice/Microsoft Office for pre-conversion of Office formats to PDF. |
  | 20 | Embed all images into the vector 2D stream. |
  - Values may be combined.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### RasterFile

Converts the given document to a raster file. The document will be scaled and rotated based on the given parameters.

#### Syntax

```cpp
RasterFile(BSTR FileName, LPDISPATCH Doc, BSTR Format, long Width, long Height, long BitsPixel, long BackColor, long DPI, double Rotation, double FileL, double FileT, double ScaleX, double ScaleY)
```

#### Parameters

- **FileName**: Name of the raster file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be one of the strings returned by `GetRasterSaveFilterInfo()`.
- **Width**: Width of the raster in pixels.
- **Height**: Height of the raster in pixels.
- **BitsPerPixel**: Number of colors to use.
- **BackColor**: Background color to use.
- **DPI**: Dots per inch. Will be stored in the raster file.
- **Rotation**: Rotation factor to use.
- **FileL**: (Parameter description missing in original text; likely X coordinate of the point in the document.)
- **FileT**: (Parameter description missing in original text; likely Y coordinate of the point in the document.)
- **ScaleX**: (Parameter description missing in original text; likely X-scaling factor.)
- **ScaleY**: (Parameter description missing in original text; likely Y-scaling factor.)

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### RasterFileFit

Converts the given document to a raster file. The document will be scaled to fit the given raster size.

#### Syntax

```cpp
RasterFileFit(BSTR FileName, LPDISPATCH Doc, BSTR Format, long Width, long Height, long BitsPixel, long BackColor, long DPI)
```

#### Parameters

- **FileName**: Name of the raster file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be returned by `GetRasterSaveFilterInfo()`.
- **Width**: Width of the raster in pixels.
- **Height**: Height of the raster in pixels.
- **BitsPerPixel**: Number of colors to use.
- **BackColor**: Background color to use.
- **DPI**: Dots per inch. Will be stored in the raster file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### RasterFileMP

Converts the given document to a multi-page raster file if the document contains more than one page. The document will be scaled and rotated using the given parameters. If `ScaleX` and `ScaleY` are set to `0.0`, the document will be scaled to fit the raster size (Width/Height). Use the `GetRasterSaveFilterInfo2` method to verify that a filter can save to a multi-page format.

#### Syntax

```cpp
RasterFileMP(BSTR FileName, LPDISPATCH Doc, BSTR Format, long Width, long Height, long BitsPixel, long BackColor, long DPI, double Rotation, double FileL, double FileT, double ScaleX, double ScaleY)
```

#### Parameters

- **FileName**: Name of the raster file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be one of the strings returned by `GetRasterSaveFilterInfo()`.
- **Width**: Width of the raster in pixels.
- **Height**: Height of the raster in pixels.
- **BitsPerPixel**: Number of colors to use.
- **BackColor**: Background color to use.
- **DPI**: Dots per inch. Will be stored in the raster file.
- **Rotation**: Rotation factor to use.
- **FileL**: (Parameter description missing in original text; likely X coordinate of the point in the document.)
- **FileT**: (Parameter description missing in original text; likely Y coordinate of the point in the document.)
- **ScaleX**: (Parameter description missing in original text; likely X-scaling factor.)
- **ScaleY**: (Parameter description missing in original text; likely Y-scaling factor.)

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### RasterSave

Converts a document to a raster file of the given format. The given document must be of type `RX_DOCTYPE_RASTER`.

#### Syntax

```cpp
RasterSave(BSTR FileName, LPDISPATCH Doc, BSTR Format)
```

#### Parameters

- **FileName**: Name of the raster file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be returned by `GetRasterSaveFilterInfo()`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SaveCompareResult

Compares two files and saves the result to a new file (e.g., PDF).

#### Syntax

```cpp
SaveCompareResult(BSTR OutputFile, BSTR Format, BSTR Background, BSTR Foreground, COLORREF crBackground, COLORREF crForeground, long BitsPixel, long DPI)
```

#### Parameters

- **OutputFile**: Output file name for the comparison result.
- **Format**: File format to use for the output file. Use `"Acrobat PDF"` to create a PDF file.
- **Background**: Full path to the background file to use for the comparison.
- **Foreground**: Full path to the foreground file to use for the comparison.
- **crBackground**: Color to use for the background file.
- **crForeground**: Color to use for the background file.
- **BitsPerPixel**: Use `8` for a 256-color image or `24` for a true-color image.
- **DPI**: Set resolution to use for the comparison, e.g., `200`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL` / `E_ACCESSDENIED`

### SaveCompareResult2

Compares two files and saves the result to a new file (e.g., PDF). This method has an additional parameter that will replace the color used for equal content (usually black) with a grayscale value, from `0` (black) to `255` (white).

#### Syntax

```cpp
SaveCompareResult2(BSTR OutputFile, BSTR Format, BSTR Background, BSTR Foreground, COLORREF crBackground, COLORREF crForeground, long BitsPixel, long DPI, long Grayscale)
```

#### Parameters

- **OutputFile**: Output file name for the comparison result.
- **Format**: File format to use for the output file. Use `"Acrobat PDF"` to create a PDF file.
- **Background**: Full path to the background file to use for the comparison.
- **Foreground**: Full path to the foreground file to use for the comparison.
- **crBackground**: Color to use for the background file.
- **crForeground**: Color to use for the background file.
- **BitsPerPixel**: Use `8` for a 256-color image or `24` for a true-color image.
- **DPI**: Set resolution to use for the comparison, e.g., `200`.
- **Grayscale**: Grayscale value to replace the color for equal content. Default value is `0` (black). Use `255` (white) to show only the differences.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL` / `E_ACCESSDENIED`

### SaveCompareResult3

Compares two files and saves the result to a new file (e.g., PDF). This method has an additional parameter that will replace the color used for equal content (usually black) with a grayscale value, from `0` (black) to `255` (white). This method includes scaling and offset parameters to help align the background with the foreground.

#### Syntax

```cpp
SaveCompareResult3(BSTR OutputFile, BSTR Format, BSTR Background, BSTR Foreground, COLORREF crBackground, COLORREF crForeground, long BitsPixel, long DPI, long Grayscale, double AlignX, double AlignY, double ScaleX, double ScaleY)
```

#### Parameters

- **OutputFile**: Output file name for the comparison result.
- **Format**: File format to use for the output file. Use `"Acrobat PDF"` to create a PDF file.
- **Background**: Full path to the background file to use for the comparison.
- **Foreground**: Full path to the foreground file to use for the comparison.
- **crBackground**: Color to use for the background file.
- **crForeground**: Color to use for the background file.
- **BitsPerPixel**: Use `8` for a 256-color image or `24` for a true-color image.
- **DPI**: Set resolution to use for the comparison, e.g., `200`.
- **Grayscale**: Grayscale value to replace the color for equal content. Default value is `0` (black). Use `255` (white) to show only the differences.
- **AlignX**: X alignment of the foreground file in background file coordinates.
- **AlignY**: Y alignment of the foreground file in background file coordinates.
- **ScaleX**: X scale factor to apply to the foreground file.
- **ScaleY**: Y scale factor to apply to the foreground file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL` / `E_ACCESSDENIED`

### SaveThumbnail

Creates a thumbnail file based on the given document. The created thumbnail will represent the active layout and page (default `0:0`).

#### Syntax

```cpp
SaveThumbnail(BSTR FileName, LPDISPATCH Doc, long Format, long Width, long Height, long DocBackColor, long BackColor, long Flags, long BorderWidth)
```

#### Parameters

- **FileName**: Name of the created thumbnail file.
- **Doc**: Document (`IRxDoc`) pointer to the loaded document.
- **Format**: Format selection; currently available values:
  - `PNG` (Portable Network Graphics)
  - `JPEG`
- **Width**: Maximum width of the thumbnail in pixels.
- **Height**: Maximum height of the thumbnail in pixels.
- **DocBackColor**: Background color to use for the document.
- **BackColor**: Background color to use for the area outside the actual document area. Only used if keep ratio is not used.
- **Flags**: Customizes the thumbnail look. The following values are available (you can combine them):
  - Keep image ratio. If this flag is enabled, the image proportions will be kept.
  - Apply anti-aliasing.
  - Apply high-quality anti-aliasing. Will create even better thumbnails, but speed may be slower.
  - Enable file-defined rotation factor. This may be useful for plotter files (HPGL/2).
  - If this flag is set, the front view will be used for IFC models. The default view is from the right of the model.
  - Preserve black for monochrome raster images. May be useful in combination with anti-aliasing flags to create better thumbnails for monochrome images (e.g., CALS or TIFF).
- **BorderWidth**: Optional border width in pixels. Set to `0` for no border.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL` / `E_ACCESSDENIED`

### SetRedline

Configures the conversion methods to add redlines to the converted files.

#### Syntax

```cpp
SetRedline(LPDISPATCH pRxRedline)
```

#### Parameters

- **pRxRedline**: Pointer to a `RxRedline` interface.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### TextToPDF

Converts a text file to PDF.

#### Syntax

```cpp
TextToPDF(BSTR InputTextFile, BSTR OutputPDFFile, BSTR FontName, double FontHeight)
```

#### Parameters

- **InputTextFile**: Name of the input text file.
- **OutputPDFFile**: Name of the output PDF file.
- **FontName**: Facename of the font to use, e.g., `"Courier New"`.
- **FontHeight**: Font height in points; the default value is `10.0`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### VectorSave

Converts a document to a vector file of the given format. The given document must be of type `RX_DOCTYPE_VECTOR_2D`.

#### Syntax

```cpp
VectorSave(BSTR FileName, LPDISPATCH Doc, BSTR Format)
```

#### Parameters

- **FileName**: Name of the vector file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be returned by `GetVectorSaveFilterInfo()`.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### VectorSaveTransform

Converts a document to a vector file of the given format. The given document must be of type `RX_DOCTYPE_VECTOR_2D`.

#### Syntax

```cpp
VectorSaveTransform(BSTR FileName, LPDISPATCH Doc, BSTR Format, double DPI, double Scale, double Rotation)
```

#### Parameters

- **FileName**: Name of the vector file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be returned by `GetVectorSaveFilterInfo()`.
- **DPI**: DPI of the given document.
- **Scale**: Scale to use during conversion.
- **Rotation**: Rotation to use during conversion.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### VectorSaveTransformEx

Converts a document to a vector file of the given format. The given document must be of type `RX_DOCTYPE_VECTOR_2D`.

#### Syntax

```cpp
VectorSaveTransform(BSTR FileName, LPDISPATCH Doc, BSTR Format, double DPI, double Scale, double Rotation, BOOL AllPages)
```

#### Parameters

- **FileName**: Name of the vector file to create.
- **Doc**: Document (`IRxDoc`) pointer.
- **Format**: Name of the format to use. This string must be returned by `GetVectorSaveFilterInfo()`.
- **DPI**: DPI of the given document.
- **Scale**: Scale to use during conversion.
- **Rotation**: Rotation to use during conversion.
- **AllPages**: If non-zero, all pages will be converted. Set to zero if only the first page should be converted.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxConverter Properties

### ApplyPenTableToText

- **Type**: `long`
- **Access**: Read and write
- **Description**: If non-zero, all pen table settings will also affect text entities. The default value is `1`.

### ComparePaperFormat

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets the paper format to use for `SaveCompareResult` methods. The default value is `"A3"`.

### ConvertAllLayouts

- **Type**: `long`
- **Access**: Read and write
- **Description**: If non-zero, all layouts will be converted with the `RasterFileMP` method. The default value is `1`.

### EnableCadAs3D

- **Type**: `long`
- **Access**: Read and write
- **Description**: If non-zero, a 3D binary file will be created for AutoCAD DWG and Microstation DGN files. Please note that a 3D file will only be created if the file actually contains 3D data.

### EnableDithering

- **Type**: `long`
- **Access**: Read and write
- **Description**: If non-zero, the file will be dithered when converting to monochrome raster (e.g., CALS).

### FillPolygons

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the polygons in this document will be drawn in filled mode. If `false`, they will be drawn outlined.

### IsOCRAvailable

- **Type**: `long`
- **Access**: Read only
- **Description**: Will return `true` if a valid OCR engine is found on the system. Currently, only Tesseract is supported. If this method returns `true`, you can use the `CreateSearchablePDF` method to create searchable PDF files from scanned files (PDF, TIFF, PNG, and more).

### KeepDrawColors

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the document colors will always be used during conversion. The default behavior causes colors that are too close to the background color to be inverted.

### LineWeights

- **Type**: `long`
- **Access**: Read and write
- **Description**: If the property is set to `true`, line weights (if present) will be used during conversion.

### MaxEmbeddedSize

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets the maximum width/height in pixels for embedded images in Rx2B files created by the `PublishWeb` method. If the content is to be used on a mobile platform, the recommended size is `4000`.

### MonoColor

- **Type**: `long`
- **Access**: Read and write
- **Description**: Color to use for mono-color drawing. The `MonoDisplay` property must also be enabled.

### MonoDisplay

- **Type**: `long`
- **Access**: Read and write
- **Description**: Set to `true` if files should be converted using only one color (`MonoColor`).

### PDFRasterizeDPI

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the DPI used by the `ConvertToPDF` method if rasterization is required.

### PenTableScale

- **Type**: `double`
- **Access**: Read and write
- **Description**: Sets the scale factor to use for pen table widths when converting the document. The default scale factor is `1.0`.

### RasterDrawMethod

- **Type**: `long`
- **Access**: Read and write
- **Description**: Controls how a raster document should be converted. The following values are supported:
  | Value | Method to be Used |
  |-------|------------------------------|
  | 0 | No special method is used (Normal). |
  | 1 | Anti-aliasing will be used (Scale to gray for monochrome raster). |
  | 2 | Black pixels will be preserved (Preserve black). |

### ShowGrid

- **Type**: `long`
- **Access**: Read and write
- **Description**: If set to `true`, spreadsheet grid lines are included in the conversion.

### TrialMode

- **Type**: `long`
- **Access**: Read and write
- **Description**: If set to `true`, an evaluation watermark will be added to all created PDF files. This can be useful if you want to ship a trial version of your application. The default value is `false`.

### UseExtPen

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the pen table is used when converting the document.

### UsePenTable

- **Type**: `long`
- **Access**: Read and write
- **Description**: Use this property to enable or disable the use of `ExtCreatePen`. If enabled, the drawing will be displayed using higher quality, but redraws will be slower.

### UsePlotLayerSettings

- **Type**: `long`
- **Access**: Read and write
- **Description**: If set to non-zero, any layer with a plottable state set to `false` will not be included in the conversion.

### Version

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the version of the currently installed `RxConvertCom` component. The string contains: Product Version, Main Revision, Sub Revision, and Build Number.

## RxConverter Events

`RxConverter` may call the following events during conversion:

### PreConvert

This event is fired when converting to a raster file. Information can be added to the given `hDC` (`lDC`). Standard GDI functions like `TextOut`, `MoveTo`, `LineTo`, etc., can be used. Useful for adding headers, footers, watermarks, or stamps to the converted raster image. This event will be fired before the actual drawing is converted/drawn.

#### Syntax

```cpp
PreConvert(LONG DC, LONG Layout, LONG Page, LONG Width, LONG Height)
```

#### Parameters

- **DC**: Windows device handle.
- **Layout**: The layout index that is converted.
- **Page**: The page index that is converted.
- **Width**: The width of the converted raster image.
- **Height**: The height of the converted raster image.

#### DispatchID

- `1`

### PostConvert

This event is fired when converting to a raster file. Information can be added to the given `hDC` (`lDC`). Standard GDI functions like `TextOut`, `MoveTo`, `LineTo`, etc., can be used. Useful for adding headers, footers, watermarks, or stamps to the converted raster image. This event will be fired after the actual drawing has been converted/drawn.

#### Syntax

```cpp
PostConvert(LONG DC, LONG Layout, LONG Page, LONG Width, LONG Height)
```

#### Parameters

- **DC**: Windows device handle.
- **Layout**: The layout index that is converted.
- **Page**: The page index that is converted.
- **Width**: The width of the converted raster image.
- **Height**: The height of the converted raster image.

#### DispatchID

- `2`
