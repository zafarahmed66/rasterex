---
title: General Information
---

The **RimEngine** is a powerful component that supports nearly all operations a developer might want to perform with a document or graphic file. However, this general-purpose approach makes the RimEngine interface complex and challenging to use.

To address this, the **RxSDK** was developed to provide developer-friendly interfaces—referred to as _objects_—that simplify commonly used operations. Compared to the RimEngine, RxSDK components offer a much simpler interface. With just a few lines of code, you can create a basic viewer using RxSDK components.

## RxSDK Objects

The RxSDK consists of the following objects:

| No  | Object Name     | Description                                                                                                                                               | Documentation |
| --- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1   | RxEngine        | The first object used in your code. Locates all available file format filters and manages FlexLM licenses (unless overridden by a Rasterex license code). | This document |
| 2   | RxDoc           | Handles document loading and provides methods to manipulate layout, pages, blocks, and layers.                                                            | This document |
| 3   | RxLoadSettings  | Overrides filter settings during loading.                                                                                                                 | This document |
| 4   | RxSaveSettings  | Overrides filter settings during saving.                                                                                                                  | This document |
| 5   | RxText          | Provides functions for extracting and searching text in a document.                                                                                       | This document |
| 6   | RxDisplay       | Displays document contents on your screen.                                                                                                                | RxDisplay.pdf |
| 7   | RxDisplay3D     | Offers specific functions for displaying 3D files, such as rotation using matrices and walkthroughs.                                                      | RxDisplay.pdf |
| 8   | RxPrint         | Provides printer-specific functions, including printing, listing printers, and paper sizes.                                                               | RxPrint.pdf   |
| 9   | RxPrint3D       | Provides functions for printing 3D files.                                                                                                                 | RxPrint.pdf   |
| 10  | RxConvert       | Converts supported document formats to various formats, including PDF, TIFF, DWG, PNG, PLT, JPEG, etc.                                                    | RxConvert.pdf |
| 11  | RxAcadConverter | Converts between AutoCAD versions.                                                                                                                        | RxConvert.pdf |
| 12  | RxPDF           | Functions for merging/splitting PDFs, adding markup (burned-in or as annotations), and converting to PDF/A without data loss.                             | RxPDF.pdf     |
| 13  | RxRedline       | Provides complete markup support for your application.                                                                                                    | RxMarkup.pdf  |
| 14  | RxSymbols       | Loads symbols from Rasterex libraries and generates various barcode standard images.                                                                      | RxSymbols.pdf |

## What You Will Find in This Document

This document provides information about the **RxSDK Core** components, which include:

| Module      | Objects / Interfaces              |
| ----------- | --------------------------------- |
| RxDocCOM    | RxEngine and RxDoc                |
| RxConfigCOM | RxLoadSettings and RxSaveSettings |
| RxTextCOM   | RxText                            |

---

# Coordinate Systems

The RxSDK operates with three coordinate systems:

1. **Original Coordinate System**: The system used by the application that created the document (e.g., AutoCAD DWG coordinates).
2. **World Coordinate System**: The internal system used by RxSDK components.
3. **Screen Coordinate System**: The system used by Windows (Device coordinates).

### Transformations

- When a document is loaded, it is transformed and scaled from the **original coordinate system** to the **world coordinate system**.
- When a document is displayed, it is transformed and scaled from the **world coordinate system** to the **screen coordinate system**.

### Notes

- Documents may use either a **top-down** or **bottom-up** world coordinate system, depending on the source format:
  - **Bottom-up**: Common in CAD formats (e.g., DWG, DGN, PLT).
  - **Top-down**: Common in other formats (e.g., TIFF, PDF, Word).
- Use the `ScreenToWorld` function to transform from screen to world coordinates, and `WorldToScreen` to transform from world to screen coordinates. Both are provided by the `RxDoc` object.

---

# Supported File Formats

The following tables detail the available filters and the formats they support.

## Vector File Formats (CAD)

| Filter Name             | Extension | Description                 | Version Support      |
| ----------------------- | --------- | --------------------------- | -------------------- |
| RxFilter_ACAD           | DWG, DXF  | AutoCAD drawing format      | 2.5 – 2024           |
| RxFilter_Anvil1000      | DRW       | Anvil 1000 drawing format   | 1, 2, and 3          |
| RxFilter_CadKey         | PRT       | Cadkey drawing format       | -                    |
| RxFilter_Calcomp        | CCP       | Calcomp plotter format      | -                    |
| RxFilter_CGM            | CGM       | Computer graphics metafile  | Binary only          |
| RxFilter_DGN            | DGN       | Microstation drawing format | 3, 4, 5, and 7       |
| RxFilter_DWF3           | DWF       | Drawing web format          | Up to version 4      |
| RxFilter_DWF            | DWF       | Drawing web format          | Up to version 5.5    |
| RxFilter_DWF6           | DWF       | Design web format           | Version 6 and up     |
| RxFilter_FelixCAD       | FLX       | FelixCAD drawing format     | 2, 3, and 4          |
| RxFilter_Gerber         | GBR       | Gerber plotter format       | RS274, RS-274X       |
| RxFilter_HPGL           | PLT       | HP graphic language         | HPGL, HPGL/2, HP-RTL |
| RxFilter_MicrostationV8 | DGN       | Microstation drawing format | All including 8.x    |
| RxFilter_ME10           | MI        | ME 10/30 drawing format     | -                    |
| RxFilter_RND            | RND       | Autodesk render format      | -                    |
| RxFilter_SLD            | SLD       | Autodesk slide format       | -                    |
| RxFilter_VC5            | VC5       | RxSpotlight vector format   | 5.x                  |
| RxFilter_VEC            | VEC       | Data Design Systems format  | -                    |

## Hybrid File Formats

Hybrid formats combine a CAD file (usually AutoCAD DWG) with one or more raster files (e.g., TIF, JPG, CALS).

| Filter Name         | Extension | Description          | Version Support |
| ------------------- | --------- | -------------------- | --------------- |
| RxFilter_CADOverlay | RES       | CAD Overlay hybrid   | -               |
| RxFilter_RasterCAD  | REF       | GTX RasterCAD hybrid | -               |
| RxFilter_TAF        | TAF       | Tessel CADRaster     | -               |

## Raster File Formats

| Filter Name       | Extension   | Description                    | Version Support          |
| ----------------- | ----------- | ------------------------------ | ------------------------ |
| RxFilter_BMP      | BMP         | Windows bitmap format          | Windows BMP and OS/2 DIB |
| RxFilter_CALS     | CAL         | CALS raster format             | Type 1 Group 4           |
| RxFilter_CIT      | CIT         | Intergraph Group 4 Raster      | -                        |
| RxFilter_DSI      | DSI         | Cimage DSI Raster              | Group 4                  |
| RxFilter_EDMICS   | TG4         | EDMICS raster format           | Tiled Group 4            |
| RxFilter_ESP      | IG4         | Image Systems Group 4          | -                        |
| RxFilter_GIF      | GIF         | Compuserve GIF                 | GIF 87a / 89a            |
| RxFilter_GTX      | G3, G4, RNL | GTX raster formats             | -                        |
| RxFilter_JBIG     | JBG         | JBIG Raster Format             | -                        |
| RxFilter_JPEG     | JPG         | JFIF compliant JPEG            | -                        |
| RxFilter_JPEG2000 | JP2, J2K    | JPEG 2000                      | -                        |
| RxFilter_PCX      | PCX         | PC Paintbrush                  | -                        |
| RxFilter_PNG      | PNG         | Portable network graphics      | -                        |
| RxFilter_PSD      | PSD         | Adobe Photoshop                | -                        |
| RxFilter_RAS      | RAS         | Sun raster format              | -                        |
| RxFilter_RGB      | RGB         | Intergraph RGB Type 27         | -                        |
| RxFilter_RLC      | RLC         | Run length format              | RLC, RCL-2               |
| RxFilter_RLE      | RLE         | Intergraph RLE Raster          | -                        |
| RxFilter_SFF      | SFF         | Structured Fax Format          | -                        |
| RxFilter_TG4      | TG4         | Intergraph tiled raster format | -                        |
| RxFilter_TGA      | TGA         | TARGA image format             | -                        |
| RxFilter_TIFF     | TIF         | Tagged image file format       | -                        |
| RxFilter_XWD      | XWD         | X-Windows dump format          | -                        |

## Document File Formats

| Filter Name       | Extension | Description                    | Version Support       |
| ----------------- | --------- | ------------------------------ | --------------------- |
| RxFilter_Binary   | \*        | Hex dump of unsupported files  | -                     |
| RxFilter_Metafile | WMF, EMF  | Windows metafile format        | Enhanced and standard |
| RxFilter_Text     | TXT       | Text file                      | ASCII                 |
| RxFilter_PDF      | PDF       | Adobe portable document format | All                   |
| RxFilter_PPT      | PPT       | PowerPoint format              | 97, 2000, XP, 2003    |
| RxFilter_Word2000 | DOC       | Word file format               | 97, 2000, XP, 2003    |
| RxFilter_Word95   | DOC       | Word file format               | 95, 6.0               |

## Spreadsheet File Formats

| Filter Name    | Extension | Description       | Version Support        |
| -------------- | --------- | ----------------- | ---------------------- |
| RxFilter_Excel | XLS       | Excel file format | 95, 97, 2000, XP, 2003 |

## 3D Model File Formats

| Filter Name        | Extension     | Description                            | Version Support                                 |
| ------------------ | ------------- | -------------------------------------- | ----------------------------------------------- |
| RxFilter_Inventor  | IPT, IDW, IAM | Inventor part, drawing, and assembly   | Up to and including 2024                        |
| RxFilter_SW2015    | PRT, ASM, DRW | SolidWorks part, drawing, and assembly | Up to and including 2019 (2016+ as 64-bit only) |
| RxFilter_SolidEdge | PAR, DFT      | SolidEdge part and drawings            | Up to and including 17                          |
| RxFilter_STL       | STL           | Stereolithography file format          | -                                               |

## Write-Only File Filters

Some filters are **write-only**, meaning they can only write to the specified format and cannot load it. These are used to convert other supported formats to the specified format.

| Filter Name   | Extension | Description              | Version Support |
| ------------- | --------- | ------------------------ | --------------- |
| RxFilter_SVG  | SVG       | Scalable Vector Graphics | 1.1             |
| RxFilter_PDFW | PDF       | Acrobat PDF              | 1.x, PDF/A-2b   |
