Callback similar to `GUI_Ready` but called when Foxit is ready for interaction. Use this to perform tasks when the page loads, like opening a file on startup.

### Callback Parameters
- **Initdoc**: Object containing initialization data.

#### JavaScript Example
```javascript
Initdoc {
    url: string; // URL to a file to open on startup
    open: Boolean; // true if a file to open is available
    custom: Boolean; // true if openFileCustom is to be used
}
```