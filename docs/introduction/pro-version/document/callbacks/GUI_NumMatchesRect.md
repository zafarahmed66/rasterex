This callback event is triggered when `RxCore.getTextRects` is used.

###Callback Parameters

- **numMatches**: An object that contains a `matcharray` with the rectangle objects for the search.
- **CurrentPage**: The page where the match was found.

### Example:

```javascript
RxCore.GUI_NumMatchesRect.connect(onGetMatches);

function onGetMatches(numMatches, currentpage) {
  if (numMatches.matcharray.length > 0) {
    var padding = { left: 5, top: 5, right: 15, bottom: 15 };

    for (var nmi = 0; nmi < numMatches.matcharray.length; nmi++) {
      if (numMatches.matcharray[nmi].page === currentpage) {
        RxCore.markupLinkRect(
          true,
          currentpage,
          numMatches.matcharray[nmi].rect,
          currentpage,
          "[https://www.rasterex.com/](https://www.rasterex.com/)",
          padding
        );
      } else if (numMatches.matcharray[nmi].page > currentpage) {
        donextpage = true;
        nextpage = numMatches.matcharray[nmi].page;
        break;
      }
    }

    if (donextpage) {
      RxCore.getTextRects(numMatches.expr, numMatches.casesens);
    } else {
      RxCore.endGetTextRects();
    }
  }
}
```
