Used to align two documents in an overlay comparison. First time called the alignarray parameter should be empty.
An array of align values are returned by the `GUI_CompareMeasure` callback.
Second time this is called for the foreground file the returned value from the `GUI_CompareMeasure` callback should be passed.

See [GUI_CompareMeasure](../callbacks/GUI_CompareMeasure) for details on align array structure.

### Syntax

```typescript
RxCore.alignCompare(alignarray)
```

### Parameters

- `alignarray`: **Array** — Either empty array, or values returned from the `GUI_CompareMeasure` callback.



### Returns

- **NA** — This method does not return a value.
