Use this method to lock a specific markup in place based on its unique GUID. The markup cannot be moved or scaled until you unlock it.

### Syntax

```typescript
RxCore.lockMarkupbyGUID(GUID, onoff)
```

### Parameters

- `GUID`: **string** — Unique property uniqueID of a markup object.
- `onoff`: **boolean** — Set to `true` to lock, or `false` to unlock.

### Returns

- **NA** — This method does not return a value.