Offsets a 3D mesh using distance and direction.

### Syntax

```typescript
RxCore.set3DBlockDistance(blockid, distance, direction, override)
```

### Parameters

- `blockid`: **string** — Mesh ID for the 3D block.
- `distance`: **number** — Distance in model units.
- `direction`: **object** — Object with `x`, `y`, and `z` properties converted to a direction vector. Example: `{x:-1, y:0, z:0}` moves in the negative x direction.
- `override`: **boolean** — If `false`, resets the 3D block to its original position.

### Returns

- **NA** — This method does not return a value.