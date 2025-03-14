---
title: The RxRedline Object
---

## Introduction to RxRedLine

### General Information

The `RxRedCOM` component enables your application not only to load and display redlines created by the Rasterex viewing applications, but also to create and save redlines in Rasterex style and format.

> **NOTE:** `RxRedCOM` has been designed to cooperate with the other `RxViewCOM` components and cannot be used when these components are not used to load and display the document on which markups are to be rendered.

### Redline File Types

Redlines can be saved in three different file types: Multi-user files, 000-files, and X00-files.

- **Multi-file**: Contains all redlines for all users in a single file. The file will have the same name as the viewed file, but the file extension will be replaced with the string specified by the `FileExtension` property (default Rasterex extension is `.XCM`).
- **000-files**: Contains all redlines for only one user, with one file per user. The file will have the same name as the viewed file, with extensions ranging from `.000` to `.999` (e.g., `.000` for the first user, `.001` for the second, etc.).
- **X00-files**: Contains all redlines for only one user, with one file per user. The file will have the same name as the viewed file, with extensions ranging from `.A00` to `.Z99` (e.g., `.A00` for the first user, `.A01` for the second, etc.).

## RxRedline Methods

### AddElementXML

Creates a new markup element from XML data.

#### Syntax

```cpp
AddElementXML(long UserIndex, BSTR XML, long *Handle)
```

#### Parameters

- **UserIndex**: Markup element will be added to this user.
- **XML**: XML data.
- **Handle**: Handle of the new element if successful.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### AddPicture

Creates a new markup picture element from either DIB or HENHMETAFILE data.

#### Syntax

```cpp
AddPicture(double x1, double y1, double x2, double y2, OLE_HANDLE Data, long Type, long *Handle)
```

#### Parameters

- **x1**: Left insert position in screen coordinates.
- **y1**: Top insert position in screen coordinates.
- **x2**: Right insert position in screen coordinates.
- **y2**: Bottom insert position in screen coordinates.
- **Data**: Data to add as picture (DIB or ENHMETAFILE).
- **Type**: Type of data to add:
  - `1`: DIB - Data handle must be an `HGLOBAL` containing DIB data.
  - `2`: META - Data handle must be an `HENHMETAFILE`.
- **Handle**: Handle of the new element if successful.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### AddSymbol

Creates a new markup symbol element from provided HENHMETAFILE data. Use this method to add symbols obtained using `RxSymbols`.

#### Syntax

```cpp
AddSymbol(double X, double Y, double Maxsize, OLE_HANDLE Symbol, BSTR SymbolName, BSTR LibraryName, BSTR ID, BSTR Hyperlink, BSTR Description, long *Handle)
```

#### Parameters

- **X**: Left insert position in screen coordinates.
- **Y**: Top insert position in screen coordinates.
- **MaxSize**: Maximum width/height of the symbol in screen coordinates (scaled to ensure neither exceeds this value).
- **Symbol**: Data to add (must be an `ENHMETAFILE` handle).
- **SymbolName**: Name of the symbol if obtained using `RxSymbols`.
- **LibraryName**: Name of the symbol library if obtained using `RxSymbols`.
- **ID**: User-defined ID string for this symbol.
- **Hyperlink**: Optional hyperlink to associate with this symbol.
- **Description**: User-defined description string for this symbol.
- **Handle**: Handle of the new element if successful.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### AddSavedView

Creates a new user-named view.

#### Syntax

```cpp
AddSavedView(BSTR ViewName, long Layout, long Page, double Scale, double Rotation, double FileLeft, double FileTop)
```

#### Parameters

- **ViewName**: Name of the user-saved view.
- **Layout**: This view belongs to the given layout.
- **Page**: This view belongs to the given page.
- **Scale**: Scale factor used by the view.
- **Rotation**: Current rotation used by the view.
- **FileLeft**: File left position used by the view.
- **FileTop**: File top position used by the view.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Close

Closes redlines for the given document. Note that this function does not save redlines; use `Save` or `SaveEx` before calling `Close`.

#### Syntax

```cpp
Close(LPDISPATCH Document)
```

#### Parameters

- **Document**: Close redlines associated with the given document (`IRxDoc`).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Command

Sends a direct command to the redline engine and returns the response as an integer.

#### Syntax

```cpp
Command(BSTR CommandLine, long *Result)
```

#### Parameters

- **CommandLine**: A command string to be sent directly to the redline engine.
- **Result**: An integer value returned from the redline engine.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### CommandEx

Sends a direct command to the redline engine and returns the response as a string.

#### Syntax

```cpp
CommandEx(BSTR CommandLine, BSTR *Result)
```

#### Parameters

- **CommandLine**: A command string to be sent directly to the redline engine.
- **Result**: A string value returned from the redline engine.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Copy

Makes a copy of the currently edited markup element.

#### Syntax

```cpp
Copy()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Delete

Deletes the currently selected redline element.

#### Syntax

```cpp
Delete()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### DeleteElement

Deletes the element with the given handle.

#### Syntax

```cpp
DeleteElement(long Handle)
```

#### Parameters

- **Handle**: Handle for the element to delete.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### DeleteSavedView

Deletes the saved view identified by the given name.

#### Syntax

```cpp
DeleteSavedView(BSTR ViewName)
```

#### Parameters

- **ViewName**: Name of the view to delete from markup data.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### DeleteUsers

Deletes all redlines for the users marked as deleted.

#### Syntax

```cpp
DeleteUsers()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Draw

Draws redlines for a document to the given device context.

#### Syntax

```cpp
Draw(long DC, LPDISPATCH Document, long BackColor)
```

#### Parameters

- **DC**: Device context handle.
- **Document**: `RxDoc` document object for which the redlines should be drawn.
- **BackColor**: Background color (`COLORREF`).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Export

Exports redline entities to a vector block. The `VectorBlock` object handle must be obtained from `RxDocCOM` using the `VectorBlock` property.

#### Syntax

```cpp
Export(LPDISPATCH VectorBlock)
```

#### Parameters

- **VectorBlock**: `LPDISPATCH` for the vector block to which data will be added.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetCreated

Gets the time of element creation and the name of the user who created it.

#### Syntax

```cpp
GetCreated(long Handle, DATE *Time, BSTR *User)
```

#### Parameters

- **Handle**: Element handle.
- **Time**: Time and date when the element was created.
- **User**: Name of the user who created the element.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetDeleted

Returns the time when the element was deleted and the name of the user who deleted it.

#### Syntax

```cpp
GetDeleted(long Handle, DATE *Time, BSTR *User)
```

#### Parameters

- **Handle**: Element handle.
- **Time**: Time and date when the element was deleted.
- **User**: Name of the user who deleted the element.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetDimensionsEx

Returns information about an element's dimensions.

#### Syntax

```cpp
GetDimensionsEx(long Handle, double *Length, double *Area, double *Volume)
```

#### Parameters

- **Handle**: Handle of the element.
- **Length**: Length of the element.
- **Area**: Area of the element (if available).
- **Volume**: Volume of the element (if available).

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetElementInfo

Returns information about a redline element. See [Element Types, Subtypes, and Alternatives](#element-types-subtypes-and-alternatives) for more details.

#### Syntax

```cpp
GetElementInfo(long Handle, long *Type, long *Style, long *Alt, long *Marker, long *Color, long *Layer, double *Width, long *Rotation)
```

#### Parameters

- **Handle**: Element handle.
- **Type**: Element type.
- **Style**: Element style.
- **Alt**: Element alternative.
- **Marker**: Marker on/off.
- **Color**: Element color.
- **Layer**: Element layer.
- **Width**: Element line width.
- **Rotation**: Element rotation.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetElementInfoEx

Returns extended information about a redline element. See [Element Types, Subtypes, and Alternatives](#element-types-subtypes-and-alternatives) for more details.

#### Syntax

```cpp
GetElementInfoEx(long Handle, long *Type, long *Style, long *Alt, long *Marker, long *Color, long *Layer, double *Width, long *Rotation, BSTR *Text, BSTR *Creator, DATE *Created)
```

#### Parameters

- **Handle**: Element handle.
- **Type**: Element type.
- **Style**: Element style.
- **Alt**: Element alternative.
- **Marker**: Marker mode on/off.
- **Color**: Element color.
- **Layer**: Element layer.
- **Width**: Element line width.
- **Rotation**: Element rotation.
- **Text**: Element text.
- **Creator**: Name of the element creator.
- **Created**: Time when the element was created.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetLastModified

Gets the time of the last element modification and the name of the user who modified it.

#### Syntax

```cpp
GetLastModified(long Handle, long *Version, DATE *Time, BSTR *User)
```

#### Parameters

- **Handle**: Element handle.
- **Version**: Version of the element (pointer to `long`).
- **Time**: Time and date when the element was last modified.
- **User**: Name of the user who modified the element.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetLayerState

Gets the state of the redline layer selected by the given index.

#### Syntax

```cpp
GetLayerState(long Index, long *State)
```

#### Parameters

- **Index**: Layer index.
- **State**: Returned layer state:
  - `0`: Layer is off.
  - `1`: Layer is visible.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetSavedViewInfo

Returns information about a user-saved view.

#### Syntax

```cpp
HRESULT GetSavedViewInfo(BSTR ViewName, long *Layout, long *Page, double *Scale, double *Rotation, double *FileLeft, double *FileTop, BSTR *pUserName, DATE *TimeSaved)
```

#### Parameters

- **ViewName**: Name of the saved view.
- **Layout**: This view belongs to the given layout.
- **Page**: This view belongs to the given page.
- **Scale**: Scale factor used by the view.
- **Rotation**: Rotation used by the view.
- **FileLeft**: File left position used by the view.
- **FileTop**: File top position used by the view (Note: Listed twice in original; assumed to be a typo).
- **pUserName**: Name of the user who created this view.
- **TimeSaved**: Time when the user created this view.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetSavedViewName

Returns the name of a user-saved view.

#### Syntax

```cpp
GetSavedViewName(long Index, BSTR *ViewName)
```

#### Parameters

- **Index**: Index of the named view.
- **ViewName**: Name of the view.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetUserEnabled

Checks if a user’s redlines are visible or not.

#### Syntax

```cpp
GetUserEnabled(long Index, long *Enabled)
```

#### Parameters

- **Index**: User index.
- **Enabled**: Returned user state:
  - `0`: Comments are off.
  - `1`: Comments are visible.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### GetUserInfo

Returns information about a user.

#### Syntax

```cpp
GetUserInfo(long Index, BSTR *Name, BSTR *Date, BSTR *File)
```

#### Parameters

- **Index**: User index.
- **Name**: User’s name.
- **Date**: Date when the user’s redlines were created.
- **File**: Name of the file from which redlines are loaded.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### ImportFile

Opens a specific redline file for the given document. If the specified redline file doesn’t exist, it will be created when the `Save` method is called.

#### Syntax

```cpp
ImportFile(BSTR FileName)
```

#### Parameters

- **FileName**: Name of an existing redline file to import. All markup data from the imported file will be added to the currently active user.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### MouseEvent

Sends mouse events and key commands to the redline component.

#### Syntax

```cpp
MouseEvent(long DC, long x, long y, long Character, long LB, long RB, LPDISPATCH Document, long *Action, long *Refresh, long *Status)
```

#### Parameters

- **DC**: Device context handle.
- **x**: Mouse x screen coordinate.
- **y**: Mouse y screen coordinate.
- **Character**: Character that was pressed (`-1` if no key pressed).
- **LB**: Left mouse button state:
  - `0`: Idle
  - `1`: Button down
  - `2`: Button up
  - `3`: Button double-clicked
- **RB**: Right mouse button state:
  - `0`: Idle
  - `1`: Button down
  - `2`: Button up
  - `3`: Button double-clicked
- **Document**: Active `IRxDoc` document.
- **Action**: Returned action value, one of the following:
  - `0`: No mouse reaction required.
  - `1`: User is pointing on a push-button.
  - `2`: User is no longer pointing on a push-button.
  - `3`: Open new file (filename in `Text` property).
  - `4`: View Link Comment.
  - `5`: View text (note) comment (text in `Text` property).
  - `6`: Drawing operation started.
  - `7`: Single element selected for editing.
  - `8`: Multiple elements selected for editing.
  - `9`: User is pointing outside edit element.
  - `10`: User is pointing inside edit element.
  - `11`: User is pointing on an edit element button.
  - `12`: User is moving the element on screen.
  - `13`: Idle state entered.
- **Refresh**: Returned refresh value:
  - `1`: The viewing window must be repainted (invalidated).
- **Status**: A status bar message is available in the `StatusMessage` property.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### MouseEventWorld

Does the same as `MouseEvent` but requires mouse coordinates in world coordinates. Refer to the `MouseEvent` description for more details.

### Open

Opens redlines for the given document. If a redline file doesn’t exist, an empty one will be created.

#### Syntax

```cpp
Open(LPDISPATCH Document)
```

#### Parameters

- **Document**: Opens redline for the given `IRxDoc` document.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### OpenEx

Opens a specific redline file for the given document. If the specified redline file doesn’t exist, it will be created when the `Save` method is called.

#### Syntax

```cpp
OpenEx(LPDISPATCH Document, BSTR RedlineFile)
```

#### Parameters

- **Document**: Opens redline for the given `IRxDoc` document.
- **RedlineFile**: Name of the redline file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PasteFromClipboard

Copies a bitmap or metafile from the clipboard to a new redline element.

#### Syntax

```cpp
PasteFromClipboard()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PickElement

Picks a markup element using coordinates.

#### Syntax

```cpp
PickElement(long X, long Y, long *Handle, long *UserID)
```

#### Parameters

- **X**: X screen coordinate.
- **Y**: Y screen coordinate.
- **Handle**: Returned element handle.
- **UserID**: Returned user ID of the element owner.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Print

Prints redlines for the given document using the specified `RxPrinter` object.

#### Syntax

```cpp
Print(LPDISPATCH Printer, LPDISPATCH Document)
```

#### Parameters

- **Printer**: Printer (`IRxPrinter` pointer) to use for printing.
- **Document**: Prints redlines for the given `IRxDoc` document.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### PrintToDC

Prints redlines for the given document using a device context and an `RxPrinter` object.

#### Syntax

```cpp
PrintToDC(LPDISPATCH Printer, LPDISPATCH Document)
```

#### Parameters

- **DC**: Device context to use for printing (Note: Missing in syntax; assumed based on description).
- **Printer**: Printer (`RxPrinter` pointer) to use for printing.
- **Document**: Prints redlines for the given `IRxDoc` document.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Refresh

Ensures that new markups added by other users to the same file simultaneously are shown.

#### Syntax

```cpp
Refresh()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Save

Saves redlines for the given document to a file.

#### Syntax

```cpp
Save(LPDISPATCH Document)
```

#### Parameters

- **Document**: Saves redlines for the given `IRxDoc` document to a file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SaveEx

Saves all redlines to a specific redline file.

#### Syntax

```cpp
SaveEx(LPDISPATCH Document, BSTR RedlineFile)
```

#### Parameters

- **Document**: Saves redlines for the given `IRxDoc` document.
- **RedlineFile**: Name of the redline file to create. If the file already exists, it will be overwritten.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Save360XML

Saves all redlines to an RxView360-compatible XML file.

#### Syntax

```cpp
Save360XML(BSTR RedlineFile)
```

#### Parameters

- **RedlineFile**: Name of the output XML file.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetActiveDocument

Sets the current redline document.

#### Syntax

```cpp
SetActiveDocument(LPDISPATCH Document)
```

#### Parameters

- **Document**: Sets the given `IRxDoc` document as the active document.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetElementInfo

Changes a redline element. See [Element Types, Subtypes, and Alternatives](#element-types-subtypes-and-alternatives) for more information.

#### Syntax

```cpp
SetElementInfo(long Handle, long *Type, long *Style, long *Alt, long *Marker, long *Color, long *Layer, double *Width, long *Rotation)
```

#### Parameters

- **Handle**: Element handle.
- **Type**: Element type.
- **Style**: Element style.
- **Alt**: Element alternative.
- **Marker**: Marker on/off (non-zero is on).
- **Color**: Element color.
- **Layer**: Element layer.
- **Width**: Element line width.
- **Rotation**: Element rotation.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetLayerState

Sets the visibility state for the given markup layer index.

#### Syntax

```cpp
SetLayerState(long Index, long State)
```

#### Parameters

- **Index**: Markup layer index.
- **State**: Layer state:
  - `0`: Layer is off.
  - `1`: Layer is visible.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetUserDeleted

Marks users as deleted. Use the `DeleteUsers` method to finalize deletion.

#### Syntax

```cpp
SetUserDeleted(long Index, long Deleted)
```

#### Parameters

- **Index**: User index.
- **Deleted**: If set to `1`, the user will be marked as deleted.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### SetUserEnabled

Controls whether a user’s redlines should be visible.

#### Syntax

```cpp
SetUserEnabled(long Index, long Enabled)
```

#### Parameters

- **Index**: User index.
- **Enabled**: If set to `1`, the user’s redlines will be shown.

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

### Undo

Undoes the last markup drawing or editing operation. Use the `CanUndo` property to check if an undo operation is possible.

#### Syntax

```cpp
Undo()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` / `E_FAIL`

## RxRedline Properties

### AreaName

- **Type**: `BSTR`
- **Access**: Write only
- **Description**: Sets the measurement unit name displayed for area measurements.

### CanSave

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns `True` if redlines can be saved.

### CanUndo

- **Type**: `long`
- **Access**: Read only
- **Description**: If `True`, an undo operation can be performed.

### Changed

- **Type**: `long`
- **Access**: Read only
- **Description**: If `True`, the redline for the active file has changed.

### Color

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the redline color for the current user.

### DimensionName

- **Type**: `BSTR`
- **Access**: Write only
- **Description**: Sets the measurement unit name displayed for dimension lines and area perimeter measurements.

### DimensionPrecision

- **Type**: `long`
- **Access**: Write only
- **Description**: Sets the decimal precision used in dimension lines and area measurements.

### DimensionScale

- **Type**: `double`
- **Access**: Write only
- **Description**: Sets the scale factor to use for dimension lines and area measurements.

### DrawAlternative

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets the current alternative type for the current element type. See [Element Types, Subtypes, and Alternatives](#element-types-subtypes-and-alternatives) for details.

### Drawing

- **Type**: `long`
- **Access**: Read only
- **Description**: If `True`, the user is currently drawing an element.

### DrawingScale

- **Type**: `double`
- **Access**: Read and write
- **Description**: Sets or gets the drawing scale to use for measurement. This value is stored and restored from the XCM file and is user-defined.

### DrawSubType

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets the current subtype for the current element type. See [Element Types, Subtypes, and Alternatives](#element-types-subtypes-and-alternatives) for details.

### DrawType

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the current element type to use for drawing. See [Element Types, Subtypes, and Alternatives](#element-types-subtypes-and-alternatives) for details.

### Engine

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns a pointer to the `IRxEngine` object used to load the document.

### Editing

- **Type**: `long`
- **Access**: Read only
- **Description**: If `True`, the user is currently editing an element.

### EditOldRedlines

- **Type**: `long`
- **Access**: Write only
- **Description**: If `True`, the current user can edit old redlines created and saved by this user.

### Elements

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the number of markup elements for the given user index.

### ElementHandle

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the handle of the redline element selected by user and element index parameters.

### ElementHeight

- **Parameter**: `long Handle`
- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the height of the element identified by handle. Works only for measurement area and measurement path elements.

### ElementWidth

- **Parameter**: `long Handle`
- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the width of the element identified by handle. Applies only to measurement path elements.

### ElementXML

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns all redline element information in XML format for the element selected by handle.

### EntityHyperlink

- **Parameter**: `long Handle` of element to query or change
- **Type**: `BSTR`
- **Access**: Read or write
- **Description**: Gets or sets the hyperlink URL or UNC to be associated with the element.

### FileExtension

- **Type**: `BSTR`
- **Access**: Write only
- **Description**: Sets the extension to use for redline files.

### FileType

- **Type**: `long`
- **Access**: Write only
- **Description**: Sets the file type to use when saving redlines. Supported values:

| Value | File Type       | Description                                     |
| ----- | --------------- | ----------------------------------------------- |
| 0     | Multi-user file | Single file extension, e.g., `filename.xcm`     |
| 1     | 000-file        | -                                               |
| 2     | X00-file        | -                                               |
| 3     | Multi-user file | Double file extension, e.g., `filename.dwg.xcm` |

### FolderPath

- **Type**: `BSTR`
- **Access**: Write only
- **Description**: Must be set if a separate folder or sub-path is selected by the `FolderType` property.

### FolderType

- **Type**: `long`
- **Access**: Write only
- **Description**: Controls where redline files are loaded from or saved to. Supported values:

| Value | File Type                          | Description                                        |
| ----- | ---------------------------------- | -------------------------------------------------- |
| 0     | Use same folder as the viewed file | -                                                  |
| 1     | Use a subfolder                    | The `FolderPath` property holds the subfolder name |
| 2     | Use a dedicated markup folder      | The `FolderPath` property holds the folder name    |

### FontCharSet

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the character set value for the current font. See Platform SDK documentation (`LOGFONT lfCharSet` member) for details.

### FontHeight

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the character height for the current font.

### FontItalic

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the italic flag for the current font.

### FontName

- **Type**: `BSTR`
- **Access**: Read and write
- **Description**: Sets or gets the name of the current font.

### FontPitch

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the pitch value for the current font. See Platform SDK documentation (`LOGFONT lfPitchAndFamily` member) for details.

### FontUnderline

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the underline flag for the current font.

### FontWeight

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the weight for the current font. See Platform SDK documentation (`LOGFONT lfWeight` member) for details.

### HaveHyperlink

- **Parameter**: `long Handle` of element to check
- **Type**: `long`
- **Access**: Read only
- **Description**: Returns `True` if the markup element has a hyperlink attached to it.

### Hyperlink

- **Type**: `BSTR`
- **Access**: Read and write
- **Description**: Sets or gets the hyperlink location for the currently edited element.

### IsConsolidated

- **Parameter**: `long Handle`
- **Type**: `long`
- **Access**: Read only
- **Description**: Returns non-zero if the file contains consolidated `RxView360` markup elements.

### IsDeleted

- **Parameter**: `long Handle`
- **Type**: `long`
- **Access**: Read only
- **Description**: Returns non-zero if the element with the given handle has been deleted.

### Layer

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the redline layer for the current user.

### LineSize

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the width to use for new elements.

### Marker

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the drawing marker mode. If `True`, redlines are drawn with a transparency effect.

### MeasureSubUnit

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets sub-units to use for measurement. Stored and restored from the XCM file; user-defined.

### MeasureUnit

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets units to use for measurement. Stored and restored from the XCM file. `RxHighlight` uses:
  - `1`: Imperial
  - `2`: Metric

### Monochrome

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets monochrome drawing mode. If `True`, redlines are drawn as monochrome using the color set by `MonoColor`.

### MonoColor

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the color to use for monochrome drawing mode.

### MultiEditing

- **Type**: `long`
- **Access**: Read only
- **Description**: If `True`, the user is currently editing multiple elements.

### Rotation

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the initial rotation (0-359) prior to drawing an element.

### RubberSize

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the rubber width used when drawing rubber elements.

### SavedRotation

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the current active rotation when markup is/was saved.

### SavedViews

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the number of saved views. These are user-created views; information can be obtained with `GetSavedViewInfo`.

### ScreenRelative

- **Type**: `long`
- **Access**: Write only
- **Description**: If `True`, the values of `LineSize`, `RubberSize`, and `FontHeight` are relative to the current screen. If `False`, they are treated as absolute world coordinate values.

### SelectedElementHandle

- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the handle of the currently selected markup element.

### Signature

- **Type**: `BSTR`
- **Access**: Read and write
- **Description**: Sets or gets the current user’s signature (normally the same as the username).

### StatusMessage

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Holds text information intended for the status bar when the `MouseEvent` method returns with the status flag set.

### SymbolName

- **Parameter**: `long Handle`
- **Type**: `long`
- **Access**: Read only
- **Description**: Returns the symbol name for the given handle (if available).

### Text

- **Type**: `BSTR`
- **Access**: Read and write
- **Description**: Holds the element text when editing or drawing text elements. Also holds the path and filename when drawing/editing link elements.

### Users

- **Type**: `long`
- **Access**: Read only
- **Description**: Holds the number of users with redlines for the active file.

### Version

- **Type**: `BSTR`
- **Access**: Read only
- **Description**: Returns the version of `RxRedCOM`. The string contains: Product Version, Main Revision, Sub Revision, and Build Number.

### Visible

- **Type**: `long`
- **Access**: Read and write
- **Description**: Sets or gets the visibility of redlines. If `True`, redlines will be drawn.

### VolumeName

- **Type**: `BSTR`
- **Access**: Write only
- **Description**: Sets the measurement unit name displayed for volume measurements (measurement areas with height).

### XmlData

- **Type**: `BSTR`
- **Access**: Read and write
- **Description**: Sets or gets redline information using XML format.

## Element Types, Subtypes, and Alternatives

The following table describes redline element types and their different subtypes and alternatives:

## Element Types, Subtypes, and Alternatives

The following table describes redline element types and their different subtypes and alternatives:

| Type    |               | SubType |                             | Alternative |                                   |
| ------- | ------------- | ------- | --------------------------- | ----------- | --------------------------------- |
| **Val** | **Meaning**   | **Val** | **Meaning**                 | **Val**     | **Meaning**                       |
| 0       | No action     | -       | -                           | -           | -                                 |
| 1       | Rubout        | -       | -                           | -           | -                                 |
| 2       | Lines         | 0       | Freehand pen                | 0           | Open                              |
|         |               | 1       | Polylines                   | 1           | Closed (outlined)                 |
|         |               | 2       | Polycurves (splines)        | 2           | Filled                            |
|         |               | 3       | Measurement area            | 3           | Edged                             |
|         |               | 4       | Measurement path            | 4           | Hatched                           |
|         |               |         |                             | 5           | Wipeout                           |
|         |               |         |                             | 6           | Invisible                         |
| 3       | Rectangle     | 0       | Rectangle                   | 0           | Open                              |
|         |               | 1       | Rounded rectangle           | 1           | Closed                            |
|         |               | 2       | Oval                        | 2           | Filled                            |
|         |               | 3       | Bubble                      | 3           | Edged                             |
|         |               | 4       | Revision cloud              | 4           | Hatched                           |
|         |               |         |                             | 5           | Wipeout                           |
|         |               |         |                             | 6           | Invisible                         |
| 4       | Arrow         | 0       | Normal Arrow                | 0           | Single arrow outlined             |
|         |               |         |                             | 1           | Single arrow filled               |
|         |               |         |                             | 2           | Double arrow outlined             |
|         |               |         |                             | 3           | Double arrow filled               |
|         | Dimensionline | 1       | Aligned dimension           | 0           | Lines                             |
|         |               | 2       | Horizontal linear dimension | 1           | Filled circles                    |
|         |               | 3       | Vertical linear dimension   | 2           | Outlined arrow + lines            |
|         |               |         |                             | 3           | Filled arrow + lines              |
| 5       | Text          | 0       | Normal text                 | 0           | Unframed text                     |
|         |               | 1       | Arrow pointed text          | 1           | Outlined rectangle                |
|         |               |         |                             | 2           | Outlined rounded corner rectangle |
|         |               |         |                             | 3           | Outlined bubble                   |
|         |               |         |                             | 4           | Edged rectangle                   |
|         |               |         |                             | 5           | Edged rounded corner rectangle    |
|         |               |         |                             | 6           | Edged bubble                      |
|         |               |         |                             | 7           | Outlined circle                   |
|         |               |         |                             | 8           | Edged circle                      |
|         |               |         |                             | 9           | Outlined revision cloud           |
|         |               |         |                             | 10          | Edged revision cloud              |
|         | Note          | 2       | Note                        | -           | -                                 |
| 6       | Link button   | -       | -                           | -           | -                                 |
| 7       | Picture       | 0       | Metafile                    | -           | -                                 |
|         |               | 1       | DIB (Raster)                | -           | -                                 |
|         |               | 2       | Symbol                      | -           | -                                 |
|         |               | 3       | Stamp                       | -           | -                                 |
| 10      | Edit mode     | -       | -                           | -           | -                                 |
| 11      | Push mode     | -       | -                           | -           | -                                 |
| 12      | Counter       | 0       | Circles                     | -           | -                                 |
|         |               | 1       | Squares                     | -           | -                                 |
|         |               | 2       | Diamonds                    | -           | -                                 |
|         |               | 3       | Triangles                   | -           | -                                 |
| 13      | Shape         | 0       | Checkmark                   | -           | -                                 |

### Notes

- Edged elements are filled with background color and outlined with element colors.
