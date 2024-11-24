Callback event that is triggered when a Zoom operation is performed. Used to synchronize pages opened in two different instances of RxCore.

### Callback Parameters
- **Zoomparams**: Zoom operation parameters.

These can be used directly with the `zoomPageUpdate` method.

```javascript
Zoomparams {
    Type: 0; // Zoom in
    Type: 1; // Zoom out
    Type: 2; // Zoom window
    Type: 3; // Zoom all
    Type: 4; // Zoom width
    Type: 5; // Zoom height
}
```