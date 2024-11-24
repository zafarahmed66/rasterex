To populate various fill styles to use with CAD polygons.

### Syntax
```typescript
Syntax: RxCore.addFill(type, name, image, tilesize, color, ledgend_description)
```



### Parameters

- `type`: **string** — Should be `'hatch'` or `'color'`
- `name`: **string** — The name of the fill entry
- `image`: **HTMLImage** or **null** — Used for hatch as fill repeat image
- `tilesize`: **object** — `{w: number, h: number}` size of the hatch image in pixels
- `color`: **HTMLColor** — Color of the hatch or color fill
- `ledgend_description`: **string** — Description for the legend displayed with the drawing

### Returns

- **NA** — This method does not return a value.





### Example
```typescript

Example:
// Red fill color with 0.5 transparency
RxCore.addFill('color', 'transpred', null, null, 'rgba(255,0,0,0.5)', 'BTA');

// Adding a hatch using an image of 16x16 pixels
RxCore.addFill('hatch', 'diagonal-forward', image,{w:16, h:16}, 
'rgba(255,0,0,0.5)', 'Non usable space');
```