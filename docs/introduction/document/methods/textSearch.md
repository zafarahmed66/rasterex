Use this method to initiate and perform text searches. Call `RxCore.textsearchend` to terminate text search. Search results are returned using the `GUI_NumMathces` callback event.

### Syntax

```typescript
RxCore.textSearch(text, direction, casesens)
```

### Parameters

- `text`: **string** — String to search for.
- `direction`: **boolean** — Search direction. `true` = forward, `false` = backward.
- `casesens`: **boolean** — Case sensitive. `true` for case-sensitive search, `false` for case-insensitive search.

### Returns

- **NA** — This method does not return a value.