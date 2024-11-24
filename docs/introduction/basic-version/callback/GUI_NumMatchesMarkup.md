This callback event is triggered when `RxCore.markupTextSearch` is used.

###Callback Parameters

- **numMatches**: Number of markups that match the search.

### Example:

```javascript
RxCore.GUI_NumMatchesMarkup.connect(onGetMatches);

function onGetMatches(numMatches) {
  console.log("found " + numMatches + " matches");
}
```
