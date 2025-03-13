---
title: General Information
---

## What You Will Find in This Document

This document will provide information about the "RxSDK Print" components:

### RxPrintCOM

- **Description**: Used to print all supported file formats to a Windows printer device.

### RxPrint3DCOM

- **Description**: Used only to print 3D file formats.

## The Coordinate Systems

The RxSDK operates with three coordinate systems as follows:

- **Original Coordinate System**: Created by the original application that was used to create the document.
- **World Coordinate System**: Used internally in RxSDK.
- **Screen Coordinate System**: Used by Windows (Device coordinates).

### Transformation Process

- When a document is loaded, it is transformed and scaled from the original coordinate system to the world coordinate system.
- When a document is displayed, it is transformed and scaled from the world coordinate system to the screen coordinate system.

### Coordinate System Orientation

- A document may have either a top-down or bottom-up based world coordinate system, depending on the source format.
  - **Bottom-up**: Used by most CAD-based formats (e.g., DWG, DGN, PLT).
  - **Top-down**: Used by most other documents (e.g., TIFF, PDF, Word).

### Coordinate Transformation Functions

- You can use the following functions provided by `RxDocCOM` to transform coordinates:
  - **`ScreenToWorld`**: Transforms from screen to world coordinates.
  - **`WorldToScreen`**: Transforms from world to screen coordinates.
