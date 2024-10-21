---
title: How To
---

## Basic Operations
### Open File on Startup
To open a file when starting the viewer, use the RxCore.openFile() method, passing the file URL or the server-side path as the parameter:

```typescript
RxCore.openFile(fileurl);
```

- `fileurl`: String containing the URL or path of the file to open.

---

### Set User
To set a user for authentication or markup association, use the RxCore.setAuthorization() method before initializing the viewer:

```typescript
RxCore.setAuthorization(type, token);
```

- `type`: Authentication method as a string (e.g., "Basic").
- `token`: Base64-encoded token.

--- 

### Initialize Viewer
To initialize the RxView360 viewer with the correct layout settings:

```typescript
RxCore.initialize(layout, divid, class);
```
- `layout`: Object containing offsetWidth and offsetHeight properties.
- `divid`: ID of the div where the viewer will be attached (optional).
- `class`: CSS class to style the viewer (optional).

---

## Compare/Overlay
### Server-Side Compare
Use RxCore.compare() to create a server-side comparison between two documents:

```typescript
RxCore.compare(okcancel);
```
- `okcancel`: Set to true to initiate the compare.

---

### Client-Side Compare
To overlay two open files and compare them on the client side:

```typescript
RxCore.overlayFiles(filebackground, fileoverlay);
```
- `filebackground`: URL or file path of the background document.
- `fileoverlay`: URL or file path of the overlay document.

---

### BIM/3D
For 3D operations, use methods like RxCore.select3D() to interact with 3D models:

```typescript
RxCore.select3D(selected);
```
- `selected`: Set to true to activate the 3D selection tool.

Use `RxCore.walkThrough3D()` for first-person navigation:

```typescript
RxCore.walkThrough3D(selected);
```
- `selected`: Boolean to toggle the walkthrough mode.

To manage camera views, use `RxCore.set3DmodelcurFloor()` for adjusting camera positioning based on the floor level:

```typescript
RxCore.set3DmodelcurFloor(floornum);
```

- `floornum`: Floor number to navigate.

---

## CAD Operations
### Layers
Turn vector layers on or off:

```typescript
RxCore.vectorLayersAll(onOff);
```
- `onOff`: Boolean to turn all layers on (true) or off (false).

---

### Blocks
To select a specific 2D block in a vector file:

```typescript
RxCore.selectVectorBlock(blockid);
```
- `blockid`: The ID of the vector block.

---

### Attributes
To modify or retrieve attributes of a block:

```typescript
RxCore.getBlockAttributes(blockid);
```
- `blockid`: The ID of the block whose attributes you want to access.

---

## Annotations/Markup
### Getting the Markup List
To get a list of all markup objects:

```typescript
RxCore.getmarkupGUIDs();
```
This returns an array of GUIDs representing the unique identifiers of markup objects in the document.

You can then use:

```typescript
RxCore.getmarkupobjByGUID(GUID);
```
- `GUID`: Unique identifier for the markup object.