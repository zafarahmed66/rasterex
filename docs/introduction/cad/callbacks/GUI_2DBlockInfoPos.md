This connection callback object returns an array of attributes for a selected vector block when the mouse moves over a drawing. It must be enabled using `RxCore.blockhoverevent(true)`.

### Callback Parameters
- **partlist**: Array of attribute name-value pairs
- **Screenpos**: Mouse x, y position
- **Pathindex**: Path index that can be used with methods like `addHoverforBlock`