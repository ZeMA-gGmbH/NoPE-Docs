# Class: MQTTLayer

Default implementation of an [ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).

This layer will use mqtt to connect and transport messages.

Defaultly all messages will be subscribed on the following topics:

- `+/nope/<eventname>`

Defaultly all messages will be published on the following topics:

- `<preTopic>/nope/<eventname>`
- `preTopic` is set to the hostname.

The Layer is able to forward data, events etc to default ports.
Asume data is emitted using the `dataChanged` emit. If the flag
`forwardToCustomTopics` is set to true, the path of the data will
directly forward to mqtt.

## Implements

- [`ICommunicationInterface`](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md)

## Constructors

### constructor()

Creates an instance of MQTTLayer.

#### Memberof

MQTTLayer

```ts
new MQTTLayer(
  uri: string,
  logger?: ValidLoggerDefinition = "info",
  preTopic?: string = ...,
  qos?: 0 | 1 | 2 = 2,
  forwardToCustomTopics?: boolean = true): MQTTLayer
```

#### Parameters

| Parameter              | Type                                                                                    | Default value | Description                                                                                                                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uri                    | `string`                                                                                | undefined     | Uri of the Broker. e.g. `mqtt://localhost:1883` or `ws://localhost:9000`.                                                                                                            |
| logger?                | [`ValidLoggerDefinition`](../../../../logger/types/type-alias.ValidLoggerDefinition.md) | "info"        | Logger level                                                                                                                                                                         |
| preTopic?              | `string`                                                                                | undefined     | Defaultly all messages will be published on the following topics: `<preTopic>/nope/<eventname>`. `preTopic` is defaultly set to the hostname of the node in which `NoPE` is running. |
| qos?                   | 0 \| 1 \| 2                                                                             | 2             | The QOS of mqtt. see https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/ for more details. Default = Exactly once. Otherwise there might be an issue. |
| forwardToCustomTopics? | `boolean`                                                                               | true          | The Layer is able to forward data, events etc to default ports. This flag enables this behavior                                                                                      |

#### Returns

[`MQTTLayer`](class.MQTTLayer.md)

## Properties

### connected

```ts
connected: NopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, indication, whether the Layer is connected or not.

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[connected](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#connected)

### considerConnection

```ts
considerConnection: boolean;
```

### forwardToCustomTopics

```ts
forwardToCustomTopics: boolean = true;
```

The Layer is able to forward data, events etc to default ports. This flag enables this behavior

### id

```ts
id: string;
```

See [id](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#id)

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[id](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#id)

### preTopic

```ts
preTopic: string;
```

Defaultly all messages will be published on the following topics: `<preTopic>/nope/<eventname>`. `preTopic` is defaultly set to the hostname of the node in which `NoPE` is running.

### qos

```ts
qos: 0 | 1 | 2  = 2
```

The QOS of mqtt. see https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/ for more details. Default = Exactly once. Otherwise there might be an issue.

### receivesOwnMessages

```ts
readonly receivesOwnMessages: boolean
```

Used to show, whether the the layer receives its own messages

#### Memberof

ICommunicationInterface

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[receivesOwnMessages](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#receivesownmessages)

### uri

```ts
uri: string;
```

Uri of the Broker. e.g. `mqtt://localhost:1883` or `ws://localhost:9000`.

## Methods

### dispose()

Function to dispose the Interface.

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

nothing

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[dispose](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#dispose)

### emit()

See [emit](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#emit)

```ts
emit<T>(eventname: T, data: EventnameToEventType[T]): Promise<void>
```

#### Type parameters

| Parameter                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------- |
| T _extends_ _keyof_ [`EventnameToEventType`](../../../../types/namespaces/nope/types/type-alias.EventnameToEventType.md) |

#### Parameters

| Parameter | Type                                                                                                      |
| :-------- | :-------------------------------------------------------------------------------------------------------- |
| eventname | `T`                                                                                                       |
| data      | [`EventnameToEventType`](../../../../types/namespaces/nope/types/type-alias.EventnameToEventType.md)[`T`] |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommunicationInterface](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md).[emit](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#emit)

### on()

See [on](../../../../types/namespaces/nope/interfaces/interface.ICommunicationInterface.md#on)

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
