Returns a type of markup using the type and subtype

### Syntax

```typescript
RxCore.getMarkupType(type, subtype)
```

### Parameters

- `type`: **number** — A number between 0-13 signifying a markup main type.
- `subtype`: **number** — A number signifying a markup sub type.

### Returns

- **Object** — An object with strings describing the markup type.

```typescript

   let markuptype = {
        label : string = "friendly name",
        type : string =  'UNIQUE_NAME'
    }
```
