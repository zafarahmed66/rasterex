Use this method to get the type of properties each markup type supports.
The parameter is the same as an object type returned using RxCore.getMarkupTypes() which returns an array of supported types.

### Syntax

```typescript
RxCore.getMarkupProperties(markuptype)
```

### Parameters

- **markuptype**

```typescript

   let markuptype = {
        label : string = "friendly name",
        typename : string =  'UNIQUE_NAME', 
        type : number, 
        subtype : number
    }
```

### Returns

- **Array** — An object of properties supported. Supported properties for the particular type is true othewise false.

```typescript
    var properties = {
                lineColor : false,
                fillColor : false,
                textColor : false,
                lineWidth : false,
                lineStyle : false,
                clockwise : false,
                customlabel : false,
                display : true,
                countsize : false,
                countshape : false,
                showperimeter : false,
                enablelink : false,
                endpoint_open_single : false,
                endpoint_open_both : false,
                endpoint_filled_single : false,
                endpoint_filled_both : false,
                endpoints_bar : false,
                endpoints_arrow : false,
                lineSegmentWidth : false,
                transpacency : false,
                rotate : false,
                snap : false,
                fill : false,
                fontName : false,
                fontHeight : false,
                labelsize : false, 
                fontBold : false,
                fontItalic : false
            };
```



