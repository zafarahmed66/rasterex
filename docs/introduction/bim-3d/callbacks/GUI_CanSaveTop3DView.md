This event is called when a reset 3D View creation can be done.

### Callback Parameters
The callback function takes no parameters.

#### JavaScript Example
```javascript
RxCore.GUI_CanSaveTop3DView.connect(function() {
    RxCore.saveTop3DCamera();
});
```