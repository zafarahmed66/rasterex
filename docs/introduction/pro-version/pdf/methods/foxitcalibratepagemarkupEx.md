Used with Foxit integration to set the scale and position of Rasterex markup.

### Syntax

```typescript
RxCore.foxitcalibratepagemarkupEx(pagepos, scale, pagenumber)
```

### Parameters

- `pagepos`: **object** — Page position object.
- `scale`: **number** — Page scale returned from the Foxit `getScale()` method on the page render object.
- `pagenumber`: **number** — Page number (0-indexed).

### Returns

- **NA** — This method does not return a value.