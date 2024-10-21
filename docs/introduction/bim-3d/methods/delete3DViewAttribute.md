Removes a custom attribute from a 3D view.

### Syntax

```typescript
RxCore.delete3DViewAttribute(szname, viewname)
```

### Parameters

- `szName`: **string** — Name of the custom attribute to remove.
- `viewname`: **string** — Name of the view, which can be extracted from any 3D annotation as the `name` property.

### Returns

- **NA** — This method does not return a value.

### Example

```typescript
RxCore.delete3DViewAttribute("description", annotitem.name);
// annotitem is a valid 3D annotation object.
```