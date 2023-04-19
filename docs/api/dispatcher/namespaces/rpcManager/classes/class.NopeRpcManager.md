# Class: NopeRpcManager<T\>

A Dispatcher to perform a function on a Remote
Dispatcher. Therefore a Task is created and forwarded
to the remote.

For a detailled description please checkout [INopeRpcManager](../interfaces/interface.INopeRpcManager.md)

## Export

## Type parameters

| Parameter                                                                                    | Default                                                                          |
| :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| T _extends_ [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md) | [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md) |

## Implements

- [`INopeRpcManager`](../interfaces/interface.INopeRpcManager.md)

## Constructors

### constructor()

Creates an instance of NopeRpcManager.

#### Memberof

performCall

```ts
new NopeRpcManager<T>(
  options: INopeDispatcherOptions,
  _generateObservable: Function,
  _defaultSelector: ValidSelectorFunction,
  _id?: string = null,
  _connectivityManager?: INopeConnectivityManager = null): NopeRpcManager<T>
```

#### Type parameters

| Parameter                                                                                                  | Default                                                                                   |
| :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| T _extends_ [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md)<`any`, `T`\> | [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md)<`any`\> |

#### Parameters

| Parameter              | Type                                                                                                                                                                                                              | Default value | Description                                                                                                                                          |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| options                | [`INopeDispatcherOptions`](../../../types/type-alias.INopeDispatcherOptions.md)                                                                                                                                   | undefined     | The Options, used by the rpc-manager.                                                                                                                |
| \_generateObservable   | <T\>() => [`INopeObservable`](../../../../observables/interfaces/interface.INopeObservable.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | undefined     | helper to generate an nope observable. might be used to replace the default observable.                                                              |
| \_defaultSelector      | [`ValidSelectorFunction`](../types/type-alias.ValidSelectorFunction.md)                                                                                                                                           | undefined     | Default selector see [performCall](../interfaces/interface.INopeRpcManager.md#performcall)                                                           |
| \_id?                  | `string`                                                                                                                                                                                                          | null          | A Provided a for the rpc-manager                                                                                                                     |
| \_connectivityManager? | [`INopeConnectivityManager`](../../connectivityManager/interfaces/interface.INopeConnectivityManager.md)                                                                                                          | null          | A [INopeConnectivityManager](../../connectivityManager/interfaces/interface.INopeConnectivityManager.md) used to listen for new and dead dispatchers |

#### Returns

[`NopeRpcManager`](class.NopeRpcManager.md)<`T`\>

## Properties

### methodInterface

```ts
methodInterface: object;
```

Proxy for accessing the Methods. This proxy provides additional
options, which can be used to detail the calls.

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

#### Index signature

\[`index`: `string`\]: <T\>(...`args`: `any`) => [`INopePromise`](../../../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[methodInterface](../interfaces/interface.INopeRpcManager.md#methodinterface)

### methodInterfaceWithOptions

```ts
methodInterfaceWithOptions: object;
```

Proxy for accessing the Methods. This proxy provides additional
options, which can be used to detail the calls.

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

#### Index signature

\[`index`: `string`\]: <T\>(`options`: `Partial`<[`ICallOptions`](../../../../types/namespaces/nope/interfaces/interface.ICallOptions.md)\>, ...`args`: `any`) => [`INopePromise`](../../../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[methodInterfaceWithOptions](../interfaces/interface.INopeRpcManager.md#methodinterfacewithoptions)

### onCancelTask

```ts
readonly onCancelTask: INopeEventEmitter<ITaskCancelationMsg, ITaskCancelationMsg, ITaskCancelationMsg, IEventAdditionalData>
```

An event Emitter, which will be called when a task is getting
canceled.

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[onCancelTask](../interfaces/interface.INopeRpcManager.md#oncanceltask)

### options

```ts
options: INopeDispatcherOptions;
```

The Options, used by the rpc-manager.

### ready

```ts
readonly ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag to indicate, that the system is ready.

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[ready](../interfaces/interface.INopeRpcManager.md#ready)

### services

```ts
readonly services: IMapBasedMergeData<string, IAvailableServicesMsg, string, T>
```

Element showing the available services.
Its more or less a map, that maps the
services with their dispatchers.

- `OriginalKey` = Dispatcher ID (`string`)
- `OriginalValue` = Original Message (`IAvailableServicesMsg`)
- `ExtractedKey` = Function ID (`string`);`
- `ExtractedValue` = FunctionOptions (`T`)

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[services](../interfaces/interface.INopeRpcManager.md#services)

## Methods

### adaptServiceId()

```ts
adaptServiceId(name: string): string
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| name      | `string` |

#### Returns

`string`

### cancelRequestedTasksOfDispatcher()

Helper to cancel all Tasks which have been requested by a Dispatcher.

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

```ts
cancelRequestedTasksOfDispatcher(dispatcher: string, reason: Error): Promise<void>
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| dispatcher | `string` |
| reason     | `Error`  |

#### Returns

`Promise`<`void`\>

### cancelRunningTasksOfDispatcher()

Cancels all Tasks of the given Dispatcher.
see [cancelTask](class.NopeRpcManager.md#canceltask)

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

```ts
cancelRunningTasksOfDispatcher(dispatcher: string, reason: Error): Promise<void>
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| dispatcher | `string` |
| reason     | `Error`  |

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[cancelRunningTasksOfDispatcher](../interfaces/interface.INopeRpcManager.md#cancelrunningtasksofdispatcher)

### cancelTask()

Function to cancel an indivual Task. This might be the case, if a
connection to a specific dispatcher is lost or might have a user-based reason.

#### Memberof

nopeDispatcher

```ts
cancelTask(
  taskId: string,
  reason: Error,
  quiet: boolean = false): Promise<boolean>
```

#### Parameters

| Parameter | Type      | Default value | Description                                                                               |
| :-------- | :-------- | :------------ | :---------------------------------------------------------------------------------------- |
| taskId    | `string`  | undefined     | The Id of the Task. Which should be canceled.                                             |
| reason    | `Error`   | undefined     | The Reason, why the Task should be canceled (In general shoudl be something meaning full) |
| quiet     | `boolean` | false         | -                                                                                         |

#### Returns

`Promise`<`boolean`\>

Flag, that indicates, whether cancelation was sucessfull or not.

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[cancelTask](../interfaces/interface.INopeRpcManager.md#canceltask)

### clearTasks()

Function to clear all pending tasks

#### Memberof

nopeDispatcher

```ts
clearTasks(): void
```

#### Returns

`void`

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[clearTasks](../interfaces/interface.INopeRpcManager.md#cleartasks)

### dispose()

Disposes the StatusManager and thereby,

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[dispose](../interfaces/interface.INopeRpcManager.md#dispose)

### isProviding()

Simple checker, to test, if this rpc-mananger is providing a service with the given id.

```ts
isProviding(id: string): boolean
```

#### Parameters

| Parameter | Type     | Description                                              |
| :-------- | :------- | :------------------------------------------------------- |
| id        | `string` | The id of the service, which is used during registration |

#### Returns

`boolean`

The result

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[isProviding](../interfaces/interface.INopeRpcManager.md#isproviding)

### performCall()

Function which is used to perform a call on the remote.
Please see [performCall](../interfaces/interface.INopeRpcManager.md#performcall) for more Info.

```ts
performCall<T>(
  serviceName: string | string[],
  params: unknown[],
  options?: ValidCallOptions | ValidCallOptions[]): INopePromise<T, any>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter   | Type                                                                                                                                                                                           |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceName | `string` \| `string`[]                                                                                                                                                                         |
| params      | `unknown`[]                                                                                                                                                                                    |
| options?    | [`ValidCallOptions`](../../../../types/namespaces/nope/types/type-alias.ValidCallOptions.md) \| [`ValidCallOptions`](../../../../types/namespaces/nope/types/type-alias.ValidCallOptions.md)[] |

#### Returns

[`INopePromise`](../../../../promises/interfaces/interface.INopePromise.md)<`T`, `any`\>

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[performCall](../interfaces/interface.INopeRpcManager.md#performcall)

### registerService()

Function to register a Function in the Dispatcher

#### Memberof

nopeDispatcher

```ts
registerService(func: Function, options: {addNopeServiceIdPrefix: boolean;} & T): Function
```

#### Parameters

| Parameter | Type                                        | Description                                                                                   |
| :-------- | :------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| func      | (...`args`: `any`[]) => `Promise`<`any`\>  | The function which should be called if a request is mapped to the Function.                   |
| options   | \{addNopeServiceIdPrefix: `boolean`;} & `T` | Options to enhance the registered ID and enabling unregistering the Element after calling it. |

#### Returns

`Function`

The registered Function

Function to register a Function in the Dispatcher

##### Memberof

nopeDispatcher

```ts
(...args: any[]): Promise<any>
```

##### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...args   | `any`[] |

##### Returns

`Promise`<`any`\>

The registered Function

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[registerService](../interfaces/interface.INopeRpcManager.md#registerservice)

### removeDispatcher()

Helper to remove a dispatcher. This leads to
closing all open task related to this dispatcher ->
Exceptions should be thrown. Additional, internal
task, requested by the dispatcher will be canceled.

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

```ts
removeDispatcher(dispatcher: string): void
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| dispatcher | `string` |

#### Returns

`void`

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[removeDispatcher](../interfaces/interface.INopeRpcManager.md#removedispatcher)

### reset()

Function to reset the Dispatcher.

#### Memberof

nopeDispatcher

```ts
reset(): void
```

#### Returns

`void`

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[reset](../interfaces/interface.INopeRpcManager.md#reset)

### serviceExists()

Function to test if a specific Service exists.

#### Memberof

nopeDispatcher

```ts
serviceExists(id: string): boolean
```

#### Parameters

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| id        | `string` | The Id of the Serivce |

#### Returns

`boolean`

The result of the Test. True if either local or remotly a service is known.

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[serviceExists](../interfaces/interface.INopeRpcManager.md#serviceexists)

### toDescription()

Describes the Data.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
services: object;
```

##### Type declaration - services

> ```ts
> all: T[]
> ```
>
> ```ts
> internal: {
>   func: (...args: any[]) => Promise<any>;
>   options: T;
> }
> [];
> ```

```ts
task: object;
```

##### Type declaration - task

> ```ts
> executing: string[]
> ```
>
> ```ts
> requested: {
>   id: string;
>   service: string;
>   target: string;
>   timeout: any;
> }
> [];
> ```

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[toDescription](../interfaces/interface.INopeRpcManager.md#todescription)

### unregisterAll()

Function to unregister all Functions of the Dispatcher.

#### Memberof

nopeDispatcher

```ts
unregisterAll(): void
```

#### Returns

`void`

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[unregisterAll](../interfaces/interface.INopeRpcManager.md#unregisterall)

### unregisterService()

Function to unregister a Function from the Dispatcher

#### Memberof

nopeDispatcher

```ts
unregisterService(func: string | (...args: any[]) => void): Promise<boolean>
```

#### Parameters

| Parameter | Type                                       | Description                |
| :-------- | :----------------------------------------- | :------------------------- |
| func      | `string` \| (...`args`: `any`[]) => `void` | The Function to unregister |

#### Returns

`Promise`<`boolean`\>

Flag, whether the element was removed (only if found) or not.

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[unregisterService](../interfaces/interface.INopeRpcManager.md#unregisterservice)

### updateDispatcher()

Function, which will be called, if an dispatcher is updated.
This may leads to service that has been removed or added.
This change emitted on see [services](../interfaces/interface.INopeRpcManager.md#services)

#### Author

M.Karkowski

#### Memberof

NopeRpcManager

```ts
updateDispatcher(msg: IAvailableServicesMsg): void
```

#### Parameters

| Parameter | Type                                                                                                       | Description                                                                                                                     |
| :-------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| msg       | [`IAvailableServicesMsg`](../../../../types/namespaces/nope/interfaces/interface.IAvailableServicesMsg.md) | The Update Message see [IAvailableServicesMsg](../../../../types/namespaces/nope/interfaces/interface.IAvailableServicesMsg.md) |

#### Returns

`void`

#### Implementation of

[INopeRpcManager](../interfaces/interface.INopeRpcManager.md).[updateDispatcher](../interfaces/interface.INopeRpcManager.md#updatedispatcher)
