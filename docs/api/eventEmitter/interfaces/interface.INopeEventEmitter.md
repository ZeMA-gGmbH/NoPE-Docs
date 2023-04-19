# Interface: INopeEventEmitter<T, S, G, AD\>

An EventEmitter is used to share Events in the System. Therefore the Eventemitter provides the method:
`emit`, which will emit an event.

Observers subscribe to that event an will receive an **notification** using a callback and subscribing
to an event (see [subscribe](interface.INopeEventEmitter.md#subscribe)). If they are temporarily are not interessed the
observer can use the `pause` (and `unpause`) Methods to temporarily controll the subscription. If the
subscription isnt used any more, the method `unsubscribe` will be used to unsubscribe from the emitter.

> `Subscriptions` on [INopeEventEmitter](interface.INopeEventEmitter.md) will only get informed on an updates. Events are not persitent.

To adapt and controll the events before publishing, a custom `setter` can be assigned (see
[setter](interface.INopeEventEmitter.md#setter)). This setter is used to determine, whether the event should be published
or not.

During subscribing to the emitter, you receive an [INopeObserver](interface.INopeObserver.md)

## Export

INopeEventEmitter

## Type parameters

| Parameter                                                                | Default                                                     | Description                                              |
| :----------------------------------------------------------------------- | :---------------------------------------------------------- | :------------------------------------------------------- |
| T                                                                        | `unknown`                                                   | The internal Datatype of the Emitter                     |
| S                                                                        | `T`                                                         | Datatype, the `setContent` method must receive           |
| G                                                                        | `T`                                                         | Datatype, that will be during forwarding the event data. |
| AD _extends_ [`IEventAdditionalData`](interface.IEventAdditionalData.md) | [`IEventAdditionalData`](interface.IEventAdditionalData.md) | The Additional Event-Data, that observers will receive.  |

## Properties

### disablePublishing

```ts
disablePublishing: boolean;
```

Flag to Disable Publishing of the emitter. This results in
**not** inform the relevant subscriber / observers.

### getter

```ts
getter: Function;
```

#### Type declaration

Helper to transform the data using a getter.

```ts
(value: T): G
```

##### Parameters

| Parameter | Type |
| :-------- | :--- |
| value     | `T`  |

##### Returns

`G`

### hasSubscriptions

```ts
readonly hasSubscriptions: boolean
```

Flag, showing if there exists any subscription this particular observer.

### id

```ts
readonly id: string
```

An id of the Observable. This might be usefull for debugging.

### observerLength

```ts
readonly observerLength: number
```

Returns the amout of interessed Subscribers / Observers.

### options

```ts
options: any;
```

options.

### setter

```ts
setter: Function;
```

#### Type declaration

Property, a custom setter.

This setter is used to determine, whether the event should be published or not
Therefore it is implemented as callback, which has to return the adpated `data`,
and a flag, which shows whether the `data` is `valid` or not. If the data is
marked es invalid, the event wont be published.

If not required the setter must be set to `null`

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

## Methods

### dispose()

Function, used to dispose the observable.
Every item will be unsubscribed.

```ts
dispose(): void
```

#### Returns

`void`

### emit()

Function to update the Content

```ts
emit(value: S, options?: Partial<AD>): boolean
```

#### Parameters

| Parameter | Type              | Description |
| :-------- | :---------------- | :---------- |
| value     | `S`               | The content |
| options?  | `Partial`<`AD`\> | -           |

#### Returns

`boolean`

### once()

Creates a Subscription for the value of the Event Emitter. After one Update the Subscription will be deleted

```ts
once(func: IEventCallback<G, AD>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                   | Description                                                                                                                                            |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| func      | [`IEventCallback`](../types/type-alias.IEventCallback.md)<`G`, `AD`\> | Function which is called when new Datas are pushed. The Function must follow the definition in [IEventCallback](../types/type-alias.IEventCallback.md) |
| options?  | [`INopeSubscriptionOptions`](interface.INopeSubscriptionOptions.md)    | Additional Options used during subscribing [INopeSubscriptionOptions](interface.INopeSubscriptionOptions.md)                                           |

#### Returns

[`INopeObserver`](interface.INopeObserver.md)

### subscribe()

A Function to subscribe to updates of the Event Emitter.

```ts
subscribe(listener: IEventCallback<G, AD>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                   | Description                                                                                                                                            |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| listener  | [`IEventCallback`](../types/type-alias.IEventCallback.md)<`G`, `AD`\> | Function which is called when new Datas are pushed. The Function must follow the definition in [IEventCallback](../types/type-alias.IEventCallback.md) |
| options?  | [`INopeSubscriptionOptions`](interface.INopeSubscriptionOptions.md)    | Additional Options used during subscribing [INopeSubscriptionOptions](interface.INopeSubscriptionOptions.md)                                           |

#### Returns

[`INopeObserver`](interface.INopeObserver.md)

### waitFor()

Async Function to Wait for an Update until the given `testCallback` returns `true`.
The `testCallback` defaultly test for `true`

```ts
waitFor(testCallback?: IWaitForCallback<G, AD>, options?: INopeWaitForEventOptions): Promise<G>
```

#### Parameters

| Parameter     | Type                                                                       | Description                                                                                              |
| :------------ | :------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| testCallback? | [`IWaitForCallback`](../types/type-alias.IWaitForCallback.md)<`G`, `AD`\> | Test-Callback which can be implemented `async` or `sync`. It must return `true` to fullfill the promise. |
| options?      | [`INopeWaitForEventOptions`](interface.INopeWaitForEventOptions.md)        | Options, to controll the method. (see [INopeWaitForEventOptions](interface.INopeWaitForEventOptions.md)) |

#### Returns

`Promise`<`G`\>

Contains the Data, which firstly fullfilled the `testCallback`

### waitForUpdate()

Async Function to Wait for an Update. No specific condition must match.
The code will be just awaited until an updat is received.

```ts
waitForUpdate(options?: INopeSubscriptionOptions): Promise<G>
```

#### Parameters

| Parameter | Type                                                                | Description                               |
| :-------- | :------------------------------------------------------------------ | :---------------------------------------- |
| options?  | [`INopeSubscriptionOptions`](interface.INopeSubscriptionOptions.md) | Additional Options for the Wait Function. |

#### Returns

`Promise`<`G`\>
