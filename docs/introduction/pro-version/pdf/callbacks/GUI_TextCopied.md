This callback event returns the text when using the Foxit text selection tool.

### Callback Parameters
- **Original URL**: The URL of the document.
- **Text**: A string holding the selected text.

### Example:

```javascript
RxCore.GUI_TextCopied.connect(function(fileurl, text) {
    copyToClipboard(text).then(function() {
        console.log('OK');

        //if (thispage.DocRef.foxitdoc != null) {
        //    thispage.DocRef.foxitdoc.removeTextSelect(thispage.textselectobj);
        //}

    }).catch(function(error) {
        console.log('Failed');
    });
});
```