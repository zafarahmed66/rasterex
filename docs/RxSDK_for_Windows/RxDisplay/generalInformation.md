---
title: General Information
---

## What You Will Find in This Document

This document provides information about the "RxSDK Display" components:

- **RxDisplayCOM**: Used to display all file formats to a Windows device.
- **RxDisplay3DCOM**: Used only to display 3D file formats.

## The Coordinate Systems

The RxSDK operates with three coordinate systems as follows:

- **Original Coordinate System**: Created by the original application used to generate the document.
- **World Coordinate System**: Used internally by `RxViewCOM` and `RimEngine`.
- **Screen Coordinate System**: Used by Windows (device coordinates).

When a document is loaded, it is transformed and scaled from the original coordinate system to the world coordinate system. When a document is displayed, it is transformed and scaled from the world coordinate system to the screen coordinate system.

A document may have either a **top-down** or **bottom-up** world coordinate system, depending on the source format:

- Most CAD-based formats (e.g., DWG, DGN, PLT) use a bottom-up system.
- Most other document formats (e.g., TIFF, PDF, Word) use a top-down system.

You can use the following functions provided by `RxDocCOM` to transform coordinates:

- **`ScreenToWorld`**: Transforms from screen to world coordinates.
- **`WorldToScreen`**: Transforms from world to screen coordinates.
