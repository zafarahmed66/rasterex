Turns on/off the markup dimension tool. This enables the user to draw a markup dimension line of the specified type using the mouse.

### Syntax

```typescript
RxCore.markUpDimension(selected, type)
```

### Parameters

- `selected`: **boolean** — Set to `true` to enable the markup dimension tool, or `false` to disable it.
- `type`: **number** — Type of dimension line:
  - `0` = Bar end points
  - `1` = Bar and arrow end points

### Returns

- **NA** — This method does not return a value.