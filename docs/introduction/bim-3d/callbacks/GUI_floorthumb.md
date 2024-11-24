Callback event that is called when a generic floorplan image is loaded.

### Callback Parameters
- **Index**: Thumbnail index.
- **Thumbnail**: Thumbnail object.

#### JavaScript Example
```javascript
Thumbnail {
    BScale: double; // Background scale
    Elevation: integer; // Elevation of floor in model units.
    Name: string; // Floor name
    RScale: double; // Replacement scale
    SRC: string; // URL to image file
    Scale: double; // Scale
    alignarray: Array; // Array of alignment for replacement file.
    canvas: html Canvas; // HTML canvas for the thumbnail
    ctx: html Canvas context; // Canvas context for the thumbnail
    height: integer; // Image height
    image: html img source; // Image source
    index: integer; // Thumbnail index
    offsetX: integer; // Replacement offset x
    offsetY: integer; // Replacement offset y
    originalHeight: integer; // Original height
    originalWidth: integer; // Original width
    replaced: Boolean; // true if replaced
    thumbcanvas: html Canvas; // Canvas for the thumbnail
    thumbctx: html Canvas context; // Context for the thumbnail canvas
    thumbheight: integer; // Thumbnail height
    thumbwidth: integer; // Thumbnail width
    width: integer; // Image width
}
```