Connection callback called when the `RxCore.MarkupUserDialog` or `RxCore.MarkupToolsMethod` is called.

### Additional Methods

- **getSignature()**: Return the signature for the current user.
- **setSignature(sign)**: Set the current user signature.
- **getCanChangeSign()**: Return true if the user signature can be changed.
- **SetUserMarkupdisplay(numuser, state)**: Turn the display of markup for the user on/off.

###Callback Parameters

- **Userlist**: Array of user objects.

```javascript
User {
    display: Boolean; // user markup on/off
    DisplayName: string; // user display name
}
```
