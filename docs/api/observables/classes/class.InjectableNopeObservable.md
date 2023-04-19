# Class: InjectableNopeObservable<T, S, G\>

RsJX based Observable.

Contains additional Functionalities like:

- property with the current value
- function to publish values. (wrapper for next)
- enables performing a subscription with synced call or a immediate call.

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | -       |
| S         | `T`     |
| G         | `T`     |

## Constructors

### constructor()

```ts
new InjectableNopeObservable<T, S, G>(_options: TSubjectOptions = {}): InjectableNopeObservable<T, S, G>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | -       |
| S         | `T`     |
| G         | `T`     |

#### Parameters

| Parameter | Type                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------- |
| \_options | [`TSubjectOptions`](../../helpers/namespaces/subject/interfaces/interface.TSubjectOptions.md) |

#### Returns

[`InjectableNopeObservable`](class.InjectableNopeObservable.md)<`T`, `S`, `G`\>

#### Inherited from

[NopeObservable](class.NopeObservable.md).[constructor](class.NopeObservable.md#constructor)

## Properties

### \_subscriptions

```ts
_subscriptions: Set<() => void>;
```

A Set containing the Subscriptions

#### Inherited from

[NopeObservable](class.NopeObservable.md).[\_subscriptions](class.NopeObservable.md#_subscriptions)

### \_value

```ts
_value: T;
```

Accessor to the currently stored value.

#### Inherited from

[NopeObservable](class.NopeObservable.md).[\_value](class.NopeObservable.md#_value)

### disablePublishing

```ts
disablePublishing: boolean = false;
```

Flag to Disable Publishing

#### Inherited from

[NopeObservable](class.NopeObservable.md).[disablePublishing](class.NopeObservable.md#disablepublishing)

### id

```ts
readonly id: string
```

An id of the Observable. This might be usefull for debugging.

#### Inherited from

[NopeObservable](class.NopeObservable.md).[id](class.NopeObservable.md#id)

### options

```ts
options: any;
```

options.

#### Inherited from

[NopeObservable](class.NopeObservable.md).[options](class.NopeObservable.md#options)

### setter

```ts
setter: Function = null;
```

#### Type declaration

Function to specify a Setter

```ts
(value: S, options?: Partial<IEventAdditionalData>): object
```

##### Parameters

| Parameter | Type                                                                                                   |
| :-------- | :----------------------------------------------------------------------------------------------------- |
| value     | `S`                                                                                                    |
| options?  | `Partial`<[`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> |

##### Returns

`object`

```ts
data: T;
```

```ts
valid: boolean;
```

#### Inherited from

[NopeObservable](class.NopeObservable.md).[setter](class.NopeObservable.md#setter)

## Accessors

### getter

```ts
get getter(): Function
```

#### Inherited from

[NopeObservable](class.NopeObservable.md).[getter](class.NopeObservable.md#getter)

### hasSubscriptions

```ts
get hasSubscriptions(): boolean
```

Flag, showing if there exists any subscription this particular observer.

#### Inherited from

[NopeObservable](class.NopeObservable.md).[hasSubscriptions](class.NopeObservable.md#hassubscriptions)

### observable

```ts
get observable(): BehaviorSubject<IObservableType<G, AD>>
```

The original Observable. Implemented by an Behaviour Subject.
See here: https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
for more details.

#### Inherited from

[NopeObservable](class.NopeObservable.md).[observable](class.NopeObservable.md#observable)

### observerLength

```ts
get observerLength(): number
```

Returns the amout of interessed Subscribers / Observers.

#### Inherited from

[NopeObservable](class.NopeObservable.md).[observerLength](class.NopeObservable.md#observerlength)

## Methods

### dispose()

Function, used to dispose the observable.
Every item will be unsubscribed.

```ts
dispose(): void
```

#### Returns

`void`

#### Inherited from

[NopeObservable](class.NopeObservable.md).[dispose](class.NopeObservable.md#dispose)

### emit()

Function to update the Content

```ts
emit(value: S, options: Partial<IEventAdditionalData> = {}): boolean
```

#### Parameters

| Parameter | Type                                                                                                   | Description |
| :-------- | :----------------------------------------------------------------------------------------------------- | :---------- |
| value     | `S`                                                                                                    | The content |
| options   | `Partial`<[`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | -           |

#### Returns

`boolean`

#### Inherited from

[NopeObservable](class.NopeObservable.md).[emit](class.NopeObservable.md#emit)

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

[NopeObservable](class.NopeObservable.md).[enhancedSubscription](class.NopeObservable.md#enhancedsubscription)

### forcePublish()

Function to Force an Update

#### Author

M.Karkowski

#### Memberof

NopeObservable

```ts
forcePublish(options: Partial<IEventAdditionalData> = {}): boolean
```

#### Parameters

| Parameter | Type                                                                                                   | Description                     |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------------------ |
| options   | `Partial`<[`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | Options which might be relevant |

#### Returns

`boolean`

#### Inherited from

[NopeObservable](class.NopeObservable.md).[forcePublish](class.NopeObservable.md#forcepublish)

### getContent()

Function to extract the Content.
If a Getter is provided, the Getter will be used
to Transform the item.

```ts
getContent(): G
```

#### Returns

`G`

#### Inherited from

[NopeObservable](class.NopeObservable.md).[getContent](class.NopeObservable.md#getcontent)

### once()

Creates a Subscription for the value of the Observable. After one Update the Value will be deleted

```ts
once(func: IEventCallback<G, IEventAdditionalData>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                                                                                                        | Description                                        |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| func      | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | Function which is called when new Datas are pushed |
| options?  | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md)                                                                           | Additional Options                                 |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

#### Inherited from

[NopeObservable](class.NopeObservable.md).[once](class.NopeObservable.md#once)

### setContent()

Function to update the Content

```ts
setContent(value: S, options: Partial<IEventAdditionalData> = {}): boolean
```

#### Parameters

| Parameter | Type                                                                                                   | Description |
| :-------- | :----------------------------------------------------------------------------------------------------- | :---------- |
| value     | `S`                                                                                                    | The content |
| options   | `Partial`<[`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | -           |

#### Returns

`boolean`

#### Inherited from

[NopeObservable](class.NopeObservable.md).[setContent](class.NopeObservable.md#setcontent)

### subscribe()

A Function to subscribe to updates of the Observable.

```ts
subscribe(observer: INopePartialObserver<G, IEventAdditionalData> | IEventCallback<G, IEventAdditionalData>, options: INopeSubscriptionOptions = ...): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                                                       | Description                                              |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| observer  | [`INopePartialObserver`](../interfaces/interface.INopePartialObserver.md)<`G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> \| [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Observer. Could be a Function or a Partial Observer. |
| options   | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md)                                                                                                                                                                                                                                                          | Additional Options.                                      |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

#### Inherited from

[NopeObservable](class.NopeObservable.md).[subscribe](class.NopeObservable.md#subscribe)

### waitFor()

Async Function to Wait for an Update

```ts
waitFor(testCallback: IWaitForCallback<G, IEventAdditionalData> = ..., options: INopeWaitForObservableChangeOptions = ...): Promise<G>
```

#### Parameters

| Parameter    | Type                                                                                                                                                                            | Description                               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| testCallback | [`IWaitForCallback`](../../eventEmitter/types/type-alias.IWaitForCallback.md)<`G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | -                                         |
| options      | [`INopeWaitForObservableChangeOptions`](../interfaces/interface.INopeWaitForObservableChangeOptions.md)                                                                         | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>

#### Inherited from

[NopeObservable](class.NopeObservable.md).[waitFor](class.NopeObservable.md#waitfor)

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

#### Inherited from

[NopeObservable](class.NopeObservable.md).[waitForUpdate](class.NopeObservable.md#waitforupdate)
