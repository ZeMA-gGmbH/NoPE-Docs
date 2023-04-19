# Interface: INopeObservable<T, S, G, AD\>

The Observable extends the [INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).

Instead of the [INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md) the `Observable` contains persistend data. This results in
the following behavior:

> Subscribing an `Observable` immediatly will call the subscriber, be cause `data` is present.

> `data` can be accessed with `getContent`

Contains additional Functionalities like:

- property with the current value
- function to publish values. (wrapper for next)
- enables performing a subscription with synced call or a immediate call.

# Example:

## Usage of `nope.observables`

To work with `observables` we have to import these:

```typescript
import * as nope from "nope-js-node";
```

Afterward we are able to create our first Observable.

```typescript
// Create our Observable:
const obs = new nope.observables.NopeObservable<number>();
```

### `setContent`: Change the content of the Observable.

To change the content of an observable use the method `setContent`.

```typescript
// Set the content to "1337"
obs.setContent(5);

// Print the content (see getContent)
console.log("current value =", obs.getContent());
```

This will print:

    current value = 5

#### `setter`: Define a specific setter for the observable.

You can specify a specifc getter for the observable for instance, to limit the number to the following constrains `> 0` and `< 10`.

---

The setter function will receive multiple parameters, as listed below:

1. `value`,
2. `options` containing:
   - `sender`: The Element, which changed the data
   - `timestamp`: The timestamp of the change
   - `args`: additional args.

---

The setter function have to return a `dict` with the following keys:
| key | type | content |
| - | - | - |
| `valid` | `bool` | A Flag, to show whether the data are valid or not. If the data is invalid, the observable wont store them |
| `value` | `any` | The Data that has been adapted |

---

Below, we will implement an example to show the setter above.

```typescript
obs.setter = (value, options) => {
  // Print, which data we received
  console.log("setter received", value, options);
  // Show the result of our comparison
  console.log("data is valid:", value > 0 && value < 10);
  return {
    // The Value
    value: value,
    // Valid
    valid: value > 0 && value < 10,
  };
};

// Set the content to "1337" ==> But our setter will prevent using this value because it isnt valid.
obs.setContent(1337);

// Print the content (see getContent) ==> we expect to get "5"
console.log("current value =", obs.getContent());
```

This will print:

    setter received 1337 {}
    data is valid: false
    current value = 5

Now we can reset the setter by assigning `null`. This disables the setter again:

```typescript
obs.setter = null;

// Set the content to "1337" we do not have any setter ==> we will use this parameter
obs.setContent(1337);

// Print the content (see getContent) ==> we expect to get "1337"
console.log("current value =", obs.getContent());
```

This will print:

    current value = 1337

To remove such a getter just set the getter property to `null`.

### `getContent`: Get the current content of the Observable.

To extract the content of our observable, we are able to use the function `getContent`

```typescript
let content = obs.getContent();
console.log("current value =", content);
```

This will print:

    current value = 1337

If no data is assigned, this will result in `undefined`. Otherwise the current data is returned.

#### `getter`: Define a specific getter for the observable.

You can specify a specifc getter for the observable for instance, to allways return a `string`

```typescript
// Define a getter
obs.getter = (value) => "Allways this result";
console.log("current value (with getter) =", obs.getContent());
```

This will print:

    current value (with getter) = Allways this result

To remove such a getter just set the getter property to `null`.

The Original value is not changed ==> we expect to get "1337"

```typescript
// Reset the getter.
obs.getter = null;
console.log("current value (after removing the getter) =", obs.getContent());
```

This will print:

    current value (after removing the getter) = 1337

# Subscriptions

You can use an observable to get informed about changes:

1. define a `callback`, which receives both, the value and the options.
2. `subscribe` the observable.

During subscribing you can use the following options for subscribing:

| key           | type   | content                                                                                              |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| `skipCurrent` | `bool` | A Flag, which will call the callback if set to true the first time after a change. Defaults to False |

Lets determine the behavior using an example code:

```typescript
function onChange(value, options) {
  console.log("options.skipCurrent = False. Value is now:", value);
}

function onChangeSkip(value, options) {
  console.log("options.skipCurrent = True. Value is now:", value);
}

const observer_01 = obs.subscribe(onChange);
const observer_02 = obs.subscribe(onChangeSkip, { skipCurrent: true });

obs.setContent("new-value");
obs.setContent("new-value-2");
```

This code results in:

    options.skipCurrent = False. Value is now: 1337
    options.skipCurrent = False. Value is now: new-value
    options.skipCurrent = True. Value is now: new-value
    options.skipCurrent = False. Value is now: new-value-2
    options.skipCurrent = True. Value is now: new-value-2

INopeObservable

## Type parameters

| Parameter                                                                                              | Default                                                                                   | Description                                                                            |
| :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| T                                                                                                      | `any`                                                                                     | The internal Datatype of the Observable. This is the datatype of the `_value` property |
| S                                                                                                      | `T`                                                                                       | Datatype, the `setContent` method must receive                                         |
| G                                                                                                      | `T`                                                                                       | Datatype, that will be during forwarding the event data.                               |
| AD _extends_ [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | The Additional Event-Data, that observers will receive.                                |

## Properties

### \_value

```ts
_value: T;
```

Accessor to the currently stored value.

### disablePublishing

```ts
disablePublishing: boolean;
```

Flag to Disable Publishing of the emitter. This results in
**not** inform the relevant subscriber / observers.

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[disablePublishing](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#disablepublishing)

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

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[getter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#getter)

### hasSubscriptions

```ts
readonly hasSubscriptions: boolean
```

Flag, showing if there exists any subscription this particular observer.

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[hasSubscriptions](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#hassubscriptions)

### id

```ts
readonly id: string
```

An id of the Observable. This might be usefull for debugging.

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[id](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#id)

### observable

```ts
observable: BehaviorSubject<IObservableType<G, AD>>;
```

The original Observable. Implemented by an Behaviour Subject.
See here: https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
for more details.

### observerLength

```ts
readonly observerLength: number
```

Returns the amout of interessed Subscribers / Observers.

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[observerLength](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#observerlength)

### options

```ts
options: any;
```

options.

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[options](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#options)

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

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[setter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#setter)

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

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[dispose](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#dispose)

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

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[emit](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#emit)

### forcePublish()

Function to Force an Update.

```ts
forcePublish(options?: Partial<AD>): boolean
```

#### Parameters

| Parameter | Type              |
| :-------- | :---------------- |
| options?  | `Partial`<`AD`\> |

#### Returns

`boolean`

### getContent()

Function to extract the Content.
If a Getter is provided, the [getter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#getter) will be used
to Transform the data.

```ts
getContent(): G
```

#### Returns

`G`

### once()

Creates a Subscription for the value of the Event Emitter. After one Update the Subscription will be deleted

```ts
once(func: IEventCallback<G, AD>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                              | Description                                                                                                                                                            |
| :-------- | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| func      | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`G`, `AD`\>            | Function which is called when new Datas are pushed. The Function must follow the definition in [IEventCallback](../../eventEmitter/types/type-alias.IEventCallback.md) |
| options?  | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md) | Additional Options used during subscribing [INopeSubscriptionOptions](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md)                             |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[once](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#once)

### setContent()

Function to update the Content

```ts
setContent(value: S, options?: Partial<AD>): boolean
```

#### Parameters

| Parameter | Type              | Description |
| :-------- | :---------------- | :---------- |
| value     | `S`               | The content |
| options?  | `Partial`<`AD`\> | -           |

#### Returns

`boolean`

### subscribe()

A Function to subscribe to updates of the Event Emitter.

```ts
subscribe(listener: IEventCallback<G, AD>, options?: INopeSubscriptionOptions): INopeObserver
```

#### Parameters

| Parameter | Type                                                                                              | Description                                                                                                                                                            |
| :-------- | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listener  | [`IEventCallback`](../../eventEmitter/types/type-alias.IEventCallback.md)<`G`, `AD`\>            | Function which is called when new Datas are pushed. The Function must follow the definition in [IEventCallback](../../eventEmitter/types/type-alias.IEventCallback.md) |
| options?  | [`INopeSubscriptionOptions`](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md) | Additional Options used during subscribing [INopeSubscriptionOptions](../../eventEmitter/interfaces/interface.INopeSubscriptionOptions.md)                             |

#### Returns

[`INopeObserver`](../../eventEmitter/interfaces/interface.INopeObserver.md)

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[subscribe](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#subscribe)

### waitFor()

Async Function to Wait for an Update until the given `testCallback` returns `true`.
The `testCallback` defaultly test for `true`

```ts
waitFor(testCallback?: IWaitForCallback<G, AD>, options?: INopeWaitForEventOptions): Promise<G>
```

#### Parameters

| Parameter     | Type                                                                                              | Description                                                                                                                            |
| :------------ | :------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| testCallback? | [`IWaitForCallback`](../../eventEmitter/types/type-alias.IWaitForCallback.md)<`G`, `AD`\>        | Test-Callback which can be implemented `async` or `sync`. It must return `true` to fullfill the promise.                               |
| options?      | [`INopeWaitForEventOptions`](../../eventEmitter/interfaces/interface.INopeWaitForEventOptions.md) | Options, to controll the method. (see [INopeWaitForEventOptions](../../eventEmitter/interfaces/interface.INopeWaitForEventOptions.md)) |

#### Returns

`Promise`<`G`\>

Contains the Data, which firstly fullfilled the `testCallback`

#### Inherited from

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[waitFor](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#waitfor)

### waitForUpdate()

Async Function to Wait for an Update. No specific condition must match.
The code will be just awaited until an updat is received.

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

[INopeEventEmitter](../../eventEmitter/interfaces/interface.INopeEventEmitter.md).[waitForUpdate](../../eventEmitter/interfaces/interface.INopeEventEmitter.md#waitforupdate)
