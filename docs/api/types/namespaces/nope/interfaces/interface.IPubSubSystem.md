# Interface: IPubSubSystem<AD, I, O\>

The default Publish and Subscribe System.

The System contains of `publishers` and `subscribers` which are linked using `topics` (based on `strings`).

- To add new `publishers` or `subscribers` use the function: `register` and provide the required options (see [register](interface.IPubSubSystem.md#register))
- To add new `subscriber` you can use the function : `registerSubscription` which will receive a topic and a `callback` (see [registerSubscription](interface.IPubSubSystem.md#registersubscription))
- After adding `publishers` or `subscribers` you can change the behavior using `updateOptions` (see [updateOptions](interface.IPubSubSystem.md#updateoptions))
- To remove `publishers` or `subscribers` use `unregister` (see [unregister](interface.IPubSubSystem.md#unregister))
- to `emit` data use `emit` (see [emit](interface.IPubSubSystem.md#emit))
- internally, if a subscriber / publisher is added, its options are changed or its removed, the pub sub system updates an matching structure. In the case you want to perform this manually execute [updateMatching](interface.IPubSubSystem.md#updatematching)
- to check which `publishers` and `subscribers` are present, checkout the corresponding properties.
- You can subscribe to incremental changes using the eventEmitter [onIncrementalDataChange](interface.IPubSubSystem.md#onincrementaldatachange)
- If the pub-sub-system isnt needed any more `dispose` it!

The publisher might be `observabes` or `eventEmitters`.

The `IPubSubSystem` is implemented by the `PubSubSystemBase`-**Class**

The Behavior may differ based on the settings. Your are not able to change these options, after the instance has been created. (see [IPubSubOptions](interface.IPubSubOptions.md) for details)
The **Default** of these options are settings are.

```typescript
{
  mqttPatternBasedSubscriptions: true,
  forwardChildData: true,
  forwardParentData: true,
  matchTopicsWithoutWildcards: true,
}
```

# Example 1

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

// Create a Subscriber
let subscriber: INopeEventEmitter = new NopeEventEmitter();

subscriber = pubSubSystem.register(subscriber, {
  mode: "subscribe",
  schema: {},
  topic: "this/#",
});

subscriber.subscribe(console.log);
publisher.emit("Hello World!"); // Logs the following => "Hello World!", {...}
```

## Author

M.Karkowski

## Export

## Type parameters

| Parameter                                                                                                                                      | Default                                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| AD _extends_ [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md)                                                                 | [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md)                                                                  |
| I _extends_ [`INopeEventEmitter`](../../../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, `AD`\> | [`INopeEventEmitter`](../../../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, `AD`\> |
| O _extends_ [`INopeTopic`](../types/type-alias.INopeTopic.md)                                                                                  | [`INopeTopic`](../types/type-alias.INopeTopic.md)                                                                                  |

## Properties

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

### options

```ts
readonly options: IPubSubOptions
```

Options which describe the Behavior

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

### publishers

```ts
readonly publishers: IMapBasedMergeData<O, IPubSubEmitterOptions<AD>, O, string>
```

List containing all publishers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

### subscriptions

```ts
readonly subscriptions: IMapBasedMergeData<O, IPubSubEmitterOptions<AD>, O, string>
```

List, containing all subscribers.

#### Author

M.Karkowski

#### Memberof

IPubSubSystem

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

### toDescription()

Lists all publishers and subscribers of the system.

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
