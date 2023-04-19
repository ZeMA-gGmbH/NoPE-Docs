# Function: maxOfArray()

Helper to determine the maximum of an array

# Example 1:

```javascript
const a = [1, 2, 3, 4];
// default behavior:
maxOfArray(a, ""); // => 4
// if no data present at the path the default value is used:
maxOfArray(a, "a", 1); // => 1
```

# Example 2:

```javascript
const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
// default behavior:
maxOfArray(a, "value"); // => 4
// if no data present at the path the default value is used:
maxOfArray(a, "a", 1); // => 1
```

```ts
maxOfArray(
  arr: any[],
  path: string,
  defaultValue?: number = 0): object
```

## Parameters

| Parameter     | Type     | Default value | Description                                               |
| :------------ | :------- | :------------ | :-------------------------------------------------------- |
| arr           | `any`[]  | undefined     | The array                                                 |
| path          | `string` | undefined     | The path to the data.                                     |
| defaultValue? | `number` | 0             | if no data present at the path the default value is used. |

## Returns

`object`

```ts
index: number;
```

```ts
max: number;
```
