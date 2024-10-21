Activates this method using alignment data and a floor number to return a canvas in the `GUI_FloorplanCanvas` callback. Use the canvas to insert a floorplan plane into the 3D drawing with the `create3DfloorplanfromCanvas` method.

### Syntax

```typescript
RxCore.get3DFloorplanCanvas(floornum, alignarray)
```

### Parameters

- `floornum`: **number** — Number index for the floor plan.
- `alignarray`: **`Array<number>`** — An array of alignment data created with a compare/overlay.

### Returns

- **NA** — The `GUI_FloorplanCanvas` callback returns the canvas.