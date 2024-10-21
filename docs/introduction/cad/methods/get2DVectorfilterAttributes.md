Returns an array of vector block attributes from a vector file with blocks. You can use `attributeMask` to return a set of attributes based on a search expression.

### Syntax

```typescript
RxCore.get2DVectorfilterAttributes()
```

### Parameters

- **None**

### Returns

- **`Array<Attribute object>**` — An array of block attributes.

#### Example Attribute Object

```typescript
var AttributeObject = {
    value: szatrtvalue,
    name: szatrrname,
    blockref: readstate.blockpart
};
```