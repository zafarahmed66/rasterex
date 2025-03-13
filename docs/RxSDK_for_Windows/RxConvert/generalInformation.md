---
title: General Information
---

## What You Will Find in This Document

This document will provide information about the "RxSDK Conversion" components:

### RxConvertCOM

- **Description**: Converts from one format to another.

### RxAcadConverter

- **Description**: Converts from one AutoCAD version to another version. This component may also be used to convert between DXF and DWG drawings.

## Sample Code

The SDK contains the following sample applications to demonstrate conversion functionalities:

- **`rxThumbnail`**: A simple C# console application that shows how to create thumbnails using `RxConverter`.
- **`rxPublishPDF`**: A C# console application that demonstrates how to convert any document to PDF and optionally add Rasterex markups (from `RxRedCOM`) either as PDF annotations or as burned-in graphics. This sample also uses methods from the `RxPDF` object.
- **Additional Samples**: You will find more applications with conversion support written in C++, C#, and Delphi included with the SDK.

## Important Note

If any method returns the `E_ACCESSDENIED` value, you are probably missing a valid license.
