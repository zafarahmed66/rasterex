Turns on/off the markup shape tool. This enables the user to add a markup shape of a given type and subtype using the mouse.

### Syntax

```typescript
RxCore.markUpShape(selected, type, subtype)
```

### Parameters

- `selected`: **boolean** — Set to `true` to enable the markup shape tool, or `false` to disable it.
- `type`: **number** — Markup shape type:
  - `0` = Rectangle
  - `1` = Ellipse
  - `2` = Cloud
  - `3` = Polygon
- `subtype`: **number** — Set to `1` for a rounded rectangle (only works with type `0`).

### Returns

- **NA** — This method does not return a value.