---
title: Setting the User
---


### Set User
There are some options on setting user with the Rasterex Web SDK.
If the server configuration allow you to override the current user you can use the following method.


```typescript
    RxCore.setUser(sign, disp);
```

- `sign`: Unique identifier for the user.
- `disp`: Friendly display name to present for the user.

Using this option require the below permission is set in the [defaultconfig.xml](../../server/#defaultconfigxml) file.



```XML
<CanChangeSignature>True</CanChangeSignature>
```

--- 
If you are running with a more strict security and CanChangeSignature is not enabled.

```XML
<CanChangeSignature>False</CanChangeSignature>
```

 You can set the user data before the viewer is [initialized](../Developer-Guide/Initialize-Viewer) using RxCore.setJSONConfiguration.
 This method can be used to override the configuarion data loaded from the server.


```typescript
    RxCore.setJSONConfiguration(JSNObj);
```

Example of JSON object were UserName and DisplayName as retrieved from [defaultconfig.xml](../../server/#defaultconfigxml) is overridden. For these objects the value for Command should always be "GetConfig".

```typescript
    let JSNObj = [
      {
          Command: "GetConfig",
          UserName: "Demo",
          DisplayName : "Demo User"
          
      }
    ];
```
A third option is to replace the server configuration source with an alternative URL. This must be set before calling [initialize](../Developer-Guide/Initialize-Viewer).


```typescript
    RxCore.setConfiguration(szURL);
```

- `szURL`: A valid URL that returns an XML structure. See [defaultconfig.xml](../../server/#defaultconfigxml) on how to set up the XML source.

   
    
### User Authentication    

If access to the server is restricted using a password and username the RxCore.setAuthorization method can be used to provide the client access to the server resource.

This is normally called before initializing the viewer:


```typescript
RxCore.setAuthorization(type, token);
```

- `type`: Authentication method as a string (e.g., "Basic").
- `token`: Base64-encoded token.

--- 