Returns an object with the properties `width` and `height` holding the values for the RxView360 canvas display area.

### Syntax

```typescript
RxCore.getLayout()
```

### Parameters

- **None**

### Returns

- **Layout object** — An object containing:

```typescript
var defaultLayout = {
    offsetWidth: number,
    offsetHeight: number,
    absolute: boolean
};

// offsetWidth: If absolute is false, this is the offset from the left of the main document in pixels.
// offsetHeight: If absolute is false, this is the offset from the top of the main document in pixels.
// absolute: A boolean value that, when true, allows the use of a div with absolute values. 
// The width and height are the dimensions of the div rather than the offset.
```