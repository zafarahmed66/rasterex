Connection object that is called when right-clicking on the display canvas, which forwards the context menu event.

### Callback Parameters
- **evt**: DOM event object for the display canvas.

#### Example
```javascript
function GUI_ContextMenuEvt() {
    RxCore.GUI_ContextMenuEvt.connect(onContextMenu);
    RxCore.getCanvasContextMenuEvent();

    function onContextMenu(evt) {
        evt.preventDefault();
        // Perform operations on context menu here.
    }

    return false;
}
```