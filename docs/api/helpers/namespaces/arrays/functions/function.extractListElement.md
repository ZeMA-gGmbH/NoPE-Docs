# Function: extractListElement()

Extracts the Data of the given List

# Example:

```javascript
const list = [
  { id: 1, data: "a" },
  { id: 2, data: "b" },
];
const res = extractListElement(list, "data"); // => ["a","b"]
```

## Export

```ts
extractListElement(list: any[], path: string): any[]
```

## Parameters

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| list      | `any`[]  | List, where data should be extracted  |
| path      | `string` | path pointing to the Data in the List |

## Returns

`any`[]

List only containing the Elements.
