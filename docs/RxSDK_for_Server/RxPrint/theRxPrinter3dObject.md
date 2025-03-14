---
title: The RxPrinter3D Object
---

**Component name:** `RxPrint3DCOM.dll`

## RxPrinter3D Methods

### PrintClippedToDC

Prints the given document's active page on the provided printer device context. Parameters like scale and matrix control how the document is printed. Use this method if you create the printer context yourself. If you are using MFC or other frameworks, you will get the printer device from the framework, and this method can be used to print using that device.

#### Syntax

```cpp
HRESULT PrintClippedToDC(long DC, LPDISPATCH Doc, LPVARIANT Matrix, long DspL, long DspT, long DspW, long DspH, double FileL, double FileT, double Scale)
```

#### Parameters

- **DC**: Handle of the printer device context.
- **Doc**: Document (`IRxDoc`) pointer.
- **Matrix**: 4x4 matrix.
- **DspL**: Left start position (printer device coordinates).
- **DspT**: Top start position (printer device coordinates).
- **DspW**: Width of the destination area in printer device coordinates.
- **DspH**: Height of the destination area in printer device coordinates.
- **FileL**: X coordinate of the point in the document that corresponds to the printer start position.
- **FileT**: Y coordinate of the point in the document that corresponds to the printer start position.
- **Scale**: Scaling factor.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetPlane

Returns the definition for the specified clipping plane as given by its four coefficients. Six different planes are supported (index 0 to 5).

#### Syntax

```cpp
GetPlane(long lPlane, double *A, double *B, double *C, double *D)
```

#### Parameters

- **lPlane**: Index of the clipping plane.
- **A**: A coefficient.
- **B**: B coefficient.
- **C**: C coefficient.
- **D**: D coefficient.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetPlane

Defines the specified clipping plane. The plane index must be an integer between 0 and 5.

#### Syntax

```cpp
SetPlane(long lPlane, double A, double B, double C, double D)
```

#### Parameters

- **lPlane**: Index of the clipping plane.
- **A**: A coefficient.
- **B**: B coefficient.
- **C**: C coefficient.
- **D**: D coefficient.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxPrinter3D Properties

### Ambient

- **Type**: `long`
- **Parameter**: Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`)
- **Access**: Read and write
- **Description**: Color value to use for ambient reflectance.

### BackgroundColor

- **Type**: `long`
- **Access**: Read and write
- **Description**: Background color used when drawing the model.

### ClippingEnabled

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the clipping settings will be used when drawing the model.

### ClipPlaneEnabled

- **Type**: `long`
- **Parameter**: `long` (clipping plane, value from 0 to 5)
- **Access**: Read and write
- **Description**: If `true`, the specified clipping plane is enabled.

### ClipPlaneVisible

- **Type**: `long`
- **Parameter**: `long` (clipping plane, value from 0 to 5)
- **Access**: Read and write
- **Description**: If `true`, the specified clipping plane is visible.

### ColorTracking

- **Type**: `long`
- **Parameter**: Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`)
- **Access**: Read and write
- **Description**: If `true`, the model's original colors will be used.

### Descriptor

- **Type**: `long`
- **Access**: Read only
- **Description**: This property is only for internal usage.

### Diffuse

- **Type**: `long`
- **Parameter**: Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`)
- **Access**: Read and write
- **Description**: Color value to use for diffuse reflectance.

### Emission

- **Type**: `long`
- **Parameter**: Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`)
- **Access**: Read and write
- **Description**: Sets or gets the emissive color value.

### EnableExplode

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the explode enable status. If a non-zero value is given, the `Explode` function is currently active. See `ExplodeDistance` for more information about explode functionality.

### ExplodeDistance

- **Type**: `double`
- **Access**: Read and write
- **Description**: Sets or gets the current model explode factor. Explode can be used to move all parts in an assembly apart from one another, providing a better impression of how the model is built. The explode distance is a scale; an explode distance of `1.50` will increase the distance between all parts by 50% more than the original distance. Use `EnableExplode` to turn the explode function on or off.

### ExtentsColor

- **Type**: `long`
- **Access**: Read and write
- **Description**: Controls the color to use when drawing extents (requires `ShowExtents` to be enabled).

### HiddenLineRemoval

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, hidden lines will be removed when a model is shown in wireframe mode.

### IFCDisplayState

- **Type**: `long`
- **Access**: Read and write
- **Description**: Controls which types of IFC elements are printed. You can use this to turn off specific elements, such as `ifcSpace` elements, while printing all other types. The following table shows which elements can be turned off or on:
  | Value | Elements Affected |
  |------------|-----------------------------------------------------------------------------------|
  | 0 | No elements are displayed. |
  | 0xFFFFFFFF | All elements are displayed. |
  | 0x00000001 | `ifcSpace` elements are displayed. |
  | 0x00000002 | `ifcWall` elements are displayed. |
  | 0x00000004 | `ifcSlab` elements are displayed. |
  | 0x00000008 | `ifcRoof` elements are displayed. |
  | 0x00000010 | `ifcDoor` elements are displayed. |
  | 0x00000020 | `ifcWindow` elements are displayed. |
  | 0x00000040 | `ifcBeam` elements are displayed. |
  | 0x00000080 | `ifcColumn` elements are displayed. |
  | 0x00000100 | `ifcStair` and `ifcStairFlight` elements are displayed. |
  | 0x00000200 | `ifcFurnishingElement` elements are displayed. |
  | 0x00000400 | `ifcRailing` elements are displayed. |
  | 0x00000800 | `ifcCovering` elements are displayed. |
  | 0x00001000 | `ifcFlowSegment`, `ifcFlowController`, `ifcFlowFitting`, `ifcFlowMovingDevice`, and `ifcFlowTerminal` elements are displayed. |
  | 0x00002000 | `ifcPlate` elements are displayed. |
  | 0x00004000 | `ifcMember` elements are displayed. |
  | 0x00008000 | `ifcProxy` elements are displayed. |
  | 0x00010000 | `ifcSite` elements are displayed. |

#### Usage Notes

- Use the OR operand to combine values.
- **Examples**:
  - To print all elements except `ifcSpace`, use `(0xFFFFFFFF & ~1)`, which gives the value `0xFFFFFFFE`.
  - To print only `ifcWall` and `ifcSlab` (walls and floors), use `6` (`0x00000006`).

### MaterialsEnabled

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, material settings will be used when drawing the model.

### Projection

- **Type**: `long`
- **Access**: Read and write
- **Description**: Set to `true` if the model should be drawn using perspective projection.

### Shininess

- **Type**: `long`
- **Parameter**: Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`)
- **Access**: Read and write
- **Description**: Shininess factor (0 to 128).

### ShowExtents

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the extents of the model will be drawn by the draw methods.

### Specular

- **Type**: `long`
- **Parameter**: Face (`RX_MATERIAL_FRONT` or `RX_MATERIAL_BACK`)
- **Access**: Read and write
- **Description**: Color value to use for specular reflectance.

### Version

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the version of the currently installed `RxPrint3DCOM` component.

### WireFrame

- **Type**: `long`
- **Access**: Read and write
- **Description**: If `true`, the model will be drawn in wireframe mode.
