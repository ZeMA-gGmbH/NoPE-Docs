# Function: loadPackages()

Function to load the Packages.

## Export

```ts
loadPackages(
  loader: INopePackageLoader,
  filename: string = ...,
  delay: number = 2): Promise<void>
```

## Parameters

| Parameter | Type                                                                                           | Default value |
| :-------- | :--------------------------------------------------------------------------------------------- | :------------ |
| loader    | [`INopePackageLoader`](../../types/namespaces/nope/interfaces/interface.INopePackageLoader.md) | undefined     |
| filename  | `string`                                                                                       | undefined     |
| delay     | `number`                                                                                       | 2             |

## Returns

`Promise`<`void`\>
