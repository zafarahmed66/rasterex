When using a markup drawing tool that supports setting the angle and length of a line, this method can override the mouse input to set the angle and length using parameters. Values are in degrees and the current active measurement unit. This method works in combination with the `GUI_markupDrawParams` event callback that returns the values set or triggers `GUI_markupParamsError` if the values exceed drawing boundaries.

### Syntax

```typescript
RxCore.applyAngleLength(angle, length, bAdvance)
```

### Parameters

- `angle`: **number** — Direction to draw the line in the current active measurement unit, expressed in degrees.
- `length`: **number** — Length of the line in the current active measurement unit (e.g., mm).
- `bAdvance`: **boolean** — If `true`, it will continue segments, making the active segment the next two points. If `false`, the active segment will remain the current segment.

### Returns

- **NA** — This method does not return a value.
