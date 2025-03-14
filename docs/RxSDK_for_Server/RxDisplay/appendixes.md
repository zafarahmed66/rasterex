---
title: Appendixes
---

Here you will find additional information about the RxSDK objects and their usage.

## Appendix A: Return Values

The COM objects expose one or more interfaces, and all methods defined by these interfaces return an `HRESULT` status value to inform the client about the success or failure of the requested operation.

Currently, the RxSDK objects return the following standard `HRESULT` values:

| Name             | Description                                  | Value        |
| ---------------- | -------------------------------------------- | ------------ |
| `S_OK`           | Operation successful                         | `0x00000000` |
| `S_FALSE`        | Operation successful, but may have been void | `0x00000001` |
| `E_UNEXPECTED`   | Unexpected failure                           | `0x8000FFFF` |
| `E_NOTIMPL`      | Not implemented                              | `0x80004001` |
| `E_OUTOFMEMORY`  | Failed to allocate necessary memory          | `0x8007000E` |
| `E_INVALIDARG`   | One or more arguments are invalid            | `0x80070057` |
| `E_NOINTERFACE`  | No such interface supported                  | `0x80004002` |
| `E_POINTER`      | Invalid pointer                              | `0x80004003` |
| `E_HANDLE`       | Invalid handle                               | `0x80070006` |
| `E_ABORT`        | Operation aborted                            | `0x80004004` |
| `E_FAIL`         | Unspecified failure                          | `0x80004005` |
| `E_ACCESSDENIED` | General access denied error                  | `0x80070005` |

More information about these values can be found in the Microsoft Platform SDK or at [http://msdn.microsoft.com](http://msdn.microsoft.com).

---

## Appendix B: Clipping Planes

The `RxDisplay3D` object supports full control of 3D clipping against six arbitrary planes. Each plane can be enabled, disabled, or visualized independently. When visualized, a plane extends to the model's extent and is defined in model coordinates.

A general plane equation is given by:

```
A * (x - x1) + B * (y - y1) + C * (z - z1) = 0
```

Where `(x1, y1, z1)` is a point on the plane. Rearranging this equation:

```
A * x + B * y + C * z + D = 0
```

Where `D = -(A * x1 + B * y1 + C * z1)`.

Given three points in 3D space (`[x1, y1, z1]`, `[x2, y2, z2]`, `[x3, y3, z3]`), a plane containing all three points can be defined as follows:

```
A = (x1 - x2) * (z2 - z3) - (x2 - x3) * (z1 - z2)
    ---------------------------------------------
    (y2 - y3) * (z1 - z2) - (y1 - y2) * (z2 - z3)

B = (x1 - x2) * (y2 - y3) - (x2 - x3) * (y1 - y2)
    ---------------------------------------------
    (z2 - z3) * (y1 - y2) - (z1 - z2) * (y2 - y3)

C = 1.0

D = -(A * x1 + B * y1 + C * z1)
```

All points with eye coordinates `(xe, ye, ze, we)` that satisfy `(A B C D) x M⁻¹ x (xe ye ze we)ᵀ >= 0`, where `M` is the current model view matrix, lie in the half-space defined by the plane. Points not in this half-space are clipped away. To invert a plane (clip on the opposite side), change the sign of all coefficients (`A`, `B`, `C`, `D`).
