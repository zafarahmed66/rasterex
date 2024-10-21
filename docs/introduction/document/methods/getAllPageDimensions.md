Returns an array of page dimension objects for all pages in a document.

### Syntax

```typescript
RxCore.getAllPageDimensions()
```

### Parameters

- **None**

### Returns

- **`Array<pgdim>`** — An array of page dimension objects, where each object contains:
  - `pgdim.x`: **number** — Current x position of the page.
  - `pgdim.y`: **number** — Current y position of the page.
  - `pgdim.w`: **number** — Current width of the page.
  - `pgdim.h`: **number** — Current height of the page.
  - `pgdim.origw`: **number** — Original width of the page.
  - `pgdim.origh`: **number** — Original height of the page.
  - `pgdim.scale`: **number** — Current display scale.
  - `pgdim.dpi`: **number** — DPI of the page.
  - `pgdim.rotation`: **number** — Current rotation of the page.
