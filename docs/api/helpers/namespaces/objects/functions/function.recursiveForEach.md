# Function: recursiveForEach()

Function, that will iterate over an object.
It will call the callback on every element.

## Author

M.Karkowski

## Export

```ts
recursiveForEach(
  obj: any,
  prefix?: string = "",
  dataCallback?: Function,
  _SPLITCHAR?: string = SPLITCHAR,
  _callOnlyOnValues?: boolean = true,
  _maxDepth?: number = Infinity,
  _parent?: string = "",
  _level?: number = 0): any
```

## Parameters

| Parameter           | Type                                                                                 | Default value | Description                                                         |
| :------------------ | :----------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------ |
| obj                 | `any`                                                                                | undefined     | The Object to iterate                                               |
| prefix?             | `string`                                                                             | ""            | A prefix for the Path.                                              |
| dataCallback?       | (`path`: `string`, `data`: `any`, `parent?`: `string`, `level?`: `number`) => `void` | undefined     | Callback, that will be called.                                      |
| \_SPLITCHAR?        | `string`                                                                             | SPLITCHAR     | The Splitchar to use, to generate the path                          |
| \_callOnlyOnValues? | `boolean`                                                                            | true          | A Flag, to start the                                                |
| \_maxDepth?         | `number`                                                                             | Infinity      | Determine the max Depth, after which the Iteration will be stopped. |
| \_parent?           | `string`                                                                             | ""            | For Recursive call only                                             |
| \_level?            | `number`                                                                             | 0             | For Recursive call only                                             |

## Returns

`any`

{\*}
