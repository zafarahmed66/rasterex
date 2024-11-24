Connection callback that gives a list of markup layers. Called during `RxView360` startup.

### Additional Methods
- **getCurMarkupLayer()**: Returns the current markup layer.
- **getCanChangelayer()**: Returns true if the layer can be changed.
- **SetLayerMarkupdisplay(numlayer, state)**: Set markup layer on/off.

### Callback Parameters
- **markuplayers**: Array of markup layer objects.

```javascript
Layers {
    Layer: number; // Layer index
    Name: string; // Layer name
    Color: color; // Layer color
    display: Boolean; // On/off
}
```