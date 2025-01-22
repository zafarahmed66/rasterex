Used to rotate a single thumbnail by page index. Works on the active document. The thumbnail is returned with 
the `GUI_pagethumb` callback event.

### Syntax

```typescript
RXCore.rotateThumbnail(pageIndex, degree)
```

### Parameters

- `pageindex`: **number** — 0-indexed page index.
- `degree`: **number** — the rotation angle in degrees supported values are 0, 90, 180 and 270.

### Returns

- **NA** — This method does not return a value.