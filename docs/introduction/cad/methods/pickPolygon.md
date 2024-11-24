Use this method to pick a block in a vector drawing that has selectable blocks. A callback event called `GUI_2DBlockID` is triggered with a callback function to get the block ID(s).

### Syntax

```typescript
RxCore.pickPolygon(selected, multi)
```

### Parameters

- `selected`: **boolean** — Set to `true` to enable the method, or `false` to disable it.
- `multi`: **boolean** — Set to `true` to allow selection of multiple blocks, or `false` to allow selection of a single block.

### Returns

- **NA** — This method does not return a value.