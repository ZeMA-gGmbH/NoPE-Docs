# Interface: ICommunicationInterface

A layer is an element that is used to establish a communication connection. This element implements the connection (e.g. a MQTT layer).

A layer is utilized by the [ICommunicationBridge](interface.ICommunicationBridge.md)

A layer has the following functionalities provided by its interface:

- The layer must implement the methods on, which are used to listen for various events that can be subscribed to by the nope systems.
- Messages are sent out using the emit method.
- The connection status of the layer is indicated in the connected observable. This value is allowed to be true only if there is a connection.
- Sometimes the layer receives its own messages (the implementation of an udp-broadcast based layer, while broadcasting we will receive our own messages). If this is the case, the receivesOwnMessages flag must be set to true to prevent messages from being received twice.
- If a layer is not used, we can destroy it with dispose.

Currently there are 3 layers implemented:

- `MQTT` (see [MQTTLayer](../../../../communication/namespaces/layers/classes/class.MQTTLayer.md))
- `IO-Sockets`:
  - `io-client` (see [IoSocketClientLayer](../../../../communication/namespaces/layers/classes/class.IoSocketClientLayer.md))
  - `io-server` (see [ioSocketServerLayer](../../../../communication/namespaces/layers/classes/class.ioSocketServerLayer.md) runs as Standalone)
- `event`: an internal layer only. Is defaultly provided. (see [EventCommunicationInterface](../../../../communication/namespaces/layers/classes/class.EventCommunicationInterface.md))

## Export

ICommunicationInterface

## Properties

### connected

```ts
readonly connected: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag, indication, whether the Layer is connected or not.

### id

```ts
readonly id: string
```

ID of the Layer.

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

### receivesOwnMessages

```ts
readonly receivesOwnMessages: boolean
```

Used to show, whether the the layer receives its own messages

#### Memberof

ICommunicationInterface

## Methods

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

### dispose()

Disconnect the Layer.

#### Memberof

ICommunicationInterface

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

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
