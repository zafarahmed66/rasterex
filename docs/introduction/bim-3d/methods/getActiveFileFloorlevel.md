## getActiveFileFloorlevel

Retrieves the floor level for a drawing set up as a 2D navigation floor plan for a 3D model.

### Syntax

```typescript
RxCore.getActiveFileFloorlevel()
```

### Parameters

- **None**

### Returns

- **object** — An object containing:
  - `floorindex`: **number** — Index for the floor plan.
  - `replaced`: **boolean** — Indicates if the drawing is replaced (`true` if replaced, `false` if not).