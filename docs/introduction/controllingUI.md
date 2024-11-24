---
title: Controlling the UI
---

# Controlling the UI

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

