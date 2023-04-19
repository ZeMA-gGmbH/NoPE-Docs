# Function: generatePingServices()

Generate and registers a ping service.

## Author

M.Karkowski

## Export

```ts
generatePingServices(dispatcher: INopeDispatcher): Promise<{determinePing: (target: string) => Promise<{dispatcherId: string;
isMaster: boolean;
ping: number;
requestId: string;
timestamp: number;}>;
pingAll: () => Promise<{avg: number;
max: {index: number;
max: number;};
min: {index: number;
min: number;};
pings: {dispatcherId: string;
isMaster: boolean;
ping: number;
requestId: string;
timestamp: number;}[];}>;}>
```

## Parameters

| Parameter  | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| dispatcher | [`INopeDispatcher`](../../../interfaces/interface.INopeDispatcher.md) |

## Returns

`Promise`<\{determinePing: (`target`: `string`) => `Promise`<\{dispatcherId: `string`;
isMaster: `boolean`;
ping: `number`;
requestId: `string`;
timestamp: `number`;}\>;
pingAll: () => `Promise`<\{avg: `number`;
max: \{index: `number`;
max: `number`;};
min: \{index: `number`;
min: `number`;};
pings: \{dispatcherId: `string`;
isMaster: `boolean`;
ping: `number`;
requestId: `string`;
timestamp: `number`;}[];}\>;}\>

The function to ping all dispatchers.
