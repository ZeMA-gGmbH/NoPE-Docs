# Class: PubSubSystem<AD, I, O\>

Default implementation of a [IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).

## Type parameters

| Parameter                                                                                                                                           | Default                                                                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| AD _extends_ [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md) & \{pubSubUpdate: `boolean`;} | [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md)                     |
| I _extends_ [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, `AD`\>            | [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, `AD`\> |
| O _extends_ [`INopeTopic`](../../types/namespaces/nope/types/type-alias.INopeTopic.md)                                                              | [`INopeTopic`](../../types/namespaces/nope/types/type-alias.INopeTopic.md)                                                   |

## Implements

- [`IPubSubSystem`](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md)<`AD`, `I`, `O`\>

## Constructors

### constructor()

```ts
new PubSubSystem<AD, I, O>(options: Partial<IPubSubOptions> & {generateEmitterType: () => I;} = {}): PubSubSystem<AD, I, O>
```

#### Type parameters

| Parameter                                                                                                                                                                                                                             | Default                                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| AD _extends_ [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md) & \{pubSubUpdate: `boolean`;}                                                                                   | [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md)                     |
| I _extends_ [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, `AD`, `I`\>                                                                                         | [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, `AD`\> |
| O _extends_ [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`any`, `any`, `any`, [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md), `O`\> | [`INopeTopic`](../../types/namespaces/nope/types/type-alias.INopeTopic.md)<`any`, `any`, `any`\>                            |

#### Parameters

| Parameter | Type                                                                                                                                     |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| options   | `Partial`<[`IPubSubOptions`](../../types/namespaces/nope/interfaces/interface.IPubSubOptions.md)\> & \{generateEmitterType: () => `I`;} |

#### Returns

[`PubSubSystem`](class.PubSubSystem.md)<`AD`, `I`, `O`\>

## Properties

### \_options

```ts
_options: IPubSubOptions;
```

### onIncrementalDataChange

```ts
readonly onIncrementalDataChange: INopeEventEmitter<IIncrementalChange, IIncrementalChange, IIncrementalChange, IEventAdditionalData>
```

An observable which holds the incremental data change.
this will be triggered, if the an emitter (publisher) changes its data.
Contains only the last emitted data and the topic

```typescript
// Describe the required Test:
let pubSubSystem = new PubSubSystemBase({
  generateEmitterType: function () {
    return new NopeEventEmitter() as INopeEventEmitter;
  },
});

// Create a Publisher for the system:
let publisher: INopeEventEmitter = new NopeEventEmitter();

pubSubSystem.register(publisher, {
  mode: "publish",
  schema: {},
  topic: "this/is/a/test",
});

pubSubSystem.onIncrementalDataChange.subscribe(console.log);
publisher.emit("Hello World!"); // Logs the following => {path: "this/is/a/test", data: "Hello World!"}
```

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[onIncrementalDataChange](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#onincrementaldatachange)

### publishers

```ts
readonly publishers: IMapBasedMergeData<O, IPubSubEmitterOptions<AD>, O, string>
```

List containing all publishers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[publishers](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#publishers)

### subscriptions

```ts
readonly subscriptions: IMapBasedMergeData<O, IPubSubEmitterOptions<AD>, O, string>
```

List, containing all subscribers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[subscriptions](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#subscriptions)

## Accessors

### emitters

```ts
get emitters(): object
```

List all known Emitters in the System.

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[emitters](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#emitters)

### options

```ts
get options(): IPubSubOptions
```

Options which describe the Behavior

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[options](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#options)

## Methods

### dispose()

Unregisters all Emitters and removes all subscriptions of the
"onIncrementalDataChange", "publishers" and "subscriptions"

#### Author

M.Karkowski

#### Memberof

PubSubSystemBase

```ts
dispose(): void
```

#### Returns

`void`

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[dispose](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#dispose)

### emit()

Emits an Events and all subscribes, where the pattern matches
will be informed

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
emit(
  eventName: string,
  data: any,
  options?: AD): void
```

#### Parameters

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| eventName | `string` | The Topic.             |
| data      | `any`    | The Data of the Event. |
| options?  | `AD`     |                        |

#### Returns

`void`

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[emit](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#emit)

### register()

Function to register an Observable. Please define the Options, to decide
whether the data of the observable should be published or subscribed.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
register(emitter: I, options: IEventOptions): O
```

#### Parameters

| Parameter | Type                                                                   | Description             |
| :-------- | :--------------------------------------------------------------------- | :---------------------- |
| emitter   | `I`                                                                    | The Emitter to consider |
| options   | [`IEventOptions`](../../modules/interfaces/interface.IEventOptions.md) |                         |

#### Returns

`O`

{O}

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[register](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#register)

### registerSubscription()

A Helper, that allows the user to subscribe to changes. Therfore he must transmit

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
registerSubscription<T>(topic: string, subscription: IEventCallback<T, AD>): INopeObserver
```

#### Type parameters

| Parameter | Default   | Description                  |
| :-------- | :-------- | :--------------------------- |
| T         | `unknown` | Expected Type of the content |

#### Parameters

| Parameter    | Type                                                                                   | Description |
| :----------- | :------------------------------------------------------------------------------------- | :---------- |
| topic        | `string`                                                                               | The         |
| subscription | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`T`, `AD`\> |             |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

{INopeObserver}

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[registerSubscription](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#registersubscription)

### toDescription()

Describes the Data.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
publishers: {
  name: string;
  schema: INopeDescriptor;
}
[];
```

```ts
subscribers: {
  name: string;
  schema: INopeDescriptor;
}
[];
```

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[toDescription](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#todescription)

### unregister()

Removes an observable of the Pub-Sub-System.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
unregister(emitter: I): boolean
```

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| emitter   | `I`  |

#### Returns

`boolean`

{boolean}

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[unregister](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#unregister)

### updateMatching()

Internal Match-Making Algorithm. This allowes to Create a predefined
List between Publishers and Subscribers. Thereby the Process is speed
up, by utilizing this Look-Up-Table

#### Author

M.Karkowski

#### Memberof

PubSubSystemBase

```ts
updateMatching(): void
```

#### Returns

`void`

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[updateMatching](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#updatematching)

### updateOptions()

Function to update the options and there by the topics of an observable.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
updateOptions(emitter: I, options: IEventOptions): void
```

#### Parameters

| Parameter | Type                                                                   | Description             |
| :-------- | :--------------------------------------------------------------------- | :---------------------- |
| emitter   | `I`                                                                    | The Emitter to consider |
| options   | [`IEventOptions`](../../modules/interfaces/interface.IEventOptions.md) | The modified options    |

#### Returns

`void`

#### Implementation of

[IPubSubSystem](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md).[updateOptions](../../types/namespaces/nope/interfaces/interface.IPubSubSystem.md#updateoptions)
