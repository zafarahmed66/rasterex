Uses an alignment array from a compare overlay to set the scale and offset of a drawing used to replace the generic floorplan thumbnail of a 3D model.

### Syntax

```typescript
RxCore.setnavigationScaleOffset(targetdocindex, floornum, alignarray)
```

### Parameters

- `targetdocindex`: **number** — Open file index of the 3D model.
- `floornum`: **number** — 3D model floor for which the scale and offset are set.
- `alignarray`: **`Array<object>`** — Array of alignment data created for the compare overlay.

### Returns

- **NA** — This method does not return a value.