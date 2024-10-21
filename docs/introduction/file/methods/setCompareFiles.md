Used in combination with the compareFiles dialog to set the state of a file in a thumbnail compare composite.

### Syntax

```typescript
RxCore.setCompareFiles(index, state)
```

### Parameters

- `index`: **number** — Index number reference to the file in the list of open files that can be used in a compare/overlay composite.
- `state`: **number** — Role of the referenced file:
  - `0`: Unused.
  - `1`: Background.
  - `2`: Overlay.

### Returns

- **NA** — This method does not return a value.