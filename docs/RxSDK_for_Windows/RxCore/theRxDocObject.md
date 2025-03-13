---
title: The RxDoc Object
---

**Component name**: `RxDocCOM.dll`

## Document Loading and Viewing

To load and display a document using the `RxDocCOM` and `RxViewCOM` objects, follow these steps:

1. Start the core engine.
2. Call the document `Open` function.
3. Get or create a handle to a graphical device (Device Context).
4. Call one of the `Draw` methods.

The following MFC `OnDraw` code is the simplest example of how to display a document in a window:

```
void CView::OnDraw(CDC *pDC)
{
    CRect rc;
    CComPtr<IRxEngine>   RxEngine;
    CComPtr<IRxDoc>      RxDocument;
    CComPtr<IRxDisplay>  RxDisplay;
    // Create objects
    RxEngine.CoCreateInstance(CComBSTR("RxDocCom.RxEngine"));
    RxDisplay.CoCreateInstance(CComBSTR("RxViewCom.RxDisplay"));
    RxDocument.CoCreateInstance(CComBSTR("RxDocCom.RxDoc"));
    // Start engine, load document, draw it, close document, stop engine:
    RxEngine->Start(RX_REGKEY_CURRENT_USER, CComBSTR("Software\\Rasterex\\RxFilters"));
    RxDocument->Open(CComBSTR("C:\\Temp\\MyFile.txt"));
    GetClientRect(&rc);
    RxDisplay->DrawFit(pDC->GetSafeHdc(),            // Handle to device
                       RxDocument,                   // Document
                       rc.left, rc.top,             // Rectangle to display
                       rc.Width(), rc.Height());    // document in.
    RxDocument->Close();
    RxEngine->Stop();
}
```

---

## RxDoc Methods

### Check

Checks if the file is a supported format and returns a preview image if available (e.g., previews from AutoCAD drawing files). The preview can be displayed using the `DrawPreview` method in the `IRxDisplay` interface. The caller must free the preview using `GlobalFree()`.

#### Syntax

```
Check(BSTR FileName, BSTR *Format, long *Preview)
```

#### Parameters

- **FileName**: Full path name of the file (disk-based, UNC, or URL).
- **Format**: Returned file format description if supported.
- **Preview**: Returns an HDIB (Handle to Device Independent Bitmap) if a preview image is available.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### CloneDoc

Creates a copy of a previously loaded document.

#### Syntax

```
CloneDoc(LPDISPATCH pDoc)
```

#### Parameters

- **pDoc**: Document to copy.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### Close

Closes the loaded document and releases all allocated resources.

#### Syntax

```
Close()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ConvertCTB2JSON

Converts an AutoCAD pen table file (CTB) to a JSON file.

#### Syntax

```
ConvertCTB2JSON(BSTR CTBFile, BSTR JSONFile)
```

#### Parameters

- **CTBFile**: Full path to the CTB pen table file.
- **JSONFile**: Full path to the created JSON file.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### CreateFromDIB

Creates a new raster document from a given DIB, which can then be used like a disk-loaded document (e.g., for printing, viewing, converting).

#### Syntax

```
CreateFromDIB(long DIB)
```

#### Parameters

- **DIB**: Handle to a Windows DIB.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### CreateVector

Creates a new empty vector document, usable like a disk-loaded document (e.g., for printing, viewing, converting). Primarily used for redline export with `RxRedCOM`. See the `VectorBlock` property.

#### Syntax

```
CreateVector(double Scale, double Xt, double Yt)
```

#### Parameters

- **Scale**: Scale factor from internal to original file coordinate system.
- **Xt**: X translation from internal to original file coordinate system.
- **Yt**: Y translation from internal to original file coordinate system.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### CreateVectorEx

Creates a new empty vector document with a specified vector type, usable like a disk-loaded document. Primarily used for markup export with `RxRedCOM`.

#### Syntax

```
CreateVectorEx(double Scale, double Xt, double Yt, long VectorType)
```

#### Parameters

- **Scale**: Scale factor from internal to original file coordinate system.
- **Xt**: X translation from internal to original file coordinate system.
- **Yt**: Y translation from internal to original file coordinate system.
- **VectorType**: Selects vector document type:
  - `0`: Uses integer (32-bit) coordinates.
  - `1`: Uses double precision coordinates.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### DetectFormat

Detects if the file is a supported format, similar to `Check`, but does not return a preview and keeps the document open. Use `OpenDoc` or `OpenDocEx` to read the document.

#### Syntax

```
DetectFormat(BSTR FileName, BSTR *Format)
```

#### Parameters

- **FileName**: Full path name of the file (disk-based, UNC, or URL).
- **Format**: Returned file format description if supported.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### EntityInformation

Returns information about an entity within a tolerance radius.

#### Syntax

```
EntityInformation(double X, double Y, long Tolerance, long *Type, long *Layer, long *DrawColor, long *FillColor, long *Pen, long *Style, long *Width)
```

#### Parameters

- **X**: World X coordinate.
- **Y**: World Y coordinate.
- **Tolerance**: Search radius.
- **Type**: Returns entity type (e.g., `Point`, `Line`, `Polyline`, etc.).
- **Layer**: Returns entity layer.
- **DrawColor**: Returns entity draw color.
- **FillColor**: Returns entity fill color.
- **Pen**: Returns entity pen.
- **Style**: Returns entity style.
- **Width**: Returns entity width.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### EntityInformationEx

Returns extended information about an entity within a tolerance radius.

#### Syntax

```
EntityInformationEx(double X, double Y, long Tolerance, LPVARIANT Info, LPVARIANT Points)
```

#### Parameters

- **X**: World X coordinate.
- **Y**: World Y coordinate.
- **Tolerance**: Search radius.
- **Info**: Structure with information (see Appendix D).
- **Points**: SafeArray with element points (see Appendix C).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### EntityInformationPnts

Similar to `EntityInformation`, but also returns points and other information in a SafeArray (see Appendix C).

#### Syntax

```
EntityInformationPnts(double X, double Y, long Tolerance, long *PrimitiveType, long *Layer, long *DrawColor, long *FillColor, long *Pen, long *Style, long *Width, LPVARIANT Points)
```

#### Parameters

- **X**: World X coordinate.
- **Y**: World Y coordinate.
- **Tolerance**: Snapping radius.
- **PrimitiveType**: Returns entity type (see `EntityInformation`).
- **Layer**: Returns entity layer.
- **DrawColor**: Returns entity draw color.
- **FillColor**: Returns entity fill color.
- **Pen**: Returns entity pen.
- **Style**: Returns entity style.
- **Width**: Returns entity width.
- **Points**: SafeArray with element points.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### EntityNameFromIndex

Returns a filter-defined entity name from a given index (e.g., `LWPOLYLINE`, `HATCH`, `LINE` for AutoCAD files), as returned by `EntityInformationEx`.

#### Syntax

```
EntityNameFromIndex(long Index, BSTR *pVal)
```

#### Parameters

- **Index**: Index from the information structure.
- **pVal**: Filter-defined entity name.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### EntitySearch

Returns extended information about an entity within a tolerance radius, similar to `EntityInformationEx`, with an additional `Flags` parameter to control the search.

#### Syntax

```
EntitySearch(double X, double Y, double Tolerance, long Flags, LPVARIANT Info, LPVARIANT Points)
```

#### Parameters

- **X**: World X coordinate.
- **Y**: World Y coordinate.
- **Tolerance**: Search radius.
- **Flags**: Controls search:
  - `1`: Only search for entities part of a block.
- **Info**: Structure with information (see Appendix D).
- **Points**: SafeArray with element points (see Appendix C).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### FindSnap

Returns the nearest point to a given screen coordinate within a tolerance radius (snapping). Works on both 2D and 3D vector files.

#### Syntax

```
FindSnap(RX_SNAP_TYPE Type, long Tolerance, double ScreenX, double ScreenY, RX_SNAP_TYPE *ActualSnap, double *SnapX, double *SnapY, double *SnapZ)
```

#### Parameters

- **Type**: Snapping method to test:
  - `RX_SNAP_NONE = 0`
  - `RX_SNAP_NEAREST = 1`
  - `RX_SNAP_ENDPOINT = 2`
  - `RX_SNAP_MIDPOINT = 4`
  - `RX_SNAP_CENTER = 8`
  - `RX_SNAP_VERTEX = 256`
  - `RX_SNAP_ALL = 65535`
- **Tolerance**: Snapping radius in screen pixels.
- **ScreenX**: X screen coordinate to test.
- **ScreenY**: Y screen coordinate to test.
- **ActualSnap**: Returns the closest snapping method type (or `RX_SNAP_NONE` if none found).
- **SnapX**: Returned snap X screen coordinate.
- **SnapY**: Returned snap Y screen coordinate.
- **SnapZ**: Returned snap Z screen coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### FindSnapWorld

Returns the nearest point to a given world coordinate within a tolerance radius (snapping). Works only on 2D vector files.

#### Syntax

```
FindSnapWorld(RX_SNAP_TYPE Type, long Tolerance, double WorldX, double WorldY, RX_SNAP_TYPE *ActualSnap, double *SnapX, double *SnapY)
```

#### Parameters

- **Type**: Snapping method to test (see `FindSnap`).
- **Tolerance**: Snapping radius in world coordinate system.
- **WorldX**: X world coordinate to test.
- **WorldY**: Y world coordinate to test.
- **ActualSnap**: Returns the closest snapping method type (or `RX_SNAP_NONE` if none found).
- **SnapX**: Returned snap X world coordinate.
- **SnapY**: Returned snap Y world coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### FontFileName

Returns the name of a referenced font file. Use the `NumFontFiles` property to determine the number of referenced font files.

#### Syntax

```
FontFileName(long Index, BSTR *pVal)
```

#### Parameters

- **Index**: Index of the font file.
- **pVal**: Returned name of the referenced font file.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetCustomProperty

Returns a custom property from the loaded document. Use `NumCustomProperties` to check for custom properties (supported by formats like Autodesk DWG).

#### Syntax

```
GetCustomProperty(LONG Index, BSTR *Name, BSTR *Value)
```

#### Parameters

- **Index**: Zero-based index of the property.
- **Name**: Returns the property name.
- **Value**: Returns the property value as a string.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetDrawingLimits

Returns the drawing limits in document units (e.g., AutoCAD units).

#### Syntax

```
GetDrawingLimits(double *MinX, double *MinY, double *MaxX, double *MaxY)
```

#### Parameters

- **MinX**: Returns left X coordinate of drawing limit.
- **MinY**: Returns bottom coordinate of drawing limit.
- **MaxX**: Returns right coordinate of drawing limit.
- **MaxY**: Returns top coordinate of drawing limit.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetImageData

Returns native image data for raster and metafile formats for the active page.

#### Syntax

```
GetImageData(OLE_HANDLE *Data, long *DataType)
```

#### Parameters

- **Data**: Returns:
  - For raster formats (TIFF, PNG, JPEG, etc.): `HGLOBAL` with a Windows DIB.
  - For metafiles: `HMETAFILE` or `HENHMETAFILE` (see `DataType`).
- **DataType**: Returns:
  - `1`: `HGLOBAL` with DIB.
  - `2`: `HENHMETAFILE` (enhanced metafile).
  - `3`: `HMETAFILE` (standard metafile).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetImageData64

Same as `GetImageData`, but uses a 64-bit data parameter.

#### Syntax

```
GetImageData64(ULONGLONG *Data, long *DataType)
```

#### Parameters

- **Data**: Returns (see `GetImageData`).
- **DataType**: Returns (see `GetImageData`).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetInitialView

Returns the initial view of the document in document units (e.g., AutoCAD units).

#### Syntax

```
GetInitialView(double *MinX, double *MinY, double *MaxX, double *MaxY)
```

#### Parameters

- **MinX**: Returns left X coordinate of view.
- **MinY**: Returns bottom coordinate of view.
- **MaxX**: Returns right coordinate of view.
- **MaxY**: Returns top coordinate of view.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLongProperty

Returns a long property from document summary information (e.g., Word, Excel, some TIFF files).

#### Syntax

```
GetLongProperty(RX_DOC_PROPERTIES PropID, long *Value)
```

#### Parameters

- **PropID**: Property to return:
  - `RX_PROP_PAGECOUNT`: Number of pages.
  - `RX_PROP_WORDCOUNT`: Number of words.
  - `RX_PROP_CHARCOUNT`: Number of characters.
- **Value**: Returned long value.

#### Returns

- `HRESULT`: `S_OK` if found, `E_FAIL` if not found.

---

### GetMediaExtents

Returns the document extents in internal "world" units.

#### Syntax

```
GetMediaExtents(double *MinX, double *MinY, double *MinZ, double *MaxX, double *MaxY, double *MaxZ)
```

#### Parameters

- **MinX**: Returns minimum X coordinate.
- **MinY**: Returns minimum Y coordinate.
- **MinZ**: Returns minimum Z coordinate.
- **MaxX**: Returns maximum X coordinate.
- **MaxY**: Returns maximum Y coordinate.
- **MaxZ**: Returns maximum Z coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetNamedView

Returns information about a named view using world coordinates. Use `NumNamedViews` for the number of named views.

#### Syntax

```
GetNamedView(long ViewNo, BSTR *Name, double *x1, double *y1, double *x2, double *y2)
```

#### Parameters

- **ViewNo**: View number to query.
- **Name**: Returns view name.
- **x1**: Returns left corner of view.
- **y1**: Returns top corner of view.
- **x2**: Returns right corner of view.
- **y2**: Returns bottom corner of view.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetPackageInfo

Returns information about a Rasterex Content Package file (`.rxcp`).

#### Syntax

```
GetPackageInfo(BSTR *Descriptor, BSTR *MarkupData)
```

#### Parameters

- **Descriptor**: XML structure describing package contents.
- **MarkupData**: XML markup data (may be empty).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetPalette

Returns the document palette if available.

#### Syntax

```
GetPalette(long *Palette)
```

#### Parameters

- **Palette**: Returns a Windows `HPALETTE` handle or `NULL` if no palette.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetRotatedExtents

Returns the extents of the rotated document.

#### Syntax

```
GetRotatedExtents(double Rotation, double *Width, double *Height)
```

#### Parameters

- **Rotation**: Rotation factor in degrees.
- **Width**: Returns width of rotated document.
- **Height**: Returns height of rotated document.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetRotatedExtents3D

Returns the extents of the document rotated using three rotation factors.

#### Syntax

```
GetRotatedExtents3D(double RotX, double RotY, double RotZ, double *Width, double *Height, double *Depth)
```

#### Parameters

- **RotX**: X rotation factor in degrees.
- **RotY**: Y rotation factor in degrees.
- **RotZ**: Z rotation factor in degrees.
- **Width**: Returns width of rotated document.
- **Height**: Returns height of rotated document.
- **Depth**: Returns depth of rotated document.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetRotatedExtentsMatrix

Returns the extents of the document rotated using a rotation matrix.

#### Syntax

```
GetRotatedExtentsMatrix(LPVARIANT Matrix, double *Width, double *Height, double *Depth)
```

#### Parameters

- **Matrix**: 4x4 matrix (SafeArray with 16 double values) for rotation.
- **Width**: Returns width of rotated document.
- **Height**: Returns height of rotated document.
- **Depth**: Returns depth of rotated document.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetScalingInfo

Gets scaling and translation factors to transform between original drawing and internal coordinate systems. Example usage:

```
void ScreenToDrawingCoordinates(IRxDoc *pDoc, long screenX, long screenY, double *X, double *Y)
{
    double worldX, worldY;
    pDoc->raw_ScreenToWorld(screenX, screenY, &worldX, &worldY);
    double scale, transX, transY;
    pDoc->raw_GetScalingInfo(&scale, &transX, &transY);
    *X = worldX / scale - transX;
    *Y = worldY / scale - transY;
}
```

#### Syntax

```
GetScalingInfo(double *Scaling, double *TranslationX, double *TranslationY)
```

#### Parameters

- **Scaling**: Scaling factor.
- **TranslationX**: X translation.
- **TranslationY**: Y translation.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetStringProperty

Returns a string property from document summary information (e.g., Word, Excel, TIFF, JPEG tags/Exif).

#### Syntax

```
GetStringProperty(RX_DOC_PROPERTIES PropID, BSTR *String)
```

#### Parameters

- **PropID**: Property to return:
  - `RX_PROP_TITLE`: Document title.
  - `RX_PROP_SUBJECT`: Document subject.
  - `RX_PROP_AUTHOR`: Document author.
  - `RX_PROP_KEYWORDS`: Relevant keywords.
  - `RX_PROP_COMMENTS`: Document comments.
  - `RX_PROP_TEMPLATE`: Document template.
  - `RX_PROP_LASTAUTHOR`: Last editor.
  - `RX_PROP_REVNUMBER`: Revision number.
  - `RX_PROP_APPNAME`: Application name.
  - `RX_PROP_CATEGORY`: Document category.
  - `RX_PROP_MANAGER`: Manager.
  - `RX_PROP_SCANNER_MANUFACTURER`: Scanner manufacturer (TIFF).
  - `RX_PROP_SCANNER_MODEL`: Scanner model (TIFF).
  - `RX_PROP_COPYRIGHT`: Copyright message.
  - `RX_PROP_DATETIME`: Creation date and time.
- **String**: Returned string property value.

#### Returns

- `HRESULT`: `S_OK` if found, `E_FAIL` if not found.

---

### GetUPI

Returns units per inch for the current document page, handling files defined in millimeters (UPI = 25.4).

#### Syntax

```
GetUPI(double *UPIx, double *UPIy)
```

#### Parameters

- **UPIx**: Units per inch in horizontal direction.
- **UPIy**: Units per inch in vertical direction.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### Open

Opens a file (disk-based, UNC, or URL).

#### Syntax

```
Open(BSTR FileName)
```

#### Parameters

- **FileName**: Full path name of the file to open.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### OpenDoc

Opens a document checked by `DetectFormat`.

#### Syntax

```
OpenDoc()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### OpenEx

Opens a file in a requested mode (disk-based, UNC, or URL).

#### Syntax

```
OpenEx(BSTR FileName, long OpenFlags)
```

#### Parameters

- **FileName**: Full path name of the file to open.
- **OpenFlags**: Flags:
  - `RX_LOAD_3D_MODEL`: Force 3D mode (AutoCAD, Microstation only).
  - `RX_NO_GRAPHICS`: Load without graphics.
  - `RX_RECOVER`: Load using recovery (AutoCAD only).
  - `RX_READTOC`: Read table of contents (e.g., Acrobat bookmarks).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### OpenStream

Opens a document using an `IStream`.

#### Syntax

```
OpenStream(VARIANT Stream)
```

#### Parameters

- **Stream**: Variant containing an `IStream` object.

#### Returns

- `HRESULT`: `S_OKAZuresult = "S_OK" on success, `E_FAIL` on failure.

---

### PopTransformation

Restores a transformation saved by `PushTransformation`.

#### Syntax

```
PopTransformation()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### PushTransformation

Saves the current transformation (scaling, rotation, translation).

#### Syntax

```
PushTransformation()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### RasterPageRotate

Rotates a raster page with a given rotation factor (supported only for raster files).

#### Syntax

```
RasterPageRotate(LONG Page, DOUBLE Angle)
```

#### Parameters

- **Page**: Zero-based page to rotate.
- **Angle**: Rotation angle in degrees (90, 180, 270 supported).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ReferenceFileName

Returns the name of an external referenced file by index.

#### Syntax

```
ReferenceFileName(long Index, BSTR *pVal)
```

#### Parameters

- **Index**: Index of the filename to return.
- **pVal**: Returned name of the external reference file.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### RemovePage

Removes a page/view from the document and frees memory.

#### Syntax

```
RemovePage(LONG Layout, LONG PageNumber)
```

#### Parameters

- **Layout**: Index of the layout.
- **PageNumber**: Index of the page/view to remove.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ScreenToWorld

Converts from screen coordinates to world coordinates.

#### Syntax

```
ScreenToWorld(long ScreenX, long ScreenY, double *WorldX, double *WorldY)
```

#### Parameters

- **ScreenX**: Screen X coordinate.
- **ScreenY**: Screen Y coordinate.
- **WorldX**: Returned world X coordinate.
- **WorldY**: Returned world Y coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ScreenToWorld3D

Converts from screen coordinates to 3D world coordinates.

#### Syntax

```
ScreenToWorld3D(long ScreenX, long ScreenY, long ScreenZ, double *WorldX, double *WorldY, double *WorldZ)
```

#### Parameters

- **ScreenX**: Screen X coordinate.
- **ScreenY**: Screen Y coordinate.
- **ScreenZ**: Screen Z coordinate.
- **WorldX**: Returned world X coordinate.
- **WorldY**: Returned world Y coordinate.
- **WorldZ**: Returned world Z coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### WorldToScreen

Converts from world coordinates to screen coordinates.

#### Syntax

```
WorldToScreen(double WorldX, double WorldY, long *ScreenX, long *ScreenY)
```

#### Parameters

- **WorldX**: World X coordinate.
- **WorldY**: World Y coordinate.
- **ScreenX**: Returned screen X coordinate.
- **ScreenY**: Returned screen Y coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### WorldToScreen3D

Converts from 3D world coordinates to 3D screen coordinates.

#### Syntax

```
WorldToScreen3D(double WorldX, double WorldY, double WorldZ, long *ScreenX, long *ScreenY, long *ScreenZ)
```

#### Parameters

- **WorldX**: World X coordinate.
- **WorldY**: World Y coordinate.
- **WorldZ**: World Z coordinate.
- **ScreenX**: Returned screen X coordinate.
- **ScreenY**: Returned screen Y coordinate.
- **ScreenZ**: Returned screen Z coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

## RxDoc Properties

| Property                | Type       | Access     | Description                                                                |
| ----------------------- | ---------- | ---------- | -------------------------------------------------------------------------- |
| **ActivePageEmpty**     | BOOL       | Read-only  | Returns non-zero if the current page is empty.                             |
| **CanUseBlockMode**     | BOOL       | Read-only  | Returns true if the document can be viewed in block mode.                  |
| **Compression**         | BSTR       | Read-only  | Returns the compression method used (typically for raster files).          |
| **BitsPerPixel**        | LONG       | Read-only  | Returns bits per pixel of the current page (raster files only).            |
| **Block**               | LONG       | Read-only  | Internal use only.                                                         |
| **CanLoadAs3D**         | LONG       | Read-only  | Non-zero if the document can be loaded in 3D mode with `OpenEx`.           |
| **Container**           | LONG       | Read-only  | Internal use only.                                                         |
| **Depth**               | DOUBLE     | Read-only  | Returns depth of the current page in world units (3D only).                |
| **Descriptor**          | LONG       | Read-only  | Internal use only.                                                         |
| **DocProperties**       | LONG       | Read-only  | Returns 1 if the document contains properties (summary info).              |
| **Document**            | LONG       | Read-only  | Internal use only.                                                         |
| **DocumentPath**        | BSTR       | Read/Write | Returns or sets the full path of the opened document.                      |
| **DPI**                 | LONG       | Read-only  | Returns pixels per inch (0 if not set).                                    |
| **Engine**              | LPDISPATCH | Read-only  | Returns pointer to the `IRxEngine` object used to load the document.       |
| **EngineOverride**      | LPDISPATCH | Write-only | Reserved.                                                                  |
| **Features**            | BSTR       | Read-only  | Internal use only.                                                         |
| **FileFormat**          | BSTR       | Read-only  | Returns the document’s file format name.                                   |
| **FileSizeHigh**        | LONG       | Read-only  | High-order double word of file size in bytes.                              |
| **FileSizeLow**         | LONG       | Read-only  | Low-order double word of file size in bytes.                               |
| **FilterName**          | BSTR       | Read-only  | Returns the name of the filter used to load the file.                      |
| **FlipX**               | LONG       | Read/Write | Set to 1 to flip the document horizontally.                                |
| **FlipY**               | LONG       | Read/Write | Set to 1 to flip the document vertically.                                  |
| **HaveLoadErrors**      | LONG       | Read-only  | Non-zero if the file has errors (try `OpenEx` with `RX_RECOVER`).          |
| **HaveTOCEntries**      | LONG       | Read-only  | Non-zero if the file has a table of contents (e.g., PDF bookmarks).        |
| **Height**              | DOUBLE     | Read-only  | Returns height of the current page in world units.                         |
| **InitialViewDefined**  | LONG       | Read-only  | True if an initial view is defined (AutoCAD only).                         |
| **InitialRotation**     | LONG       | Read-only  | Returns recommended initial rotation in degrees.                           |
| **IsContentPackage**    | LONG       | Read-only  | Non-zero if the file is a Rasterex Content Package file.                   |
| **IsDefaultViewOK**     | LONG       | Read-only  | Non-zero if the active view is not TOP view (3D only).                     |
| **IsDigitallySigned**   | LONG       | Read-only  | Non-zero if the document is digitally signed.                              |
| **IsTiledRaster**       | LONG       | Read-only  | Non-zero if the raster file contains tiled data.                           |
| **LimitsDefined**       | LONG       | Read-only  | True if limits are defined (AutoCAD only).                                 |
| **LastError**           | LONG       | Read-only  | Returns error code if opening fails (0 = no error, 1-6 = specific errors). |
| **LoadedPages**         | LONG       | Read-only  | Returns number of loaded pages for multi-page documents.                   |
| **LocalName**           | BSTR       | Read-only  | Returns local path of the loaded file (e.g., cache entry for URLs).        |
| **LocalTempFolder**     | BSTR       | Read/Write | Sets folder for local copies (default: Windows temp folder).               |
| **NumCustomProperties** | LONG       | Read-only  | Returns number of custom properties (see `GetCustomProperty`).             |
| **NumFontFiles**        | LONG       | Read-only  | Returns number of referenced font files (see `FontFileName`).              |
| **NumNamedViews**       | LONG       | Read-only  | Returns number of named views (see `GetNamedView`).                        |
| **NumReferenceFiles**   | LONG       | Read-only  | Returns number of external referenced files (vector/raster).               |
| **OriginalName**        | BSTR       | Read/Write | Sets local copy name if used.                                              |
| **Storage**             | LONG       | Read-only  | Returns storage type (0=unknown, 1=file, 2=FTP, 3=Gopher, 4=HTTP).         |
| **Type**                | LONG       | Read-only  | Returns format type (e.g., text, raster, vector 2D/3D, etc.).              |
| **UseLocalCopy**        | LONG       | Read/Write | If 1, creates a local copy to avoid locking (deleted on close).            |
| **VectorBlock**         | LPDISPATCH | Read-only  | Returns vector block for `CreateVector` (used with `RxRedCom`).            |
| **Version**             | BSTR       | Read-only  | Returns `RxDocCOM` version (e.g., `Product.Main.Sub.Build`).               |
| **Width**               | DOUBLE     | Read-only  | Returns width of the current page in world units.                          |

---

## Layout Methods and Properties

Documents always contain at least one layout. Some CAD formats (e.g., AutoCAD DWG) support multiple layouts.

### GetLayoutInfo

Returns information about the current active layout.

#### Syntax

```
GetLayoutInfo(BSTR *Name, long *Pages, long *CurrentPage)
```

#### Parameters

- **Name**: Returns name of the active layout.
- **Pages**: Returns number of pages in the active layout.
- **CurrentPage**: Returns index of the current displayed page.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLayoutInfoIndex

Returns information about a layout based on its index.

#### Syntax

```
GetLayoutInfoIndex(long Index, BSTR *Name, long *Pages, long *CurrentPage)
```

#### Parameters

- **Index**: Index number of the layout to query.
- **Name**: Returns name of the queried layout.
- **Pages**: Returns number of pages in the queried layout.
- **CurrentPage**: Returns index of the current displayed page.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ActiveLayout

- **Type**: `LONG`
- **Access**: Read/Write
- **Description**: Returns or sets the current active layout. If not previously displayed, loads the first page.

### NumLayouts

- **Type**: `LONG`
- **Access**: Read/Write
- **Description**: Returns the number of layouts in the document.

---

## Page Methods and Properties

Many file formats support multiple pages. CAD file views may be treated as pages.

### AppendPageFromDIB

Adds a new raster page to a document created with `CreateFromDIB`, incrementing the page count.

#### Syntax

```
AppendPageFromDIB(long DIB)
```

#### Parameters

- **DIB**: Handle to a Windows DIB.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetPageInfo

Returns information about a given page.

#### Syntax

```
GetPageInfo(long Index, BSTR *Name, BSTR *Compression, long *DPI, double *OriginalScale, double *OriginalTransX, double *OriginalTransY, double *Width, double *Height)
```

#### Parameters

- **Index**: Page number to query.
- **Name**: Returns page name.
- **Compression**: Returns compression type.
- **DPI**: Returns dots per inch.
- **OriginalScale**: Returns original scaling.
- **OriginalTransX**: Returns X coordinate of original translation.
- **OriginalTransY**: Returns Y coordinate of original translation.
- **Width**: Returns width in world units.
- **Height**: Returns height in world units.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetPageLoaded

Checks if a given page is loaded.

#### Syntax

```
GetPageLoaded(long Index, long *Loaded)
```

#### Parameters

- **Index**: Number of the queried page.
- **Loaded**: Set to non-zero if the page is loaded.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetPageNameIndex

Returns the name for a given page number.

#### Syntax

```
GetPageName(long Index, BSTR *PageName)
```

#### Parameters

- **Index**: Number of the queried page.
- **PageName**: Returns the page name.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### LoadNextPage

Loads the next page for formats with an unknown number of pages (`Pages` = -1).

#### Syntax

```
LoadNextPage()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ActivePage

- **Type**: `LONG`
- **Access**: Read/Write
- **Description**: Returns or sets the current active page, loading it if necessary.

### PageName

- **Type**: `BSTR`
- **Access**: Read-only
- **Description**: Returns the name of the current displayed page.

### Pages

- **Type**: `LONG`
- **Access**: Read-only
- **Description**: Returns the number of pages in the active layout (-1 if unknown, use `LoadNextPage`).

---

## Vector Block Methods and Properties

Some file formats store drawing geometry in blocks (e.g., AutoCAD).

### AppendBlockAttribute

Adds a custom attribute to an existing block.

#### Syntax

```
AppendBlockAttribute(long Index, BSTR Category, BSTR Tag, BSTR Value)
```

#### Parameters

- **Index**: Index of the block to change.
- **Category**: Optional category for the attribute.
- **Tag**: Name of the attribute.
- **Value**: Value of the attribute.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### AppendVectorBlock

Adds a new vector block to a CAD document.

#### Syntax

```
AppendVectorBlock(BSTR Name, LPDISPATCH *pVal)
```

#### Parameters

- **Name**: Name of the vector block to add.
- **pVal**: Returned vector block object pointer (`IRxVectorBlockNative`).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### AppendVectorBlockEx

Adds a new vector block with a specified type.

#### Syntax

```
AppendVectorBlockEx(BSTR Name, LPDISPATCH *pVal, long VectorType)
```

#### Parameters

- **Name**: Name of the vector block to add.
- **pVal**: Returned vector block object pointer.
- **VectorType**:
  - `0`: Integer (32-bit) coordinates (`IRxVectorBlockNative`).
  - `1`: Double precision coordinates (`IRxVectorBlockDNative`).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlock3D

Locates the 3D block closest to given screen coordinates.

#### Syntax

```
GetBlock3D(long ScreenX, long ScreenY, double Tolerance, long *BlockIndex)
```

#### Parameters

- **ScreenX**: Screen X coordinate.
- **ScreenY**: Screen Y coordinate.
- **Tolerance**: Tolerance in pixels.
- **BlockIndex**: Returns a valid block index if found.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockAttribute

Returns the tag and value of a block attribute as a string.

#### Syntax

```
GetBlockAttribute(long Index, long Attribute, BSTR *Tag, BSTR *Value)
```

#### Parameters

- **Index**: Index of the block to query.
- **Attribute**: Index of the attribute to return.
- **Tag**: Returns the attribute tag (name).
- **Value**: Returns the attribute value.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockAttributeEx

Returns the tag, value, and category of a block attribute as a string.

#### Syntax

```
GetBlockAttributeEx(long Index, long Attribute, BSTR *Category, BSTR *Tag, BSTR *Value)
```

#### Parameters

- **Index**: Index of the block to query.
- **Attribute**: Index of the attribute to return.
- **Category**: Returns the property category (if available, e.g., DWFX).
- **Tag**: Returns the attribute tag (name).
- **Value**: Returns the attribute value.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockAttributeVT

Returns the tag and value of a block attribute as a variant (integer, double, or string).

#### Syntax

```
GetBlockAttributeVT(long Index, long Attribute, BSTR *Tag, VARIANT *Value)
```

#### Parameters

- **Index**: Index of the block to query.
- **Attribute**: Index of the attribute to return.
- **Tag**: Returns the attribute tag.
- **Value**: Returns the attribute value as a `VARIANT`.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockExtents

Returns the block extents in world coordinates.

#### Syntax

```
GetBlockExtents(long Index, double *MinX, double *MinY, double *MinZ, double *MaxX, double *MaxY, double *MaxZ)
```

#### Parameters

- **Index**: Index of the block to query.
- **MinX**: Minimum X coordinate.
- **MinY**: Minimum Y coordinate.
- **MinZ**: Minimum Z coordinate.
- **MaxX**: Maximum X coordinate.
- **MaxY**: Maximum Y coordinate.
- **MaxZ**: Maximum Z coordinate.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockIFCType

Returns the IFC element type for a block in an IFC file (e.g., `ifcWall`).

#### Syntax

```
GetBlockIFCType(ULONG Index, LONG *IfcType)
```

#### Parameters

- **Index**: Index of the block to query.
- **IfcType**: Returned IFC type identifier (see Appendix E).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockInfo

Returns information about a block.

#### Syntax

```
GetBlockInfo(long Index, BSTR *Name, BSTR *Handle, BSTR *Src, long *State, double *Width, double *Height, long *Attributes)
```

#### Parameters

- **Index**: Index of the block to query.
- **Name**: Returns the block name.
- **Handle**: Returns the block handle.
- **Src**: Returns the source file (if externally referenced).
- **State**: Returns the block state.
- **Width**: Returns the block width.
- **Height**: Returns the block height.
- **Attributes**: Returns true if the block has attributes.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockInfoExtents

Same as `GetBlockInfo`, but also returns block extents.

#### Syntax

```
GetBlockInfoExtents(long Index, BSTR *Name, BSTR *Handle, BSTR *Src, long *State, double *MinX, double *MinY, double *MinZ, double *MaxX, double *MaxY, double *MaxZ, long *Attributes)
```

#### Parameters

- **Index**: Index of the block to query.
- **Name**: Returns the block name.
- **Handle**: Returns the block handle.
- **Src**: Returns the source file (if externally referenced).
- **State**: Returns the block state.
- **MinX**: Minimum X coordinate.
- **MinY**: Minimum Y coordinate.
- **MinZ**: Minimum Z coordinate.
- **MaxX**: Maximum X coordinate.
- **MaxY**: Maximum Y coordinate.
- **MaxZ**: Maximum Z coordinate.
- **Attributes**: Returns true if the block has attributes.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockInfoInsert

Returns placement, scaling, and rotation information for a block in original drawing units.

#### Syntax

```
GetBlockInfoInsert(long Index, double *InsertX, double *InsertY, double *InsertZ, double *ScaleX, double *ScaleY, double *ScaleZ, double *Rotation)
```

#### Parameters

- **Index**: Index of the block to query.
- **InsertX**: X coordinate of insert position.
- **InsertY**: Y coordinate of insert position.
- **InsertZ**: Z coordinate of insert position.
- **ScaleX**: X scaling used to insert.
- **ScaleY**: Y scaling used to insert.
- **ScaleZ**: Z scaling used to insert.
- **Rotation**: Block rotation factor in degrees.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockState

Returns the visibility state of a block.

#### Syntax

```
GetBlockState(long Index, long *State)
```

#### Parameters

- **Index**: Index of the queried block.
- **State**: Returns the state (non-zero = on).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetBlockTransparency

Returns the transparency value for a block (3D only).

#### Syntax

```
GetBlockTransparency(long Index, double *Value)
```

#### Parameters

- **Index**: Block index.
- **Value**: Transparency value (0 = none, 1.0 = full).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetNumBlockAttributes

Returns the number of attributes for a block.

#### Syntax

```
GetNumBlockAttributes(long Index, long *Attributes)
```

#### Parameters

- **Index**: Index of the queried block.
- **Attributes**: Returns the number of attributes.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ResetBlockMatrix

Resets the transformation matrix for a block to default.

#### Syntax

```
ResetBlockMatrix(LONG Index)
```

#### Parameters

- **Index**: Index of the block to reset.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### RestoreBlockState

Restores all blocks to their original states.

#### Syntax

```
RestoreBlockState()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetBlockMatrix

Sets a custom 4x4 transformation matrix for a block.

#### Syntax

```
SetBlockMatrix(ULONG Index, VARIANT Matrix)
```

#### Parameters

- **Index**: Index of the block to change.
- **Matrix**: New 4x4 transformation matrix (SafeArray of 16 doubles).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetBlockState

Toggles a block’s visibility on or off.

#### Syntax

```
SetBlockState(long Index, long State)
```

#### Parameters

- **Index**: Index of the block to change.
- **State**: Non-zero turns the block on.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetBlockTransparency

Sets the transparency value for a block (3D only).

#### Syntax

```
SetBlockTransparency(long Index, double Value)
```

#### Parameters

- **Index**: Block index.
- **Value**: Transparency value (0 = none, 1.0 = full).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### TOCEntryBlockID

Returns the block index associated with a TOC node ID.

#### Syntax

```
TOCEntryBlockID(long NodeID, LONG *pVal)
```

#### Parameters

- **NodeID**: TOC node ID.
- **pVal**: Returned block index.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### BlockLoadMask

- **Type**: `BSTR`
- **Access**: Read/Write
- **Description**: Filters blocks to load by name pattern (e.g., `"Space *"`). Geometry loads but is not listed if unmatched.

### NumBlocks

- **Type**: `LONG`
- **Access**: Read-only
- **Description**: Returns the number of blocks in the current page.

### BlockMode

- **Type**: `LONG`
- **Access**: Read/Write
- **Description**: Set to 1 for block mode to view separate blocks (deprecated).

### ActiveBlock

- **Type**: `LONG`
- **Access**: Read/Write
- **Description**: Selects the active block to view (deprecated).

---

## Vector Layer Methods and Properties

CAD file formats often store information in layers (e.g., AutoCAD, HPGL/2 pens).

### GetLayerDescription

Returns the description for a layer (optional, empty if not present).

#### Syntax

```
GetLayerDescription(long Layer, BSTR *Description)
```

#### Parameters

- **Layer**: Index of the queried layer.
- **Description**: Returns the layer description (or empty string).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLayerInfo

Returns name, default color, and visibility state for a layer.

#### Syntax

```
GetLayerInfo(long Layer, BSTR *Name, long *Color, long *State)
```

#### Parameters

- **Layer**: Index of the queried layer.
- **Name**: Returns the layer name.
- **Color**: Returns the default color.
- **State**: Returns the state (non-zero = on).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLayerInfoEx

Same as `GetLayerInfo`, plus plottable and frozen states (AutoCAD-specific).

#### Syntax

```
GetLayerInfoEx(long Layer, BSTR *Name, long *Color, long *State, long *Plottable, long *Frozen)
```

#### Parameters

- **Layer**: Index of the queried layer.
- **Name**: Returns the layer name.
- **Color**: Returns the default color.
- **State**: Returns the state (non-zero = on).
- **Plottable**: Returns plottable state (non-zero = included in plotting).
- **Frozen**: Returns frozen state (non-zero = frozen).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLayerState

Returns the visibility state of a layer.

#### Syntax

```
GetLayerState(long Layer, long *State)
```

#### Parameters

- **Layer**: Index of the queried layer.
- **State**: Returns the state (non-zero = on).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLayerStateEx

Same as `GetLayerState`, plus plottable state (AutoCAD-specific).

#### Syntax

```
GetLayerStateEx(long Layer, long *State, long *Plottable)
```

#### Parameters

- **Layer**: Index of the queried layer.
- **State**: Returns the state (non-zero = on).
- **Plottable**: Returns plottable state (non-zero = included in plotting).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetLayerState

Changes the visibility state of a layer.

#### Syntax

```
SetLayerState(long Layer, long State)
```

#### Parameters

- **Layer**: Index of the layer.
- **State**: Non-zero turns the layer on.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetLayerStateEx

Same as `SetLayerState`, plus changes plottable state (AutoCAD-specific).

#### Syntax

```
SetLayerStateEx(long Layer, long State, long Plottable)
```

#### Parameters

- **Layer**: Index of the layer.
- **State**: Non-zero turns the layer on.
- **Plottable**: Non-zero sets plottable state to true.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### RestoreLayerState

Restores all layers to their original states.

#### Syntax

```
RestoreLayerState()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### NumLayers

- **Type**: `LONG`
- **Access**: Read-only
- **Description**: Returns the number of layers in the current page.

---

## Pen Table Methods and Properties

Pen tables override color, width, and styles for CAD and plotter formats.

### GetPenInfo

Returns information about a pen in the pen table.

#### Syntax

```
GetPenInfo(long Index, long *No, long *Style, double *Width, long *Color)
```

#### Parameters

- **Index**: Index of the queried pen.
- **No**: Returns the pen number (may differ from index).
- **Style**: Returns the pen style.
- **Width**: Returns the pen width.
- **Color**: Returns the pen color.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### LoadPenTable

Loads pen table data from an external file (`.rpt` or AutoCAD `.pcp`).

#### Syntax

```
LoadPenTable(BSTR FileName)
```

#### Parameters

- **FileName**: Name of the pen table file to load.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetPenTable

Changes a pen in the pen table by pen number.

#### Syntax

```
SetPenTable(long Pen, long Style, double Width, long Color)
```

#### Parameters

- **Pen**: Pen number (not index).
- **Style**: New style (-1 = no change).
- **Width**: New width (-1 = no change).
- **Color**: New color (-1 = no change).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetPenTableIndex

Changes a pen in the pen table by index.

#### Syntax

```
SetPenTableIndex(long Index, long Style, double Width, long Color)
```

#### Parameters

- **Index**: Index of the pen (not pen number).
- **Style**: New style (-1 = no change).
- **Width**: New width (-1 = no change).
- **Color**: New color (-1 = no change).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### RestorePenTable

Restores the pen table to its original state.

#### Syntax

```
RestorePenTable()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SavePenTable

Saves pen table data to a file.

#### Syntax

```
SavePenTable(BSTR FileName, long PenTableScaled)
```

#### Parameters

- **FileName**: Name of the pen table file to save.
- **PenTableScaled**: Scale flag to be saved.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### NumPens

- **Type**: `LONG`
- **Access**: Read-only
- **Description**: Returns the number of pens in the pen table for the current page.

### PenTableUnits

- **Type**: `LONG`
- **Access**: Read/Write
- **Description**: Set to 0 for mm, 1 for inches.

---

## Hyperlink Methods and Properties

### GetHyperLinkPos

Returns the page and enclosing rectangle of a hyperlink.

#### Syntax

```
GetHyperLinkPos(long LinkNo, long *Page, double *Left, double *Top, double *Right, double *Bottom)
```

#### Parameters

- **LinkNo**: Index of the queried hyperlink.
- **Page**: Returns the document page.
- **Left**: Returns the left position (world coordinates).
- **Top**: Returns the top position.
- **Right**: Returns the right position.
- **Bottom**: Returns the bottom position.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetHyperLinkUrl

Returns the URL and bookmark referenced by a hyperlink.

#### Syntax

```
GetHyperLinkUrl(long LinkNo, BSTR *URL, BSTR *Bookmark)
```

#### Parameters

- **LinkNo**: Index of the queried hyperlink.
- **URL**: Returns the referenced URL (e.g., `http://www.rasterex.com`).
- **Bookmark**: Returns the bookmark (NULL if not available).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetHyperLinkTarget

Returns target information for a hyperlink.

#### Syntax

```
GetHyperLinkTarget(long LinkNo, long *Page, double *Left, double *Top, double *Right, double *Bottom)
```

#### Parameters

- **LinkNo**: Index of the queried hyperlink.
- **Page**: Returns the destination page.
- **Left**: Returns the left position of the destination view.
- **Top**: Returns the top position of the destination view.
- **Right**: Returns the right position (0 if not available).
- **Bottom**: Returns the bottom position (0 if not available).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetHyperLinkType

Returns the type of a hyperlink.

#### Syntax

```
GetHyperLinkType(long LinkNo, long *Type)
```

#### Parameters

- **LinkNo**: Index of the queried hyperlink.
- **Type**: Returns:
  - `0`: URL target.
  - `1`: Page and rectangle in the same document.
  - `3`: PDF sticky note (use `GetTextComment` for content).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetTextComment

Returns the text content of a PDF sticky note (hyperlink type 3).

#### Syntax

```
GetTextComment(long LinkNo, BSTR *Text)
```

#### Parameters

- **LinkNo**: Index of the hyperlink.
- **Text**: Returns the text content.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### NumHyperLinks

- **Type**: `LONG`
- **Access**: Read-only
- **Description**: Returns the number of hyperlinks in the document.

---

## RxDoc Events

`IRxDoc` can trigger these events during loading:

### FontPath

Fired when a font definition file path is encountered.

#### Syntax

```
FontPath([in, out] BSTR *FontPath, [in, out] long *Action)
```

#### Parameters

- **FontPath**: Path of the font generating the event.
- **Action**: Set to:
  - `RX_EVENT_NO_ACTION`: Default, tries to locate font or uses default.
  - `RX_EVENT_USE_DEFAULT_FONT`: Uses the default font.
  - `RX_EVENT_USE_CURRENT_PATH`: Uses the original path.
  - `RX_EVENT_USE_NEW_PATH`: Uses the new path specified.

#### DispatchID

- `1`

---

### Progress

Fired at intervals during loading/drawing/saving (0-100%).

#### Syntax

```
Progress([in] long Progress, [out] VARIANT_BOOL *Abort)
```

#### Parameters

- **Progress**: Percentage processed.
- **Abort**: Set to `VARIANT_TRUE` to stop (`E_ABORT`), `VARIANT_FALSE` to continue.

#### DispatchID

- `2`

---

### Password

Fired if a password is needed to open the file.

#### Syntax

```
Password([in, out] BSTR *Password)
```

#### Parameters

- **Password**: Returns the password to the filter.

#### DispatchID

- `5`

---

### XrefPath

Fired when an external reference file path is encountered.

#### Syntax

```
XrefPath([in, out] BSTR *XrefPath, [in, out] long *Action)
```

#### Parameters

- **XrefPath**: Path of the Xref generating the event.
- **Action**: Set to:
  - `RX_EVENT_NO_ACTION`: Skips the Xref (default).
  - `RX_EVENT_DONT_LOAD_XREF`: Skips the Xref.
  - `RX_EVENT_USE_CURRENT_PATH`: Loads using the original path.
  - `RX_EVENT_USE_NEW_PATH`: Loads using the new path.

#### DispatchID

- `3`

---

### XrefPathEx

Same as `XrefPath`, with an additional original path parameter (AutoCAD only, if configured).

#### Syntax

```
XrefPathEx([in, out] BSTR *XrefPath, [out] BSTR *XrefOriginalPath, [in, out] long *Action)
```

#### Parameters

- **XrefPath**: Path of the Xref generating the event.
- **XrefOriginalPath**: Original path stored in the drawing file.
- **Action**: Set to (see `XrefPath`).

#### DispatchID

- `4`
