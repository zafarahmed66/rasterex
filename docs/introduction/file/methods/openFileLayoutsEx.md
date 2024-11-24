Opens a CAD drawing limited to a specified layout range, similar to `openFileLayouts`. If the opening fails due to a download callback trigger (which allows the UI download progress to be hidden), the GUI download progress is hidden.

### Syntax

```typescript
RxCore.openFileLayoutsEx(fileurl, layouts)
```

### Parameters

- `fileurl`: **string** — URL address or full server-side Windows path to the file to open in the viewer.
- `layouts`: **array** — Array of layout numbers to open.

### Returns

- **NA** — This method does not return a value.