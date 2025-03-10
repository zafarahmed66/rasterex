Starts the compare alignment function to get the scale and offset for compare/overlay on a file, even if the file is not currently part of a compare/overlay.

An array of align values are returned by the `GUI_CompareMeasure` callback.


See [GUI_CompareMeasure](../callbacks/GUI_CompareMeasure) for details on align array structure.

### Syntax

```typescript
RxCore.compareMeasure(index)
```

### Parameters

- `index`: **number** — Specifies the file for alignment, where `0` is the background page and `1` is the overlay page.

### Returns

- **NA** — This method does not return a value.