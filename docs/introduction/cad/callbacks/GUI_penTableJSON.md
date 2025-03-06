Connection callback called when the server returns an JSON representation of a pen table file that has been uploaded.



### Callback Parameters
- **pentable**: Array of vector pen objects.

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

### Example of implementation.

```javascript

        function GUI_penTableJSON(){

            RxCore.GUI_penTableJSON.connect(onPentablereceived);

            function onPentablereceived(pentable, bactive){

                if(bactive){

                    setPenTableJSON(pentable);
                }
            }
        }

        function setPenTableJSON(pentable){
            
            var pentablelist = pentable;
            var curpentable = RxCore.get2DVectorPentable(); //returns the pen table for the currently active file.

            if(pentablelist && curpentable){
                for (var pi = 0; pi < pentablelist.length;pi++){


                    var pen = curpentable.getPen(pentablelist[pi].penindex);
                    
                    if(pen != undefined){

                        RxCore.setpentablePen(pentablelist[pi], false);
            
                    }
                    
                }

                curpentable.changed = true;
    
            }


        }


```
