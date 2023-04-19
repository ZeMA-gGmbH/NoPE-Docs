# Class: InjectableNopeEventEmitter<T, S, G\>

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
new InjectableNopeEventEmitter<T, S, G>(_options: TSubjectOptions = {}): InjectableNopeEventEmitter<T, S, G>
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

[`InjectableNopeEventEmitter`](class.InjectableNopeEventEmitter.md)<`T`, `S`, `G`\>

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[constructor](class.NopeEventEmitter.md#constructor)

## Properties

### \_subscriptions

```ts
_subscriptions: Set<() => void>;
```

A Set containing the Subscriptions

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[\_subscriptions](class.NopeEventEmitter.md#_subscriptions)

### disablePublishing

```ts
disablePublishing: boolean = false;
```

Flag to Disable Publishing

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[disablePublishing](class.NopeEventEmitter.md#disablepublishing)

### id

```ts
readonly id: string
```

An id of the Observable. This might be usefull for debugging.

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[id](class.NopeEventEmitter.md#id)

### options

```ts
options: any;
```

options.

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[options](class.NopeEventEmitter.md#options)

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

| Parameter | Type                                                                                   |
| :-------- | :------------------------------------------------------------------------------------- |
| value     | `S`                                                                                    |
| options?  | `Partial`<[`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md)\> |

##### Returns

`object`

```ts
data: T;
```

```ts
valid: boolean;
```

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[setter](class.NopeEventEmitter.md#setter)

## Accessors

### getter

```ts
get getter(): Function
```

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[getter](class.NopeEventEmitter.md#getter)

### hasSubscriptions

```ts
get hasSubscriptions(): boolean
```

Flag, showing if there exists any subscription this particular observer.

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[hasSubscriptions](class.NopeEventEmitter.md#hassubscriptions)

### observerLength

```ts
get observerLength(): number
```

Returns the amout of interessed Subscribers / Observers.

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[observerLength](class.NopeEventEmitter.md#observerlength)

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

[NopeEventEmitter](class.NopeEventEmitter.md).[dispose](class.NopeEventEmitter.md#dispose)

### emit()

Function to update the Content

```ts
emit(value: S, options: Partial<IEventAdditionalData> = {}): boolean
```

#### Parameters

| Parameter | Type                                                                                   | Description |
| :-------- | :------------------------------------------------------------------------------------- | :---------- |
| value     | `S`                                                                                    | The content |
| options   | `Partial`<[`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md)\> | -           |

#### Returns

`boolean`

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[emit](class.NopeEventEmitter.md#emit)

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

[NopeEventEmitter](class.NopeEventEmitter.md).[enhancedSubscription](class.NopeEventEmitter.md#enhancedsubscription)

### once()

Creates a Subscription for the value of the Observable. After one Update the Value will be deleted

```ts
once(func: IEventCallback<G, IEventAdditionalData>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                                                                        | Description                                        |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| func      | [`IEventCallback`](../types/type-alias.IEventCallback.md)<`G`, [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md)\> | Function which is called when new Datas are pushed |
| options?  | [`INopeSubscriptionOptions`](../interfaces/interface.INopeSubscriptionOptions.md)                                                           | Additional Options                                 |

#### Returns

[`INopeObserver`](../interfaces/interface.INopeObserver.md)

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[once](class.NopeEventEmitter.md#once)

### subscribe()

A Function to subscribe to updates of the Observable.

```ts
subscribe(observer: INopePartialObserver<G, IEventAdditionalData> | IEventCallback<G, IEventAdditionalData>, options: INopeSubscriptionOptions = ...): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                      | Description                                              |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------- |
| observer  | [`INopePartialObserver`](../../observables/interfaces/interface.INopePartialObserver.md)<`G`, [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md)\> \| [`IEventCallback`](../types/type-alias.IEventCallback.md)<`G`, [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md)\> | The Observer. Could be a Function or a Partial Observer. |
| options   | [`INopeSubscriptionOptions`](../interfaces/interface.INopeSubscriptionOptions.md)                                                                                                                                                                                                                                         | Additional Options.                                      |

#### Returns

[`INopeObserver`](../interfaces/interface.INopeObserver.md)

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[subscribe](class.NopeEventEmitter.md#subscribe)

### waitFor()

Async Function to Wait for an Update

```ts
waitFor(testCallback: IWaitForCallback<G, IEventAdditionalData> = ..., options: INopeWaitForObservableChangeOptions = ...): Promise<G>
```

#### Parameters

| Parameter    | Type                                                                                                                                            | Description                               |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| testCallback | [`IWaitForCallback`](../types/type-alias.IWaitForCallback.md)<`G`, [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md)\> | -                                         |
| options      | [`INopeWaitForObservableChangeOptions`](../../observables/interfaces/interface.INopeWaitForObservableChangeOptions.md)                          | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[waitFor](class.NopeEventEmitter.md#waitfor)

### waitForUpdate()

Async Function to Wait for an Update

```ts
waitForUpdate(options?: INopeSubscriptionOptions): Promise<G>
```

#### Parameters

| Parameter | Type                                                                              | Description                               |
| :-------- | :-------------------------------------------------------------------------------- | :---------------------------------------- |
| options?  | [`INopeSubscriptionOptions`](../interfaces/interface.INopeSubscriptionOptions.md) | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>

#### Inherited from

[NopeEventEmitter](class.NopeEventEmitter.md).[waitForUpdate](class.NopeEventEmitter.md#waitforupdate)
