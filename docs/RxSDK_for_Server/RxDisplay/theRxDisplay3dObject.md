---
title: The RxDisplay3D Object
---

**Component name**: `RxView3DCOM.dll`

## RxDisplay3D Methods

### Draw

Displays the active page of the given document on the specified device context. Parameters like scale and rotation control how the document is drawn. The rectangle defined by `DspL`/`DspT` and `DspW`/`DspH` is used for clipping.

#### Syntax

```
Draw(long DC, LPDISPATCH Doc, double RotationX, double RotationY, double RotationZ, long OffsetX, long OffsetY, long DspL, long DspT, long DspW, long DspH, double FileL, double FileT, double XScale, double YScale, double ZScale)
```

#### Parameters

- **DC**: Device context handle.
- **Doc**: Document (`IRxDoc`) pointer.
- **RotationX**: X rotation factor in degrees.
- **RotationY**: Y rotation factor in degrees.
- **RotationZ**: Z rotation factor in degrees.
- **OffsetX**: Left start position of the drawn document (device coordinates).
- **OffsetY**: Top start position of the drawn document (device coordinates).
- **DspL**: Left position of the displayed area (device coordinates).
- **DspT**: Top position of the displayed area (device coordinates).
- **DspW**: Width of the displayed area (device coordinates).
- **DspH**: Height of the displayed area (device coordinates).
- **FileL**: X-coordinate of the point in the document corresponding to the display start position.
- **FileT**: Y-coordinate of the point in the document corresponding to the display start position.
- **XScale**: X-scaling factor.
- **YScale**: Y-scaling factor.
- **ZScale**: Z-scaling factor.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### Draw2

Displays the given document on the specified device context using a matrix and scaling factor to control drawing. The rectangle defined by `DspL`/`DspT` and `DspW`/`DspH` is used as the clipping rectangle.

#### Syntax

```
Draw2(long DC, LPDISPATCH Doc, LPVARIANT Matrix, long OffsetX, long OffsetY, long DspL, long DspT, long DspW, long DspH, double FileL, double FileT, double Scale)
```

#### Parameters

- **DC**: Device context handle.
- **Doc**: Document (`IRxDoc`) pointer.
- **Matrix**: 4x4 matrix.
- **OffsetX**: Left start position of the drawn document (device coordinates).
- **OffsetY**: Top start position of the drawn document (device coordinates).
- **DspL**: Left position of the displayed area (device coordinates).
- **DspT**: Top position of the displayed area (device coordinates).
- **DspW**: Width of the display area (device coordinates).
- **DspH**: Height of the display area (device coordinates).
- **FileL**: X-coordinate of the point in the document corresponding to the display start position.
- **FileT**: Y-coordinate of the point in the document corresponding to the display start position.
- **Scale**: Scaling factor.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### DrawAxis

Draws an axis indicator at the given position. The `ShowAxis` property must be enabled.

#### Syntax

```
DrawAxis(long DC, LPDISPATCH Doc, LPVARIANT Matrix, long CenterX, long CenterY, double Scale)
```

#### Parameters

- **DC**: Device context handle.
- **Doc**: Document (`IRxDoc`) pointer.
- **Matrix**: 4x4 matrix.
- **CenterX**: Horizontal center of the axis indicator (device coordinates).
- **CenterY**: Vertical center of the axis indicator (device coordinates).
- **Scale**: Scale factor.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetPlane

Returns the definition for the specified clipping plane using its four coefficients. Supports 6 planes (index `0` to `5`). See Appendix D for more information about the coefficients.

#### Syntax

```
GetPlane(long Plane, double *A, double *B, double *C, double *D)
```

#### Parameters

- **Plane**: Index of the clipping plane (`0` to `5`).
- **A**: A coefficient.
- **B**: B coefficient.
- **C**: C coefficient.
- **D**: D coefficient.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ResetLight

Resets a light source, turning off the specified light.

#### Syntax

```
ResetLight(long LightNo)
```

#### Parameters

- **LightNo**: Light source index to reset.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### ResetLightning

Resets all light sources, turning off all current lights.

#### Syntax

```
ResetLightning()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetDirectionalLight

Defines a directional light source.

#### Syntax

```
SetDirectionalLight(long LightNo, double X, double Y, double Z, COLORREF Ambient, COLORREF Diffuse, COLORREF Specular)
```

#### Parameters

- **LightNo**: Light index to modify.
- **X**: X value.
- **Y**: Y value.
- **Z**: Z value.
- **Ambient**: Ambient color.
- **Diffuse**: Diffuse color.
- **Specular**: Specular color.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetPositionalLight

Defines a positional light source.

#### Syntax

```
SetPositionalLight(long LightNo, double X, double Y, double Z, COLORREF Ambient, COLORREF Diffuse, COLORREF Specular)
```

#### Parameters

- **LightNo**: Index of the light to set.
- **X**: X value.
- **Y**: Y value.
- **Z**: Z value.
- **Ambient**: Ambient color.
- **Diffuse**: Diffuse color.
- **Specular**: Specular color.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetPlane

Defines the specified clipping plane. The plane index must be an integer between `0` and `5`. See Appendix D for more information about the coefficients.

#### Syntax

```
SetPlane(long lPlane, double A, double B, double C, double D)
```

#### Parameters

- **lPlane**: Index of the clipping plane (`0` to `5`).
- **A**: A coefficient.
- **B**: B coefficient.
- **C**: C coefficient.
- **D**: D coefficient.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### Walk

Displays a model in walk-through mode.

#### Syntax

```
Walk(LPVARIANT Device, LPDISPATCH Doc, LPVARIANT Matrix, long DspL, long DspT, long DspW, long DspH, double Scale, double TranslateX, double TranslateY, double TranslateZ, double RotX, double RotY)
```

#### Parameters

- **Device**: Variant containing a device context handle.
- **Doc**: Document pointer.
- **Matrix**: 4x4 matrix.
- **DspL**: Left position of the displayed area (device coordinates).
- **DspT**: Top position of the displayed area (device coordinates).
- **DspW**: Width of the display area (device coordinates).
- **DspH**: Height of the display area (device coordinates).
- **Scale**: Scale factor for model display.
- **TranslateX**: X-coordinate of the point in the document corresponding to the display start position.
- **TranslateY**: Y-coordinate of the point in the document corresponding to the display start position.
- **TranslateZ**: Z-coordinate of the point in the document corresponding to the display start position.
- **RotX**: Camera X rotation.
- **RotY**: Camera Y rotation.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

## RxDisplay3D Properties

| Property               | Type   | Parameter                                        | Access     | Description                                                                              |
| ---------------------- | ------ | ------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------- |
| **Ambient**            | long   | Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`) | Read/Write | Color value for ambient reflectance.                                                     |
| **BackgroundColor**    | long   | None                                             | Read/Write | Background color used when drawing the model.                                            |
| **ClippingEnabled**    | long   | None                                             | Read/Write | If `true`, clipping settings are applied when drawing the model.                         |
| **ClipPlaneEnabled**   | long   | long (clipping plane, `0` to `5`)                | Read/Write | If `true`, the specified clipping plane is enabled.                                      |
| **ClipPlaneVisible**   | long   | long (clipping plane, `0` to `5`)                | Read/Write | If `true`, the specified clipping plane is visible.                                      |
| **ColorTracking**      | long   | Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`) | Read/Write | If `true`, the model's original colors are used.                                         |
| **Diffuse**            | long   | Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`) | Read/Write | Color value for diffuse reflectance.                                                     |
| **DrawVertices**       | long   | None                                             | Read/Write | If `true`, vertices are drawn (size controlled by `VertexSize`).                         |
| **Emission**           | long   | Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`) | Read/Write | Emissive color value.                                                                    |
| **EnableLight**        | long   | Light source index                               | Read/Write | If non-zero, the specified light source is enabled.                                      |
| **EnableExplode**      | long   | None                                             | Read/Write | If non-zero, the explode function is active (see `ExplodeDistance`).                     |
| **ExplodeDistance**    | double | None                                             | Read/Write | Explode factor (e.g., `1.50` increases part distances by 50%; requires `EnableExplode`). |
| **ExtentsColor**       | long   | None                                             | Read/Write | Color for drawing extents (requires `ShowExtents` to be enabled).                        |
| **GradientBackGround** | long   | None                                             | Read/Write | If `true`, the background uses a gradient fill; if `0`, a single color is used.          |
| **HiddenLineRemoval**  | long   | None                                             | Read/Write | If `true`, hidden lines are removed in wireframe mode.                                   |
| **IFCDisplayState**    | long   | None                                             | Read/Write | Controls which IFC elements are displayed (see table below).                             |
| **MaterialsEnabled**   | long   | None                                             | Read/Write | If `true`, material settings are applied when drawing the model.                         |
| **Projection**         | long   | None                                             | Read/Write | If `true`, the model uses perspective projection.                                        |
| **Shininess**          | long   | Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`) | Read/Write | Shininess factor (range: `0` to `128`).                                                  |
| **ShowAxis**           | long   | None                                             | Read/Write | If `true`, an axis indicator is added to the drawing.                                    |
| **ShowExtents**        | long   | None                                             | Read/Write | If `true`, model extents are drawn by the draw methods.                                  |
| **Specular**           | long   | Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`) | Read/Write | Color value for specular reflectance.                                                    |
| **Transparency**       | double | None                                             | Read/Write | Model transparency (`0` = none, `1.0` = fully transparent).                              |
| **Version**            | BSTR   | None                                             | Read-only  | Returns the version of the installed `RxView3DCOM` component.                            |
| **VertexSize**         | long   | None                                             | Read/Write | Size of drawn vertices in screen coordinates.                                            |
| **WireFrame**          | long   | None                                             | Read/Write | If `true`, the model is drawn in wireframe mode.                                         |

### IFCDisplayState Values

| Value        | Elements Affected                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `0`          | No elements are displayed.                                                                         |
| `0xFFFFFFFF` | All elements are displayed.                                                                        |
| `0x00000001` | `ifcSpace` elements.                                                                               |
| `0x00000002` | `ifcWall` elements.                                                                                |
| `0x00000004` | `ifcSlab` elements.                                                                                |
| `0x00000008` | `ifcRoof` elements.                                                                                |
| `0x00000010` | `ifcDoor` elements.                                                                                |
| `0x00000020` | `ifcWindow` elements.                                                                              |
| `0x00000040` | `ifcBeam` elements.                                                                                |
| `0x00000080` | `ifcColumn` elements.                                                                              |
| `0x00000100` | `ifcStair` and `ifcStairFlight` elements.                                                          |
| `0x00000200` | `ifcFurnishingElement` elements.                                                                   |
| `0x00000400` | `ifcRailing` elements.                                                                             |
| `0x00000800` | `ifcCovering` elements.                                                                            |
| `0x00001000` | `ifcFlowSegment`, `ifcFlowController`, `ifcFlowFitting`, `ifcFlowMovingDevice`, `ifcFlowTerminal`. |
| `0x00002000` | `ifcPlate` elements.                                                                               |
| `0x00004000` | `ifcMember` elements.                                                                              |
| `0x00008000` | `ifcProxy` elements.                                                                               |
| `0x00010000` | `ifcSite` elements.                                                                                |

**Notes**:

- Use the OR operator (`|`) to combine values.
- Examples:
  - All except `ifcSpace`: `0xFFFFFFFF & ~1` = `0xFFFFFFFE`.
  - Only `ifcWall` and `ifcSlab`: `0x00000006`.
  - Only `ifcSpace`: `0x00000001`.
