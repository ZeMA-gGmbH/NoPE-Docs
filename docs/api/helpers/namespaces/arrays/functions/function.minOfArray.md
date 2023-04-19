# Function: minOfArray()

Helper to determine the minimum of an array

# Example 1:

```javascript
const a = [1, 2, 3, 4];
// default behavior:
minOfArray(a, ""); // => 1
// if no data present at the path the default value is used:
minOfArray(a, "a", 1); // => 1
```

# Example 2:

```javascript
const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
// default behavior:
minOfArray(a, "value"); // => 1
// if no data present at the path the default value is used:
minOfArray(a, "a", 1); // => 1
```

```ts
minOfArray<T>(
  arr: T[],
  path: string | keyof T,
  defaultValue?: number = 0): object
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter     | Type                    | Default value | Description                                               |
| :------------ | :---------------------- | :------------ | :-------------------------------------------------------- |
| arr           | `T`[]                   | undefined     | The array                                                 |
| path          | `string` \| _keyof_ `T` | undefined     | The path to the data.                                     |
| defaultValue? | `number`                | 0             | if no data present at the path the default value is used. |

## Returns

`object`

```ts
index: number;
```

```ts
min: number;
```
