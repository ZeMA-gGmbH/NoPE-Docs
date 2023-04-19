# Function: arraysEqual()

Function that will compare two arrays, if they are equal.

# Example:

```javascript
const a = [1, 2, 3, 4, 5];
arraysEqual(a, [1, 2, 3, 4]); // => false;
arraysEqual(a, [1, 2, 3, 4, 5]); // => true;
arraysEqual(a, [1, 2, 3, 5, 4], false); // => true;
```

```ts
arraysEqual(
  a: any[],
  b: any[],
  considerOrder: boolean = true): boolean
```

## Parameters

| Parameter     | Type      | Default value | Description                           |
| :------------ | :-------- | :------------ | :------------------------------------ |
| a             | `any`[]   | undefined     | Array Element A                       |
| b             | `any`[]   | undefined     | Array Element B                       |
| considerOrder | `boolean` | true          | Flag to enable/disable Order checking |

## Returns

`boolean`
