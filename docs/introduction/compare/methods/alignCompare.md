Used to align two documents in an overlay comparison. This method takes an array of align objects returned by the `GUI_CompareMeasure` callback.

### Syntax

```typescript
RxCore.alignCompare(array)
```

### Parameters

- `array`: **Array** — An array of align objects. Each align object has the following structure:
  - `dist`: **number** — Distance for alignment.
  - `angle`: **number** — Angle for alignment.
  - `offset`: **object** — Offset for alignment, defined as:
    - `x`: **number** — X offset.
    - `y`: **number** — Y offset.
  - `pwidth`: **number** — Page width.

### Returns

- **NA** — This method does not return a value.
