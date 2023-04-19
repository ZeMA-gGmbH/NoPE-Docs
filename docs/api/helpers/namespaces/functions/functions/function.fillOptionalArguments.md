# Function: fillOptionalArguments()

Helper to fill provided arguments for the function.

```ts
fillOptionalArguments(
  func: any,
  providedArg: any[],
  argsToFill: any[],
  fromEnd: boolean = true): any[]
```

## Parameters

| Parameter   | Type      | Default value | Description                                                                             |
| :---------- | :-------- | :------------ | :-------------------------------------------------------------------------------------- |
| func        | `any`     | undefined     | The function ot be analysed                                                             |
| providedArg | `any`[]   | undefined     | The allready provided args                                                              |
| argsToFill  | `any`[]   | undefined     | The Arguments to fill                                                                   |
| fromEnd     | `boolean` | true          | A Flag to toggle, whether the arguments should be filled from the end or the beginning. |

## Returns

`any`[]
