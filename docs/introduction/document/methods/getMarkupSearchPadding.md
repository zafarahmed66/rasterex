Gets an internal variable that can be used with `RxCore.markupTextSearch` to control the markup zoom level.

### Syntax

```typescript
RxCore.getMarkupSearchPadding()
```

### Parameters

- **None**

### Returns

- **padding** — An object containing the following properties:
  - `x`: **int** — Padding in the x-direction.
  - `y`: **int** — Padding in the y-direction.
  - `w`: **int** — Width padding.
  - `h`: **int** — Height padding.

### Example

```typescript
var padding = RxCore.getMarkupSearchPadding();
```
