Returns an array of available fill styles.

### Syntax

```typescript
RxCore.getHatches()
```

### Parameters

- **None**

### Returns

- **Array of fill style objects** — Each fill style object is structured as follows:

```typescript
Fillstyle = {
    type: 'hatch',
    name: name,
    ptrn: Hatchimage,
    tilesize: size,
    color: color,
    description: szdescript,
    inuse: false
};
```