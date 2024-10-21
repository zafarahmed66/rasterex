This callback event is called when the undo or redo list is empty.

### Callback Parameters
This callback returns two Boolean values:
- **bundoempty**: true if there are no more undo actions.
- **bredoempty**: true if there are no more redo actions.

### Example:

```javascript
RxCore.GUI_UndoRedoEmpty.connect(function(bundoempty, bredoempty) {
    if (bundoempty) {
        console.log("undo list empty");
    }

    if (bredoempty) {
        console.log("redo list empty");
    }
});
```