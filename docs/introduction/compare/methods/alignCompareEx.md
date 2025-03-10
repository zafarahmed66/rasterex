Used to align two documents in an overlay comparison. First time called the alignarray parameter should be empty.
An array of align values are returned by the `GUI_CompareMeasure` callback.
Second time this is called for the foreground file the returned value from the `GUI_CompareMeasure` callback should be passed.

See [GUI_CompareMeasure](../callbacks/GUI_CompareMeasure) for details on align array structure.


Fileindex is returned by the `GUI_compareLoadComplete` callback.



### Syntax

```typescript
RxCore.alignCompareEx(alignarray, fileindex)
```

### Parameters

- `alignarray`: **Array** — An array of align objects or empty array.
- `fileindex`: **number** — A number identifying the open file that the alignment is to be applied to:
### Returns

- **NA** — This method does not return a value.
