This callback event returns data when a user clicks on a 2D navigation drawing. It includes the mouse position.

### Callback Parameters
- **Navigationpos**: Navigation Object containing the following properties:
  ```javascript
  NavigationObject {
      docindex: // Open file index,
      pageindex: // Page index,
      cameraPos: // Mouse position object
  }
  ```