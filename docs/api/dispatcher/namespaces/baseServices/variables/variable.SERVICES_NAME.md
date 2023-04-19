# Variable: SERVICES_NAME

```ts
const SERVICES_NAME: object;
```

Helper to define simpler names for the Services

## Type declaration

> ```ts
> defineMaster: Function = generateDefineMaster;
> ```
>
> ### Type declaration - defineMaster
>
> A Helper to create a Service to manually define a master.
>
> #### Author
>
> M.Karkowski
>
> #### Export
>
> ```ts
> (dispatcher: INopeDispatcher): Promise<{setMaster: () => Promise<void>;}>
> ```
>
> #### Parameters
>
> | Parameter  | Type                                                                  | Description            |
> | :--------- | :-------------------------------------------------------------------- | :--------------------- |
> | dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) | The Dispatcher to use. |
>
> #### Returns
>
> `Promise`<\{setMaster: () => `Promise`<`void`\>;}\>
>
> ```ts
> pingService: Function = generatePingServices;
> ```
>
> ### Type declaration - pingService
>
> Generate and registers a ping service.
>
> #### Author
>
> M.Karkowski
>
> #### Export
>
> ```ts
> (dispatcher: INopeDispatcher): Promise<{determinePing: (target: string) => Promise<{dispatcherId: string;
> isMaster: boolean;
> ping: number;
> requestId: string;
> timestamp: number;}>;
> pingAll: () => Promise<{avg: number;
> max: {index: number;
> max: number;};
> min: {index: number;
> min: number;};
> pings: {dispatcherId: string;
> isMaster: boolean;
> ping: number;
> requestId: string;
> timestamp: number;}[];}>;}>
> ```
>
> #### Parameters
>
> | Parameter  | Type                                                                  |
> | :--------- | :-------------------------------------------------------------------- |
> | dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) |
>
> #### Returns
>
> `Promise`<\{determinePing: (`target`: `string`) => `Promise`<\{dispatcherId: `string`;
> isMaster: `boolean`;
> ping: `number`;
> requestId: `string`;
> timestamp: `number`;}\>;
> pingAll: () => `Promise`<\{avg: `number`;
> max: \{index: `number`;
> max: `number`;};
> min: \{index: `number`;
> min: `number`;};
> pings: \{dispatcherId: `string`;
> isMaster: `boolean`;
> ping: `number`;
> requestId: `string`;
> timestamp: `number`;}[];}\>;}\>
>
> The function to ping all dispatchers.
>
> ```ts
> syncingDataService: Function = enablingSyncingData;
> ```
>
> ### Type declaration - syncingDataService
>
> Generate and registers a ping service.
>
> #### Author
>
> M.Karkowski
>
> #### Export
>
> ```ts
> (dispatcher: INopeDispatcher): Promise<{}>
> ```
>
> #### Parameters
>
> | Parameter  | Type                                                                  |
> | :--------- | :-------------------------------------------------------------------- |
> | dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) |
>
> #### Returns
>
> `Promise`<\{}\>
>
> The function to ping all dispatchers.
>
> ```ts
> timeSyncingService: Function = enableTimeSyncing;
> ```
>
> ### Type declaration - timeSyncingService
>
> Registers a sync service, which will syncronize the time
>
> #### Author
>
> M.Karkowski
>
> #### Export
>
> ```ts
> (dispatcher: INopeDispatcher): Promise<{manualSyncTime: () => Promise<void>;}>
> ```
>
> #### Parameters
>
> | Parameter  | Type                                                                  |
> | :--------- | :-------------------------------------------------------------------- |
> | dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) |
>
> #### Returns
>
> `Promise`<\{manualSyncTime: () => `Promise`<`void`\>;}\>
>
> The Sync-Method to call
