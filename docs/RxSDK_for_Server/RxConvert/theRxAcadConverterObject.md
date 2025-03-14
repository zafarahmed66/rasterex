---
title: The RxAcadConverter Object
---

**Component name:** `RxAcadConverter.dll`

## RxAcadConverter Methods

### Convert

Converts an AutoCAD drawing to another DWG or DXF using the given format version. You may use this function to convert, for example, 2016 DWG files back to a 2010 or any other version DWG file. You may also convert from DXF to DWG and from DWG to DXF. Use the `FileType` and `FormatVersion` properties to set the output format used by this method.

#### Syntax

```cpp
Convert(BSTR InFile, BSTR OutFile)
```

#### Parameters

- **InFile**: Full path of the file to convert from.
- **OutFile**: Name of the output file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxAcadConverter Properties

### FileType

- **Type**: `string`
- **Access**: Read and write
- **Description**: Sets or gets the file type to create using the `Convert` method. The following options are available:
  | Format ID | Description |
  |-----------|---------------------------------|
  | DWG | AutoCAD Drawing Format |
  | DXF | AutoCAD Drawing Exchange Format |
  | DXB | AutoCAD Drawing Exchange Binary Format |

### FormatVersion

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the AutoCAD DWG file version to use for output files. The following values are supported:
  | Format ID | Description |
  |-----------|------------------------|
  | 0 | AutoCAD 9 |
  | 1 | AutoCAD 10 |
  | 2 | AutoCAD 12 |
  | 3 | AutoCAD 13 |
  | 4 | AutoCAD 14 |
  | 5 | AutoCAD 2000 |
  | 6 | AutoCAD 2004 |
  | 7 | AutoCAD 2007 |
  | 8 | AutoCAD 2010 to 2012 |
  | 9 | AutoCAD 2013 to 2017 |
  | 10 | AutoCAD 2018 to 2025 |
