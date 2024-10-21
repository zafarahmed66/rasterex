Connection callback that is called when RxView360 experiences a state change. This currently applies to file load and page change. (For page change, now use the new `GUI_Page` callback).

### Callback Parameters
- **stateobj**: Object containing state attributes.

### JavaScript
```javascript
stateobj = {
    isPDF: Boolean;   // true if the file is a PDF
    is3D: Boolean;    // true if the file is a 3D model
    is2D: Boolean;    // true if the file is a 2D document
    numpages: number; // Total number of pages
    currentpage: number; // Currently active page
}
```