---
title: Open File
---


### Open File on Startup
To open a file when starting the viewer, use the RxCore.setinitFile() method. Call this method before initializing the viewer.

### Syntax

```typescript
RxCore.setinitFile(fileurl)
```

### Parameters

- `fileurl`: **string** — URL address or full server-side Windows path to a file to open in the viewer. This can be either a string or an object with the following properties:
  - `fileurlobj.filename`: **string** — A string containing the URL or path of the file to open.
  - `fileurlobj.mime`: **string** — A string containing the MIME type for the type of file to open or null.
  - `fileurlobj.cacheid`: **string** — A string containing a unique name to use for the cache entry or null.
  - `fileurlobj.displayname`: **string** — A string that is used as the document file name or null.

### Returns

- **NA** — This method does not return a value.

### Open File when viewer is running

Use this method to open a file when the viewer is already running.

### Syntax

```typescript
RxCore.openFile(fileurl)
```

### Parameters

- `fileurl`: **string** — URL address or full server-side Windows path to a file to open in the viewer. This can be either a string or an object with the following properties:
  - `fileurlobj.filepath`: **string** — A string containing the URL or path of the file to open.
  - `fileurlobj.mime`: **string** — A string containing the MIME type for the type of file to open or null.
  - `fileurlobj.cacheid`: **string** — A string containing a unique name to use for the cache entry or null.
  - `fileurlobj.displayname`: **string** — A string that is used as the document file name or null.

### Returns

- **NA** — This method does not return a value.