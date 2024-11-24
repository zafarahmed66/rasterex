Returns an object containing properties of the currently active drawing or document.

### Syntax

```typescript
RxCore.getdocInfo()
```

### Parameters

- **None**

### Returns

- **docinfo** — An object with the following properties:

```typescript
{
    iscompare: Boolean,
    isPDF: Boolean,
    is3D: Boolean,
    is2D: Boolean,
    numpages: number,
    currentpage: number
}
```