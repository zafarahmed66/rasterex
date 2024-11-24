## clipping3D

Controls the clipping plane for a 3D object, allowing parts of it to be hidden by setting transparency.

### Syntax

```typescript
RxCore.clipping3D(onoff, plane, value)
```

### Parameters

- `onoff`: **boolean** — Turns clipping on (`true`) or off (`false`).
- `plane`: **number** — Plane to clip on, where `0` is X, `1` is Y, and `2` is Z.
- `value`: **number** — Clipping range in percent.

### Returns

- **NA** — This method does not return a value.