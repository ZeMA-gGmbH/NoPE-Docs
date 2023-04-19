# Interface: ICommunicationBridge

A `ICommunicationBridge` is used to establish different connections (a bridge can establish several connections with different layers).

The `ICommunicationBridge` is the core interface with which all Nope core elements interact. Its main task is to add and remove multiple
layers (like 'mqtt' or 'io-sockets'; see [ICommunicationInterface](interface.ICommunicationInterface.md))

To the outside, the bridge behaves like a [ICommunicationInterface](interface.ICommunicationInterface.md). I.e. the methods on and emit are also implemented.
However, the bridge ensures that each of the [ICommunicationInterface](interface.ICommunicationInterface.md) added, are able to receive and send the messages.
Furthermore the status connected indicates whether all layers are connected or not.

If different layers are only optional, e.g. all connections are covered by io-sockets, but all messages are to be mirrored
to MQTT because they are to be picked up there, then this can be taken into account in the add method. These connections
are then not taken into account in the connected status.

## Export

ICommunicationBridge

## Properties

### connected

```ts
readonly connected: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag, indication, whether the Layer is connected or not.

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[connected](interface.ICommunicationInterface.md#connected)

### id

```ts
readonly id: string
```

ID of the Layer.

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[id](interface.ICommunicationInterface.md#id)

### receivesOwnMessages

```ts
readonly receivesOwnMessages: boolean
```

Used to show, whether the the layer receives its own messages

#### Memberof

ICommunicationInterface

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[receivesOwnMessages](interface.ICommunicationInterface.md#receivesownmessages)

## Methods

### addCommunicationLayer()

Function, to add an Layer to the Bridge

#### Memberof

ICommunicationBridge

```ts
addCommunicationLayer(
  layer: ICommunicationInterface,
  forwardData?: boolean,
  considerConnection?: boolean): Promise<void>
```

#### Parameters

| Parameter           | Type                                                              | Description                                                                                                       |
| :------------------ | :---------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| layer               | [`ICommunicationInterface`](interface.ICommunicationInterface.md) | The Layer to Add.                                                                                                 |
| forwardData?        | `boolean`                                                         | -                                                                                                                 |
| considerConnection? | `boolean`                                                         | Flag, that enables considering this flag in the [connected](interface.ICommunicationInterface.md#connected) flag. |

#### Returns

`Promise`<`void`\>

### detailListeners()

Helper to detail the listeners of the "event", "rpc", "data" or "responses"

```ts
Optional detailListeners(type: "event" | "rpc" | "data" | "response", listeners: string[]): any
```

#### Parameters

| Parameter | Type                                     | Description                   |
| :-------- | :--------------------------------------- | :---------------------------- |
| type      | "event" \| "rpc" \| "data" \| "response" | valid type to detail the name |
| listeners | `string`[]                               | the currently used listeners. |

#### Returns

`any`

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[detailListeners](interface.ICommunicationInterface.md#detaillisteners)

### dispose()

Disconnect the Layer.

#### Memberof

ICommunicationInterface

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[dispose](interface.ICommunicationInterface.md#dispose)

### emit()

used to emit some data on the bride. It will distribute the event accors

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

```ts
emit<T>(eventname: T, data: EventnameToEventType[T] & IExtraData): Promise<void>
```

#### Type parameters

| Parameter                                                                                 | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../types/type-alias.EventnameToEventType.md) |             |

#### Parameters

| Parameter | Type                                                                                                                 |
| :-------- | :------------------------------------------------------------------------------------------------------------------- |
| eventname | `T`                                                                                                                  |
| data      | [`EventnameToEventType`](../types/type-alias.EventnameToEventType.md)[`T`] & [`IExtraData`](interface.IExtraData.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[emit](interface.ICommunicationInterface.md#emit)

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

| Parameter                                                                                 | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../types/type-alias.EventnameToEventType.md) |             |

#### Parameters

| Parameter | Type                                                                                                                                     | Description          |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| eventname | `T`                                                                                                                                      | The Event name       |
| cb        | (`data`: [`EventnameToEventType`](../types/type-alias.EventnameToEventType.md)[`T`] & [`IExtraData`](interface.IExtraData.md)) => `void` | The Callback to use. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ICommunicationInterface](interface.ICommunicationInterface.md).[on](interface.ICommunicationInterface.md#on)

### removeCommunicationLayer()

Function, to remove the Layer again.
Data wont be forwarded any more.

#### Memberof

ICommunicationBridge

```ts
removeCommunicationLayer(layer: ICommunicationInterface): Promise<void>
```

#### Parameters

| Parameter | Type                                                              | Description         |
| :-------- | :---------------------------------------------------------------- | :------------------ |
| layer     | [`ICommunicationInterface`](interface.ICommunicationInterface.md) | The Layer to Remove |

#### Returns

`Promise`<`void`\>

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
