This must be called before `RxCore.initialize`. All calls to the server will then use this authentication.

### Syntax

```typescript
RxCore.setAuthorization(type, token)
```

### Parameters

- `type`: **string** — Type of authentication method.
- `token`: **string** — Base64 encoded string representing the token.

### Returns

- **NA** — This method does not return a value.

### Example

```typescript
RxCore.setAuthorization("Basic", "Q0FOWU9OQk9YXEZyYW5rZXN0ZXI=");
```