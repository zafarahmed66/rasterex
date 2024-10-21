Used in combination with pageLock and the GUI_ZoomUpdate callback event to synchronize the zoom in two instances of RxCore.

### Syntax

```typescript
RxCore.zoomPageUpdate(zoomparams, type)
```

### Parameters

- `zoomparams`: **object** — Zoom operation parameters returned by callback function.
- `type`: **number** — Type of zoom operation:
    - `0`: Zoom in
    - `1`: Zoom out
    - `2`: Zoom all
    - `3`: Zoom window
    - `4`: Zoom width
    - `5`: Zoom height

### Returns

- **NA** — This method does not return a value.