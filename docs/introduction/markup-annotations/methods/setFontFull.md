Sets the current markup font using font name, font size, font style bold, font style italic. Use instead of setting each font property separately.

### Syntax

```typescript
RxCore.setFontFull(fontobject)
```

### Parameters

- `fontobject`: **object** — Object with the following properties:
  - `font`: **string** — Font name.
  - `size`: **number** — Height in points.
  - `style.bold`: **boolean** — `true` for bold, `false` otherwise.
  - `style.italic`: **boolean** — `true` for italic, `false` otherwise.

### Returns

- **NA** — This method does not return a value.