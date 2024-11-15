---
title: Rasterex Web Viewer
---

# Rasterex Web Viewer


The viewer is built using the Angular framework and is intended as a complete viewer that can demonstrate most of the Rasterex Web SDK current capabilities. The source for the viewer is freely available on our Github page. End users can modify and customize this viewer to suit their needs.

![RxView](./img/rxview.png)


### Using an Iframe

You can intergrate the viewer into your system using an Iframe. Having an Iframe object you can communicate with the viewer using a built in PostMessage system.

In the exmaple below the file opened on startup is set using a method called [setinitFile.](./file/methods/setinitFile)
 



``` JavaScript

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Rasterex Viewer</title>
        <!-- <base href="./"> -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
     
        <script type="text/javascript" src="../assets/scripts/jquery-2.1.0.min.js"></script>

        <style>
            body{
                margin: 0; /* Remove default margin */
            }
            iframe{      
                display: block;  /* iframes are inline by default */   
                height: 100vh;  /* Set height to 100% of the viewport height */   
                width: 100vw;  /* Set width to 100% of the viewport width */     
                border: none; /* Remove default border */
                background: lightyellow; /* Just for styling */
            }
        </style>

    </head>
    <body>
        <iframe src="index.html" id="rxview"></iframe>

        <script>

            var getUrlParameter = function getUrlParameter(sParam) {
                var sPageURL = window.location.search.substring(1),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;
        
                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');
        
                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }
                }
                return false;
            };
        
              $().ready(()=>{
                let fileSrc = getUrlParameter("file");
                let cacheid = getUrlParameter("cacheid");
                if (fileSrc){
                    $("#rxview").on("load", function() {

                        try{

                            let fileobj = {filepath:fileSrc, cacheid:cacheid};

                            document.getElementById('rxview').contentWindow.RxCore.setinitFile(fileobj);
                        }catch(err){
                            alert(JSON.stringify(err))
                        }
                    });
                }
              })
          
        </script>
    </body>
</html>


```

### Controlling the UI

Setting the UI using PostMessage "guiConfig".
In this example we turn off the file open UI controls, the Print menu and export option.

``` JavaScript

        //id of iframe = rxview
        const rxviewer = document.getElementById("rxview").contentWindow;

        //pass an object of GUI configuration settings here.    
        rxviewer.postMessage({
            type: "guiConfig",
            payload: {
                mode : {
                    canFileOpen: false,
                    canSaveFile: true,
                    canGetFileInfo: true,
                    canPrint: false,
                    canExport: false,
                    canAnnotate: true,
                    canCompare: true,
                    canSignature: true,
                    canConsolidate: true,
                }
              
            }
        }, "*");

```

### The IGuiConfig interface

You can pass any of the values listed below in the object sent using the guiConfig postMessage.


``` TypeScript

export interface IGuiConfig {
    canAnnotate?: boolean;
    canConsolidate?: boolean;
    canSignature?: boolean;
    disableImages?: boolean;
    disableSymbol?: boolean;
    disableLinks?: boolean;
    disableSignature?: boolean;    
    canFileOpen?: boolean;
    canCompare?: boolean;
    canPrint?: boolean;
    canExport?: boolean;
    canSaveFile?: boolean;
    canGetFileInfo?: boolean;
    disableSideNavMenu?: boolean;
    disableTopNavMenu?: boolean;
    disableBurgerMenuCompare?: boolean;
    disableViewPages?: boolean;
    disableViewAnnotations?: boolean;
    disableViewUserLayers?: boolean;
    disableViewVectorLayers?: boolean;
    disableView3DParts?: boolean;
    disableMarkupTextButton?: boolean;
    disableMarkupCalloutButton?: boolean;
    disableMarkupStampButton?: boolean;
    disableMarkupPaintButton?: boolean;
    disableMarkupShapeButton?: boolean;
    disableMarkupShapeRectangleButton?: boolean;
    disableMarkupShapeEllipseButton?: boolean;
    disableMarkupShapeRoundedRectangleButton?: boolean;
    disableMarkupShapePolygonButton?: boolean;
    disableMarkupShapeCloudButton?: boolean;
    disableMarkupArrowButton?: boolean;
    disableMarkupMeasureButton?: boolean;
    disableMarkupCountButton?: boolean;
    disableMarkupEraseButton?: boolean;
    disableMarkupNoteButton?: boolean;
    disableMarkupLockButton?: boolean;
    disableMarkupUndoRedoButtons?: boolean;
    disableBottomToolbar?: boolean;
    disableBirdEyeButton?: boolean;
    disableReset3DModelButton?: boolean;
    disable3DSelectButton?: boolean;
    disable3DSelectMarkupButton?: boolean;
    disableWalkthroughButton?: boolean;
    disableHide3DPartsButton?: boolean;
    disableExplode3DModelButton?: boolean;
    disableTransparency3DModelButton?: boolean;
    disableClipping3DModelButton?: boolean;
    disableCreateViewButton?: boolean;
    disableMagnifyingGlassButton?: boolean;
    disableZoomInButton?: boolean;
    disableZoomOutButton?: boolean;
    disableFitToWindowButton?: boolean;
    disableFitWidthButton?: boolean;
    disableFitHeightButton?: boolean;
    disableZoomInAreaButton?: boolean;
    disableRotateButton?: boolean;
    disableHideMarkupsButton?: boolean;
    disableSelectTextButton?: boolean;
    disableSearchTextButton?: boolean;
    disableSearchAttributesButton?: boolean;
    disableBackgroundColorButton?: boolean;
    disableMonochromeButton?: boolean;
    enableGrayscaleButton?: boolean;
    /*  */
    logoUrl?: string;
}

   
```


