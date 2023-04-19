# Function: elementInArray()

Function, to Test whether the Element is present in the Array

# Example 1:

```javascript
const list = [
  { id: 1, data: "a" },
  { id: 2, data: "b" },
  { id: 3, data: "c" },
];
elementInArray("b", list, "data"); // => true
elementInArray(5, list, "data"); // => false
elementInArray("b", list, "property_not_in_data"); // => false
```

# Example 2:

```javascript
const list = [
  { id: 1, data: ["a"] },
  { id: 2, data: ["b"] },
  { id: 3, data: ["c"] },
];
elementInArray("b", list, "data/0"); // => true
elementInArray("d", list, "data/0"); // => false
elementInArray("b", list, "data"); // => false <- Path doesnt contain 'b'
elementInArray("b", list, "data/1"); // => false <- Path wrong, no elements there
```

```ts
elementInArray<T>(
  objToTest: T,
  array: T[],
  path: string): number
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| objToTest | `T`      | The Object to Test                              |
| array     | `T`[]    | The array to consider                           |
| path      | `string` | The path, under which the element will be found |

## Returns

`number`
