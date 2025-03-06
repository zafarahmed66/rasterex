Use to set a pen in the pen table for a 2D vector file that support pen tables.


### Syntax

```typescript
RxCore.setpentablePen(penobj, breset)
```



### Parameters

- `penobj`: **penobject** — . structure of vector pens.

- `breset`: **boolean** — `true` = resets pen table, `false` = does not reset pen table.

### Returns

- **NA** — This method does not return a value.


```javascript

    var pen = {
            penindex : number,
            arrayindex : number,
            originalcolor : string, //html color string
            color : string, //html color string
            originalstyle : number, // pen style 
            style : number, // pen style 
            penwidth : number, //pen width
            originalpenwidth : number, //pen width
            displaywidth : number, //pen width in display scale
            unitwidth : number, //pen width in unit scale
            
    }

    var pentable = {
        pens : array,
        getPen : function(index){} //returns a pen by index
    }
        


```