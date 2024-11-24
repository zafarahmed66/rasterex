Sets the transparency of a mesh in a 3D model by mesh ID.

### Syntax

```typescript
RxCore.set3DBlockTransparency(blockid, value, override)
```

### Parameters

- `blockid`: **string** — Mesh ID for the 3D block.
- `value`: **number** — Transparency using a value between `0-1` where `1` is fully opaque.
- `override`: **boolean** — If `false`, resets the 3D block to its original transparency.

### Returns

- **NA** — This method does not return a value.