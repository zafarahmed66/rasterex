Callback that returns a rectangle object for the selected area.

###Callback Parameters

- **Rect**: Rectangle object with `x`, `y`, `w`, `h` parameters indicating the start point and the width and height of the rectangle in document coordinates.

### Example:

```javascript
RxCore.GUI_PrintRect.connect(function (rect) {
  var paperSize = {
    width: width,
    height: height,
    printrect: rect,
    mode: paper_orientation.mode,
  };

  RxCore.printSizeEx("printcanvas.htm", paperSize);
});
```
