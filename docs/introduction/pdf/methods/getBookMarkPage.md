Returns the page number that matches the outline destination object reference.

### Syntax

```typescript
RxCore.getBookMarkPage(destref)
```

### Parameters

- `destref`: **object** — A destination reference object extracted from a PDF outline object returned by the `RxCore.GUI.PDFBookmarks` callback.

### Returns

- **number** — The referenced page number of the PDF document.