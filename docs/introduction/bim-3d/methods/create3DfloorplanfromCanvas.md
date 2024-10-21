## create3DfloorplanfromCanvas

Creates a floor plan plane from a canvas that can be inserted into a 3D model. Obtain the canvas using the `get3dFloorplanCanvas` method. The canvas is returned using the `GUI_FloorplanCanvas` callback.

### Syntax

```typescript
RxCore.create3DfloorplanfromCanvas(canvas, floornum, alignarray)
```

### Parameters

- `canvas`: **HTMLCanvasElement** — An HTML5 canvas to be used as the image source.
- `floornum`: **number** — The floor index of the 3D model where the floorplan plane will be added.
- `alignarray`: **`Array<number>`** — An array of alignment data used when creating a compare overlay.

### Returns

- **NA** — This method does not return a value.
