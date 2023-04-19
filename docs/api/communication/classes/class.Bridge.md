# Class: Bridge

A `ICommunicationBridge` is used to establish different connections (a bridge can establish several connections with different layers).

The `ICommunicationBridge` is the core interface with which all Nope core elements interact. Its main task is to add and remove multiple
layers (like 'mqtt' or 'io-sockets'; see [ICommunicationInterface](../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md))

To the outside, the bridge behaves like a [ICommunicationInterface](../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md). I.e. the methods on and emit are also implemented.
However, the bridge ensures that each of the [ICommunicationInterface](../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md) added, are able to receive and send the messages.
Furthermore the status connected indicates whether all layers are connected or not.

If different layers are only optional, e.g. all connections are covered by io-sockets, but all messages are to be mirrored
to MQTT because they are to be picked up there, then this can be taken into account in the add method. These connections
are then not taken into account in the connected status.

## Export

ICommunicationBridge

## Implements

- [`ICommunicationBridge`](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md)

## Constructors

### constructor()

Creates an instance of Bridge.

#### Memberof

Bridge

```ts
new Bridge(id?: string = ..., logger?: ValidLoggerDefinition = false): Bridge
```

#### Parameters

| Parameter | Type                                                                              | Default value | Description                                                                |
| :-------- | :-------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------- |
| id?       | `string`                                                                          | undefined     | The ID. (this can be adapted later and is only used to simplify debugging) |
| logger?   | [`ValidLoggerDefinition`](../../logger/types/type-alias.ValidLoggerDefinition.md) | false         | -                                                                          |

#### Returns

[`Bridge`](class.Bridge.md)

## Properties

### connected

```ts
connected: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, indication, whether the Layer is connected or not.

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[connected](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#connected)

### considerConnection

```ts
considerConnection: boolean = true;
```

### id

```ts
id: string;
```

ID of the Layer.

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[id](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#id)

### ownDispatcherId

```ts
ownDispatcherId: string;
```

## Accessors

### receivesOwnMessages

```ts
get receivesOwnMessages(): boolean
```

Used to show, whether the the layer receives its own messages

#### Memberof

ICommunicationInterface

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[receivesOwnMessages](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#receivesownmessages)

## Methods

### addCommunicationLayer()

Function, to add an Layer to the Bridge

#### Memberof

ICommunicationBridge

```ts
addCommunicationLayer(
  layer: ICommunicationInterface,
  forwardData: boolean = false,
  considerConnection: boolean = false): Promise<void>
```

#### Parameters

| Parameter          | Type                                                                                                     | Default value | Description                                                                                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| layer              | [`ICommunicationInterface`](../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md) | undefined     | The Layer to Add.                                                                                                                                        |
| forwardData        | `boolean`                                                                                                | false         | -                                                                                                                                                        |
| considerConnection | `boolean`                                                                                                | false         | Flag, that enables considering this flag in the [connected](../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#connected) flag. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[addCommunicationLayer](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#addcommunicationlayer)

### detailListeners()

Helper to detail the listeners of the "event", "rpc", "data" or "responses"

```ts
detailListeners(type: "event" | "rpc" | "data" | "response", listeners: string[]): void
```

#### Parameters

| Parameter | Type                                     | Description                   |
| :-------- | :--------------------------------------- | :---------------------------- |
| type      | "event" \| "rpc" \| "data" \| "response" | valid type to detail the name |
| listeners | `string`[]                               | the currently used listeners. |

#### Returns

`void`

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[detailListeners](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#detaillisteners)

### dispose()

Disconnect the Layer.

#### Memberof

ICommunicationInterface

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[dispose](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#dispose)

### emit()

used to emit some data on the bride. It will distribute the event accors

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

```ts
emit<T>(eventname: T, data: EventnameToEventType[T]): Promise<void>
```

#### Type parameters

| Parameter                                                                                                          | Description |
| :----------------------------------------------------------------------------------------------------------------- | :---------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../../types/namespaces/nope/types/type-alias.EventnameToEventType.md) |             |

#### Parameters

| Parameter | Type                                                                                                |
| :-------- | :-------------------------------------------------------------------------------------------------- |
| eventname | `T`                                                                                                 |
| data      | [`EventnameToEventType`](../../types/namespaces/nope/types/type-alias.EventnameToEventType.md)[`T`] |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[emit](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#emit)

### on()

used to emit some data.

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

```ts
on<T>(eventname: T, cb: Function): Promise<void>
```

#### Type parameters

| Parameter                                                                                                          | Description |
| :----------------------------------------------------------------------------------------------------------------- | :---------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../../types/namespaces/nope/types/type-alias.EventnameToEventType.md) |             |

#### Parameters

| Parameter | Type                                                                                                                    | Description          |
| :-------- | :---------------------------------------------------------------------------------------------------------------------- | :------------------- |
| eventname | `T`                                                                                                                     | The Event name       |
| cb        | (`data`: [`EventnameToEventType`](../../types/namespaces/nope/types/type-alias.EventnameToEventType.md)[`T`]) => `void` | The Callback to use. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[on](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#on)

### removeCommunicationLayer()

Function, to remove the Layer again.
Data wont be forwarded any more.

#### Memberof

ICommunicationBridge

```ts
removeCommunicationLayer(layer: ICommunicationInterface): Promise<void>
```

#### Parameters

| Parameter | Type                                                                                                     | Description         |
| :-------- | :------------------------------------------------------------------------------------------------------- | :------------------ |
| layer     | [`ICommunicationInterface`](../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md) | The Layer to Remove |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[removeCommunicationLayer](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#removecommunicationlayer)

### toDescription()

Readable status of the Connection.

#### Memberof

ICommunicationBridge

```ts
toDescription(): object
```

#### Returns

`object`

The Statsus

```ts
connected: boolean;
```

```ts
layers: {
  considerConnection: boolean;
  forwardData: boolean;
  id: string;
  receivesOwnMessages: boolean;
}
[];
```

#### Implementation of

[ICommunicationBridge](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md).[toDescription](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md#todescription)
