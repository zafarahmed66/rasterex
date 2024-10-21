This callback returns state information when the visibility of a 3D part is changed.

### Callback Parameters
- **PartInfo**: `Part3DObject` containing:
  ```javascript
  Part3DObject {
      name: string; // Name of part
      visible: Boolean; // State of visibility
  }
  ```

### Example
```javascript
GUI_3DPartInfo.connect(function(partinfo) {
    if (partinfo.visible) {
        console.log("part is visible");
    } else {
        console.log("part is hidden");
    }
});
```