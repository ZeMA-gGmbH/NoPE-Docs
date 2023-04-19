# Function: flattenDeep()

Function, which will Flatten the Array.

# Example:

```javascript
const a = [1, [2, [3, [4, [5]]]]];
flattenDeep(a); // => [1,2,3,4,5]
```

```ts
flattenDeep<T>(arrayToFlatten: any): T[]
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter      | Type  | Description |
| :------------- | :---- | :---------- |
| arrayToFlatten | `any` | The Array   |

## Returns

`T`[]
