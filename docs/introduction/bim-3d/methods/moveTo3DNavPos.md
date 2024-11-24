Used in combination with the `GUI_3DNavPosition` callback event. When clicking on a 2D drawing set up as a navigation page for a 3D model, this method moves the camera to the location in the 3D model based on the position selected in the 2D drawing.

### Syntax

```typescript
RxCore.moveTo3DNavPos(campos)
```

### Parameters

- `campos`: **object** — Calculated position returned from the `GUI_3DNavPosition` callback event.

### Returns

- **NA** — This method does not return a value.