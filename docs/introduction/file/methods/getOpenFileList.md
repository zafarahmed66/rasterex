Returns a list of open files.

### Syntax

```typescript
RxCore.getOpenFileList()
```

### Parameters

- **None**

### Returns

- **openFilesList** — An array of objects with the current properties:
  - `Index`: Index of the file.
  - `name`: File name.
  - `isActive`: **boolean** — `true` if the file is currently active; otherwise, `false`.