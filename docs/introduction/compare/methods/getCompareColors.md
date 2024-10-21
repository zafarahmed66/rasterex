Returns the current Compare overlay and background colors.

### Syntax

```typescript
RxCore.getCompareColors()
```

### Parameters

- **None**

### Returns

- **comparecolors** — An object containing the overlay colors, structured as follows:

```typescript
var comparecolors = {
    bg: overlayBGColor,
    fg: overlayFGColor
};
```