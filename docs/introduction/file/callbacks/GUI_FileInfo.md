Connection object that is called when the `RxCore.FileInfoDialog` method is executed.

### Additional Method
- **getUnitlabel()**: Returns the current measurement unit label (e.g., mm, cm, or inch).

### Callback Parameters
- **FileInformation**: Object containing file information.

#### JavaScript Example
```javascript
FileInformation {
    FileFormat: string; // Current file format
    FileName: string; // File name
    FileSize: string; // File size
    Compression: string; // Compression
    DPI: number; // File DPI
    Pages: number; // Number of pages
    ImageWidth: number; // Document width
    imagewidthunits: number; // Unit for document width
    ImageHeight: number; // Document height
    imageheightunits: number; // Unit for document height
    OffsetX: number; // File internal offset x direction
    OffsetY: number; // File internal offset y direction
    OriginalScale: number; // File internal scale
}