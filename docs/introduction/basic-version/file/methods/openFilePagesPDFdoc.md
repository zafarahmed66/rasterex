Use this method to open a PDF document limited to a specified page range but using an existing PDF document object retrieved from an already open PDF file using `RxCore.getPDFDocobj()`.

### Syntax

```typescript
RxCore.openFilePagesPDFdoc(fileurl, pdfdoc, pages)
```

### Parameters

- `fileurl`: **string** — URL address or full server-side Windows path to the PDF file to open in the viewer.
- `pdfdoc`: **object** — PDF document object retrieved using `RxCore.getPDFDocobj()`.
- `pages`: **`Array<number>`** — Array of page numbers to open.

### Returns

- **NA** — This method does not return a value.
