Callback event that is triggered when a pan operation is performed. This event is used to synchronize pages opened in two different instances of RxCore.

###Callback Parameters

- **X**: Offset left.
- **Y**: Offset top.
- **Pagerect**: Object containing the dimensions and position of the page.

### JavaScript

```javascript
var pagerect = {
    x: // upper left position of page,
    y: // upper left position of page,
    w: // width of page,
    h: // height of page,
};
```
