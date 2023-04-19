# Interface: IDataPubSubSystem<AD, I, O\>

A data-based Publish and Subscribe system.
Extends [IPubSubSystem](interface.IPubSubSystem.md) by providing the the methods and properties:

- `pushData` to push data into the system.
- `pullData` to pull data from the system. Will allways return the current data or the default value if no data is present at the given path.
- `patternbasedPullData` to pull data with a given pattern. See the example for details.
- `patternBasedPush` to push data with a given pattern into the system.

## Author

M.Karkowski

## Export

## Type parameters

| Parameter                                                                                                                                 | Default                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| AD _extends_ [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md)                                                            | [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md)                                                             |
| I _extends_ [`INopeObservable`](../../../../observables/interfaces/interface.INopeObservable.md)<`unknown`, `unknown`, `unknown`, `AD`\> | [`INopeObservable`](../../../../observables/interfaces/interface.INopeObservable.md)<`unknown`, `unknown`, `unknown`, `AD`\> |
| O _extends_ [`INopeTopicWithDirectAccess`](../types/type-alias.INopeTopicWithDirectAccess.md)                                             | [`INopeTopicWithDirectAccess`](../types/type-alias.INopeTopicWithDirectAccess.md)                                             |

## Properties

### data

```ts
readonly data: unknown
```

A Getter to return a COPY of the item. Outside of the system,
you'll never receive the original object.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

### emitters

```ts
readonly emitters: object
```

List all known Emitters in the System.

#### Type declaration

> ```ts
> publishers: {
>   name: string;
>   schema: INopeDescriptor;
> }
> [];
> ```
>
> ```ts
> subscribers: {
>   name: string;
>   schema: INopeDescriptor;
> }
> [];
> ```

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[emitters](interface.IPubSubSystem.md#emitters)

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

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[onIncrementalDataChange](interface.IPubSubSystem.md#onincrementaldatachange)

### options

```ts
readonly options: IPubSubOptions
```

Options which describe the Behavior

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[options](interface.IPubSubSystem.md#options)

### publishers

```ts
readonly publishers: IMapBasedMergeData<O, IPubSubEmitterOptions<AD>, O, string>
```

List containing all publishers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[publishers](interface.IPubSubSystem.md#publishers)

### subscriptions

```ts
readonly subscriptions: IMapBasedMergeData<O, IPubSubEmitterOptions<AD>, O, string>
```

List, containing all subscribers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[subscriptions](interface.IPubSubSystem.md#subscriptions)

## Methods

### dispose()

Disposes the Pub-Sub-System.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
dispose(): void
```

#### Returns

`void`

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[dispose](interface.IPubSubSystem.md#dispose)

### emit()

Emits an Events and all subscribes, where the pattern matches
will be informed

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
emit(
  path: string,
  data: any,
  options?: Partial<AD>): void
```

#### Parameters

| Parameter | Type              | Description            |
| :-------- | :---------------- | :--------------------- |
| path      | `string`          | The Topic.             |
| data      | `any`             | The Data of the Event. |
| options?  | `Partial`<`AD`\> |                        |

#### Returns

`void`

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[emit](interface.IPubSubSystem.md#emit)

### patternBasedPush()

Pushes data to the elements, where the pattern matches.

#### Author

M.Karkowski

#### Memberof

IDataPubSubSystem

```ts
patternBasedPush<T>(
  pattern: string,
  content: T,
  options: Partial<IEventAdditionalData>): void
```

#### Type parameters

| Parameter | Default   | Description |
| :-------- | :-------- | :---------- |
| T         | `unknown` |             |

#### Parameters

| Parameter | Type                                                                                                         | Description                                                                           |
| :-------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| pattern   | `string`                                                                                                     | The pattern, which should be used to forward the data. For valid patterns see pattern |
| content   | `T`                                                                                                          | The content to store in the given path.                                               |
| options   | `Partial`<[`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> |                                                                                       |

#### Returns

`void`

### patternbasedPullData()

A Pattern based Pull. You can provide a mqtt based pattern and receive an array which contains
all the data which matches the topic.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
patternbasedPullData<T, D>(pattern: string, _default: D): {data: T;
path: string;}[]
```

#### Type parameters

| Parameter | Default   | Description |
| :-------- | :-------- | :---------- |
| T         | `unknown` |             |
| D         | `null`    |             |

#### Parameters

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| pattern   | `string` | The pattern to pull the data from |
| \_default | `D`      | a default value, o                |

#### Returns

\{data: `T`;
path: `string`;}[]

{{ path: string, data: T }[]}

### pullData()

Pull some Data of System. You will allways receive a just a copy. This method prevents you
to use a pattern like path. If you want to use patterns please use the "patternbasedPullData"

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
pullData<T, D>(path: string, _default: D): T
```

#### Type parameters

| Parameter | Default   | Description                                     |
| :-------- | :-------- | :---------------------------------------------- |
| T         | `unknown` | Expected Type of the return. Defaults to unkown |
| D         | `null`    | Default Value.                                  |

#### Parameters

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| path      | `string` |                                                 |
| \_default | `D`      | If no data is found => return the default data. |

#### Returns

`T`

The Expected Type

### pushData()

Function, to push data. Every subscriber will be informed, if pushing the data on the
given path will affect the subscribers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
pushData<T>(
  path: string,
  content: T,
  options?: Partial<IEventAdditionalData>): void
```

#### Type parameters

| Parameter | Default   | Description          |
| :-------- | :-------- | :------------------- |
| T         | `unknown` | Type which is pushed |

#### Parameters

| Parameter | Type                                                                                                         | Description                                         |
| :-------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| path      | `string`                                                                                                     | The Path, on which the data should be changed       |
| content   | `T`                                                                                                          | The content to store in the given path.             |
| options?  | `Partial`<[`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Options, that will be forwarded to subscribers. |

#### Returns

`void`

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

| Parameter | Type                                                                         | Description             |
| :-------- | :--------------------------------------------------------------------------- | :---------------------- |
| emitter   | `I`                                                                          | The Emitter to consider |
| options   | [`IEventOptions`](../../../../modules/interfaces/interface.IEventOptions.md) |                         |

#### Returns

`O`

{O}

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[register](interface.IPubSubSystem.md#register)

### registerSubscription()

A Helper, that allows the user to subscribe to changes. Therfore he must transmit

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
registerSubscription<T>(path: string, subscription: IEventCallback<T, AD>): INopeObserver
```

#### Type parameters

| Parameter | Default   | Description                  |
| :-------- | :-------- | :--------------------------- |
| T         | `unknown` | Expected Type of the content |

#### Parameters

| Parameter    | Type                                                                                         | Description |
| :----------- | :------------------------------------------------------------------------------------------- | :---------- |
| path         | `string`                                                                                     | The         |
| subscription | [`IEventCallback`](../../../../eventEmitter/types/type-alias.IEventCallback.md)<`T`, `AD`\> |             |

#### Returns

[`INopeObserver`](../../../../eventEmitter/interfaces/interface.INopeObserver.md)

{INopeObserver}

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[registerSubscription](interface.IPubSubSystem.md#registersubscription)

### toDescription()

Lists all publishers and subscribers of the system.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
data: any;
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

#### Overrides

[IPubSubSystem](interface.IPubSubSystem.md).[toDescription](interface.IPubSubSystem.md#todescription)

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

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[unregister](interface.IPubSubSystem.md#unregister)

### updateMatching()

Helper to manually Trigger an update of the Matching. This will update subscribers and publishers and link them. Normally this is not necessary.

This will build an internal linking (based on the settings) between publishers and subscribers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

```ts
updateMatching(): void
```

#### Returns

`void`

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[updateMatching](interface.IPubSubSystem.md#updatematching)

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

| Parameter | Type                                                                         | Description             |
| :-------- | :--------------------------------------------------------------------------- | :---------------------- |
| emitter   | `I`                                                                          | The Emitter to consider |
| options   | [`IEventOptions`](../../../../modules/interfaces/interface.IEventOptions.md) | The modified options    |

#### Returns

`void`

#### Inherited from

[IPubSubSystem](interface.IPubSubSystem.md).[updateOptions](interface.IPubSubSystem.md#updateoptions)
