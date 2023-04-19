# Function: generateSyncServices()

Registers a sync service, which will syncronize the time

## Author

M.Karkowski

## Export

```ts
generateSyncServices(dispatcher: INopeDispatcher): Promise<{manualSyncTime: () => Promise<void>;}>
```

## Parameters

| Parameter  | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) |

## Returns

`Promise`<\{manualSyncTime: () => `Promise`<`void`\>;}\>

The Sync-Method to call
