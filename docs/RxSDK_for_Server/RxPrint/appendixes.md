---
title: Appendixes
---

Here you will find additional information about the RxSDK objects and their usage.

## Appendix A: Return Values

The COM objects expose one or more interfaces each. All methods defined by these interfaces return an `HRESULT` status value to inform the client about the success or failure of the requested operation.

Currently, the RxSDK objects return the following standard `HRESULT` values:

| Name           | Description                                  | Value      |
| -------------- | -------------------------------------------- | ---------- |
| S_OK           | Operation successful                         | 0x00000000 |
| S_FALSE        | Operation successful, but may have been void | 0x00000001 |
| E_UNEXPECTED   | Unexpected failure                           | 0x8000FFFF |
| E_NOTIMPL      | Not implemented                              | 0x80004001 |
| E_OUTOFMEMORY  | Failed to allocate necessary memory          | 0x8007000E |
| E_INVALIDARG   | One or more arguments are invalid            | 0x80070057 |
| E_NOINTERFACE  | No such interface supported                  | 0x80004002 |
| E_POINTER      | Invalid pointer                              | 0x80004003 |
| E_HANDLE       | Invalid handle                               | 0x80070006 |
| E_ABORT        | Operation aborted                            | 0x80004004 |
| E_FAIL         | Unspecified failure                          | 0x80004005 |
| E_ACCESSDENIED | General access denied error                  | 0x80070005 |

### Additional Resources

More information about these values can be found in the Platform SDK delivered by Microsoft, as well as on the [MSDN website](http://msdn.microsoft.com).
