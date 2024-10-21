Connection callback event that returns whether the current user has permission to perform consolidation. This is used to control the visibility of GUI elements related to consolidation.

###Callback Parameters

- **Permission**: Object containing permission details.

### JavaScript

```javascript
Permission {
    consolidate: Boolean; // true if the user can perform markup consolidation.
}
```
