# Interface: INopeDispatcher

# NoPE - Dispatcher

The NoPE-Dispatcher is designed as Layer between the different Modules / Dispatchers. They allow distributed computing or just a simple **_Service oriented Architecture_** (_SOA_). A dispatcher is used to link the modules, share data and events and provide a remote procedure call (rpc) interface.

## Building Blocks of a Dispatcher:

| element               | description                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectivityManager` | establishes a connection to other dispatchers and manages the status of the remotely connected dispatchers. It checks their health and removes dead dispatchers.                                                                                                                                                                                                                 |
| `eventDistributor`    | shares events accross the network (or internally). You can use this element to listen for specific events. The subscription to those events allows `mqtt`-patterns. Additionaly, you are allowed to emit event on specific topics, or pattern based topics                                                                                                                       |
| `dataDistributor`     | shares data accross the network (or internally). In comperisson to events, data is persistent and is available all the time. You can use this sub-module to listen for specific data-changes (install data-hooks), pull specific data or push data. You can pull / push data using a `mqtt`-pattern based path.                                                                  |
| `rpcManager`          | Used to perform `remote procedure calls` (see [here](https://de.wikipedia.org/wiki/Remote_Procedure_Call)). The manager keeps track of the available services. You must use the sub-module to register/unregister (new) services.                                                                                                                                                |
| `instanceManager`     | Used to create/dispose (remote) instances. The manager keeps track of the available instances in the network, allows to create `wrappers` for those instances. You must use the sub-module to register/unregister (new) instances. To allow the system to provide a service for creating instances of as specific type, you can provide a generator and provide it as `service`. |

## Export

INopeDispatcher

## Properties

### communicator

```ts
readonly communicator: ICommunicationBridge
```

The Communicator which is used

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[communicator](../../types/namespaces/nope/interfaces/interface.INopeCore.md#communicator)

### connectivityManager

```ts
readonly connectivityManager: INopeConnectivityManager
```

System to manage the connectitivy of other dispatchers.

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[connectivityManager](../../types/namespaces/nope/interfaces/interface.INopeCore.md#connectivitymanager)

### dataDistributor

```ts
readonly dataDistributor: IDataPubSubSystem<ITopicSetContentOptions, INopeObservable<unknown, unknown, unknown, ITopicSetContentOptions>, INopeTopicWithDirectAccess<any, any, any>>
```

Pub-Sub-System to share the properties and their sub
properties acorss the entire network.

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[dataDistributor](../../types/namespaces/nope/interfaces/interface.INopeCore.md#datadistributor)

### disposing

```ts
disposing: boolean;
```

A Flag, that indicates, that the core is disposing.

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[disposing](../../types/namespaces/nope/interfaces/interface.INopeCore.md#disposing)

### eventDistributor

```ts
readonly eventDistributor: IPubSubSystem<ITopicSetContentOptions, INopeEventEmitter<unknown, unknown, unknown, ITopicSetContentOptions>, INopeTopic<any, any, any>>
```

Pub-Sub-System to share the events across the system.
Events wont retain after they have been fired. You can
just subscribe to events.

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[eventDistributor](../../types/namespaces/nope/interfaces/interface.INopeCore.md#eventdistributor)

### id

```ts
readonly id: string
```

ID of the Dispatcher

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[id](../../types/namespaces/nope/interfaces/interface.INopeCore.md#id)

### instanceManager

```ts
readonly instanceManager: INopeInstanceManager
```

A Manager, which is capable of creating instance on different Managers in the Network.

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[instanceManager](../../types/namespaces/nope/interfaces/interface.INopeCore.md#instancemanager)

### options

```ts
readonly options: INopeDispatcherOptions
```

### ready

```ts
readonly ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag showing, that the system is ready.

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[ready](../../types/namespaces/nope/interfaces/interface.INopeCore.md#ready)

### rpcManager

```ts
readonly rpcManager: INopeRpcManager<IServiceOptions<any>>
```

Manager to execute and perform different

#### Author

M.Karkowski

#### Memberof

INopeCore

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[rpcManager](../../types/namespaces/nope/interfaces/interface.INopeCore.md#rpcmanager)

## Methods

### dispose()

Function used to dispose the Dispatcher. This will
dispose all instances an remove the them. They wont
be available in the NoPE-Network.

#### Author

M.Karkowski

#### Memberof

INopeDispatcher

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

### emitEvent()

Emits an event with the given name. All
event-subscriber, where the topic matches
will receive this notification.

```ts
emitEvent(eventName: string, data: any): any
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| eventName | `string` |
| data      | `any`    |

#### Returns

`any`

### pullData()

Helper to pull some data from the system.

```ts
pullData<T, D>(path: string, _default?: D): T
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |
| D         | `null`    |

#### Parameters

| Parameter  | Type     | Description                                                                                       |
| :--------- | :------- | :------------------------------------------------------------------------------------------------ |
| path       | `string` | The path to the Data.                                                                             |
| \_default? | `D`      | The value to use if no data has been found. If not provided an error is thrown. Defaults to None. |

#### Returns

`T`

### pushData()

Pushs the desired data into the system.

```ts
pushData<T>(
  path: string,
  content: T,
  options: IEventAdditionalData): void
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |

#### Parameters

| Parameter | Type                                                                                      | Description                |
| :-------- | :---------------------------------------------------------------------------------------- | :------------------------- |
| path      | `string`                                                                                  | The path to the Data.      |
| content   | `T`                                                                                       | The Content to Push        |
| options   | [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | The Options during pushing |

#### Returns

`void`

### query()

Receive the "instances" | "services" | "properties" | "events"
which matches with the given pattern. Therefore the user provides
the pattern and tyle.

#### Author

M.Karkowski

#### Memberof

INopeDispatcher

```ts
query(pattern: string, type: "instances" | "services" | "properties" | "events"): string[]
```

#### Parameters

| Parameter | Type                                                  | Description                         |
| :-------- | :---------------------------------------------------- | :---------------------------------- |
| pattern   | `string`                                              | Pattern to query the provided type. |
| type      | "instances" \| "services" \| "properties" \| "events" | Type which should be querried       |

#### Returns

`string`[]

List of the matching items.

### subscribeToEvent()

Helper to subscribe to specific events.

```ts
subscribeToEvent<T>(event: string, subscription: IEventCallback<T, IEventAdditionalData>): INopeObserver
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |

#### Parameters

| Parameter    | Type                                                                                                                                                                        | Description                |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| event        | `string`                                                                                                                                                                    | Name of the relevant event |
| subscription | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`T`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | the Callback to use.       |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

### toDescription()

```ts
toDescription(): {bridge: {connected: boolean;
layers: {considerConnection: boolean;
forwardData: boolean;
id: string;
receivesOwnMessages: boolean;}[];};
connectivityManager: {dispatchers: string[];};
dataDistributor: {data: any;
publishers: {name: string;
schema: INopeDescriptor;}[];
subscribers: {name: string;
schema: INopeDescriptor;}[];};
eventDistributor: {publishers: {name: string;
schema: INopeDescriptor;}[];
subscribers: {name: string;
schema: INopeDescriptor;}[];};
instanceManager: {constructors: {all: string[];
internal: string[];};
instances: {all: INopeModuleDescription[];
internal: string[];};};
ready: boolean;
rpcManager: {services: {all: IServiceOptions<any>[];
internal: {func: (...args: any[]) => Promise<any>;
options: IServiceOptions<any>;}[];};
task: {executing: string[];
requested: {id: string;
service: string;
target: string;
timeout: any;}[];};};} & INopeStatusInfo
```

#### Returns

\{bridge: \{connected: `boolean`;
layers: \{considerConnection: `boolean`;
forwardData: `boolean`;
id: `string`;
receivesOwnMessages: `boolean`;}[];};
connectivityManager: \{dispatchers: `string`[];};
dataDistributor: \{data: `any`;
publishers: \{name: `string`;
schema: [`INopeDescriptor`](../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md);}[];
subscribers: \{name: `string`;
schema: [`INopeDescriptor`](../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md);}[];};
eventDistributor: \{publishers: \{name: `string`;
schema: [`INopeDescriptor`](../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md);}[];
subscribers: \{name: `string`;
schema: [`INopeDescriptor`](../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md);}[];};
instanceManager: \{constructors: \{all: `string`[];
internal: `string`[];};
instances: \{all: [`INopeModuleDescription`](../../modules/interfaces/interface.INopeModuleDescription.md)[];
internal: `string`[];};};
ready: `boolean`;
rpcManager: \{services: \{all: [`IServiceOptions`](../../modules/interfaces/interface.IServiceOptions.md)<`any`\>[];
internal: \{func: (...`args`: `any`[]) => `Promise`<`any`\>;
options: [`IServiceOptions`](../../modules/interfaces/interface.IServiceOptions.md)<`any`\>;}[];};
task: \{executing: `string`[];
requested: \{id: `string`;
service: `string`;
target: `string`;
timeout: `any`;}[];};};} & [`INopeStatusInfo`](../../types/namespaces/nope/interfaces/interface.INopeStatusInfo.md)

#### Inherited from

[INopeCore](../../types/namespaces/nope/interfaces/interface.INopeCore.md).[toDescription](../../types/namespaces/nope/interfaces/interface.INopeCore.md#todescription)
