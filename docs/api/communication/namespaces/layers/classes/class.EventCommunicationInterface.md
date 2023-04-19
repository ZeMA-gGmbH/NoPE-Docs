# Class: EventCommunicationInterface

A Basic Mirror, used to share the events in a Mirror Style.
This Layer should not be used directly. this should only
be extended.

## Export

## Implements

## Implements

- [`ICommunicationInterface`](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md)

## Constructors

### constructor()

Creates an instance of EventMirror.

#### Memberof

EventMirror

```ts
new EventCommunicationInterface(
  _emitter?: IEmitter = ...,
  _logger?: ILogger,
  receivesOwnMessages?: boolean = true): EventCommunicationInterface
```

#### Parameters

| Parameter            | Type                                                                             | Default value | Description |
| :------------------- | :------------------------------------------------------------------------------- | :------------ | :---------- |
| \_emitter?           | [`IEmitter`](../../../../types/namespaces/nope/interfaces/interface.IEmitter.md) | undefined     | -           |
| \_logger?            | [`ILogger`](../../../../logger/interfaces/interface.ILogger.md)                  | undefined     | a Logger    |
| receivesOwnMessages? | `boolean`                                                                        | true          | -           |

#### Returns

[`EventCommunicationInterface`](class.EventCommunicationInterface.md)

## Properties

### connected

```ts
connected: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, showing whether the Mirror is connected or not.

#### Memberof

EventMirror

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[connected](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#connected)

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

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[id](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#id)

### receivesOwnMessages

```ts
readonly receivesOwnMessages: boolean  = true
```

Used to show, whether the the layer receives its own messages

#### Memberof

ICommunicationInterface

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[receivesOwnMessages](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#receivesownmessages)

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

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[detailListeners](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#detaillisteners)

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

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[dispose](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#dispose)

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

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[emit](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#emit)

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

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[on](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#on)
