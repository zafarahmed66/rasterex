This connection callback object lists information about the currently selected 3D markup object. It is triggered when the user interacts with the 3D model using the 3D select markup method, deletes a 3D markup, or creates a new 3D markup.

### Callback Parameters
- **MarkupInfo**: Object containing attribute name-value pairs.
- **Reason**: Object with properties indicating the action taken:
  - **Created**: Boolean
  - **Modified**: Boolean
  - **Deleted**: Boolean