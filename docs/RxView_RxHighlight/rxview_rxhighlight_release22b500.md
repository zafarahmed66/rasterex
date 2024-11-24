---
title: RxHighlight and RxView R22 64 bit
---

<!-- ## Readme for RxHighlight™ and RxView™ R22 64 bit -->
Copyright (c) 2002-2024 Rasterex Software a.s

### Version 22.0.0.500 November 2024

### This installation contains the following components:
- RimEngine™ version 21.0.0.300
- RxAcadConverter™ version 18.0.0.19
- RxConfigCOM™ version 21.0.0.42
- RxConvertCOM ™ version 21.0.0.158
- RxDocCOM™ version 21.0.0.143
- RxLinkCOM™ version 21.0.0.20
- RxPDFCOM™ version 21.0.0.76
- RxPrint3DCOM™ version 21.0.0.22
- RxPrintCOM™ version 21.0.0.55
- RxRedCOM™ version 21.0.0.52
- RxRedlines™ version 21.0.0.242
- RxSymbolCOM™ version 21.0.0.26
- RxTextCOM™ version 21.0.0.18
- RxView3DCOM™ version 21.0.0.33
- RxViewCOM™ version 21.0.0.46


### This installation contains the following file format filters:
- RxFilter_ACAD.dll  version  19.0.0.218  
- RxFilter_Anvil1000.dll  version 2.0.0.17
- RxFilter_BMP.dll  version   2.0.0.35
- RxFilter_Binary.dll   version   2.0.0.23
- RxFilter_CALS.dll   version   4.0.0.39
- RxFilter_CGM.dll   version   8.0.0.53
- RxFilter_CIT.dll   version   2.0.0.30 
- RxFilter_Cadkey.dll   version   15.0.0.14
- RxFilter_Calcomp.dll   version   5.0.0.30 
- RxFilter_Content.dll   version   4.0.0.74
- RxFilter_DSI.dll   version   4.0.0.5 
- RxFilter_DWF.dll   version  4.0.0.85
- RxFilter_DWF6.dll   version   6.0.0.53
- RxFilter_DWF7.dll   version   17.0.0.31
- RxFilter_DynaPDF.dll version 17.0.0.34
- RxFilter_EDMICS.dll   version   2.0.0.21 
- RxFilter_ESP.dll   version   2.0.0.17 
- RxFilter_ESRI.dll   version   4.0.0.11 
- RxFilter_Excel.dll   version   3.0.0.37 
- RxFilter_FelixCAD.dll   version   2.0.0.10 
- RxFilter_GIF.dll   version   4.0.0.30 
- RxFilter_GTX.dll   version   2.0.0.14
- RxFilter_Gerber.dll   version   2.0.0.30
- RxFilter_HEIC.dlll   version   18.0.0.11
- RxFilter_HPGL.dll   version   11.0.0.144
- RxFilter_JPEG.dll   version   4.0.0.37
- RxFilter_JPEG2000.dll version 6.0.0.7
- RxFilter_ME10.dll   version   3.0.0.37
- RxFilter_MetaFile.dll   version   15.0.0.12
- RxFilter_MicrostationV8.dll   version   18.0.0.71
- RxFilter_PCX.dll   version   2.0.0.15 
- RxFilter_PD.dll   version   2.0.0.11 
- RxFilter_PDFW.dll   version   14.0.0.90
- RxFilter_PNG.dll   version   3.0.0.36
- RxFilter_PSD.dll   version   2.0.0.5
- RxFilter_RAS.dll   version   2.0.0.15
- RxFilter_RGB.dll   version   2.0.0.20 
- RxFilter_RLC.dll   version   2.0.0.22
- RxFilter_RLE.dll   version   3.0.0.21
- RxFilter_RND.dll   version   2.0.0.15
- RxFilter_RasterCAD.dll   version   2.0.0.8
- RxFilter_SFF.dll version 8.0.0.12
- RxFilter_SLD.dll   version   2.0.0.10
- RxFilter_SVG.dll   version   6.0.0.14 
- RxFilter_TAF.dll   version   3.0.0.7
- RxFilter_TFF.dll   version   6.0.0.37
- RxFilter_TG4.dll   version   4.0.0.19
- RxFilter_TGA.dll   version   3.0.0.17
- RxFilter_TIFF.dll   version   2.0.0.35 
- RxFilter_Text.dll   version   2.0.0.31 
- RxFilter_VC5.dll   version   2.0.0.25
- RxFilter_VEC.dll   version   2.0.0.15
- RxFilter_Word2000.dll   version   5.0.0.60 
- RxFilter_XWD.dll   version   2.0.0.11

Third party components:
dynapdf.dll        version 4.0.90.259


## Main reasons for this release
- AutoCAD DWG and DXF 2025 file formats are now fully supported.
- A new standalone office converter to PDF has been added (DevExpress). This converter doesn’t require Microsoft Office or LibreOffice, and can handle DOC, DOCX, XLS and XLSX file formats.
- A new markup rectangle measurement area too was added.
- You may now change the color (gray level) to use for content that are equal in new and old comparison files. By setting this color to e.g.: white, only the difference between the files will be visible.
- You may now use OCR on scanned PDF, TIFF and other raster file formats and create searchable PDF file. This feature requires Tesseract to be installed. Tesseract is free and can be downloaded here: https://github.com/UB-Mannheim/tesseract/wiki

### Other news in this release
- Removed Save as PDF from pulldown menu that is displayed when Save As is pressed. Instead, a new large Save as PDF button was added to main ribbon tab.
- Now remember the last used file format for save dialogs.
- Added option for selecting all PDF output variants in Save As PDF dialogs.
- Added option for selecting all PDF output variants in the PDF save filter setup dialog.
- Added AutoCAD 2025 as a target version for AutoCAD single and batch conversion tools.
- Added more output options for PDF/A single file conformance: pdf/a-2u, pdf/a-3u and pdf/a-4.
- Added more output options for PDF/A batch conformance: pdf/a-2u, pdf/a-3u and pdf/a-4.
- RxView.ini file: A new option named UseLocalCopy was added:  [GENERAL] USELOCALCOPY=0/1
- If you click on the zoom sizes box in the bottom right of the status bar, a menu will now open.
- Save and load batch list used in all batch dialogs will now accept Unicode characters.
- Clear Recently Used Files option is now available under File->Tools.
- Save as PDF will now use the actual file size of the saved PDF file. In previous versions was e.g., HPGL/2 files larger than A3 scaled down to A3.
- A warning will now be displayed if the settings in Save As Raster dialog are wrong/too large.
- The recover AutoCAD command was moved to File->Open section.
- Added a new AutoCAD filter option for enabling color override of monochrome raster images found in DWG files.
- Several other minor fixes and improvements.

### RxConfigCOM
- Added new setting: rxPDFRasterResolution. Control max resolution for images added to converted PDF files.
- Added new setting: rxAcad2kEnableRasterColor. Used to control if monochrome images should be loaded from DWG files using current draw color.

### RxConvertCOM
- Added support for Tesseract OCR engine.

### RxDocCOM
- Fixes an issue with server side compare involving multiple pages.

### RxPDFCOM
- Added new method named PDFToTIFF. Used to convert PDF files into TIFF formats. Used by RxHighlights OCR functionality.
- Added new output formats for PDFConform method: PDF/A-2u, PDF/A-3u and PDF/A-4.

### RxRedlines
- Added support for creating measurement areas by using the rectangle drawing tool.
- Added support for RXML version C370 file format.

### RxFilter_ACAD DWG reader and writer
- Now officially fully support AutoCAD 2025 DWG and DXF file formats.
- Font files with non-ascii (Unicode) characters were not supported.
- Unicode code \U+00B0 was not correctly replaced with a degree sign.
- Monochrome raster images could sometimes be loaded with wrong color.
- Some circles were displayed as polylines.

### RxFilter_DWF6 DWF reader
- Added support for page relative hyperlinks.
- Images were missing in a DWF file.

### RxFilter_DynaPDF PDF reader
- Custom properties keys were loaded with invalid characters.
- Added detection of digitally signed PDF files.

### RxFilter_MicrostationV8 DGN reader
- External DGN version 8 files referenced using URL didn't work.

### RxFilter_PDWF PDF writer
- Added support for underlined TrueType text (DWG to PDF conversion).
- Now writes pdf 1.7 as default output format.
- Added optional output formats: PDF/A-2u, PDF/A-3u and PDF/A-4.

### RxFilter_RLC RLC reader
- Filter do now set DPI to 200 if not given in the file. The previous versions did set DPI to 0, which caused conversion to other file formats to fail in RxHighlight.


This installation will only run on a 64-bit OS.

This installation can be used to install both RxView and RxHighlight.
The license will control which variant you can run.

Installation is MSI based. Use the following syntax for silent installation.
Ex:
msiexec.exe /i RxView.msi SELECTED_PRODUCT= RxView MARKUP_EXT=XCM MARKUP_FOLDER="C:\TEMP" MARKUP_FOLDERTYPE="Same as viewed file" MARKUP_FILTYPE="Single file (XCM)" LOGIN_PROMPT=1 CONFIG_PATH="Z:\RXSECURE\rxconf.xcf" DESKTOP_SHORTCUT=YES FLEXLMPATH=”@LicenseServer” /qn    
