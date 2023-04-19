# Function: loadFunctions()

Helper to read function provided in the defined configuration.

## Author

M.Karkowski

## Export

```ts
loadFunctions(
  loader: INopePackageLoader,
  filename?: string = ...,
  delay?: number = 2): Promise<any[]>
```

## Parameters

| Parameter | Type                                                                                           | Default value |
| :-------- | :--------------------------------------------------------------------------------------------- | :------------ |
| loader    | [`INopePackageLoader`](../../types/namespaces/nope/interfaces/interface.INopePackageLoader.md) | undefined     |
| filename? | `string`                                                                                       | undefined     |
| delay?    | `number`                                                                                       | 2             |

## Returns

`Promise`<`any`[]\>
