---
title: The RxText Object
---

**Component name**: `RxTextCom.dll`

## Introduction to RxTextCOM

### General Information

The `RxTextCOM` component provides methods to search for and extract text from documents and drawings.

**NOTE**: `RxTextCOM` has been designed to cooperate with other RxSDK components and cannot be used unless these components are used to load and display the document.

## RxText Methods

### TextExtract

Extracts text from the given document.

#### Syntax

```
TextExtract(LPDISPATCH Doc, long Page, BSTR *Text)
```

#### Parameters

- **Doc**: Document (`IRxDoc`) pointer.
- **Page**: Page from which text will be extracted. Set to `-1` to extract text from the entire document.
- **Text**: Extracted text.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### TextExtractRect

Extracts text from the given document within a specified page and rectangular area. The coordinates must be in document world coordinates.

#### Syntax

```
TextExtractRect(LPDISPATCH Doc, long Page, long x1, long y1, long x2, long y2, BSTR *Text)
```

#### Parameters

- **Doc**: Document (`IRxDoc`) pointer.
- **Page**: Page from which text will be extracted. Set to `-1` to extract text from the entire document.
- **x1**: Text bounding rectangle left coordinate.
- **y1**: Text bounding rectangle upper coordinate.
- **x2**: Text bounding rectangle right coordinate.
- **y2**: Text bounding rectangle lower coordinate.
- **Text**: Extracted text.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### TextSearch

Searches for text in the given document. The search text may contain wildcards (`?` and `*`). The returned rectangle is in document world coordinates.

#### Syntax

```
TextSearch(LPDISPATCH Doc, long Page, BSTR Text, long *FoundOnPage, long *x1, long *y1, long *x2, long *y2)
```

#### Parameters

- **Doc**: Document (`IRxDoc`) pointer.
- **Page**: Page to be searched for text. Set to `-1` to search the entire document.
- **Text**: Text to search for. May contain wildcards (`*` and `?`).
- **FoundOnPage**: If text is found, this variable is updated with the page where the text was found.
- **x1**: Text bounding rectangle left coordinate if text is found.
- **y1**: Text bounding rectangle upper coordinate if text is found.
- **x2**: Text bounding rectangle right coordinate if text is found.
- **y2**: Text bounding rectangle lower coordinate if text is found.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

### TextSearchNext

Searches for the next occurrence of text previously found with the `TextSearch` method. The returned rectangle is in document world coordinates.

#### Syntax

```
TextSearchNext(long *FoundOnPage, long *x1, long *y1, long *x2, long *y2)
```

#### Parameters

- **FoundOnPage**: If text is found, this variable is updated with the page where the text was found.
- **x1**: Text bounding rectangle left coordinate if text is found.
- **y1**: Text bounding rectangle upper coordinate if text is found.
- **x2**: Text bounding rectangle right coordinate if text is found.
- **y2**: Text bounding rectangle lower coordinate if text is found.

#### Returns

- `HRESULT`: `S_OK` on success, `E_FAIL` on failure.

---

## RxText Properties

| Property          | Type | Access     | Description                                                                                                     |
| ----------------- | ---- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| **CanExtract**    | long | Read-only  | Returns `true` if text can be extracted from the document.                                                      |
| **IncludeFooter** | long | Read/Write | If `true`, text in the footer will also be searched or extracted.                                               |
| **IncludeHeader** | long | Read/Write | If `true`, text in the header will also be searched or extracted.                                               |
| **IsSearchAble**  | long | Read-only  | Returns `true` if text can be searched in this document.                                                        |
| **MatchCase**     | long | Read/Write | If `true`, the text in the document must match the case of the search text.                                     |
| **MatchWord**     | long | Read/Write | If `true`, searches for whole word occurrences only (not parts of larger words). Wildcards disable this option. |
| **Version**       | BSTR | Read-only  | Returns the version of the currently installed `RxTextCom` component.                                           |
