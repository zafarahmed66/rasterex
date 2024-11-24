This connection object displays information about a 3D part. The callback is triggered when the user interacts with the 3D model using the 3D select method.

### Callback Parameters
- **PartInfo**: `Part3DObject` with the following properties:
  ```javascript
  Part3DObject {
      name: string; // Name of part
      attributes: array of name, value pairs
  }
  ```