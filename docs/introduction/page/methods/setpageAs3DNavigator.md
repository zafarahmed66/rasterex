Makes an open drawing into a 2D navigation page for an open 3D model.

### Syntax

```typescript
RxCore.setpageAs3DNavigator(docpage, floorplanobjects)
```

### Parameters

- `docpage`: **object** — Object with properties:
  - `docindex`: **number** — Open file index.
  - `pageindex`: **number** — Page index to use as a 3D navigation page.
  - `floorindex`: **number** — The model floor it should be used for.
- `floorplanobjects`: **`Array<object>`** — Array of floorplan objects from the 3D model. Use `RxCore.getFloorplanList` to get the floorplan object list.

### Returns

- **NA** — This method does not return a value.