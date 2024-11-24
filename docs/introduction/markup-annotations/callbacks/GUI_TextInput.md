Connection callback used to connect markup text to an HTML input control.

### Additional Methods
- **getText()**: Returns the text of the selected text markup.
- **setText(text)**: Set the text of the selected text markup.

### Callback Parameters
- **textrect**: A rectangle object indicating the position and size of the markup text box.
- **operation**: Object with operation status values.

```javascript
operation = {
    start: false,
    create: false,
    edit: false,
    save: false
};
```