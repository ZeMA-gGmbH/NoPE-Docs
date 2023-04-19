# Interface: INopeObserver

The Observer which can be used to controll the `Subscription`, which will be received after performing
the `subscribe` (see [subscribe](interface.INopeEventEmitter.md#subscribe)) method
an [INopeEventEmitter](interface.INopeEventEmitter.md) or an nope.types.INopeObservable

## Properties

### closed

```ts
closed: boolean;
```

A flag to indicate whether this Subscription has already been unsubscribed.

#### Inherited from

Subscription.closed

### options

```ts
options: INopeSubscriptionOptions;
```

## Methods

### add()

Adds a finalizer to this subscription, so that finalization will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already [#closed](../namespace.eventEmitter.md),
because it has already been unsubscribed, then whatever finalizer is passed to it
will automatically be executed (unless the finalizer itself is also a closed subscription).

Closed Subscriptions cannot be added as finalizers to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and Unsubscribable objects that you wish to remove
will need to be removed manually with [#remove](../namespace.eventEmitter.md)

```ts
add(teardown: TeardownLogic): void
```

#### Parameters

| Parameter | Type            | Description                                         |
| :-------- | :-------------- | :-------------------------------------------------- |
| teardown  | `TeardownLogic` | The finalization logic to add to this subscription. |

#### Returns

`void`

#### Inherited from

Subscription.add

### pause()

Pauses the Subscription

```ts
pause(): void
```

#### Returns

`void`

### remove()

Removes a finalizer from this subscription that was previously added with the [#add](../namespace.eventEmitter.md) method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same finalizer instance of a function or an unsubscribable object to a `Subscription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All finalizer instances are removed to free up memory upon unsubscription.

```ts
remove(teardown: Subscription | Unsubscribable | () => void): void
```

#### Parameters

| Parameter | Type                                               | Description                                    |
| :-------- | :------------------------------------------------- | :--------------------------------------------- |
| teardown  | `Subscription` \| `Unsubscribable` \| () => `void` | The finalizer to remove from this subscription |

#### Returns

`void`

#### Inherited from

Subscription.remove

### unpause()

Unpauses the Subscription

```ts
unpause(): void
```

#### Returns

`void`

### unsubscribe()

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

```ts
unsubscribe(): void
```

#### Returns

`void`

#### Inherited from

Subscription.unsubscribe
