# Function: addAllBaseServices()

Helper, which will enable all BaseServices

## Author

M.Karkowski

## Export

```ts
addAllBaseServices(dispatcher: INopeDispatcher, opts?: object = {}): Promise<{determinePing: (target: string) => Promise<{dispatcherId: string;
isMaster: boolean;
ping: number;
requestId: string;
timestamp: number;}>;
manualSyncTime: () => Promise<void>;
pingAll: () => Promise<{avg: number;
max: {index: number;
max: number;};
min: {index: number;
min: number;};
pings: Promise<{dispatcherId: string;
isMaster: boolean;
ping: number;
requestId: string;
timestamp: number;}>[];}>;
setMaster: () => Promise<void>;}>
```

## Parameters

| Parameter  | Type                                                                  | Description            |
| :--------- | :-------------------------------------------------------------------- | :--------------------- |
| dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) | The Dispatcher to use. |
| opts?      | `object`                                                              |                        |

## Returns

`Promise`<\{determinePing: (`target`: `string`) => `Promise`<\{dispatcherId: `string`;
isMaster: `boolean`;
ping: `number`;
requestId: `string`;
timestamp: `number`;}\>;
manualSyncTime: () => `Promise`<`void`\>;
pingAll: () => `Promise`<\{avg: `number`;
max: \{index: `number`;
max: `number`;};
min: \{index: `number`;
min: `number`;};
pings: `Promise`<\{dispatcherId: `string`;
isMaster: `boolean`;
ping: `number`;
requestId: `string`;
timestamp: `number`;}\>[];}\>;
setMaster: () => `Promise`<`void`\>;}\>

The provided Functions.
