---
title: Appendixes
---

Here you will find additional information about the RxSDK objects and their usage.

## Appendix A: HRESULT

COM allows an interface member function to return an OLE error code in the form of an `HRESULT`. This is a 32-bit data type with the following layout:

| Field    | Size    |
| -------- | ------- |
| Severity | 1 bit   |
| Reserved | 4 bits  |
| Facility | 11 bits |
| Code     | 16 bits |

- **Severity (1 bit)**: Can be `0` for success or `1` for error. This bit determines if the method call succeeded, with varying "levels of success" possible when combined with other fields.
- **Reserved (4 bits)**: Must be zero and not used.
- **Facility (11 bits)**: Pre-assigned to groups of related codes. The only freely usable facility without Microsoft coordination is `FACILITY_ITF` (Interface), allowing interface-specific error codes.
- **Code (16 bits)**: COM defines codes from `0x0000` to `0x01FF`, leaving `0x0200` to `0xFFFF` for application programmers.

All RxSDK interface methods return an `HRESULT` encoded as described above. The following macros are available in Visual C++ to decompose the `HRESULT`:

- `HRESULT_SEVERITY(hResult)`: Returns the severity bit.
- `HRESULT_FACILITY(hResult)`: Returns the facility code.
- `HRESULT_CODE(hResult)`: Returns the error code part.

See Appendix B for a list of values returned by RxSDK interfaces.

---

## Appendix B: Return Values

The COM objects expose one or more interfaces, and all methods defined by these interfaces return an `HRESULT` status value to inform the client about the success or failure of the requested operation.

Currently, the RxSDK objects return the following standard `HRESULT` values:

| Name           | Description                                  | Value      |
| -------------- | -------------------------------------------- | ---------- |
| S_OK           | Operation successful                         | 0x00000000 |
| S_FALSE        | Operation successful, but may have been void | 0x00000001 |
| E_UNEXPECTED   | Unexpected failure                           | 0x8000FFFF |
| E_NOTIMPL      | Not implemented                              | 0x80004001 |
| E_OUTOFMEMORY  | Failed to allocate necessary memory          | 0x8007000E |
| E_INVALIDARG   | One or more arguments are invalid            | 0x80070057 |
| E_NOINTERFACE  | No such interface supported                  | 0x80004002 |
| E_POINTER      | Invalid pointer                              | 0x80004003 |
| E_HANDLE       | Invalid handle                               | 0x80070006 |
| E_ABORT        | Operation aborted                            | 0x80004004 |
| E_FAIL         | Unspecified failure                          | 0x80004005 |
| E_ACCESSDENIED | General access denied error                  | 0x80070005 |

More information about these values can be found in the Microsoft Platform SDK or at [http://msdn.microsoft.com](http://msdn.microsoft.com).

---

## Appendix C: Entity Information Points

The `EntityInfoPnts` and `EntityInformationEx` methods return world coordinate entity points in a `SafeArray`. To access the information, see the example below. Note that all values in the array are of type `double` (`VT_R8`).

```
VARIANT vp;
long lPrimitiveType, lLayer, lDrawColor, lFillColor, lPen, lStyle, lWidth;

HRESULT hr = m_pDoc->raw_EntityInformationPnts(dPosX, dPosY, lTolerance, &lPrimitiveType, &lLayer, &lDrawColor, &lFillColor, &lPen, &lStyle, &lWidth, &vp);
if (SUCCEEDED(hr))
{
   if (vp.vt & VT_ARRAY)
   {
      double *pdDestArray;
      if (SUCCEEDED(SafeArrayAccessData(vp.parray, (void **) &pdDestArray)))
      {
         // Access points using double array

         // Close safe array
         SafeArrayUnaccessData(vp.parray);
      }
      VariantClear(&vp); // Free the SafeArray
   }
}
```

The usage of each `double` value depends on the entity type being accessed. Some entities (e.g., `Polyline`, `Polygon`, `PolyPolyline`, `PolyPolygon`) contain a variable number of points. To find the number of points, use:

```
long lPoints = SafeArrayGetElemsize(vp.parray) / 2;
```

See the table below for a list of elements and the contents of the `double` array for each:

| Element ID | Element Description | Double Array Contents                                                                                                                               |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | Point               | `[0] – [1]`: point x and y                                                                                                                          |
| 2          | Line                | `[0] – [1]`: start point x and y, `[2] – [3]`: end point x and y                                                                                    |
| 3          | Polyline            | `[0] – [1]`: first point x and y, `[n] – [n+1]`: end point x and y                                                                                  |
| 4          | PolyPolyline        | `[0] – [1]`: first point x and y, `[n] – [n+1]`: end point x and y                                                                                  |
| 5          | Polygon             | `[0] – [1]`: first point x and y, `[n] – [n+1]`: end point x and y                                                                                  |
| 6          | PolyPolygon         | `[0] – [1]`: first point x and y, `[n] – [n+1]`: end point x and y                                                                                  |
| 7          | Arc                 | `[0] – [1]`: center point x and y, `[2]`: radius x, `[3]`: radius y, `[4]`: start angle, `[5]`: arc sweep, `[6]`: rotation                          |
| 8          | Ellipse             | `[0] – [1]`: center point x and y, `[2]`: radius x, `[3]`: radius y, `[4]`: rotation                                                                |
| 9          | Circle              | `[0] – [1]`: center point x and y, `[2]`: radius                                                                                                    |
| 10         | Rectangle           | `[0] – [1]`: upper left corner, `[2] – [3]`: lower right corner                                                                                     |
| 11         | Rounded Rectangle   | `[0] – [1]`: upper left corner, `[2] – [3]`: lower right corner, `[4]`: horizontal radius of corner rounds, `[5]`: vertical radius of corner rounds |
| 12         | Raster DIB          | `[0] – [1]`: upper left corner, `[2] – [3]`: lower right corner                                                                                     |
| 13         | Filled Ellipse      | `[0] – [1]`: center point x and y, `[2]`: radius x, `[3]`: radius y, `[4]`: rotation                                                                |
| 14         | Filled Circle       | `[0] – [1]`: center point x and y, `[2]`: radius                                                                                                    |
| 15         | Filled Rectangle    | `[0] – [1]`: upper left corner, `[2] – [3]`: lower right corner                                                                                     |

**Note**: `n = number of points - 1`.

---

## Appendix D: Entity Information Structure

The `EntityInformationEx` method returns the following information structure:

```
typedef struct tagENTITYINFOPACKET
{
   long     lVersion;
   long     lPrimitiveType;
   long     lEntityType;
   long     lHandleLow;
   long     lHandleHigh;
   long     lActualSnap;
   double   dSnapX;
   double   dSnapY;
   long     lLayer;
   long     lDrawColor;
   long     lFillColor;
   long     lPen;
   long     lStyle;
   double   dWidth;
   long     lWeight;
   long     lBlock;
   long     lPolygons;
   long     lPointsFirst;
} ENTITYINFOPACKET, *LPENTITYINFOPACKET;
```

**Note**: The structure must be defined using word packing. In Visual C++, use `#pragma pack(2)`.

### Information Structure Members

| Member         | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| lVersion       | Version of the information structure. Currently `2`.                            |
| lPrimitiveType | Primitive type index (e.g., `Point`, `Line`, `Polyline`, etc.; see list below). |
| lEntityType    | Filter-defined entity type. `-1` if not defined for this format.                |
| lHandleLow     | Lower 32 bits of the 64-bit entity handle.                                      |
| lHandleHigh    | Upper 32 bits of the 64-bit entity handle.                                      |
| lActualSnap    | Defined only if used for snap operations.                                       |
| dSnapX         | Defined only if used for snap operations.                                       |
| dSnapY         | Defined only if used for snap operations.                                       |
| lLayer         | Layer index. `-1` if the entity is not part of a layer.                         |
| lDrawColor     | Draw color in Windows RGB format.                                               |
| lFillColor     | Fill color in Windows RGB format.                                               |
| lPen           | Pen index.                                                                      |
| lStyle         | Line style.                                                                     |
| dWidth         | Line width.                                                                     |
| lWeight        | Line weight.                                                                    |
| lBlock         | Block index for this entity. `-1` if not part of a block.                       |
| lPolygons      | For `PolyPolygon` only; indicates the number of sub-polygons it contains.       |
| lPointsFirst   | For `PolyPolygon` only; indicates the number of points in the first polygon.    |

**lPrimitiveType Values**: `Point`, `Line`, `Polyline`, `PolyPolyline`, `Polygon`, `PolyPolygon`, `Arc`, `Ellipse`, `Circle`, `Rectangle`, `Rounded Rectangle`, `Raster DIB`, `Filled Ellipse`, `Filled Circle`, `Filled Rectangle`.

---

## Appendix E: IFC Element Types

You can retrieve the IFC element type for a block using the `GetBlockIFCType` method. See the table below for a list of IFC elements and their identifiers:

| IFC ID | IFC Element Type                     |
| ------ | ------------------------------------ |
| 0      | ifcBeam                              |
| 1      | ifcBuildingElementComponent          |
| 2      | ifcBuildingElementPart               |
| 3      | ifcBuildingElementProxy              |
| 4      | ifcColumn                            |
| 5      | ifcCovering                          |
| 6      | ifcCurtainWall                       |
| 7      | ifcDiscreteAccessory                 |
| 8      | ifcDistributionControlElement        |
| 9      | ifcDistributionFlowElement           |
| 10     | ifcDoor                              |
| 11     | ifcElectricityDistributionPoint      |
| 12     | ifcElementAssembly                   |
| 13     | ifcEnergyConversionDevice            |
| 14     | ifcFastener                          |
| 15     | ifcFlowSegment                       |
| 16     | ifcFlowController                    |
| 17     | ifcFlowMovingDevice                  |
| 18     | ifcFlowFitting                       |
| 19     | ifcFlowTerminal                      |
| 20     | ifcFooting                           |
| 21     | ifcFurnishingElement                 |
| 22     | ifcMechanicalFastener                |
| 23     | ifcMember                            |
| 24     | ifcPile                              |
| 25     | ifcPipeSegment                       |
| 26     | ifcPlate                             |
| 27     | ifcRailing                           |
| 28     | ifcRamp                              |
| 29     | ifcRampFlight                        |
| 30     | ifcReinforcingBar                    |
| 31     | ifcRoof                              |
| 32     | ifcSite                              |
| 33     | ifcSlab                              |
| 34     | ifcSpace                             |
| 35     | ifcStair                             |
| 36     | ifcStairFlight                       |
| 37     | ifcStructuralCurveMember             |
| 38     | ifcTransportElement                  |
| 39     | ifcWall                              |
| 40     | ifcWallStandardCase                  |
| 41     | ifcWindow                            |
| 42     | ifcProject                           |
| 43     | ifcBuilding                          |
| 44     | ifcBuildingStorey                    |
| 45     | ifcAnnotation                        |
| 46     | Unknown element (should never occur) |
