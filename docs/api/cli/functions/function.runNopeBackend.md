# Function: runNopeBackend()

Main tool to create a runtime. Returns a [INopePackageLoader](../../types/namespaces/nope/interfaces/interface.INopePackageLoader.md).

## Async

```ts
runNopeBackend(_args?: Partial<RunArgs> = {}): Promise<INopePackageLoader>
```

## Parameters

| Parameter | Type                   | Description                         |
| :-------- | :--------------------- | :---------------------------------- |
| \_args?   | `Partial`<`RunArgs`\> | Arguments to configure the runtime. |

## Returns

`Promise`<[`INopePackageLoader`](../../types/namespaces/nope/interfaces/interface.INopePackageLoader.md)\>

The central logger.
