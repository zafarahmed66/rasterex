---
title: Initialize Viewer
---

### Initialize Viewer
To initialize the web viewer with the correct layout settings:

```typescript
RxCore.initialize(layout, divid, class);
```
- `layout`: Object containing offsetWidth offsetHeight, and absolute properties.
- `divid`: ID of the div where the viewer will be attached (optional).
- `class`: CSS class to style the viewer (optional).


---

### The RxCore div

Rasterex Web SDK uses a div to set up the view where the canvases used for display are placed.
By default the id for this div should be set as "rxcontainer".

If you want to use another id or need multiple view areas you can use the divid parameter to specify the div to use.

```html

<body>

    <div id="rxcontainer">
    </div>

</body>

```

Layout can be set up in two different modes. 

### Relative mode

In this mode the absolute value is set to false. The offsetWidth and OffsetHeight values are relative to the top and left position of the document.

Example :

```typescript

   var Layout = {
        offsetWidth: 10,
        offsetHeight: 10,
        absolute: false
    };

```

In this case the position of the canvas will start 10 pixels from the top and 10 pixels from the left position of the web document window.

### Absolute mode

In this mode the absolute value is set to true. The offsetWidth and OffsetHeight values then controls the width and height of the canvas area controlled by the viewer.

Example :

```typescript

   var Layout = {
        offsetWidth: 800,
        offsetHeight: 600,
        absolute: true
    };
```

In this case the position of the canvas will have to be specified using stylesheet values for the div used by RxCore to hold the canvases. The offsetWidth and offsetHeight is used to set the size of the canvas area.

See a full example of implementation here.

[HTML exmaple](../basic-version/getting-started/how-to-add-to-html)


