Callback event that triggers when a file is loaded using `open3DFloorplanPage`.

### Callback Parameters
- **FileName**: String filename.
- **Active**: Boolean, true if the file is active.
- **Docpage**: Object representing the Docpage.

#### JavaScript Example
```javascript
docpage {
    docindex: integer; // Open file index
    pageindex: integer; // Page index
    floorindex: integer; // 3D model floor index
}
```