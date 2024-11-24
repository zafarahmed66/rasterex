Callback returns an input object with information on input from mouse and keyboard.

### Callback Parameters
- **Inputobj**: Object that contains information on the event origin.

#### JavaScript Example
```javascript
inputobj = {
    mousepos: mousePos, // Position when mouse is clicked.
    mousebutton: ev.button, // Which mouse button is clicked.
    dblclick: false, // True if double click is used
    key: tool.curkey, // Keyboard key pressed.
    tool: tool.name // Current tool either markupedit (default) or pickpolygon
};
```