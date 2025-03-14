---
title: The RxDisplay Object
---

**Component name**: `RxViewCOM.dll`

## RxDisplay Methods

### Draw

Displays the active page of the given document on the specified device context. Use parameters such as scale and rotation to control how the document is drawn.

#### Syntax

```
Draw(long DC, LPDISPATCH Doc, double Rotation, long DspL, long DspT, long DspW, long DspH, double FileL, double FileT, double XScale, double YScale)
```

#### Parameters

- **DC**: Device context handle.
- **Doc**: Document (`IRxDoc`) pointer.
- **Rotation**: Rotation factor in degrees.
- **DspL**: Left start position of the drawn document (device coordinates).
- **DspT**: Top start position of the drawn document (device coordinates).
- **DspW**: Width of the displayed area (device coordinates).
- **DspH**: Height of the displayed area (device coordinates).
- **FileL**: X-coordinate of the point in the document corresponding to the display start position.
- **FileT**: Y-coordinate of the point in the document corresponding to the display start position.
- **XScale**: X-scaling factor.
- **YScale**: Y-scaling factor.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### DrawFit

Displays the given document on the specified device context, scaling it to fit the given display area.

#### Syntax

```
DrawFit(long DC, LPDISPATCH Doc, long DspL, long DspT, long DspW, long DspH)
```

#### Parameters

- **DC**: Device context handle.
- **Doc**: Document (`IRxDoc`) pointer.
- **DspL**: Left start position of the drawn document (device coordinates).
- **DspT**: Top start position of the drawn document (device coordinates).
- **DspW**: Width of the display area (device coordinates).
- **DspH**: Height of the display area (device coordinates).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### DrawPreview

Displays the given preview handle on the specified device context. Previews are available only for certain formats (e.g., AutoCAD DWG).

#### Syntax

```
DrawPreview(long DC, long Preview, long Left, long Top, long Width, long Height, long Aspect)
```

#### Parameters

- **DC**: Device context handle where the preview will be drawn.
- **Preview**: Preview handle, obtainable using the `IRxDoc` `Check` method.
- **Left**: Left start position of the drawn preview (device coordinates).
- **Top**: Top start position of the drawn preview (device coordinates).
- **Width**: Width of the display area (device coordinates).
- **Height**: Height of the display area (device coordinates).
- **Aspect**: Set to `1` to maintain aspect ratio (forces equal scaling in X and Y).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetPDFConfig

Customizes the PDF renderer using this method.

#### Syntax

```
SetPDFConfig(enumPDFConfig ID, VARIANT Param)
```

#### Parameters

- **ID**: One of the following configuration IDs:
  - `0`: Disable anti-aliasing (typically used for printing PDFs where grayscale can produce faint results). `Param` is a boolean.
  - `1`: Set the DPI value for PDF comparison (overlays images; higher DPI improves results, default is 200). `Param` is an integer.
- **Param**: Value to set for the given configuration ID (type depends on `ID`; see above).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

## RxDisplay Properties

| Property                 | Type   | Access     | Description                                                                                                                       |
| ------------------------ | ------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **ApplyPenTableToText**  | long   | Read/Write | If `true`, the pen table is applied to text elements drawn using line geometry.                                                   |
| **BackgroundColor**      | long   | Read/Write | Background color used for drawing.                                                                                                |
| **CompareMode**          | long   | Read/Write | If `true`, documents are drawn in compare mode.                                                                                   |
| **DeviceDPI**            | long   | Read/Write | Sets the DPI for display, overriding the device handle (`hDC`) DPI. Useful for rasterizing to bitmaps.                            |
| **ExtentsColor**         | long   | Read/Write | Color used for drawing extents (requires `ShowExtents` to be enabled).                                                            |
| **FillPolygons**         | long   | Read/Write | If `true`, polygons are drawn filled; if `false`, they are drawn outlined.                                                        |
| **HalfTone**             | long   | Read/Write | If `true`, color images are drawn using halftone (a form of anti-aliasing).                                                       |
| **HiddenLineRemoval**    | long   | Read/Write | If `true`, hidden lines are removed when a 3D model is shown in wireframe mode.                                                   |
| **KeepDrawColors**       | long   | Read/Write | If `true`, document colors are always used; otherwise, colors close to the background may be inverted.                            |
| **LineWeights**          | long   | Read/Write | If `true`, line weights are displayed (if defined in the drawing).                                                                |
| **MonoColor**            | long   | Read/Write | Color used for monochrome drawing (requires `MonoDisplay` to be enabled).                                                         |
| **MonoDisplay**          | long   | Read/Write | If `true`, files are drawn using a single color (`MonoColor`).                                                                    |
| **PDFCacheImageDPI**     | long   | Read/Write | Sets the DPI for the cached raster image when `UsePDFCacheImage` is enabled (higher DPI increases quality but memory usage).      |
| **PenTableScale**        | double | Read/Write | Scale factor for pen table widths when drawing (default is `1.0`).                                                                |
| **RasterDrawMethod**     | long   | Read/Write | Controls raster document drawing: `0` (normal), `1` (anti-aliasing, scale-to-gray for monochrome), `2` (preserve black pixels).   |
| **RasterMergeCompare**   | long   | Read/Write | If `true`, common drawing info is shown in black; if `false`, identical info is shown in green.                                   |
| **ShowExtents**          | long   | Read/Write | If `true`, document extents are drawn by the draw methods.                                                                        |
| **ShowGrid**             | long   | Read/Write | If `true`, spreadsheet grid lines are shown.                                                                                      |
| **UseExtPen**            | long   | Read/Write | If `true`, lines are drawn with higher quality (slower); disable for faster drawing.                                              |
| **UseGDIPlus**           | long   | Read/Write | If `true`, uses GDI+ for rendering (improves quality with anti-aliasing but slower than GDI).                                     |
| **UsePDFCacheImage**     | long   | Read/Write | If `true`, uses a raster image for PDF display instead of rendering each redraw (improves performance for raster-converted PDFs). |
| **UsePenTable**          | long   | Read/Write | If `true`, the pen table is used when drawing the document.                                                                       |
| **UsePlotLayerSettings** | long   | Read/Write | If `true`, layers with `plottable` set to `false` are not drawn.                                                                  |
| **Version**              | BSTR   | Read/Write | Returns the `RxViewCOM` version as a string (Product Version, Main Revision, Sub Revision, Build Number).                         |
| **WireFrame**            | long   | Read/Write | If `true`, 3D models are drawn in wireframe mode (no shading).                                                                    |
