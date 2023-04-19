# Function: countElements()

Function to count the Number of Element in an Array. A Dict with the Elements
as string will be returned.

# Example:

```javascript
const a = [1, 2, 3, 4, 5, 5, 5];
countElements(a); // => Map<{1:1, 2:1,3:1,4:1,5:3}>;
```

```ts
countElements<T>(array: T[]): Map<T, number>
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type  | Description |
| :-------- | :---- | :---------- |
| array     | `T`[] | The Array   |

## Returns

`Map`<`T`, `number`\>
