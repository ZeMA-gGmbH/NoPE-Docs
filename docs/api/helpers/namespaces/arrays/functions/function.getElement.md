# Function: getElement()

Extracts the first Element if Possible, which includes the Operand

# Example

```javascript
const a = [{ path: "hallo" }, { path: "hallo2" }];
const res = getElement(a, "hallo2", "path"); // => {path:'hallo2'}
```

## Export

```ts
getElement<T>(
  list: T[],
  operand: any,
  path?: string = ""): T | null
```

## Type parameters

| Parameter | Description |
| :-------- | :---------- |
| T         |             |

## Parameters

| Parameter | Type     | Default value | Description                           |
| :-------- | :------- | :------------ | :------------------------------------ |
| list      | `T`[]    | undefined     | The list which is considered          |
| operand   | `any`    | undefined     | The Element which should looked for   |
| path?     | `string` | ""            | The where the Element should be found |

## Returns

`T` \| `null`
