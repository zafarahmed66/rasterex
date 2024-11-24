Connection callback that is called when a file is loaded. Used to display page image thumbnails.

### Callback Parameters

- **Thumbnail**: An object containing thumbnail information.

### JavaScript

```javascript
Thumbnail {
    thumbnail: canvas element holding the complete thumbnail,
    Image: html image of the thumbnail,
    canvasSource: canvas element holding the page image,
    source: string containing URL to a thumbnail image,
    name: string containing page name,
    number: 0 indexed page number,
    displaynum: 1 indexed page number,
    draw: function used to draw the thumbnail,
}
```
