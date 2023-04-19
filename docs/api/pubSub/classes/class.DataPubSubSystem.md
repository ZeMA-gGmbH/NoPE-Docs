# Class: DataPubSubSystem

Default implementation of [IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md)

Extends the [PubSubSystem](class.PubSubSystem.md) by adding the following properties and methods:

- `pushData` to push data into the system.
- `pullData` to pull data from the system. Will allways return the current data or the default value if no data is present at the given path.
- `patternbasedPullData` to pull data with a given pattern. See the example for details.
- `patternBasedPush` to push data with a given pattern into the system.
- If you want to acces the root data please check the property `data` which will contain the entire data root that has been created.

## Implements

- [`IDataPubSubSystem`](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md)

## Constructors

### constructor()

```ts
new DataPubSubSystem(options: Partial<IPubSubOptions> & {generateEmitterType: () => INopeObservable<any, any, any, IEventAdditionalData>;} = {}): DataPubSubSystem
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| options   | `Partial`<[`IPubSubOptions`](../../types/namespaces/nope/interfaces/interface.IPubSubOptions.md)\> & \{generateEmitterType: () => [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>;} |

#### Returns

[`DataPubSubSystem`](class.DataPubSubSystem.md)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[constructor](class.PubSubSystem.md#constructor)

## Properties

### \_options

```ts
_options: IPubSubOptions;
```

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[\_options](class.PubSubSystem.md#_options)

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

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[onIncrementalDataChange](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#onincrementaldatachange)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[onIncrementalDataChange](class.PubSubSystem.md#onincrementaldatachange)

### publishers

```ts
readonly publishers: IMapBasedMergeData<INopeTopicWithDirectAccess<any, any, any>, IPubSubEmitterOptions<ITopicSetContentOptions>, INopeTopicWithDirectAccess<any, any, any>, string>
```

List containing all publishers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[publishers](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#publishers)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[publishers](class.PubSubSystem.md#publishers)

### subscriptions

```ts
readonly subscriptions: IMapBasedMergeData<INopeTopicWithDirectAccess<any, any, any>, IPubSubEmitterOptions<ITopicSetContentOptions>, INopeTopicWithDirectAccess<any, any, any>, string>
```

List, containing all subscribers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[subscriptions](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#subscriptions)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[subscriptions](class.PubSubSystem.md#subscriptions)

## Accessors

### data

```ts
get data(): unknown
```

A Getter to return a COPY of the item. Outside of the system,
you'll never receive the original object.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[data](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#data)

### emitters

```ts
get emitters(): object
```

List all known Emitters in the System.

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[emitters](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#emitters)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[emitters](class.PubSubSystem.md#emitters)

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

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[options](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#options)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[options](class.PubSubSystem.md#options)

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

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[dispose](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#dispose)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[dispose](class.PubSubSystem.md#dispose)

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
  options?: ITopicSetContentOptions): void
```

#### Parameters

| Parameter | Type                                                                                                     | Description            |
| :-------- | :------------------------------------------------------------------------------------------------------- | :--------------------- |
| eventName | `string`                                                                                                 | The Topic.             |
| data      | `any`                                                                                                    | The Data of the Event. |
| options?  | [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md) |                        |

#### Returns

`void`

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[emit](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#emit)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[emit](class.PubSubSystem.md#emit)

### patternBasedPush()

Option to push data to the system using a pattern see [patternBasedPush](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#patternbasedpush) @ [IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md)

```ts
patternBasedPush<T>(
  pattern: string,
  data: T,
  options: Partial<IEventAdditionalData> = {},
  fast: boolean = false): void
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |

#### Parameters

| Parameter | Type                                                                                                   | Default value | Description                                                                                                                            |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| pattern   | `string`                                                                                               | undefined     | The pattern (see [pubSub](../namespace.pubSub.md))                                                                                     |
| data      | `T`                                                                                                    | undefined     | The data to push                                                                                                                       |
| options   | `Partial`<[`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | \{}           | The options used during pushing the data (see [IEventAdditionalData](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)) |
| fast      | `boolean`                                                                                              | false         | If enabled, firstly, the data is pushed, afterwards, we just inform once.                                                              |

#### Returns

`void`

Nothing

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[patternBasedPush](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#patternbasedpush)

### patternbasedPullData()

Option to pull data from the system with a pattern see [patternbasedPullData](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#patternbasedpulldata) @ [IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md)

```ts
patternbasedPullData<T, D>(pattern: string, _default: D = null): {data: T;
path: string;}[]
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |
| D         | `null`    |

#### Parameters

| Parameter | Type     | Default value | Description                                        |
| :-------- | :------- | :------------ | :------------------------------------------------- |
| pattern   | `string` | undefined     | The pattern (see [pubSub](../namespace.pubSub.md)) |
| \_default | `D`      | null          | The Default object, if data is not present.        |

#### Returns

\{data: `T`;
path: `string`;}[]

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[patternbasedPullData](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#patternbasedpulldata)

### pullData()

Option to pull data from the system see [pullData](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#pulldata) @ [IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md)

```ts
pullData<T, D>(topic: string, _default: D = null): T
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |
| D         | `null`    |

#### Parameters

| Parameter | Type     | Default value | Description                                     |
| :-------- | :------- | :------------ | :---------------------------------------------- |
| topic     | `string` | undefined     | the Topic to use.                               |
| \_default | `D`      | null          | The default object, if nothing else is provided |

#### Returns

`T`

The data. Defined as T

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[pullData](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#pulldata)

### pushData()

Option to push data into the system see [pushData](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#pushdata) @ [IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md)

```ts
pushData<T>(
  path: string,
  content: T,
  options: Partial<IEventAdditionalData> = {}): void
```

#### Type parameters

| Parameter | Default   |
| :-------- | :-------- |
| T         | `unknown` |

#### Parameters

| Parameter | Type                                                                                                   | Description                                                                                                                            |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| path      | `string`                                                                                               | The path of the data.                                                                                                                  |
| content   | `T`                                                                                                    | The content of the Data.                                                                                                               |
| options   | `Partial`<[`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The options used during pushing the data (see [IEventAdditionalData](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)) |

#### Returns

`void`

nothing.

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[pushData](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#pushdata)

### register()

Function to register an Observable. Please define the Options, to decide
whether the data of the observable should be published or subscribed.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
register(emitter: INopeObservable<any, any, any, IEventAdditionalData>, options: IEventOptions): INopeTopicWithDirectAccess<any, any, any>
```

#### Parameters

| Parameter | Type                                                                                                                                                                                             | Description             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| emitter   | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Emitter to consider |
| options   | [`IEventOptions`](../../modules/interfaces/interface.IEventOptions.md)                                                                                                                           |                         |

#### Returns

[`INopeTopicWithDirectAccess`](../../types/namespaces/nope/types/type-alias.INopeTopicWithDirectAccess.md)<`any`, `any`, `any`\>

{O}

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[register](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#register)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[register](class.PubSubSystem.md#register)

### registerSubscription()

A Helper, that allows the user to subscribe to changes. Therfore he must transmit

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
registerSubscription<T>(topic: string, subscription: IEventCallback<T, ITopicSetContentOptions>): INopeObserver
```

#### Type parameters

| Parameter | Default   | Description                  |
| :-------- | :-------- | :--------------------------- |
| T         | `unknown` | Expected Type of the content |

#### Parameters

| Parameter    | Type                                                                                                                                                                                       | Description |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| topic        | `string`                                                                                                                                                                                   | The         |
| subscription | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`T`, [`ITopicSetContentOptions`](../../types/namespaces/nope/interfaces/interface.ITopicSetContentOptions.md)\> |             |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

{INopeObserver}

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[registerSubscription](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#registersubscription)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[registerSubscription](class.PubSubSystem.md#registersubscription)

### toDescription()

Describes the Data.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
data: unknown;
```

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

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[toDescription](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#todescription)

#### Overrides

[PubSubSystem](class.PubSubSystem.md).[toDescription](class.PubSubSystem.md#todescription)

### unregister()

Removes an observable of the Pub-Sub-System.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
unregister(emitter: INopeObservable<any, any, any, IEventAdditionalData>): boolean
```

#### Parameters

| Parameter | Type                                                                                                                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| emitter   | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> |

#### Returns

`boolean`

{boolean}

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[unregister](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#unregister)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[unregister](class.PubSubSystem.md#unregister)

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

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[updateMatching](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#updatematching)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[updateMatching](class.PubSubSystem.md#updatematching)

### updateOptions()

Function to update the options and there by the topics of an observable.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
updateOptions(emitter: INopeObservable<any, any, any, IEventAdditionalData>, options: IEventOptions): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                                             | Description             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| emitter   | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Emitter to consider |
| options   | [`IEventOptions`](../../modules/interfaces/interface.IEventOptions.md)                                                                                                                           | The modified options    |

#### Returns

`void`

#### Implementation of

[IDataPubSubSystem](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md).[updateOptions](../../types/namespaces/nope/interfaces/interface.IDataPubSubSystem.md#updateoptions)

#### Inherited from

[PubSubSystem](class.PubSubSystem.md).[updateOptions](class.PubSubSystem.md#updateoptions)
