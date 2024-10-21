Closes the currently active drawing or document. This is the preferred method for closing a document.

### Syntax

```typescript
RxCore.closeDocumentEx()
```

### Parameters

- **None**

### Returns

- **Promise** — A promise that resolves when the document is closed.

### Example

```typescript
RxCore.closeDocumentEx().then(onCloseFileSuccess);

function onCloseFileSuccess() {
  // Perform clean-up on file close.
}
```
