---
title: Markup Object
---

Some callbacks return a single or an array of markup objects. Information on these objects can be accessed using the following methods and properties.

## Markup Properties

```javascript
Markup {
    x : number; // left position of the markup object
    y : number; //top position of the markup object
    w : number; // right position or width depending on type
    h : number; //bottom position or height depending on type

    type: number; // markup type
    subtype: number; // markup subtype
    alternative: number; // markup alternative
    color: color; // markup color
    consolidated : boolean; //true if the markup has the consolidated flag set.
    fontname: string; // font name
    linewidth: number; // width of markup object
    signature: string; // name of the user who created the markup
    markupnumber: number; // unique number for the current markup set
    dimtext: string; // value for measurement markups
    layer: number; // markup layer
    pagenumber: number; // 0-indexed page number for markup placement
    text: string; // value for text markups
    bisTextArrow: boolean; //true if the markup is an arrow for a callout.
    transparency: number; //a value between 0 and 100 that holds the transparency value
    rotation: number; //the rotation of the markup in degrees.
    uniqueID: string; // A unique identity for the markup object.
    textBoxConnected: markupobject; //if the markupobject is an arrow for a callout this is the connected text box connected to it.
    font: font object;
}
```

---

## Markup Object Methods

### AddAttribute

Adds custom attributes to the markup, retained when saved to file.

- **Syntax**: `Markup.AddAttribute(szName, szValue)`
- **Parameters**:
  - `szName`: Attribute name
  - `szValue`: Attribute value
- **Returns**: None
- **Usage Caution**: This can permanently alter the markup if saved.

---

### ClearAttributes

Clears all custom attributes from the markup.

- **Syntax**: `Markup.ClearAttributes()`
- **Parameters**: None
- **Returns**: None
- **Usage Caution**: This will remove all added attributes.

---

### GetAttributes

Retrieves the current custom attributes associated with the markup.

- **Syntax**: `Markup.GetAttributes()`
- **Parameters**: None
- **Returns**: Array of current custom attributes
- **Usage Caution**: Returns any attributes previously added.

---

### getcount

Returns the count value for count-type markups.

- **Syntax**: `Markup.getcount()`
- **Parameters**: None
- **Returns**: Count number
- **Usage Caution**: Only applicable to markups where count is relevant.

---

### getLink

Retrieves link information associated with the markup.

- **Syntax**: `Markup.getLink()`
- **Parameters**: None
- **Returns**: Object with link properties:
  - `bCanHaveLink`: Boolean indicating if the markup supports links
  - `link`: The actual link if set
  - `bhavelink`: Boolean indicating if the markup has a link

---

### getMarkupType

Gets a string describing the markup type.

- **Syntax**: `Markup.getMarkupType()`
- **Parameters**: None
- **Returns**: Object with properties:
  - `label`: Description of the markup type
  - `type`: Upper-case name of the type

---

### getselected

Checks if the markup is currently selected.

- **Syntax**: `Markup.getselected()`
- **Parameters**: None
- **Returns**: Boolean, `true` if selected

---

### getUniqueID

Retrieves a unique ID of the markup, if set.

- **Syntax**: `Markup.getUniqueID()`
- **Parameters**: None
- **Returns**: Unique ID value for the markup

---

### ConsolidateList

Adds markup objects to an array to consolidate them based on settings.

- **Syntax**: `Markup.ConsolidateList(settingsobject, last)`
- **Parameters**:
  - `settingsobject`: Contains options for changing stroke color, text color, and layer.
  - `last`: Boolean, starts consolidation if `true`
- **Returns**: None
- **Settings Object Structure**:

  ```javascript
  {
      changeStrokeColor: boolean,
      changeTextColor: boolean,
      changeLayer: boolean,
      strokecolor: html hex color,
      textcolor: html hex color,
      layer: integer
  }
  ```

---

### setLink

Associates a link with the markup object.

- **Syntax**: `Markup.setLink(link, bhavelink)`
- **Parameters**:
  - `link`: A string representing the link (e.g., a URL)
  - `bhavelink`: Boolean, set to `true` to activate the link
- **Returns**: None

---

### setUniqueID

Assigns a unique ID to the markup object.

- **Syntax**: `Markup.setUniqueID(ID)`
- **Parameters**:
  - `ID`: The unique ID to be set
- **Returns**: None

---

### setRxUniqueID

Sets a unique ID for the markup object using the RxView360 server method.

- **Syntax**: `Markup.setRxUniqueID()`
- **Parameters**: None
- **Returns**: None

---

### getMarkupType

Get the type description of the markup object.

- **Syntax**: `Markup.getMarkupType()`
- **Parameters**: None
- **Returns**: 
  ```javascript
  labelType = { type: string, label: string }
  ```

---

### getmarked

Checks if the markup object has the marked state, used to indicate selection by a user who does not own the markup object.

- **Syntax**: `Markup.getmarked()`
- **Parameters**: None
- **Returns**: Boolean, `true` if marked, `false` otherwise

---

### GetDateTime

Retrieves the creation date and time of the markup object.

- **Syntax**: `Markup.GetDateTime(time)`
- **Parameters**:
  - `time`: Boolean indicating if the returned string should include hours, minutes, and seconds
- **Returns**: A string with the date and time

---

### getJSONUniqueID

Retrieves a JSON representation of the markup object.

- **Syntax**: 
  ```javascript
  Markup.getJSONUniqueID(operation).then(function(jsondata) {
      const data = JSON.parse(jsondata);
  });
- **Parameters**:
  - `operation`: Object from the `GUI_Markup` event callback indicating if the markup was created, deleted, or modified
- **Returns**: Promise containing JSON data
