---
title: Rasterex Server SDK 64/32 bit release
---

Copyright (c) 2002-2025 Rasterex Software a.s

### Version 22.0.0.145 March 2025

### This installation contains the following components:

- RimEngine™ version 22.0.0.305
- RxConvertCOM ™ version 21.0.0.158
- RxDocCOM™ version 22.0.0.145
- RxLinkCOM™ version 21.0.0.20
- RxPrint3DCOM™ version 21.0.0.22
- RxPrintCOM™ version 21.0.0.55
- RxRedCOM™ version 21.0.0.52
- RxTextCOM™ version 21.0.0.18
- RxView3DCOM™ version 21.0.0.33
- RxViewCOM™ version 21.0.0.46
- RxConfigCOM™ version 22.0.0.43
- RxSymbolCOM™ version 21.0.0.26
- RxRedlines™ version 22.0.0.246
- RxPDFCOM™ version 22.0.0.77
- RxAcadConverter™ version 18.0.0.19

### This installation contains the following file format filters:

- RxFilter_ACAD.dll version 19.0.0.221
- RxFilter_Anvil1000.dll version 2.0.0.17
- RxFilter_BMP.dll version 2.0.0.35
- RxFilter_Binary.dll version 2.0.0.22
- RxFilter_CADOverlay.dll version 1.0.0.6
- RxFilter_CALS.dll version 4.0.0.39
- RxFilter_CGM.dll version 8.0.0.53
- RxFilter_CIT.dll version 2.0.0.30
- RxFilter_Cadkey.dll version 15.0.0.14
- RxFilter_Calcomp.dll version 5.0.0.30
- RxFilter_Content.dll version 4.0.0.74
- RxFilter_DSI.dll version 3.0.0.2
- RxFilter_DWF.dll version 4.0.0.85
- RxFilter_DWF3.dll version 2.0.0.5
- RxFilter_DWF6.dll version 19.0.0.53
- RxFilter_DWF7.dll version 17.0.0.31
- RxFilter_DynaPDF.dll version 17.0.0.34
- RxFilter_EDMICS.dll version 2.0.0.21
- RxFilter_ESP.dll version 1.0.0.16
- RxFilter_ESRI.dll version 4.0.0.11
- RxFilter_Excel.dll version 3.0.0.37
- RxFilter_FelixCAD.dll version 1.0.0.1
- RxFilter_GIF.dll version 4.0.0.30
- RxFilter_GTX.dll version 1.0.0.13
- RxFilter_Gerber.dll version 2.0.0.30
- RxFilter_HPGL.dll version 11.0.0.144
- RxFilter_JPEG.dll version 4.0.0.37
- RxFilter_JPEG2000.dll version 6.0.0.7
- RxFilter_ME10.dll version 3.0.0.37
- RxFilter_MetaFile.dll version 15.0.0.12
- RxFilter_MicrostationV8.dll version 18.0.0.71
- RxFilter_PCX.dll version 2.0.0.15
- RxFilter_PD.dll version 2.0.0.11
- RxFilter_PDFW.dll version 14.0.0.90
- RxFilter_PNG.dll version 3.0.0.36
- RxFilter_PSD.dll version 2.0.0.5
- RxFilter_PowerPoint.dll version 1.0.0.10
- RxFilter_RAS.dll version 2.0.0.15
- RxFilter_RGB.dll version 2.0.0.20
- RxFilter_RLC.dll version 2.0.0.22
- RxFilter_RLE.dll version 3.0.0.21
- RxFilter_RML.dll version 2.0.0.14
- RxFilter_RND.dll version 1.0.0.12
- RxFilter_RasterCAD.dll version 2.0.0.8
- RxFilter_SLD.dll version 2.0.0.10
- RxFilter_SVG.dll version 6.0.0.14
- RxFilter_TAF.dll version 3.0.0.7
- RxFilter_TFF.dll version 6.0.0.37
- RxFilter_TG4.dll version 4.0.0.19
- RxFilter_TGA.dll version 3.0.0.17
- RxFilter_TIFF.dll version 2.0.0.35
- RxFilter_Text.dll version 2.0.0.31
- RxFilter_VC5.dll version 2.0.0.25
- RxFilter_VEC.dll version 2.0.0.15
- RxFilter_Word1995.dll version 1.0.0.14
- RxFilter_Word2000.dll version 5.0.0.60
- RxFilter_XWD.dll version 2.0.0.11
- RxFilter_SFF.dll version 8.0.0.10

### Third party components:

dynapdf.dll 4.0.90.259

## New and fixed in this release

Component news and fixes.

### RimEngine

<ul>
<li>Optimization of drawing and converting hatch pattern and elements with line style from DWG.</li>
<li>Minimum platform for all components (filters/com) will from now on be Windows Vista..XP and older Windows versions are no longer supported.</li>
<li>Updated filter interface for providing more information about blocks to save filters, e.g. RxFilter_PublishXML.</li>
<li>Now compiled using VS2022.</li>
</ul>

### RxConvertCOM

<ul>
<li>Added SaveCompareResult2 method. This method takes a grayscale value in addition to all SaveCompareResult parameters. This grayscale value will replace the color that is used for equal content (which is usually black).</li>
<li>Added SaveCompareResult3. This method does the same as SaveCompareResult2 but with offset and scale.</li>
<li>Added new property named ComparePaperFormat can that be used to set the dimensions for the PDF files created.</li>
<li>Implemented OCR support if Tesseract OCR engine is installed.</li>
<li>Added new property named IsOCRAvailable. Returns true if Tesseract is installed.</li>
<li>Added new method: CreateSearchablePDF. Create a searchable PDF file from a raster file (e,g, TIFF and PNG).</li>
<li>Now adds ```XML <DigtallySigned>1</DigtallySigned> ``` to the published data.xml file if a PDF file is digitally signed.</li>
<li>Added new property named MaxEmbeddedSize. This property sed to by RxCacheProc to control the maximum width/height of embedded images found in DWG, DWF and other formats.</li>
<li>Added support for publishing CAD files (rx2b) with GZIP compression.</li>
</ul>

### RxDocCOM

<ul>
<li>Added new property named DigitallySigned. This property will return TRUE if the loaded PDF file is digitally signed.</li>
<li>A new method named ConvertCTB2JSON was added. This method is used by RxView360 to convert AutoCAD CTB files into JSON format.</li>
<li>This component now requires FlexLM feature version 22.0.</li>
<li>Recompiled using VS2022.</li>
</ul>

### RxConfigCOM

<ul>
<li>Added rxAcad2kEnableRasterColor option to control if draw color for monochrome images in DWG files should be used or not.</li>
<li>Added rxPDFMonoCompression enumeration to control compression method to use for monochrome (1-bit) images in exported PDF files.</li>
<li>Added rxPDFTrueColorCompression enumeration to control compression method to use for true color (24 and 32 bit) images in exported PDF files.</li>
</ul>

### RxRedlines

<ul>
<li>Added support RXML version C370.</li>
<li>Added support for creating measurement areas with the rectangle drawing tool.</li>
<li>Added support for RXML line subtype 7. This element is PDF type revision cloud.</li>
<li>Fixed several problems related to PDF export with annotation of large image files.</li>
<li>Now built using VS2022</li>
</ul>

### RxPDFCom

<ul>
<li>Added a new method named PDFSignField which will digitally sign a PDF file and add a visible signature field.</li>
<li>Added new method PDFToTIFF. This method will convert a PDF into a TIFF file using the given resolution and color settings. You may use this method if you want to run OCR of a PDF file.</li>
<li>Fixed several issues related to exporting annotations if the input PDF file had rotated pages.</li>
<li>Added a new property named IgnoreUserunit.This property is used by RxView360 to ensure compatibility with Foxit which do not support UserUnit that can be set in a PDF file.</li>
<li>Added additional PDFConform targets: PDF/A-2u, PDF/A-3u, PDF/A-4 and PDF/A-4e.</li>
<li>Added a new property named DeleteEqualID. This property is used when adding annotations to a PDF file. If an older element has the same ID as an added annotation, the old one will be deleted.</li>
<li>Added support RXML line subtype 7 (PDF cloud style).</li>
</ul>

### Format reader fixes AutoCAD DWG

<ul>
<li>Font files with non-ansi characters are now copied to a temporary file during loading because OpenDesgin do not support such files.</li>
<li>Some Unicode characters where not properly loaded. E.g. \U+00B0 text should be replaced with degree sign.</li>
<li>Now loads dynamic TABLE data as CSV. The CSV is added as a block attribute.</li>
<li>Monocrhome raster images (references) can now be loaded with current draw color if enabled.</li>
<li>Some circles found in DWG files where not loaded as circles but polylines.</li>
<li>Optimized handling of hatch patterns by loading lines and dots in arrays.</li>
<li>Optimized handling of style lines by loading lines and dots in arrays.</li>
</ul>

### Format reader fixes DGN V8

<ul>
<li>Externally referenced DGN V8 files from URL failed.</li>
<li>Compiled using OpenDesign version 2023.7.</li>
<li>This filter has been rebuilt using VS2022</li>
</ul>

### Format reader fixes DWF (RxFilter_DWF6)

<ul>
<li>Added support for hyperlinks pointing to other pages/sheets in the same file.</li>
<li>Fixed an issue with missing images in some DWF files.</li>
</ul>

### Format reader fixes PDF

<ul>
<li>Rebuilt using VS2022.</li>
<li>Fixed an issue with PDF properties not loaded correctly.</li>
<li>The filter will now detect if a PDF file is digitally signed.</li>
</ul>

### Format writer fixes PDF

<ul>
<li>Added support for setting PDFRasterResolution from RxConfigCOM.</li>
<li>Added support for underlined TrueType text export.</li>
<li>Now writes pdf 1.7 as default.</li>
<li>Added options for creating pdf/a-2u, pdf/a-3u, pdf/a-4 and pdf/a-4e using configuration.</li>
<li>Filter has been totally rewritten to use DynaPDF instead of old legacy code for PDF creation.</li>
<li>Added config setting:  PDFTrueColorCompression   (dynapdf 0 = inflate, 1 = jpeg, 2 = jpeg2k).</li>
<li>Added config setting:  PDFMonoCompression   (dynapdf 0 = inflate, 1 = jbig)</li>
</ul>

### Format reader fixes RLC

<ul>
<li>RLC files with no DPI value caused the PDF export option in RxHiglight to fail. The filter will now set default value to 200 if no other value is found.</li>
</ul>

RxViewX, RxDocCOM, RxViewCOM, RxView3DCOM, RxPrintCOM, RxPrint3DCOM, RxConvertCOM and RxRedCOM are built on RimEngine™ technology from Rasterex Software a.s.

See the documentation and the samples for details.
Please report any incidents, in writing to: rxsupport@rasterex.com
