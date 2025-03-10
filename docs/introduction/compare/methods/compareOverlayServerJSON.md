Used to create a PDF composite of two files on using the back-end.

### Syntax

```typescript
RxCore.compareOverlayServerJSON(fileurlbackground, fileurloverlay, colors, dpi, alignarray)
```

### Parameters

- `fileurlbackground`: **string** —  URL to a file to use as composite background file.
- `fileurloverlay`: **string** — URL to a file to use as composite overlay file.
- `colors`: **object** —  A set of colors with different roles in the composite creation.
    Example:
    ```typescript
    const colors = {BackColor : 'rgb(255,0,0)', FrontColor : 'rgb(0,0,255)', EqualColor : 'rgb(128,128,128)'};
    
   ``` 

- `dpi`: **number** — The resolution of the composite PDF higher resolution gives better result but takes longer.

- `alignarray`: **array** — A set of alinment values that is used to set offset and scale of the composite PDF.
  - `dist`: **number** — Distance for alignment.
  - `angle`: **number** — Angle for alignment.
  - `offset`: **object** — Offset for alignment, defined as:
    - `x`: **number** — X offset.
    - `y`: **number** — Y offset.
  - `pwidth`: **number** — Page width.

Align arrays are returned by the GUI_CompareMeasure event that is called when an alignment using 

### Returns

- **URL** — A string with a link to the PDF composite so that this can be opened in the viewer.

### Example of direct use (Angular)

```typescript

public static async compareOverlayServerJSON(
        backFileName: string,
        frontFileName: string,
        alignarray: Array<any> | undefined,
        backRgbColor: string = 'rgb(255,0,0)',
        frontRgbColor: string = 'rgb(0,0,255)',
        equalRgbColor: string = 'rgb(128,128,128)',
        outputName?: string,
        dpi: number = 200
        ): Promise<string> {
            if (backFileName?.toLowerCase().endsWith("dwg")
                || frontFileName?.toLowerCase().endsWith("dwg")
                || backFileName?.toLowerCase().endsWith("dgn")
                || frontFileName?.toLowerCase().endsWith("dgn")) {
                dpi = 400;
            }

            const payload = [{
                "Command": "Compare",
                "LicenseID": localStorage.getItem("RxLic"),
                "BackURL": `${RXCore.Config.UploadServerfolder.replaceAll('\\', '/')}${backFileName}`,
                "FrontURL": `${RXCore.Config.UploadServerfolder.replaceAll('\\', '/')}${frontFileName}`,
                "CompareDPI": dpi,
                "BackColor": backRgbColor,
                "FrontColor": frontRgbColor,
                "EqualColor": equalRgbColor,
                "ReturnData": "text",
                //"DestFolder": "C:/Rasterex/Upload",
                "DestFolder":`${RXCore.Config.UploadServerfolder.replaceAll('\\', '/')}`,
                "OutputName": outputName,
            }];

            if (alignarray?.length) {
                payload.push({
                    ...alignarray[0]
                });
                payload.push({
                    ...alignarray[1]
                });
            }

            const response = await fetch(`${RXCore.Config.xmlurldirect}?CommandJSON`, {
                method: 'post',
                headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            return `${RXCore.Config.baseFileURL}${await response.text()}`;
    }

    ```