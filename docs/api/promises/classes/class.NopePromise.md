# Class: NopePromise<T, E\>

A Custom Implementation of Nope-Promise.
They are cancelable.

## Export

## Implements

## Type parameters

| Parameter | Default | Description                   |
| :-------- | :------ | :---------------------------- |
| T         | -       | Type of the Default Promise   |
| E         | `any`   | Type of the Cancelation Data. |

## Implements

- [`INopePromise`](../interfaces/interface.INopePromise.md)<`T`\>

## Constructors

### constructor()

Creates an instance of NopePromise.

#### Memberof

NopePromise

```ts
new NopePromise<T, E>(
  executor: Function,
  cancel?: Function,
  taskId?: string): NopePromise<T, E>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | -       |
| E         | `any`   |

#### Parameters

| Parameter | Type                                                                                                             |
| :-------- | :--------------------------------------------------------------------------------------------------------------- |
| executor  | (`resolve`: (`value?`: `T` \| `PromiseLike`<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` |
| cancel?   | (`reason`: `E`) => `void`                                                                                        |
| taskId?   | `string`                                                                                                         |

#### Returns

[`NopePromise`](class.NopePromise.md)<`T`, `E`\>

#### Overrides

Promise<T\>.constructor

## Properties

### [toStringTag]

```ts
readonly [toStringTag]: string
```

#### Implementation of

[INopePromise](../interfaces/interface.INopePromise.md).[[toStringTag]](../interfaces/interface.INopePromise.md#[tostringtag])

#### Inherited from

Promise.[toStringTag]

### taskId

```ts
taskId: string;
```

Attribute holding the Task-ID assinged by a dispatcher.

#### Memberof

NopePromise

#### Implementation of

[INopePromise](../interfaces/interface.INopePromise.md).[taskId](../interfaces/interface.INopePromise.md#taskid)

### [species]

```ts
static readonly [species]: PromiseConstructor
```

#### Inherited from

Promise.[species]

## Methods

### cancel()

Function used to cancel the Element.

#### Memberof

NopePromise

```ts
cancel(reason: E): void
```

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| reason    | `E`  |

#### Returns

`void`

#### Implementation of

[INopePromise](../interfaces/interface.INopePromise.md).[cancel](../interfaces/interface.INopePromise.md#cancel)

### catch()

Attaches a callback for only the rejection of the Promise.

```ts
catch<TResult>(onrejected?: Function): Promise<T | TResult>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| TResult   | `never` |

#### Parameters

| Parameter   | Type                                                         | Description                                           |
| :---------- | :----------------------------------------------------------- | :---------------------------------------------------- |
| onrejected? | (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Implementation of

[INopePromise](../interfaces/interface.INopePromise.md).[catch](../interfaces/interface.INopePromise.md#catch)

#### Inherited from

Promise.catch

### finally()

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

```ts
finally(onfinally?: Function): Promise<T>
```

#### Parameters

| Parameter  | Type         | Description                                                                  |
| :--------- | :----------- | :--------------------------------------------------------------------------- |
| onfinally? | () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Implementation of

[INopePromise](../interfaces/interface.INopePromise.md).[finally](../interfaces/interface.INopePromise.md#finally)

#### Inherited from

Promise.finally

### then()

Attaches callbacks for the resolution and/or rejection of the Promise.

```ts
then<TResult1, TResult2>(onfulfilled?: Function, onrejected?: Function): Promise<TResult1 | TResult2>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| TResult1  | `T`     |
| TResult2  | `never` |

#### Parameters

| Parameter    | Type                                                           | Description                                           |
| :----------- | :------------------------------------------------------------- | :---------------------------------------------------- |
| onfulfilled? | (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\>    | The callback to execute when the Promise is resolved. |
| onrejected?  | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Implementation of

[INopePromise](../interfaces/interface.INopePromise.md).[then](../interfaces/interface.INopePromise.md#then)

#### Inherited from

Promise.then

### all()

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

```ts
Static all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                                      | Description              |
| :-------- | :---------------------------------------- | :----------------------- |
| values    | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>[]\>

A new Promise.

#### Inherited from

Promise.all

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

```ts
Static all<T>(values: T): Promise<{ -readonly [P in string | number | symbol]: Awaited<T[P]> }>
```

#### Type parameters

| Parameter                                |
| :--------------------------------------- |
| T _extends_ [] \| _readonly_ `unknown`[] |

#### Parameters

| Parameter | Type | Description           |
| :-------- | :--- | :-------------------- |
| values    | `T`  | An array of Promises. |

#### Returns

`Promise`<\{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

A new Promise.

#### Inherited from

Promise.all

### allSettled()

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

```ts
Static allSettled<T>(values: T): Promise<{ -readonly [P in string | number | symbol]: PromiseSettledResult<Awaited<T[P]>> }>
```

#### Type parameters

| Parameter                                |
| :--------------------------------------- |
| T _extends_ [] \| _readonly_ `unknown`[] |

#### Parameters

| Parameter | Type | Description           |
| :-------- | :--- | :-------------------- |
| values    | `T`  | An array of Promises. |

#### Returns

`Promise`<\{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

A new Promise.

#### Inherited from

Promise.allSettled

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

```ts
Static allSettled<T>(values: Iterable<T | PromiseLike<T>>): Promise<PromiseSettledResult<Awaited<T>>[]>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                                      | Description           |
| :-------- | :---------------------------------------- | :-------------------- |
| values    | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An array of Promises. |

#### Returns

`Promise`<`PromiseSettledResult`<`Awaited`<`T`\>\>[]\>

A new Promise.

#### Inherited from

Promise.allSettled

### any()

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

```ts
Static any<T>(values: T): Promise<Awaited<T[number]>>
```

#### Type parameters

| Parameter                                |
| :--------------------------------------- |
| T _extends_ [] \| _readonly_ `unknown`[] |

#### Parameters

| Parameter | Type | Description                       |
| :-------- | :--- | :-------------------------------- |
| values    | `T`  | An array or iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`[`number`]\>\>

A new Promise.

#### Inherited from

Promise.any

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

```ts
Static any<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                                      | Description                       |
| :-------- | :---------------------------------------- | :-------------------------------- |
| values    | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An array or iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A new Promise.

#### Inherited from

Promise.any

### race()

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

```ts
Static race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                                      | Description              |
| :-------- | :---------------------------------------- | :----------------------- |
| values    | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A new Promise.

#### Inherited from

Promise.race

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

```ts
Static race<T>(values: T): Promise<Awaited<T[number]>>
```

#### Type parameters

| Parameter                                |
| :--------------------------------------- |
| T _extends_ [] \| _readonly_ `unknown`[] |

#### Parameters

| Parameter | Type | Description           |
| :-------- | :--- | :-------------------- |
| values    | `T`  | An array of Promises. |

#### Returns

`Promise`<`Awaited`<`T`[`number`]\>\>

A new Promise.

#### Inherited from

Promise.race

### reject()

Creates a new rejected promise for the provided reason.

```ts
Static reject<T>(reason?: any): Promise<T>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | `never` |

#### Parameters

| Parameter | Type  | Description                          |
| :-------- | :---- | :----------------------------------- |
| reason?   | `any` | The reason the promise was rejected. |

#### Returns

`Promise`<`T`\>

A new rejected Promise.

#### Inherited from

Promise.reject

### resolve()

Creates a new resolved promise.

```ts
Static resolve(): Promise<void>
```

#### Returns

`Promise`<`void`\>

A resolved promise.

#### Inherited from

Promise.resolve

Creates a new resolved promise for the provided value.

```ts
Static resolve<T>(value: T): Promise<Awaited<T>>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| value     | `T`  | A promise.  |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A promise whose internal state matches the provided promise.

#### Inherited from

Promise.resolve

Creates a new resolved promise for the provided value.

```ts
Static resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                        | Description |
| :-------- | :-------------------------- | :---------- |
| value     | `T` \| `PromiseLike`<`T`\> | A promise.  |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A promise whose internal state matches the provided promise.

#### Inherited from

Promise.resolve
