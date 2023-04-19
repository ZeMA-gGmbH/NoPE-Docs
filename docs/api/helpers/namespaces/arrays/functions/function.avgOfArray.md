# Function: avgOfArray()

Helper to determine the average of an array

# Example 1:

```javascript
const a = [1, 2, 3, 4];
// default behavior:
avgOfArray(a, ""); // => 2.5
// if no data present at the path the default value is used:
avgOfArray(a, "a", 1); // => 1
```

# Example 2:

```javascript
const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
// default behavior:
avgOfArray(a, "value"); // => 2.5
// if no data present at the path the default value is used:
avgOfArray(a, "a", 1); // => 1
```

## Author

M.Karkowski

## Export

```ts
avgOfArray(
  arr: any[],
  path: string,
  defaultValue?: number = 0): number
```

## Parameters

| Parameter     | Type     | Default value | Description                                               |
| :------------ | :------- | :------------ | :-------------------------------------------------------- |
| arr           | `any`[]  | undefined     | The array                                                 |
| path          | `string` | undefined     | The path to the data.                                     |
| defaultValue? | `number` | 0             | if no data present at the path the default value is used. |

## Returns

`number`

{number}
