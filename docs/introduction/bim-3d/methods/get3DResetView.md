Returns an image of the 3D model's initial view.

### Syntax

```typescript
RxCore.get3DResetView()
```

### Parameters

- **None**

### Returns

- **object** — 

```typescript

        position: pageobject.camera.matrix.toArray(),  
        name: 'resetView', 
        tool: 'orbitControl', 
        explodefactor : 0, 
        thumbnail: null, //Base64 encoded image data or null if not set.
        width: 0, 
        height: 0, 
        image: document.createElement('img'), 
        selectedmesharray : [],
        attributes : []
```
