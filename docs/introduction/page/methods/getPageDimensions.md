Returns a page dimensions object that holds the dimensions of a page specified by a 0-indexed page number.

### Syntax

```typescript
RxCore.getPageDimensions(pagenumber)
```

### Parameters

- `pagenumber`: **number** — 0-indexed page number for which to get dimensions.

### Returns

- **pgdim** — A page dimensions object containing:
  
```typescript
pgdim.x // page current x position
pgdim.y // page current y position
pgdim.w // page current width
pgdim.h // page current height
pgdim.origw // page original width
pgdim.origh // page original height
pgdim.scale // current display scale
pgdim.dpi // page DPI
pgdim.rotation // page current rotation
```