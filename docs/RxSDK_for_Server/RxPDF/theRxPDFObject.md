---
title: The RxPDF Object
---

**Component name:** `RxPDFCom.dll`

## RxPDF Methods

### CropPage

Crops a page in a PDF file to the given minimum and maximum coordinates. This method will change the `MediaBox` for the given page.

#### Syntax

```cpp
CropPage(BSTR FileName, LONG Page, double xmin, double ymin, double xmax, double ymax);
```

#### Parameters

- **FileName**: Name of the existing PDF file that will be modified.
- **Page**: Page number to modify. Page numbers start at 0.
- **xmin**: New minimum x coordinate for the modified `MediaBox` (left).
- **ymin**: New minimum y coordinate for the modified `MediaBox` (top).
- **xmax**: New maximum x coordinate for the modified `MediaBox` (right).
- **ymax**: New maximum y coordinate for the modified `MediaBox` (bottom).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### ExportPDFMarkupEx

Applies Rasterex markup (redline) to a PDF as native PDF annotations. Since Rasterex markup elements have more options than PDF annotations, you may see visual differences when using this method. Please check [Appendix A](/docs/RxSDK_for_Server/RxPDF/appendixes.md#appendix-a-visual-appearance-of-annotations) for more information regarding visual appearances.

#### Synta

```cpp
ExportPDFMarkupEx(BSTR OutputFileName, IDispatch* Document, IDispatch* Markup, double ConversionScale);
```

#### Parameters

- **OutputFileName**: Name of the existing PDF file (markups will be attached to this file).
- **Document**: Document (`RxDoc`) pointer for which the markups were originally created.
- **Markup**: Redline (`RxRedline`) pointer. The markup to be applied must be loaded using the given `RxRedline` instance.
- **ConversionScale**: If the document uses a different resolution or size, you must apply a scale.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Conversion Scale Samples

- If your original file, with Rasterex markups, is a PDF file, and you're applying markups to a copy of this file, the `ConversionScale` should be set to `0.12` (`72.0 / 600.0`).
- If your original file, with Rasterex markups, is a TIFF file with 300 DPI, and you're applying markups to a PDF created from this file using 1:1 scaling, the `ConversionScale` should be set to `0.24` (`72.0 / 300.0`).

### PDFConform

Converts an existing PDF file to one of the supported PDF/A standards. All important information, like text, will be retained.

#### Syntax

```cpp
PDFConform(BSTR InputFileName, RX_PDF_CONFORM ConformType, BSTR OutputFileName)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **ConformType**: Select one of the supported standards:
  - Normalize (see notes below)
  - PDF/A-1b standard
  - PDF/A-2b standard
  - PDF/A-3b standard
- **OutputFileName**: Name of the new PDF file conforming to the desired standard. The output file will not be created if any error occurs during the conformation.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- `Normalize` will check the input PDF file for errors, rebuilds all embedded fonts, optionally embeds non-embedded fonts, and repairs potential file errors if possible.
- Almost all files can be conformed to a PDF/A standard, but there are exceptions. Always check the return value to ensure the process succeeded.

### PDFConformEx

Converts an existing PDF file to one of the supported PDF/A standards. All important information, like text, will be retained. This method does the same as `PDFConform` but also returns any error messages occurring during the process as a string.

#### Syntax

```cpp
PDFConformEx(BSTR InputFileName, RX_PDF_CONFORM ConformType, BSTR OutputFileName, BSTR *Errors)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **ConformType**: Select one of the supported standards:
  - Normalize
  - PDF/A-1b standard
  - PDF/A-2b standard
  - PDF/A-3b standard
- **OutputFileName**: Name of the new PDF file conforming to the desired standard. The output file will not be created if any error occurs during the conformation.
- **Errors**: String containing error messages if the process failed. Any return value except `S_OK` indicates an error condition.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- `Normalize` will check the input PDF file for errors, rebuilds all embedded fonts, optionally embeds non-embedded fonts, and repairs potential file errors if possible.
- Almost all files can be conformed to a PDF/A standard, but there are exceptions. Always check the return value to ensure the process succeeded. If an error occurs, the `Errors` string will contain a description of the error.

### PDFExtractSinglePage

Extracts a single page from the input PDF and creates a new PDF file containing only that page. The input PDF file will not be modified.

#### Syntax

```cpp
PDFExtractSinglePage(BSTR InputFileName, BSTR OutputFileName, LONG Page)
```

#### Parameters

- **InputFileName**: Name of the input PDF file.
- **OutputFileName**: Name of the new PDF file that will contain the extracted page.
- **Page**: Page number to extract (starts at 0).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFMarkupBurnin

Converts each Rasterex markup element to a PDF graphic element. Compared to `ExportPDFMarkupEx`, this method ensures the PDF's visual appearance is much closer to the native Rasterex markup display.

#### Syntax

```cpp
PDFMarkupBurnin(BSTR OutputFileName, IDispatch* Document, IDispatch* Markup, double ConversionScale);
```

#### Parameters

- **OutputFileName**: Name of the existing PDF file (markups will be attached to this file).
- **Document**: Document (`RxDoc`) pointer for which the markups were originally created.
- **Markup**: Redline (`RxRedline`) pointer. The markup to be applied must be loaded using the given `RxRedline` instance.
- **ConversionScale**: If the document uses a different resolution or size, you must apply a scale.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Conversion Scale Samples

- If your original file, with Rasterex markups, is a PDF file, and you're applying markups to a copy of this file, the `ConversionScale` should be set to `0.12` (`72.0 / 600.0`).
- If your original file, with Rasterex markups, is a TIFF file with 300 DPI, and you're applying markups to a PDF created from this file using 1:1 scaling, the `ConversionScale` should be set to `0.24` (`72.0 / 300.0`).

### PDFMergeAdd

Adds an existing PDF file to the current merge process. All pages from the input file will be added to the merged PDF document. See the `PDFMergeAddEx` method description if you want to include only certain pages. The merge process must be started with the `PDFMergeStart` method and ended with `PDFMergeEnd`.

#### Syntax

```cpp
PDFMergeAdd(BSTR InputFileName)
```

#### Parameters

- **InputFileName**: Name of the existing PDF file to add to the merged document.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFMergeAdd2

Adds an existing PDF file to the current merge process. All pages from the input file will be added to the merged PDF document. The given label will be used to identify the origin of the pages (usually the file name of the source PDF). The merge process must be started with the `PDFMergeStart` method and ended with `PDFMergeEnd`.

#### Syntax

```cpp
PDFMergeAdd2(BSTR InputFileName, BSTR Label)
```

#### Parameters

- **InputFileName**: Name of the existing PDF file to add to the merged document.
- **Label**: Page label to use for all pages imported from the given PDF file (typically the file name).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFMergeAddEx

Adds an existing PDF file to the current merge process. The `PageInformation` string can be used to describe which pages from the input file should be added to the merged PDF document. See the `PDFMergeAdd` method description if you want to include all pages. The merge process must be started with the `PDFMergeStart` method and ended with `PDFMergeEnd`.

#### Syntax

```cpp
PDFMergeAddEx(BSTR InputFileName, BSTR PageInformation)
```

#### Parameters

- **InputFileName**: Name of the existing PDF file to add to the merged document.
- **PageInformation**: String containing the page numbers to include in the merge, separated by semicolons (`;`). For example, `"1;2;4;6;8;"` to include pages 1, 2, 4, 6, and 8.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- To include pages 1, 2, 4, 6, and 8 from the added document, use the following `PageInformation` parameter: `"1;2;4;6;8;"`.

### PDFMergeClose

Closes the current PDF merge and outputs a new file. A merge process must be started with the `PDFMergeStart` method.

#### Syntax

```cpp
PDFMergeClose(BSTR OutputFileName)
```

#### Parameters

- **OutputFileName**: Name of the PDF file that will contain all added files and pages.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFMergeStart

Starts the merging of PDF files. Add files and pages using either `PDFMergeAdd` or `PDFMergeAddEx`. You can end the PDF merge and output the new PDF file with the `PDFMergeClose` method.

#### Syntax

```cpp
PDFMergeStart()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFOptimize

Attempts to optimize a PDF file by reducing image resolution and changing compression methods. Optimizing a PDF file may improve both loading time and render speed.

#### Syntax

```cpp
PDFOptimize(BSTR InputFile, BSTR OutputFile, long MonoDPI, long ColorDPI, long MonoCompression, long ColorCompression)
```

#### Parameters

- **InputFile**: Name of the source PDF file that will be optimized.
- **OutputFile**: Name of the optimized PDF file.
- **MonoDPI**: Maximum resolution to use for monochrome images in the output file. Any image larger than this resolution will be rescaled to fit this setting.
- **ColorDPI**: Maximum resolution to use for color and grayscale images in the output file. Any image larger than this resolution will be rescaled to fit this setting.
- **MonoCompression**: Select the compression method to use for monochrome images:
  | Value | Compression Method |
  |-------|-----------------------|
  | 0 | Flate Compression (ZIP) |
  | 2 | CCITT Group 3 Fax |
  | 3 | CCITT Group 4 Fax |
  | 8 | JBIG2 |
- **ColorCompression**: Select the compression method to use for color and grayscale images:
  | Value | Compression Method |
  |-------|-----------------------|
  | 0 | Flate Compression (ZIP) |
  | 1 | JPEG |
  | 4 | LZW |
  | 7 | JPEG2000 |

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFOptimizeEx

Attempts to optimize a PDF file by reducing image resolution and changing compression methods. Optimizing a PDF file may improve both loading time and render speed.

#### Syntax

```cpp
PDFOptimizeEx(BSTR InputFile, BSTR OutputFile, long MonoDPI, long MonoMinDPI, long GreyDPI, long GreyMinDPI, long ColorDPI, long ColorMinDPI, long MonoCompression, long GreyCompression, long ColorCompression, RX_PDF_OPTIMIZEFLAGS Flags)
```

#### Parameters

- **InputFile**: Name of the source PDF file that will be optimized.
- **OutputFile**: Name of the optimized PDF file.
- **MonoDPI**: Maximum resolution to use for monochrome images in the output file. Any image larger than this resolution will be rescaled to fit this setting.
- **MonoMinDPI**: Only reduce monochrome images with equal or higher resolution than this setting.
- **GreyDPI**: Maximum resolution to use for grayscale images in the output file. Any image larger than this resolution will be rescaled to fit this setting.
- **GreyMinDPI**: Only reduce grayscale images with equal or higher resolution than this setting.
- **ColorDPI**: Maximum resolution to use for color images in the output file. Any image larger than this resolution will be rescaled to fit this setting.
- **ColorMinDPI**: Only reduce color images with equal or higher resolution than this setting.
- **MonoCompression**: Select the compression method to use for monochrome images:
  | Value | Compression Method |
  |-------|-----------------------|
  | 0 | Flate Compression (ZIP) |
  | 2 | CCITT Group 3 Fax |
  | 3 | CCITT Group 4 Fax |
  | 8 | JBIG2 |
- **GreyCompression**: Select the compression method to use for grayscale images:
  | Value | Compression Method |
  |-------|-----------------------|
  | 0 | Flate Compression (ZIP) |
  | 1 | JPEG |
  | 4 | LZW |
  | 7 | JPEG2000 |
- **ColorCompression**: Select the compression method to use for color images:
  | Value | Compression Method |
  |-------|-----------------------|
  | 0 | Flate Compression (ZIP) |
  | 1 | JPEG |
  | 4 | LZW |
  | 7 | JPEG2000 |
- **Flags**: The following optimize flags are available:
  | Value | Description |
  |-------|--------------------------------------|
  | 1 | Grayscale images will be converted to monochrome images |

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFProtect

Creates a protected copy of an existing PDF file with owner and/or open password.

#### Syntax

```cpp
PDFProtect(BSTR InputFileName, BSTR OutputFileName, BSTR OpenPassword, BSTR OwnerPassword, LONG Encryption, LONG Restrictions)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **OutputFileName**: Name of the new protected PDF file.
- **OpenPassword**: Password required to open and view this file.
- **OwnerPassword**: Password for the owner of this file.
- **Encryption**: Select the encryption method to use. The following values are supported:
  | Value | Encryption | Acrobat Support |
  |-------|-------------|----------------------|
  | 1 | 128 RC4 | Acrobat 5 or higher |
  | 2 | 128 RC4 ex | Acrobat 6 or higher |
  | 3 | 128 AES | Acrobat 7 or higher |
  | 4 | 256 AES | Acrobat 9 or higher |
  | 5 | 256 AES Rev 6 | Acrobat X or higher |
- **Restrictions**: Use this flag to deny operations like printing and annotation. The following flags are supported (and can be combined):
  | Value | Description |
  |---------|-------------------------|
  | 0 | Deny nothing |
  | 0x00000F3C | Deny all |
  | 0x00000004 | Deny printing |
  | 0x00000008 | Deny modifying |
  | 0x00000010 | Deny copying |
  | 0x00000020 | Deny annotation/commenting |

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFSign

Creates a digitally signed copy of an existing PDF file. This method will create a signed file with an invisible signature.

#### Syntax

```cpp
PDFSign(BSTR InputFileName, BSTR OutputFileName, BSTR CertFile, BSTR CertPassword)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **OutputFileName**: Name of the new digitally signed PDF file.
- **CertFile**: Full path and name for the certificate file (PFX).
- **CertPassword**: The password to use for the certificate file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFSignEx

Creates a digitally signed copy of an existing PDF file with additional security settings like passwords and more.

#### Syntax

```cpp
PDFSignEx(BSTR InputFileName, BSTR OutputFileName, BSTR CertFile, BSTR CertPassword, BSTR OpenPassword, BSTR OwnerPassword, LONG Encryption, LONG Restrictions)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **OutputFileName**: Name of the new protected PDF file.
- **CertFile**: Full path and name for the certificate file (PFX).
- **CertPassword**: The password to use for the certificate file.
- **OpenPassword**: Password required to open and view this file.
- **OwnerPassword**: Password for the owner of this file.
- **Encryption**: Select the encryption method to use. The following values are supported:
  | Value | Encryption | Acrobat Support |
  |-------|-------------|----------------------|
  | 1 | 128 RC4 | Acrobat 5 or higher |
  | 2 | 128 RC4 ex | Acrobat 6 or higher |
  | 3 | 128 AES | Acrobat 7 or higher |
  | 4 | 256 AES | Acrobat 9 or higher |
  | 5 | 256 AES Rev 6 | Acrobat X or higher |
- **Restrictions**: Use this flag to deny operations like printing and annotation. The following flags are supported (and can be combined):
  | Value | Description |
  |---------|-------------------------|
  | 0 | Deny nothing |
  | 0x00000F3C | Deny all |
  | 0x00000004 | Deny printing |
  | 0x00000008 | Deny modifying |
  | 0x00000010 | Deny copying |
  | 0x00000020 | Deny annotation/commenting |

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PDFSignField

Creates a digitally signed copy of an existing PDF file. This method will create a signed file with a visible signature field.

#### Syntax

```cpp
PDFSignField(BSTR InputFileName, BSTR OutputFileName, BSTR CertFile, BSTR CertPassword, BSTR Reason, BSTR Location, double x1, double y1, double x2, double y2)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **OutputFileName**: Name of the new digitally signed PDF file.
- **CertFile**: Full path and name for the certificate file (PFX).
- **CertPassword**: The password to use for the certificate file.
- **Reason**: Optional reason for signing. If set, this information will be part of the signature field.
- **Location**: Optional location for signing. If set, this information will be part of the signature field.
- **x1**: Left position of the signature field in PDF coordinates (1/72 DPI).
- **y1**: Top position of the signature field in PDF coordinates (1/72 DPI).
- **x2**: Right position of the signature field in PDF coordinates (1/72 DPI).
- **y2**: Bottom position of the signature field in PDF coordinates (1/72 DPI).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

#### Notes

- If coordinates are set to zero, the signature field will be placed at the top right corner of the first page.

### PDFToTIFF

Converts a PDF file into a TIFF raster file using the given resolution and color settings. This method is useful if you want to use OCR on a PDF file.

#### Syntax

```cpp
PDFToTIFF(BSTR InputFileName, BSTR OutputFileName, LONG DPI, LONG BitsPerPixel)
```

#### Parameters

- **InputFileName**: Name of the original PDF file.
- **OutputFileName**: Name of the new TIFF file.
- **DPI**: Resolution to use for the TIFF file (dots per inch).
- **BitsPerPixel**: Number of colors to use for the TIFF file. Currently supported values are:
  - `1`: Black and white
  - `24`: True color

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Start

Starts the `RxPDF` object and checks licensing. You need to call this method before any other method provided by `RxPDF` can be called.

#### Syntax

```cpp
Start(LPDISPATCH Engine)
```

#### Parameters

- **Engine**: Pointer to a running `RxEngine` instance.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxPDF Properties

### ExportAllLayers

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the current export all layers flag. If this setting is non-zero, all markup elements on all markup layers will be exported to the PDF file when using the `ExportPDFMarkupEx` and `PDFMarkupBurnin` methods. If this setting is `false` (zero), only markup elements on visible markup layers will be exported. You can set markup layer visibility using the `RxRed` object.

### ExportConsolidatedOnly

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the consolidation export flag to be used for exported PDF annotations. If this setting is non-zero, and the markup file contains consolidated markup elements, only elements with consolidated status will be added to the PDF file. Note that this will only work for markup created and consolidated in `RxView360`.

### ExportLockedAnnotations

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the annotation lock status to be used for exported PDF annotations. If this setting is non-zero, all markup elements will have the "lock" status enabled in the resulting PDF file. Please note that this setting is used only by the `ExportPDFMarkup` and `ExportPDFMarkup` functions (Note: Typo in original; assumed to mean `ExportPDFMarkupEx`).

### MergeAddPageLabels

- **Type**: `long`
- **Access**: Read and write
- **Description**: Enables or disables the use of `PageLabels` for merged PDF files. If you want to use page labels, you must use the `PDFMergeAdd2` method.

### Version

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the version of the currently installed `RxPDFCOM` component. The string contains: Product Version, Main Revision, Sub Revision, and Build Number.
