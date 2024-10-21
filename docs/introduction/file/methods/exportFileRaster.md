Exports the currently active drawing or document to a supported format like TIFF or PDF, specifying that the output file should contain raster.

### Syntax

```typescript
RxCore.exportFileRaster(consolidate, format, UPI, paperSize, markupFlag)
```

### Parameters

- `consolidate`: **boolean** — Set to `true` to export only consolidated markup.
- `format`: **string** — Export format (e.g., `"PDF"`).
- `UPI`: **string** — Set to `"0"` (reserved for future use).
- `paperSize`: **string** — Paper size for the export (e.g., `"A4"`).
- `markupFlag`: **number** — Indicates markup type: `"0"` for burned-in markup, `"1"` for native markup (PDF only).

### Returns

- **NA** — This method does not return a value.