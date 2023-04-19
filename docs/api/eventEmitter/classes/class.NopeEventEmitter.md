# Class: NopeEventEmitter<T, S, G, AD\>

RsJX based Observable.

Contains additional Functionalities like:

- property with the current value
- function to publish values. (wrapper for next)
- enables performing a subscription with synced call or a immediate call.

## Type parameters

| Parameter                                                                              | Default                                                                   |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| T                                                                                      | `unknown`                                                                 |
| S                                                                                      | `T`                                                                       |
| G                                                                                      | `T`                                                                       |
| AD _extends_ [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) |

## Implements

- [`INopeEventEmitter`](../interfaces/interface.INopeEventEmitter.md)<`T`, `S`, `G`, `AD`\>

## Constructors

### constructor()

```ts
new NopeEventEmitter<T, S, G, AD>(_options: TSubjectOptions = {}): NopeEventEmitter<T, S, G, AD>
```

#### Type parameters

| Parameter                                                                              | Default                                                                   |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| T                                                                                      | `unknown`                                                                 |
| S                                                                                      | `T`                                                                       |
| G                                                                                      | `T`                                                                       |
| AD _extends_ [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) |

#### Parameters

| Parameter | Type                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------- |
| \_options | [`TSubjectOptions`](../../helpers/namespaces/subject/interfaces/interface.TSubjectOptions.md) |

#### Returns

[`NopeEventEmitter`](class.NopeEventEmitter.md)<`T`, `S`, `G`, `AD`\>

## Properties

### \_subscriptions

```ts
_subscriptions: Set<() => void>;
```

A Set containing the Subscriptions

### disablePublishing

```ts
disablePublishing: boolean = false;
```

Flag to Disable Publishing

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[disablePublishing](../interfaces/interface.INopeEventEmitter.md#disablepublishing)

### id

```ts
readonly id: string
```

An id of the Observable. This might be usefull for debugging.

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[id](../interfaces/interface.INopeEventEmitter.md#id)

### options

```ts
options: any;
```

options.

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[options](../interfaces/interface.INopeEventEmitter.md#options)

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

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[setter](../interfaces/interface.INopeEventEmitter.md#setter)

## Accessors

### getter

```ts
get getter(): Function
```

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[getter](../interfaces/interface.INopeEventEmitter.md#getter)

### hasSubscriptions

```ts
get hasSubscriptions(): boolean
```

Flag, showing if there exists any subscription this particular observer.

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[hasSubscriptions](../interfaces/interface.INopeEventEmitter.md#hassubscriptions)

### observerLength

```ts
get observerLength(): number
```

Returns the amout of interessed Subscribers / Observers.

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[observerLength](../interfaces/interface.INopeEventEmitter.md#observerlength)

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

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[dispose](../interfaces/interface.INopeEventEmitter.md#dispose)

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

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[emit](../interfaces/interface.INopeEventEmitter.md#emit)

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

### once()

Creates a Subscription for the value of the Observable. After one Update the Value will be deleted

```ts
once(func: IEventCallback<G, AD>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                              | Description                                        |
| :-------- | :-------------------------------------------------------------------------------- | :------------------------------------------------- |
| func      | [`IEventCallback`](../types/type-alias.IEventCallback.md)<`G`, `AD`\>            | Function which is called when new Datas are pushed |
| options?  | [`INopeSubscriptionOptions`](../interfaces/interface.INopeSubscriptionOptions.md) | Additional Options                                 |

#### Returns

[`INopeObserver`](../interfaces/interface.INopeObserver.md)

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[once](../interfaces/interface.INopeEventEmitter.md#once)

### subscribe()

A Function to subscribe to updates of the Observable.

```ts
subscribe(observer: INopePartialObserver<G, AD> | IEventCallback<G, AD>, options: INopeSubscriptionOptions = ...): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                                                                                                            | Description                                              |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------- |
| observer  | [`INopePartialObserver`](../../observables/interfaces/interface.INopePartialObserver.md)<`G`, `AD`\> \| [`IEventCallback`](../types/type-alias.IEventCallback.md)<`G`, `AD`\> | The Observer. Could be a Function or a Partial Observer. |
| options   | [`INopeSubscriptionOptions`](../interfaces/interface.INopeSubscriptionOptions.md)                                                                                               | Additional Options.                                      |

#### Returns

[`INopeObserver`](../interfaces/interface.INopeObserver.md)

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[subscribe](../interfaces/interface.INopeEventEmitter.md#subscribe)

### waitFor()

Async Function to Wait for an Update

```ts
waitFor(testCallback: IWaitForCallback<G, AD> = ..., options: INopeWaitForObservableChangeOptions = ...): Promise<G>
```

#### Parameters

| Parameter    | Type                                                                                                                   | Description                               |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| testCallback | [`IWaitForCallback`](../types/type-alias.IWaitForCallback.md)<`G`, `AD`\>                                             | -                                         |
| options      | [`INopeWaitForObservableChangeOptions`](../../observables/interfaces/interface.INopeWaitForObservableChangeOptions.md) | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[waitFor](../interfaces/interface.INopeEventEmitter.md#waitfor)

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

#### Implementation of

[INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md).[waitForUpdate](../interfaces/interface.INopeEventEmitter.md#waitforupdate)
