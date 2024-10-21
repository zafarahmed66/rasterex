This connection object lists parts in a 3D file. It is triggered when the user interacts with the 3D model using the 3D select method or opens a 3D file with parts.

### Additional Methods
- **getHeight()**: Returns canvas height. Can be used to set the height of an HTML GUI container.
- **setlistHeight(height)**: Sets the height of each list element.

### Properties
- **listheight**: Number; height of a list element.
- **isupdate**: Boolean; true if a part is selected.
- **scrollto**: Number; A list position value can be used with `scrollTop` to change the list position.

### Callback Parameters
- **Parts**: Array of `Block3DObject` with the following properties:
  ```javascript
  Block3DObject {
      name: string; // Name of part
      index: number; // Part index
      state: Boolean; // Display on/off
      level: number; // List level
      position: number; // Position in the GUI display element in pixels.
      selected: Boolean; // Selected on/off.
  }
  ```