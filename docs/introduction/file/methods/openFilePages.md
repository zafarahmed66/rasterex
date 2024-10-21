Opens a document limited to a specified page range. This method does not work for PDF files, as the Foxit library always loads all pages in a document.

### Syntax

```typescript
RxCore.openFilePages(fileurl, pages)
```

### Parameters

- `fileurl`: **string** — URL address or full server-side Windows path to the file to open in the viewer.
- `pages`: **array** — Array of page numbers to open.

### Returns

- **NA** — This method does not return a value.