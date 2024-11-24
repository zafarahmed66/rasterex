Returns an array of attributes for a specified block identified by `blockid`.

### Syntax

```typescript
RxCore.getBlockAttributes(blockid)
```

### Parameters

- `blockid`: **number** — ID of the block.

### Returns

- **`Array<Attribute>`** — An array of attribute objects, where each object is structured as follows:

```typescript
Attribute = {
    name: 'Attribute name',
    value: 'Attribute value',
    blockref: 'Block reference'
};
```