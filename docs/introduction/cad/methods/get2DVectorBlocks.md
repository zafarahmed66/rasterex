Returns an array of Block objects from a vector file containing blocks.

### Syntax

```typescript
RxCore.get2DVectorBlocks()
```

### Parameters

- **None**

### Returns

- **`Array<Block object>`** — An array of block objects with the following properties:
  - `index`: Index of the block.
  - `name`: Name of the block.
  - `state`: Current on/off state.
  - `defaultstate`: Default on/off state.
  - `defaultcolor`: Default block color.
  - `color`: Current block color.
  - `overridecolor`: Allow block color override (true/false).
  - `selected`: Block selected state (true/false).