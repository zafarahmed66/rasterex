## getCameraView

Returns a 3D view object by name.

### Syntax

```typescript
RxCore.getCameraView(name)
```

### Parameters

- `name`: **string** — Name of the 3D view.

### Returns

- **3D view object** — An object containing properties related to the 3D view, structured as follows:

```typescript
var camobj = {
    position: // position of the view,
    name: // name of the view,
    tool: // "walkthrough" or "orbit",
    explodefactor: // exploding factor,
    clipping: // clipping if any,
    width: // width of the view,
    height: // height of the view,
    image: // full image of the view,
    selectedmesharray: // the 3D mesh,
    attributes: // any associated attributes
};
```

### Example

```typescript
// Get the view full image
var digimage = RxCore.getCameraView(viewname).image;
```