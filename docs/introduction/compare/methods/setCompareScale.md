Set compare alignment using an array containing scaling objects returned by the `GUI_CompareMeasure` callback.

### Syntax

```typescript
RxCore.setCompareScale(scalearray)
```

### Parameters

- `scalearray`: **`Array<object>`** — Array of scale objects. Each scale object includes:
  - `dist`: **number** — Distance.
  - `angle`: **number** — Angle.
  - `offset`: **object** — Offset in \{x, y\} coordinates.
  - `pwidth`: **number** — Page width.

### Returns

- **NA** — This method does not return a value.