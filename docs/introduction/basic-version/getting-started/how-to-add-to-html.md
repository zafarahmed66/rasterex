---
title: How to add to HTML?
---

By default, the RxCore object will look for a div with ID `rxcontainer`. You can specify any div by passing its ID to the RxCore.initialize() method.

Below is an example of minimal implementation of the Basic version.
The following script files need to be referenced for the viewer to work.

`rxconfig.js` – A JavaScript file that contain the server endpoints for client server communication.
`three.min.js`, `detector.js` and `GLTFLoader.js` – Are all used to handle and display 3D type formats.

```html
<html>

<head> </head>

<body>
    <div id="rxcontainer"></div>

    <script src="rxconfig.js"></script>
    <script src="rxcorefunctions.min.js"></script>
    <script type="text/javascript" src="three/three.min.js"></script>
    <script type="text/javascript" src="three/detector.js"></script>
    <script type="text/javascript" src="three/GLTFLoader.js"></script>
    <script src="pdfjs/build/pdf.js"></script>

    <script type="text/javascript" charset="utf-8">

        $(document).ready(function () {
            var bguireadycalled = false;
            var binitfileopened = false;

            //file to open on startup
            var drawing = "C:\\\\Rasterex\\\\Upload\\\\040915 MOBSLAKT.pdf";
            var canvdim = {
                offsetWidth: 0,
                offsetHeight: 0
            };

            RxCore.initialize(canvdim);

            RxCore.GUI_Ready.connect(function () {
                addFoxitdocBarebone();
                bguireadycalled = true;

                openInitFile(drawing);

                RxCore.GUI_FileLoadComplete.connect(function (fileurl, activefile) {
                    console.log(fileurl);
                });

            });

        });



        function openInitFile(initialDoc) {

            if (bguireadycalled && bfoxitreadycalled) {
                if (binitfileopened == false) {
                    binitfileopened = true;
                    RXCore.openFile(initialDoc);
                }
            }
        }
    </script>
</body>

</html>
```

### Required CSS

The following CSS declaration must be referenced in the main HTML document:

```css
#rxcontainer {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  float: left;
}
```

Additional CSS styles for canvas elements:

```css
#rxcanvas {
  border: 1px solid #000;
}
#imageDiag {
  position: absolute;
  top: 1px;
  left: 1px;
}
#imageTemp {
  position: absolute;
  top: 1px;
  left: 1px;
}
#canvas {
  position: absolute;
  top: 1px;
  left: 1px;
  background: -webkit-linear-gradient(#ffffff, #b5b5b5); /* Safari 5.1-6.0 */
  background: -o-linear-gradient(#ffffff, #b5b5b5); /* Opera 11.1-12.0 */
  background: -moz-linear-gradient(#ffffff, #b5b5b5); /* Firefox 3.6-15 */
  background: linear-gradient(#ffffff, #b5b5b5); /* Standard syntax */
}
```
