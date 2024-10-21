This callback is triggered when a new 3D view is created.

### Callback Parameters
- **Cameraobject**: 3D view object containing the following properties:
  ```javascript
  var Cameraobject = {
      position: // An array representation of a 3D camera object.
      name: // Name of the 3D View.
      tool: // The input tool that was active when the view was created.
      explodefactor: // Explode factor when the view was created.
      clipping: // Clipping planes when the view was created.
      thumbnail: // A canvas that holds the view thumbnail.
      width: // Width of the thumbnail.
      height: // Height of the thumbnail.
      image: // A full size image of the 3D view.
      selectedmesharray: // An array holding any 3D object associated with the view.
      attributes: // Array of attributes associated with the 3D view.
  };
  ```
- **fileActive**: Boolean indicating if the 3D model is the active document.


