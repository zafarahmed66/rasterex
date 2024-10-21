Creates server content without actually opening the file. A callback event `GUI_CreationComplete` returns the XML file for the content once the process is complete.

### Syntax

```typescript
RxCore.createServerContent(fileurl)
```

### Parameters

- `fileurl`: **string | object** — URL or full server-side Windows path to a file to open in the viewer. If an object is provided, it should have the following properties:
  - `fileurlobj.filepath`: **string** — URL or path of the file to open.
  - `fileurlobj.mime`: **string** — MIME type for the file to open or `null`.
  - `fileurlobj.cacheid`: **string** — Unique name for the cache entry or `null`.
  - `fileurlobj.displayname`: **string** — Display name for the document file or `null`.

### Returns

- **NA** — This method does not return a value.