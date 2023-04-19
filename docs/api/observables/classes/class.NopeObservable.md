# Class: NopeObservable<T, S, G, AD\>

RsJX based Observable.

Contains additional Functionalities like:

- property with the current value
- function to publish values. (wrapper for next)
- enables performing a subscription with synced call or a immediate call.

## Type parameters

| Parameter                                                                                              | Default                                                                                   |
| :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| T                                                                                                      | -                                                                                         |
| S                                                                                                      | `T`                                                                                       |
| G                                                                                                      | `T`                                                                                       |
| AD _extends_ [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) |

## Implements

- [`INopeObservable`](../interfaces/interface.INopeObservable.md)<`T`, `S`, `G`, `AD`\>

## Constructors

### constructor()

```ts
new NopeObservable<T, S, G, AD>(_options: TSubjectOptions = {}): NopeObservable<T, S, G, AD>
```

#### Type parameters

| Parameter                                                                                              | Default                                                                                   |
| :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| T                                                                                                      | -                                                                                         |
| S                                                                                                      | `T`                                                                                       |
| G                                                                                                      | `T`                                                                                       |
| AD _extends_ [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) |

#### Parameters

| Parameter | Type                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------- |
| \_options | [`TSubjectOptions`](../../helpers/namespaces/subject/interfaces/interface.TSubjectOptions.md) |

#### Returns

[`NopeObservable`](class.NopeObservable.md)<`T`, `S`, `G`, `AD`\>

#### Overrides

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[constructor](../../eventEmitter/classes/class.NopeEventEmitter.md#constructor)

## Properties

### \_subscriptions

```ts
_subscriptions: Set<() => void>;
```

A Set containing the Subscriptions

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[\_subscriptions](../../eventEmitter/classes/class.NopeEventEmitter.md#_subscriptions)

### \_value

```ts
_value: T;
```

Accessor to the currently stored value.

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[\_value](../interfaces/interface.INopeObservable.md#_value)

### disablePublishing

```ts
disablePublishing: boolean = false;
```

Flag to Disable Publishing

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[disablePublishing](../interfaces/interface.INopeObservable.md#disablepublishing)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[disablePublishing](../../eventEmitter/classes/class.NopeEventEmitter.md#disablepublishing)

### id

```ts
readonly id: string
```

An id of the Observable. This might be usefull for debugging.

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[id](../interfaces/interface.INopeObservable.md#id)

#### Overrides

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[id](../../eventEmitter/classes/class.NopeEventEmitter.md#id)

### options

```ts
options: any;
```

options.

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[options](../interfaces/interface.INopeObservable.md#options)

#### Overrides

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[options](../../eventEmitter/classes/class.NopeEventEmitter.md#options)

### setter

```ts
setter: Function = null;
```

#### Type declaration

Function to specify a Setter

```ts
(value: S, options?: Partial<AD>): object
```

##### Parameters

| Parameter | Type              |
| :-------- | :---------------- |
| value     | `S`               |
| options?  | `Partial`<`AD`\> |

##### Returns

`object`

```ts
data: T;
```

```ts
valid: boolean;
```

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[setter](../interfaces/interface.INopeObservable.md#setter)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[setter](../../eventEmitter/classes/class.NopeEventEmitter.md#setter)

## Accessors

### getter

```ts
get getter(): Function
```

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[getter](../interfaces/interface.INopeObservable.md#getter)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[getter](../../eventEmitter/classes/class.NopeEventEmitter.md#getter)

### hasSubscriptions

```ts
get hasSubscriptions(): boolean
```

Flag, showing if there exists any subscription this particular observer.

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[hasSubscriptions](../interfaces/interface.INopeObservable.md#hassubscriptions)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[hasSubscriptions](../../eventEmitter/classes/class.NopeEventEmitter.md#hassubscriptions)

### observable

```ts
get observable(): BehaviorSubject<IObservableType<G, AD>>
```

The original Observable. Implemented by an Behaviour Subject.
See here: https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
for more details.

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[observable](../interfaces/interface.INopeObservable.md#observable)

### observerLength

```ts
get observerLength(): number
```

Returns the amout of interessed Subscribers / Observers.

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[observerLength](../interfaces/interface.INopeObservable.md#observerlength)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[observerLength](../../eventEmitter/classes/class.NopeEventEmitter.md#observerlength)

## Methods

### dispose()

Function, used to dispose the observable.
Every item will be unsubscribed.

```ts
dispose(): void
```

#### Returns

`void`

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[dispose](../interfaces/interface.INopeObservable.md#dispose)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[dispose](../../eventEmitter/classes/class.NopeEventEmitter.md#dispose)

### emit()

Function to update the Content

```ts
emit(value: S, options: Partial<AD> = {}): boolean
```

#### Parameters

| Parameter | Type              | Description |
| :-------- | :---------------- | :---------- |
| value     | `S`               | The content |
| options   | `Partial`<`AD`\> | -           |

#### Returns

`boolean`

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[emit](../interfaces/interface.INopeObservable.md#emit)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[emit](../../eventEmitter/classes/class.NopeEventEmitter.md#emit)

### enhancedSubscription()

Create an enhanced Subscription of the Observable. Use the Pipes, to
Define what should be subscribed.

```ts
enhancedSubscription<K>(next: Function, options: object = {}): Subscription
```

#### Type parameters

| Parameter |
| :-------- |
| K         |

#### Parameters

| Parameter | Type                    | Description                                      |
| :-------- | :---------------------- | :----------------------------------------------- |
| next      | (`data`: `K`) => `void` | The Next Function, used to transmit changes      |
| options   | `object`                | The Options, used to determine the Enhancements. |

#### Returns

`Subscription`

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[enhancedSubscription](../../eventEmitter/classes/class.NopeEventEmitter.md#enhancedsubscription)

### forcePublish()

Function to Force an Update

#### Author

M.Karkowski

#### Memberof

NopeObservable

```ts
forcePublish(options: Partial<AD> = {}): boolean
```

#### Parameters

| Parameter | Type              | Description                     |
| :-------- | :---------------- | :------------------------------ |
| options   | `Partial`<`AD`\> | Options which might be relevant |

#### Returns

`boolean`

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[forcePublish](../interfaces/interface.INopeObservable.md#forcepublish)

### getContent()

Function to extract the Content.
If a Getter is provided, the Getter will be used
to Transform the item.

```ts
getContent(): G
```

#### Returns

`G`

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[getContent](../interfaces/interface.INopeObservable.md#getcontent)

### once()

Creates a Subscription for the value of the Observable. After one Update the Value will be deleted

```ts
once(func: IEventCallback<G, AD>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                              | Description                                        |
| :-------- | :------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| func      | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`G`, `AD`\>            | Function which is called when new Datas are pushed |
| options?  | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md) | Additional Options                                 |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[once](../interfaces/interface.INopeObservable.md#once)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[once](../../eventEmitter/classes/class.NopeEventEmitter.md#once)

### setContent()

Function to update the Content

```ts
setContent(value: S, options: Partial<AD> = {}): boolean
```

#### Parameters

| Parameter | Type              | Description |
| :-------- | :---------------- | :---------- |
| value     | `S`               | The content |
| options   | `Partial`<`AD`\> | -           |

#### Returns

`boolean`

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[setContent](../interfaces/interface.INopeObservable.md#setcontent)

### subscribe()

A Function to subscribe to updates of the Observable.

```ts
subscribe(observer: INopePartialObserver<G, AD> | IEventCallback<G, AD>, options: INopeSubscriptionOptions = ...): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                                                                                                             | Description                                              |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| observer  | [`INopePartialObserver`](../interfaces/interface.INopePartialObserver.md)<`G`, `AD`\> \| [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`G`, `AD`\> | The Observer. Could be a Function or a Partial Observer. |
| options   | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md)                                                                                | Additional Options.                                      |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[subscribe](../interfaces/interface.INopeObservable.md#subscribe)

#### Overrides

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[subscribe](../../eventEmitter/classes/class.NopeEventEmitter.md#subscribe)

### waitFor()

Async Function to Wait for an Update

```ts
waitFor(testCallback: IWaitForCallback<G, AD> = ..., options: INopeWaitForObservableChangeOptions = ...): Promise<G>
```

#### Parameters

| Parameter    | Type                                                                                                    | Description                               |
| :----------- | :------------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| testCallback | [`IWaitForCallback`](../../eventEmitter/types/type-alias.IWaitForCallback.md)<`G`, `AD`\>              | -                                         |
| options      | [`INopeWaitForObservableChangeOptions`](../interfaces/interface.INopeWaitForObservableChangeOptions.md) | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[waitFor](../interfaces/interface.INopeObservable.md#waitfor)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[waitFor](../../eventEmitter/classes/class.NopeEventEmitter.md#waitfor)

### waitForUpdate()

Async Function to Wait for an Update

```ts
waitForUpdate(options?: INopeSubscriptionOptions): Promise<G>
```

#### Parameters

| Parameter | Type                                                                                              | Description                               |
| :-------- | :------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| options?  | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md) | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>

#### Implementation of

[INopeObservable](../interfaces/interface.INopeObservable.md).[waitForUpdate](../interfaces/interface.INopeObservable.md#waitforupdate)

#### Inherited from

[NopeEventEmitter](../../eventEmitter/classes/class.NopeEventEmitter.md).[waitForUpdate](../../eventEmitter/classes/class.NopeEventEmitter.md#waitforupdate)
