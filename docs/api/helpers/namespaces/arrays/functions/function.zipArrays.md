# Function: zipArrays()

Function to ZIP to Arrays.

# Example 1:

```javascript
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
zipArrays(a, b); // => [(1,"a"), (2, "b"), ...]
```

```ts
zipArrays<T, K>(arr1: T[], arr2: K[]): [T, K][]
```

## Type parameters

| Parameter |
| :-------- |
| T         |
| K         |

## Parameters

| Parameter | Type  |
| :-------- | :---- |
| arr1      | `T`[] |
| arr2      | `K`[] |

## Returns

[`T`, `K`][]
