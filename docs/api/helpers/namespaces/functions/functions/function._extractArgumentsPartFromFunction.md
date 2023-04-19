# Function: \_extractArgumentsPartFromFunction()

Helper to extrat the code of the function:

## Example

```javascript
function func(betterMakeSure, itWorksWith, longVariables = "too") {}

const r = extractArgumentsPartFromFunction(func);

// => r  = (betterMakeSure,itWorksWith,longVariables='too')
```

```ts
_extractArgumentsPartFromFunction(func: any): string
```

## Parameters

| Parameter | Type  |
| :-------- | :---- |
| func      | `any` |

## Returns

`string`
