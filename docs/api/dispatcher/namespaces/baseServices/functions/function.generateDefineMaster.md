# Function: generateDefineMaster()

A Helper to create a Service to manually define a master.

## Author

M.Karkowski

## Export

```ts
generateDefineMaster(dispatcher: INopeDispatcher): Promise<{setMaster: () => Promise<void>;}>
```

## Parameters

| Parameter  | Type                                                                  | Description            |
| :--------- | :-------------------------------------------------------------------- | :--------------------- |
| dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) | The Dispatcher to use. |

## Returns

`Promise`<\{setMaster: () => `Promise`<`void`\>;}\>
