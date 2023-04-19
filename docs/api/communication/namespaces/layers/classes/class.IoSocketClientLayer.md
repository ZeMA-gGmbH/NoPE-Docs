# Class: IoSocketClientLayer

Mirror Layer using IO-Sockets.

## Export

## Constructors

### constructor()

Creates an instance of IoSocketMirrorClient.

#### Author

M.Karkowski

#### Memberof

IoSocketMirrorClient

```ts
new IoSocketClientLayer(uri: string, logger?: ValidLoggerDefinition = "info"): IoSocketClientLayer
```

#### Parameters

| Parameter | Type                                                                                    | Default value |
| :-------- | :-------------------------------------------------------------------------------------- | :------------ |
| uri       | `string`                                                                                | undefined     |
| logger?   | [`ValidLoggerDefinition`](../../../../logger/types/type-alias.ValidLoggerDefinition.md) | "info"        |

#### Returns

[`IoSocketClientLayer`](class.IoSocketClientLayer.md)

#### Overrides

[EventCommunicationInterface](class.EventCommunicationInterface.md).[constructor](class.EventCommunicationInterface.md#constructor)

## Properties

### connected

```ts
connected: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, showing whether the Mirror is connected or not.

#### Memberof

EventMirror

#### Inherited from

[EventCommunicationInterface](class.EventCommunicationInterface.md).[connected](class.EventCommunicationInterface.md#connected)

### id

```ts
id: string;
```

ID of the Layer.

#### Author

M.Karkowski

#### Memberof

ICommunicationInterface

#### Inherited from

[EventCommunicationInterface](class.EventCommunicationInterface.md).[id](class.EventCommunicationInterface.md#id)

### receivesOwnMessages

```ts
readonly receivesOwnMessages: boolean  = true
```

Used to show, whether the the layer receives its own messages

#### Memberof

ICommunicationInterface

#### Inherited from

[EventCommunicationInterface](class.EventCommunicationInterface.md).[receivesOwnMessages](class.EventCommunicationInterface.md#receivesownmessages)

### uri

```ts
uri: string;
```

## Methods

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

#### Inherited from

[EventCommunicationInterface](class.EventCommunicationInterface.md).[detailListeners](class.EventCommunicationInterface.md#detaillisteners)

### dispose()

Disconnect the Layer.

#### Memberof

ICommunicationInterface

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Overrides

[EventCommunicationInterface](class.EventCommunicationInterface.md).[dispose](class.EventCommunicationInterface.md#dispose)

### emit()

Function, which will be used to emit data

#### Memberof

EventMirror

```ts
emit<T>(eventname: T, data: EventnameToEventType[T]): Promise<void>
```

#### Type parameters

| Parameter                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../../../../types/namespaces/nope/types/type-alias.EventnameToEventType.md) |

#### Parameters

| Parameter | Type                                                                                                      | Description      |
| :-------- | :-------------------------------------------------------------------------------------------------------- | :--------------- |
| eventname | `T`                                                                                                       | -                |
| data      | [`EventnameToEventType`](../../../../types/namespaces/nope/types/type-alias.EventnameToEventType.md)[`T`] | the data to emit |

#### Returns

`Promise`<`void`\>

#### Inherited from

[EventCommunicationInterface](class.EventCommunicationInterface.md).[emit](class.EventCommunicationInterface.md#emit)

### on()

Function which will be used to subscribe Data

#### Memberof

EventMirror

```ts
on<T>(eventname: T, cb: Function): Promise<void>
```

#### Type parameters

| Parameter                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../../../../types/namespaces/nope/types/type-alias.EventnameToEventType.md) |

#### Parameters

| Parameter | Type                                                                                                                          |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------- |
| eventname | `T`                                                                                                                           |
| cb        | (`data`: [`EventnameToEventType`](../../../../types/namespaces/nope/types/type-alias.EventnameToEventType.md)[`T`]) => `void` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[EventCommunicationInterface](class.EventCommunicationInterface.md).[on](class.EventCommunicationInterface.md#on)
