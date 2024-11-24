Used to transfer mouse coordinates to move the camera in the 3D model to the corresponding location when clicking in a 2D drawing set up as a 3D navigation page. This method works in conjunction with the `GUI_3DNavPosition` callback event.

### Syntax

```typescript
RxCore.getCamNavPosition(targetdocindex, pagenum, modelinfo, mousePos)
```

### Parameters

- `targetdocindex`: **number** — Open files index.
- `pagenum`: **number** — Page index.
- `modelinfo`: **object** — Contains model measurement unit and model box center.
- `mousePos`: **object** — Mouse position.

### Returns

- **Campos** — Camera position.