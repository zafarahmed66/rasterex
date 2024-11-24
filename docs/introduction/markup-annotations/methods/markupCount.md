Use this method to turn on/off the markup count tool. This enables the user to count objects using the markup counter.

### Syntax

```typescript
RxCore.markupCount(selected, shape)
```

### Parameters

- `selected`: **boolean** — Set to `true` to enable the markup count tool, or `false` to disable it.
- `shape`: **number** — Number corresponding to a counter shape:
  - `0` = Circle
  - `1` = Square
  - `2` = Triangle
  - `3` = Diamond
  - `4` = Star
  - `5` = Cross
  - `6` = Checkmark
  - `7` = Diagonal Cross

### Returns

- **NA** — This method does not return a value.