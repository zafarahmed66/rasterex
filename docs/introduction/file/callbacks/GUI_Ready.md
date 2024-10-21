Callback event called when the RxCore is ready for interaction. Use this to perform tasks when the page loads.

###Callback Parameters

- **Initdoc**: Object containing initialization document details.

### JavaScript

```javascript
Initdoc {
    url: string; // URL to a file to open on startup.
    open: Boolean; // true if a file to open is available.
    custom: Boolean; // true if openFileCustom is to be used.
}
```
