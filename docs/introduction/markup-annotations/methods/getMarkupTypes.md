Returns a list of currently suppported markup types.

### Syntax

```typescript
RxCore.getMarkupTypes()
```

### Parameters

- **None**

### Returns

- **Array** — An array of markup type objects.

Each type object has these properties.


```typescript

   let markuptype = {
        label : string = "friendly name",
        typename : string =  'UNIQUE_NAME', 
        type : number, 
        subtype : number
    }
```
The returned type object can be used with method RxCore.getMarkupProperties(typeobj) to get the supported propeties for the markup type.

