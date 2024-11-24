Can be used in combination with `RxCore.getTextRects()` text search to create a markup button at a position returned in the `RxCore.GUI_NumMathcesRect` callback.

### Syntax

```typescript
RxCore.markupButtonFromMatch(rectangle, pagenumber, image, padding)
```

### Parameters

- `rectangle`: **Rectangle object** — Represents the position and size of the rectangle.

```typescript
rectangle = {
    x: // rectangle left,
    y: // rectangle top,
    w: // rectangle width,
    h: // rectangle height,
    pagenum: // 0 indexed page number,
    pageheight: // page height
};
```

- `pagenumber`: **number** — The page number.

- `image`: **Image object** — Contains the details of the image.

```typescript
image = {
    src: // HTML image source,
    width: // image width,
    height: // image height,
    orgwidth: // original image width,
    orgheight: // original image height
};
```

- `padding`: **Padding object** — Specifies the padding around the button.

```typescript
padding = {left: 0, top: 10, right: 0, bottom: 0};
```

### Returns

- **promise** — A promise that can be used to set button actions.

### Example

```typescript
RxCore.markupButtonFromMatch(rects[ri], pagenumber, singbuttondrop, padding)
    .then(function (buttonobj) {
        buttonobj.AddAttribute("CustomAction", "SetSignature");
        buttonobj.AddAttribute("Signature", "Frank Tveter");
        buttonobj.setLink("ButtonAction", true);
    })
    .catch(function (error) {
        console.log(error);
    });
```




