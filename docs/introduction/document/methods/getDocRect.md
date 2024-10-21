Used in combination with the `GUI_PrintRect` callback. This callback returns a rectangle in document units that can be added to the `paperSize` object included with the `RxCore.printSizeEx` method. This allows a selection to be printed instead of the entire page.

### Syntax

```typescript
RxCore.getDocRect(selected)
```

### Parameters

- `selected`: **boolean** — Set to `true` to activate the method; set to `false` to use the default input tool.

### Returns

- **NA** — This method does not return a value.