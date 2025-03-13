---
title: The RxConfigCOM Object
---

**Component name**: `RxConfigCOM.dll`

## Introduction to RxConfigCOM

### General Information

The `RxLoadSettings` and `RxSaveSettings` objects allow your application to override the default settings used by filters for both file loading and saving.

**NOTE**: `RxConfigCOM` has been designed to cooperate with other RXSDK components and can only be used if these components are utilized to load and display the document.

The C++ listing below demonstrates how the component can be used to configure where the filter should look for AutoCAD font and reference files:

```
CComPtr<IRxLoadSettings> pIRxConfig; // Class member variable
pIRxConfig.CoCreateInstance(CComBSTR("RxConfigCom.RxLoadSettings"));
if (pIRxConfig)
{
    // Setup AutoCAD filter to use fonts, and to load these from a folder named d:\fonts
    pIRxConfig->raw_SetFilterLongValue(rxAcad2kUseFonts, 1);
    pIRxConfig->raw_SetFilterStringValue(rxAcad2kFontFolders, CComBSTR("d:\\fonts"));
    // Setup AutoCAD filter to load external referenced files from two folders:
    pIRxConfig->raw_SetFilterStringValue(rxAcad2kXRefFolders, CComBSTR("d:\\xrefs;d:\\blocks\\xrefs;"));
    // Then tell the engine that we have a configuration object
    CComQIPtr<IDispatch> pDisp = pIRxConfig;
    theApp.m_IRxEngine->raw_SetLoadFilterConfig(pDisp);
}
```

**Note**: It’s critical that the `RxLoadSettings` object pointer is provided to the `RxEngine` object before any file is loaded.

### RxLoadSettings Methods

Contains methods for overriding default values used by filters. This may include XREF paths, font paths, and other settings. For a list of modifiable settings, see the table below.

---

#### SetFilterLongValue

Changes a filter setting that uses a long value. These settings align with those configurable in filter setting dialogs. Each setting is enumerated in the component and can be listed in VB and other development environments. More details are provided in the table below.

##### Syntax

```
SetFilterLongValue(enumLongSettings Setting, long data)
```

##### Parameters

- **Setting**: Enumerated filter setting.
- **data**: The long value to set.

##### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

##### Available Enumerated Long Values

| Name                         | Filter                  | Effect                                                                                                            |
| ---------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| rxAcad2kHideFrozenLayer      | RxFilter_ACAD           | Frozen layers will be hidden if non-zero.                                                                         |
| rxAcad2kLoadAcis             | RxFilter_ACAD           | ACIS solid (3D objects) will be loaded if non-zero.                                                               |
| rxAcad2kLoadAttributes       | RxFilter_ACAD           | Blocks and block attributes will be loaded if non-zero.                                                           |
| rxAcad2kUseFonts             | RxFilter_ACAD           | If non-zero, searches for AutoCAD fonts and uses them; otherwise, uses an internal font. See `rxAcadFontFolders`. |
| rxAcad2kUseDefaultFont       | RxFilter_ACAD           | If non-zero, uses a user-defined font for missing fonts. See `rxAcadDefaultFont`.                                 |
| rxAcad2kZoomResolution       | RxFilter_ACAD           | Increases resolution in vectorized AutoCAD files (legal values: 1 to 10).                                         |
| rxAcad2kDefaultLayerSettings | RxFilter_ACAD           | If non-zero, uses default layer states.                                                                           |
| rxAcad2kAllowBigFontFix      | RxFilter_ACAD           | If non-zero, enables big font fix for mixed codepages; 0 disables it.                                             |
| rxDgn2DDisplayList           | RxFilter_DGN            | If non-zero, loads all drawings as 2D, even if 3D.                                                                |
| rxDgnAddExtension            | RxFilter_DGN            | If non-zero, adds `.dgn` extension to reference files without an extension.                                       |
| rxDgnLoadRaster              | RxFilter_DGN            | If non-zero, loads raster images referenced in the DGN file.                                                      |
| rxDgnUseFonts                | RxFilter_DGN            | If non-zero, uses fonts from a MicroStation font resource file. See `DgnFontFileName`.                            |
| Dgn8RecalcExtents            | RxFilter_MicrostationV8 | If non-zero, calculates the drawing extent before loading.                                                        |
| rxCalcompAutoDetect          | RxFilter_Calcomp        | If non-zero, attempts to auto-detect files.                                                                       |
| rxCalcompEOB                 | RxFilter_Calcomp        | Calcomp end-of-block byte.                                                                                        |
| rxCalcompExtraSync           | RxFilter_Calcomp        | Calcomp extra sync byte. See `rxCalcompUseExtraSync`.                                                             |
| rxCalcompSync                | RxFilter_Calcomp        | Calcomp sync byte.                                                                                                |
| rxCalcompUseCheckSum         | RxFilter_Calcomp        | If non-zero, assumes Calcomp files use a checksum.                                                                |
| rxCalcompUseExtraSync        | RxFilter_Calcomp        | If non-zero, assumes Calcomp files use an extra sync byte.                                                        |
| rxGerberIncremental          | RxFilter_Gerber         | If non-zero, assumes Gerber files use incremental coordinates.                                                    |
| rxGerberFileUnits            | RxFilter_Gerber         | Sets Gerber file units: `1/100 mm`, `1/1000 inch`, `1/10000 inch`, `1/100000 inch`, `1/1000000 inch`              |
| rxBinaryPaperSize            | RxFilter_Binary         | Sets paper size for listing binary files.                                                                         |
| rxBinaryPrinterDefaults      | RxFilter_Binary         | If non-zero, uses the default printer's paper size for listing binary files.                                      |
| rxTextFontCharSet            | RxFilter_Text           | Character set for text font (see `LOGFONT` in Platform SDK).                                                      |
| rxTextFontHeight             | RxFilter_Text           | Height for text font (see `LOGFONT` in Platform SDK).                                                             |
| rxTextFontItalic             | RxFilter_Text           | If non-zero, text filter font will be italic.                                                                     |
| rxTextFontWeight             | RxFilter_Text           | Weight for text font (e.g., `FW_BOLD`, `FW_EXTRABOLD`; see `LOGFONT` in Platform SDK).                            |
| rxTextPaperSize              | RxFilter_Text           | Sets paper size for listing text files.                                                                           |
| rxTextPrinterDefaults        | RxFilter_Text           | If non-zero, uses the default printer's paper size.                                                               |
| rxTextWordWrap               | RxFilter_Text           | If non-zero, enables word wrapping.                                                                               |
| rxMe10LoadParts              | RxFilter_ME10           | Loads parts as separate blocks for listing.                                                                       |
| rxMe10LoadAllParts           | RxFilter_ME10           | Loads all instances of all parts.                                                                                 |
| rxMe10CompatibleMode         | RxFilter_ME10           | Enables support for older ME10 files if non-zero.                                                                 |

---

#### SetFilterStringValue

Changes a filter setting that uses a string value. Each setting is enumerated in the component and can be listed in VB and other development environments.

##### Syntax

```
SetFilterStringValue(enumStringSettings Setting, BSTR data)
```

##### Parameters

- **Setting**: Enumerated filter setting.
- **data**: The string value to set.

##### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

##### Available Enumerated String Values

| Name                                   | Filter                          | Effect                                                                                                                     |
| -------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| rxAcadDefaultFont, rxAcad2kDefaultFont | RxFilter_AutoCAD, RxFilter_ACAD | If `rxAcadUseDefaultFont` is non-zero, specifies the default font file for missing fonts or to override the internal font. |
| rxAcadFontFolders, rxAcad2kFontFolders | RxFilter_AutoCAD, RxFilter_ACAD | Sets one or more folders (separated by `;`) to search for requested fonts.                                                 |
| rxAcadXRefFolders, rxAcad2kXRefFolders | RxFilter_AutoCAD, RxFilter_ACAD | Sets one or more folders (separated by `;`) to search for requested reference files.                                       |
| rxDgnFontFileName                      | RxFilter_DGN                    | Sets the full path of a MicroStation font resource file to use during file load.                                           |
| rxDgnReferenceFolders                  | RxFilter_DGN                    | Sets one or more folders (separated by `;`) to search for requested reference files.                                       |
| Dgn8FontResourceFile                   | RxFilter_MicrostationV8         | Sets the full path of a MicroStation font resource file to use during file load.                                           |
| rxDgn8ReferenceFolders                 | RxFilter_MicrostationV8         | Sets one or more folders (separated by `;`) to search for requested reference files.                                       |
| Dgn8ShxFontFolders                     | RxFilter_MicrostationV8         | Sets one or more folders (separated by `;`) to search for requested SHX font files.                                        |
| rxVC5FontFolder                        | RxFilter_VC5                    | Sets a folder to search for requested SHX font files.                                                                      |
| rxBinaryFontName                       | RxFilter_Binary                 | Name of the font used when listing binary files.                                                                           |
| rxTextFontName                         | RxFilter_Text                   | Name of the font used for displaying text files.                                                                           |

---

### RxSaveSettings Methods

---

#### SetFilterLongValue

Changes a filter setting that uses a long value for saving. These settings align with those configurable in filter save setting dialogs. Each setting is enumerated in the component and can be listed in VB and other development environments. More details are provided in the table below.

##### Syntax

```
SetFilterLongValue(enumLongSettings Setting, long data)
```

##### Parameters

- **Setting**: Enumerated filter setting.
- **data**: The long value to set.

##### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

##### Available Enumerated Long Values

| Name                               | Filter        | Effect                                                                                                                                                                                                                                          |
| ---------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rxAcadDxfVersion, rxAcadDwgVersion | RxFilter_ACAD | Sets the destination format for DWG/DXF conversions: `AutoCAD R12` (0), `AutoCAD R13 / LT95` (1), `AutoCAD R14 / LT98 / LT97` (2), `AutoCAD 2000 / LT 2000` (3), `AutoCAD 2004` (4), `AutoCAD 2007` (5), `AutoCAD 2010` (6), `AutoCAD 2013` (7) |
| rxAcadDxfFormat                    | RxFilter_ACAD | Sets DXF file format type: `ASCII` (0), `Binary` (1)                                                                                                                                                                                            |
| RxPDFComments                      | RxFilter_PDFW | If non-zero, converts Rasterex markup elements to PDF markup elements.                                                                                                                                                                          |
| RxPDFDrawMode                      | RxFilter_PDFW | If non-zero, enables layer support for draw modes in converted PDF files (includes transparent objects).                                                                                                                                        |
| RxPDFLayer                         | RxFilter_PDFW | If non-zero, enables layer support in converted PDF files.                                                                                                                                                                                      |
| rxPDFStandardSelect                | RxFilter_PDFW | Selects PDF standard for conversion: `Plain PDF` (0), `PDF/A1b` (1), `PDF/A2b` (2)                                                                                                                                                              |
| rxTiffColorCompression             | RxFilter_TIFF | Sets compression method for TIFF color images: `Uncompressed` (0), `Packbits` (1), `LZW` (2)                                                                                                                                                    |
| rxTiffMonoCompression              | RxFilter_TIFF | Sets compression method for TIFF monochrome images: `Uncompressed` (0), `Group 3` (1), `Group 4` (2), `Packbits` (3), `LZW` (4)                                                                                                                 |
| rxTiffByteOrder                    | RxFilter_TIFF | Sets byte ordering in converted TIFF images: `Motorola (Big-Endian)` (0), `Intel (Little-Endian)` (1)                                                                                                                                           |
