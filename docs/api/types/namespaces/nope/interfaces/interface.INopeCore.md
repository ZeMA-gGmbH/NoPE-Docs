# Interface: INopeCore

The Core Of NoPE

## Author

M.Karkowski

## Export

INopeCore

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

### connectivityManager

```ts
readonly connectivityManager: INopeConnectivityManager
```

System to manage the connectitivy of other dispatchers.

#### Author

M.Karkowski

#### Memberof

INopeCore

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

### disposing

```ts
disposing: boolean;
```

A Flag, that indicates, that the core is disposing.

#### Author

M.Karkowski

#### Memberof

INopeCore

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

### id

```ts
readonly id: string
```

ID of the Dispatcher

#### Memberof

INopeCore

### instanceManager

```ts
readonly instanceManager: INopeInstanceManager
```

A Manager, which is capable of creating instance on different Managers in the Network.

#### Author

M.Karkowski

#### Memberof

INopeCore

### ready

```ts
readonly ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag showing, that the system is ready.

#### Author

M.Karkowski

#### Memberof

INopeCore

### rpcManager

```ts
readonly rpcManager: INopeRpcManager<IServiceOptions<any>>
```

Manager to execute and perform different

#### Author

M.Karkowski

#### Memberof

INopeCore

## Methods

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
schema: [`INopeDescriptor`](interface.INopeDescriptor.md);}[];
subscribers: \{name: `string`;
schema: [`INopeDescriptor`](interface.INopeDescriptor.md);}[];};
eventDistributor: \{publishers: \{name: `string`;
schema: [`INopeDescriptor`](interface.INopeDescriptor.md);}[];
subscribers: \{name: `string`;
schema: [`INopeDescriptor`](interface.INopeDescriptor.md);}[];};
instanceManager: \{constructors: \{all: `string`[];
internal: `string`[];};
instances: \{all: [`INopeModuleDescription`](../../../../modules/interfaces/interface.INopeModuleDescription.md)[];
internal: `string`[];};};
ready: `boolean`;
rpcManager: \{services: \{all: [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md)<`any`\>[];
internal: \{func: (...`args`: `any`[]) => `Promise`<`any`\>;
options: [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md)<`any`\>;}[];};
task: \{executing: `string`[];
requested: \{id: `string`;
service: `string`;
target: `string`;
timeout: `any`;}[];};};} & [`INopeStatusInfo`](interface.INopeStatusInfo.md)
