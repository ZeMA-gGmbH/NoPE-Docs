# Function: getPackageLoader()

Function to extract the Package-Loader. This one here includes file access.

```ts
getPackageLoader(dispatcherOptions: INopeDispatcherOptions, options: object = {}): INopePackageLoader
```

## Parameters

| Parameter         | Type                                                                                    | Description                                      |
| :---------------- | :-------------------------------------------------------------------------------------- | :----------------------------------------------- |
| dispatcherOptions | [`INopeDispatcherOptions`](../../dispatcher/types/type-alias.INopeDispatcherOptions.md) | The provided options for the Dispatcher          |
| options           | `object`                                                                                | Settings for the creation of the Dispatcher etc. |

## Returns

[`INopePackageLoader`](../../types/namespaces/nope/interfaces/interface.INopePackageLoader.md)

The Package loader.
