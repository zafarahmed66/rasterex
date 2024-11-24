Connection callback that is called when the measurement function is completed.

### Additional Methods
- **getLength(length)**: Returns the length in the current measure unit.
- **getUnitlabel()**: Returns the current measure label.
- **getAreaUnitlabel(numlayer, state)**: Set markup layer on/off.

### Callback Parameters
- **measureresult**: Result object.

```javascript
Measureresult {
    lengths: array; // Array of lengths given with two points.
    angles: array; // Array of angles given in radians.
    totaldistance: number; // Total measured distance.
    area: number; // Measured area.
}
```