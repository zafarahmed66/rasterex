Callback event that returns a list of open files that can be used to perform a compare overlay to create a replacement for the generic floorplan to use as a 2D navigation page. This callback is activated by using the `nav3Dreplacediag` method.

### Callback Parameters
- **OpenFileNames**: Array of open file objects.

```javascript
FileObject {
    index: integer; // Open file index.
    Type: integer; // Document type.
    isPDF: Boolean; // True if file is PDF.
    is3D: Boolean; // True if file is 3D.
    is2D: Boolean; // True if file is 2D.
    isImage: Boolean; // True if file is an image.
    state: integer; // Overlay compare state.
}
```