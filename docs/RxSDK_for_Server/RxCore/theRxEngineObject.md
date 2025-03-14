---
title: The RxEngine Object
---

**Component name**: `RxDocCOM.dll`

The `RxEngine` object is the foundational component of the RxSDK, responsible for initializing the engine, managing file format filters, and handling licensing. This section details its methods and properties.

---

## RxEngine Methods

### Start

Loads and starts the engine. This method must be called before all other methods. The `MainKey` and `BaseKey` parameters define the registry key where filter settings are stored.

#### Syntax

```
HRESULT Start(RX_REGISTRY_KEY MainKey, BSTR BaseKey)
```

#### Parameters

- **MainKey**: The main registry key. Possible values:
  - `RX_REGKEY_CURRENT_USER = 0`
  - `RX_REGKEY_DEFAULT_USER = 1`
  - `RX_REGKEY_LOCAL_MACHINE = 2`
- **BaseKey**: The base registry key (e.g., `Software\Rasterex\RxFilters`).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### StartEx

Loads and starts the engine, similar to `Start`, but includes an additional parameter for specifying a license file path or FlexLM server URL.

#### Syntax

```
HRESULT StartEx(RX_REGISTRY_KEY MainKey, BSTR BaseKey, BSTR License)
```

#### Parameters

- **MainKey**: The main registry key (see `Start` for values).
- **BaseKey**: The base registry key (e.g., `Software\Rasterex\RxFilters`).
- **License**: Path to a license file or address to a running FlexLM server (e.g., `@yourserver`).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### Stop

Stops the engine and releases all modules, including file format filters, from memory. This must be the last method called. After calling `Stop`, no other RxSDK methods may be used. Failing to call this may cause an exception in your code.

#### Syntax

```
HRESULT Stop()
```

#### Parameters

- None

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### EnableFilter

Enables or disables a specified filter.

#### Syntax

```
HRESULT EnableFilter(BSTR Name, long Enable)
```

#### Parameters

- **Name**: Name of the filter to enable or disable.
- **Enable**: Non-zero to enable the filter, zero to disable it.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetEnableFilter

Checks if a given filter is enabled.

#### Syntax

```
HRESULT GetEnableFilter(BSTR Name, long *Enable)
```

#### Parameters

- **Name**: Name of the filter to check.
- **Enable**: Returns non-zero if the filter is enabled, zero if disabled.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetFilterExtension

Returns the file extensions supported by a given filter.

#### Syntax

```
HRESULT GetFilterExtension(BSTR Name, BSTR *Extension)
```

#### Parameters

- **Name**: Name of the filter.
- **Extension**: Returns the extensions used by the filter.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetFilterGroup

Returns the group name that a given filter belongs to.

#### Syntax

```
HRESULT GetFilterGroup(BSTR Name, BSTR *Group)
```

#### Parameters

- **Name**: Name of the filter.
- **Group**: Returns the name of the group the filter belongs to.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetFilterVersion

Returns the version string of a given filter.

#### Syntax

```
HRESULT GetFilterVersion(BSTR Name, BSTR *Version)
```

#### Parameters

- **Name**: Name of the filter.
- **Version**: Returns the version string.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetFilterFeatureName

Returns the feature name of a filter, used for licensing 3D filters.

#### Syntax

```
HRESULT GetFilterFeatureName(BSTR Name, BSTR *Feature)
```

#### Parameters

- **Name**: Name of the filter.
- **Feature**: Returns the feature name.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetLoadFilterInfo

Retrieves information about a filter capable of loading files. See the `NumLoadFilters` property for the total number of load filters.

#### Syntax

```
HRESULT GetLoadFilterInfo(short nIndex, BSTR* sFilterName, BSTR* sGroup, BSTR* sFormat, BSTR* sExtension, BSTR* sVersion, BOOL* bSetup)
```

#### Parameters

- **nIndex**: Index of the filter to query.
- **sFilterName**: Returns the name of the filter.
- **sGroup**: Returns the group name of the filter.
- **sFormat**: Returns the format supported by the filter.
- **sExtension**: Returns the file extensions supported by the filter.
- **sVersion**: Returns the filter version (e.g., `Product Version.MainRevision.SubRevision.BuildNumber`).
- **bSetup**: Returns `TRUE` if the filter can be configured by the user (use `FilterSetup` to configure).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetRasterSaveFilterInfo

Retrieves information about a filter capable of saving raster files. See the `NumRasterSaveFilters` property for the total number of raster save filters.

#### Syntax

```
HRESULT GetRasterSaveFilterInfo(short Index, BSTR* FilterName, BSTR* Group, BSTR* Format, BSTR* Extension, BSTR* Version, RX_BITS_PER_PIXEL* RasterBits, BOOL* Setup)
```

#### Parameters

- **Index**: Index of the filter to query.
- **FilterName**: Returns the name of the filter.
- **Group**: Returns the group name of the filter.
- **Format**: Returns the format saved by the filter.
- **Extension**: Returns the file extensions supported by the filter.
- **Version**: Returns the filter version (e.g., `Product Version.MainRevision.SubRevision.BuildNumber`).
- **RasterBits**: Returns supported bit depths (combined flags):
  - `RX_BITS_1 = 1`
  - `RX_BITS_2 = 2`
  - `RX_BITS_4 = 4`
  - `RX_BITS_8 = 8`
  - `RX_BITS_16 = 16`
  - `RX_BITS_24 = 256`
  - `RX_BITS_32 = 32`
  - Example: A value of `264` indicates support for 8-bit and 24-bit images.
- **Setup**: Returns `TRUE` if the filter can be configured by the user (use `FilterSetup` to configure).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetRasterSaveFilterInfo2

Similar to `GetRasterSaveFilterInfo`, but includes multi-page support information. See the `NumRasterSaveFilters` property for the total number of raster save filters.

#### Syntax

```
HRESULT GetRasterSaveFilterInfo2(short Index, BSTR* FilterName, BSTR* Group, BSTR* Format, BSTR* Extension, BSTR* Version, RX_BITS_PER_PIXEL* RasterBits, BOOL* Setup, BOOL* MultiPage)
```

#### Parameters

- **Index**: Index of the filter to query.
- **FilterName**: Returns the name of the filter.
- **Group**: Returns the group name of the filter.
- **Format**: Returns the format saved by the filter.
- **Extension**: Returns the file extensions supported by the filter.
- **Version**: Returns the filter version (e.g., `Product Version.MainRevision.SubRevision.BuildNumber`).
- **RasterBits**: Returns supported bit depths (see `GetRasterSaveFilterInfo` for values).
- **Setup**: Returns `TRUE` if the filter can be configured by the user (use `FilterSetup` to configure).
- **MultiPage**: Returns `TRUE` if the filter supports saving multi-page raster documents.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetSaveFilterPasswordSupport

Checks if a given save filter supports password protection (e.g., for PDF or DWF files).

#### Syntax

```
HRESULT GetSaveFilterPasswordSupport(BSTR Name, long *Supported)
```

#### Parameters

- **Name**: Filter name.
- **Supported**: Returns non-zero if the filter supports passwords, zero otherwise.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetVectorSaveFilterInfo

Retrieves information about a filter capable of saving vector files. See the `NumVectorSaveFilters` property for the total number of vector save filters.

#### Syntax

```
HRESULT GetVectorSaveFilterInfo(short Index, BSTR* FilterName, BSTR* Group, BSTR* Format, BSTR* Extension, BSTR* Version, BOOL* Setup)
```

#### Parameters

- **Index**: Index of the filter to query.
- **FilterName**: Returns the name of the filter.
- **Group**: Returns the group name of the filter.
- **Format**: Returns the format saved by the filter.
- **Extension**: Returns the file extensions supported by the filter.
- **Version**: Returns the filter version (e.g., `Product Version.MainRevision.SubRevision.BuildNumber`).
- **Setup**: Returns `TRUE` if the filter can be configured by the user (use `FilterSetup` to configure).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### GetVector3DSaveFilterInfo

Retrieves information about a filter capable of saving 3D vector files. See the `NumVector3DSaveFilters` property for the total number of 3D vector save filters.

#### Syntax

```
HRESULT GetVector3DSaveFilterInfo(short Index, BSTR* FilterName, BSTR* Group, BSTR* Format, BSTR* Extension, BSTR* Version, BOOL* Setup)
```

#### Parameters

- **Index**: Index of the filter to query.
- **FilterName**: Returns the name of the filter.
- **Group**: Returns the group name of the filter.
- **Format**: Returns the format saved by the filter.
- **Extension**: Returns the file extensions supported by the filter.
- **Version**: Returns the filter version (e.g., `Product Version.MainRevision.SubRevision.BuildNumber`).
- **Setup**: Returns `TRUE` if the filter can be configured by the user (use `FilterSetup` to configure).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetFilterExtension

Sets the file extensions used by a given filter to speed up format detection and loading.

#### Syntax

```
HRESULT SetFilterExtension(BSTR sName, BSTR sExtension)
```

#### Parameters

- **sName**: Name of the filter.
- **sExtension**: Extensions to be used by the filter. Format:
  - Each extension starts with `*.`
  - Extensions are separated by commas, semicolons, or spaces (e.g., `*.dwg, *.dxf`).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetFilterPriority

Sets the priority for a given filter.

#### Syntax

```
HRESULT SetFilterPriority(BSTR Name, long Priority)
```

#### Parameters

- **Name**: Name of the filter.
- **Priority**: Priority level (e.g., highest, medium (default), low).

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### FilterSetup

Displays the setup dialog for a given filter.

#### Syntax

```
HRESULT FilterSetup(long Window, long X, long Y, BSTR Caption, BSTR FilterName)
```

#### Parameters

- **Window**: Handle of the parent window.
- **X**: Left position of the dialog.
- **Y**: Top position of the dialog.
- **Caption**: Dialog box title.
- **FilterName**: Name of the filter to configure.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetLoadFilterConfig

Sets a configuration object to override filter load settings. See `RxConfigCom` documentation for details.

#### Syntax

```
HRESULT SetLoadFilterConfig(LPDISPATCH pIRxConfig)
```

#### Parameters

- **pIRxConfig**: Pointer to an `IRxLoadSettings` object.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### SetSaveFilterConfig

Sets a configuration object to override filter save settings. See `RxConfigCom` documentation for details.

#### Syntax

```
HRESULT SetSaveFilterConfig(LPDISPATCH pIRxConfig)
```

#### Parameters

- **pIRxConfig**: Pointer to an `IRxSaveSettings` object.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

## RxEngine Properties

| Property                   | Type | Access     | Description                                                                                     |
| -------------------------- | ---- | ---------- | ----------------------------------------------------------------------------------------------- |
| **Features**               | LONG | Read-only  | For internal use only.                                                                          |
| **LicenseCode**            | BSTR | Write-only | OEM customers can use this to override licensing in `RxDocCom`.                                 |
| **NumLoadFilters**         | LONG | Read-only  | Returns the number of available load filters.                                                   |
| **NumRasterSaveFilters**   | LONG | Read-only  | Returns the number of available raster save filters.                                            |
| **NumVector3DSaveFilters** | LONG | Read-only  | Returns the number of available 3D vector save filters.                                         |
| **NumVectorSaveFilters**   | LONG | Read-only  | Returns the number of available vector save filters.                                            |
| **Version**                | BSTR | Read-only  | Returns the `RimEngine` version (e.g., `Product Version.MainRevision.SubRevision.BuildNumber`). |
