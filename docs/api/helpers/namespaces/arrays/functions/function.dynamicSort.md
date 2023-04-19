# Function: dynamicSort()

Sorts a List based on the given property
Usage :

```javascript
a = [
  { a: 1, b: 2 },
  { a: 2, b: 1 },
];
b = a.sort(dynamicSort("b"));
(b) => [
  { a: 2, b: 1 },
  { a: 1, b: 2 },
];
```

## Export

```ts
dynamicSort(_property: string, reverse: boolean = false): any
```

## Parameters

| Parameter  | Type      | Default value | Description                           |
| :--------- | :-------- | :------------ | :------------------------------------ |
| \_property | `string`  | undefined     | Property Name / Path to Sort the List |
| reverse    | `boolean` | false         | -                                     |

## Returns

`any`
