Adds a custom attribute to a 3D view that is stored with the 3D markup data view.

### Syntax

```typescript
RxCore.add3DViewAttribute(atName, atValue, viewname)
```

### Parameters

- `atName`: **string** — Name of the custom attribute
- `atValue`: **string** — Value of the custom attribute
- `viewname`: **string** — Name of the view. This can be extracted from any 3D annotation as the `name` property of the annotation

### Returns

- **NA** — This method does not return a value.

### Example

```typescript
RxCore.add3DViewAttribute("description", "my description", annotitem.name);
```
