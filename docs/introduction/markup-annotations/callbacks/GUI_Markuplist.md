Callback event that gives a list of markup objects when markup is changed and when the markup is initially loaded.

### Additional Methods
- **getDisplayName()**: Returns the markup signature for the current user.
- **getDisplayDate()**: Returns a date string for a given date JavaScript value.

### Callback Parameters
- **Markuplist**: Array of markup objects.

```javascript
Markup {
    type: number; // Markup type
    subtype: number; // Markup subtype
    alternative: number; // Markup alternative
    color: color; // Markup color
    fontname: string; // Font name
    linewidth: number; // Width of markup object.
}
```