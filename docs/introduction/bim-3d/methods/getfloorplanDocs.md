The `GUI_floorlevel` callback event returns a floor elevation object. This method can be used to find an open drawing being used as a 2D navigation page for a floor in a 3D model.

### Syntax

```typescript
RxCore.getfloorplanDocs(floorelevationobj)
```

### Parameters

- `floorelevationobj`: **object** — Contains `floorindex: number` — The floor index from the 3D model for the current camera position.

### Returns

- **Page list** — An array of pages connected to the elevation. Returns empty if none.