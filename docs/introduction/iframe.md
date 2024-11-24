---
title: Using an Iframe
---

# Using an Iframe

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