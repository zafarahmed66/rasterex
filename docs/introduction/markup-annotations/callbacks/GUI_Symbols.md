Connection callback that returns symbol library data when a symbol interface function is called.

### Applicable Functions
- `RxCore.getSymbolLibNum`
- `RxCore.getSymbolLibPNGData`
- `RxCore.getSymbolName`
- `RxCore.getnumSymbols`
- `RxCore.selectSymbName`
- `RxCore.selectSymblib`

### Callback Parameters

The callback function should have the following parameters:

```javascript
var symbolinfo = { type: 1, data: Numlibs };     // Number of symbol libraries
var symbolinfo = { type: 2, data: libname };     // Name of the symbol library
var symbolinfo = { type: 3, data: numsymbols };   // Number of symbols in the library
var symbolinfo = { type: 4, data: symbolName };   // Name of the selected symbol
var symbolinfo = { type: 5, data: symbolPNGData, index: sname }; // PNG data for the symbol
var symbolinfo = { type: 6, data: num };          // Additional symbol information
```
**Use code with caution.**
