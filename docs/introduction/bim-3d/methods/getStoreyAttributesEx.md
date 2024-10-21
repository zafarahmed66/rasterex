Returns specific attributes of a 3D model storey.

### Syntax

```typescript
RxCore.getStoreyAttributesEx(storeyname, expr, useregexp)
```

### Parameters

- `storeyname`: **string** — The name of the storey.
- `expr`: **string** — Search expression.
- `useregexp`: **boolean** — Set to `true` to use regular expression matching, or `false` for string comparison.

### Returns

- **Attributes** — An array of mesh object attributes.