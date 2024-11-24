---
title: Callback Connection Object
---

These objects enable interaction between HTML GUI elements and the RxCore functions library. To connect an object, define your JavaScript functions that will act as callback functions, then use the `connect` method to set the callback.

### Example

```javascript
RxCore.GUI_MarkupLayers.connect(function (markuplayers) {
  // Do stuff with markuplayers
});
```

The callback function can be used to populate HTML elements or perform other tasks.
