# Interface: INopeRpcManager<T\>

The `rpcManager` is essentially a service registry.

#### Service Registry

A service registry is a tool used to store and manage information about available services in a distributed system. It is an important
component of microservices architectures, where applications are divided into smaller, independent services that communicate over the network.

A service registry serves as a central repository for metadata about each service, including its address, port number, protocol, and API
version. When a service is started, it registers with the service registry, and when it is stopped, it is removed from it.

Other services in the architecture can then query the Service Registry to find out which services are available and how they can
communicate. This reduces the complexity of managing distributed systems and improves scalability and flexibility

#### Service Broker

A broker in the services world refers to a software tool or mechanism that acts as an intermediary between different services or applications.
A broker is typically used in a service-oriented architecture (SOA) to facilitate and manage interaction and communication between different services.

A broker provides various functions, such as message routing and transformation, monitoring, and security management. The broker can also
perform tasks such as caching messages and routing requests to the most appropriate service.

In an SOA environment, applications or services may communicate using different protocols and transports, and the broker acts as an intermediary
to ensure that messages are exchanged correctly and reliably between the different systems. The broker can also help improve the scalability
and flexibility of services by providing centralized control and management of service interactions.

#### Implementation of a service registry and broker in `NoPE` by the `rpcManager`.

A service in `NoPE` is defined by an `id`. This usually corresponds to a name with which the service is to be addressed.

In order to implement the required functionalities of a service registry, the `rpcManager` has the following methods and attributes:

- `registerService`: This can be used to register services. These are then made available to all participants of the NoPE network.
- `unregisterService`: This can be used to remove services from the network.
- The `services` property provides an overview of which services are available (including frequency and their parameters and description).
- The `serviceExists` method can be used to test whether the service is available.
- `performCall` execute a service. All relevant communications are mapped by the `rpcManager`. The user does not know which runtime provides the service.
  - The execution leads to a so called `task` which can be aborted by `cancelTask`. This leads to an exception at the calling unit.
  - If several service providers (NoPE-Runtime) are able to execute the service, the provider can be selected via a callback. For this purpose there are predefined `selectors`
    - `master` (see `connectivityManager`) the master must execute the process
    - `first`: any provider executes the serives (the first in the list)
    - `dispatcher`: a specific dispatcher must run the service (defined by its id)
    - `host`: a dispatcher on the defined host.
    - `cpu-usage`: the dispatcher with the least CPU usage
    - `free-ram`: The dispatcher with the lowest RAM usage
- services with `callbacks` can also be hosted via a plugin

## Author

M.Karkowski

## Export

INopeRpcManager

## Type parameters

| Parameter                                                                                    | Default                                                                          |
| :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| T _extends_ [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md) | [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md) |

## Properties

### methodInterface

```ts
methodInterface: object;
```

A Proxy to the provided Methods (without the Options)

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

#### Index signature

\[`index`: `string`\]: <T\>(...`args`: `any`) => [`INopePromise`](../../../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

### methodInterfaceWithOptions

```ts
methodInterfaceWithOptions: object;
```

A Proxy to the provided Methods (including the Options)

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

#### Index signature

\[`index`: `string`\]: <T\>(`options`: [`ICallOptions`](../../../../types/namespaces/nope/interfaces/interface.ICallOptions.md), ...`args`: `any`) => [`INopePromise`](../../../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

### onCancelTask

```ts
onCancelTask: INopeEventEmitter<
  ITaskCancelationMsg,
  ITaskCancelationMsg,
  ITaskCancelationMsg,
  IEventAdditionalData
>;
```

Event, which is fired, if a task has been canceled.
this is called after a the method.

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

### ready

```ts
ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, to show, that the System is ready

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

### services

```ts
services: IMapBasedMergeData<string, IAvailableServicesMsg, string, T>;
```

Element showing the available services.

- `OriginalKey` = Dispatcher ID (string);
- `OriginalValue` = Original Message (IAvailableServicesMsg);
- `ExtractedKey` = Function ID (string);
- `ExtractedValue` = FunctionOptions (T);

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

## Methods

### cancelRunningTasksOfDispatcher()

cancel all Tasks of the given dispatcher. If the Dispatcher isnt present,
an error is raised

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
cancelRunningTasksOfDispatcher(dispatcher: string, reason: Error): void
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| dispatcher | `string` |
| reason     | `Error`  |

#### Returns

`void`

### cancelRunningTasksOfService()

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
cancelRunningTasksOfService(serviceName: string, reason: Error): void
```

#### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| serviceName | `string` |
| reason      | `Error`  |

#### Returns

`void`

### cancelTask()

Function to cancel the given Task

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
cancelTask(
  taskId: string,
  reason: Error,
  quiet?: boolean): Promise<boolean>
```

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| taskId    | `string`  | The ID of the Task            |
| reason    | `Error`   | The Reason to Cancel the Task |
| quiet?    | `boolean` | Disables Log or not.          |

#### Returns

`Promise`<`boolean`\>

### clearTasks()

Clear all Tasks.

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
clearTasks(): void
```

#### Returns

`void`

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

### performCall()

`performCall` execute a service. All relevant communications are mapped by the `rpcManager`. The user does not know which runtime provides the service.

- The execution leads to a so called `task` which can be aborted by `cancelTask`. This leads to an exception at the calling unit.
- If several service providers (NoPE-Runtime) are able to execute the service, the provider can be selected via a callback. For this purpose there are predefined `selectors`
  - `master` (see `connectivityManager`) the master must execute the process
  - `first`: any provider executes the serives (the first in the list)
  - `dispatcher`: a specific dispatcher must run the service (defined by its id)
  - `host`: a dispatcher on the defined host.
  - `cpu-usage`: the dispatcher with the least CPU usage
  - `free-ram`: The dispatcher with the lowest RAM usage

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

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

| Parameter   | Type                                                                                                                                                                                           | Description                                                                                                            |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| serviceName | `string` \| `string`[]                                                                                                                                                                         | The name of the service. If a list is provided, all services will be called at the same time using the same parameters |
| params      | `unknown`[]                                                                                                                                                                                    | Parameters                                                                                                             |
| options?    | [`ValidCallOptions`](../../../../types/namespaces/nope/types/type-alias.ValidCallOptions.md) \| [`ValidCallOptions`](../../../../types/namespaces/nope/types/type-alias.ValidCallOptions.md)[] |                                                                                                                        |

#### Returns

[`INopePromise`](../../../../promises/interfaces/interface.INopePromise.md)<`T`, `any`\>

### registerService()

Registers a function

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
registerService<T>(func: Function, options: {addNopeServiceIdPrefix: boolean;} & IServiceOptions<any>): Function
```

#### Type parameters

| Parameter | Description |
| :-------- | :---------- |
| T         |             |

#### Parameters

| Parameter | Type                                                                                                                              | Description                   |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| func      | (...`args`: `any`[]) => `Promise`<`T`\>                                                                                          | The Function                  |
| options   | \{addNopeServiceIdPrefix: `boolean`;} & [`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md)<`any`\> | used during the service call. |

#### Returns

`Function`

Registers a function

##### Author

M.Karkowski

##### Memberof

INopeRpcManager

```ts
(...args: any[]): Promise<T>
```

##### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...args   | `any`[] |

##### Returns

`Promise`<`T`\>

### removeDispatcher()

Function, that must be called if a dispatcher is is gone. This might be the
case on slow connections or an a triggered disconnect.

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
removeDispatcher(dispatcher: string): void
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| dispatcher | `string` |

#### Returns

`void`

### reset()

Resets the RPC Manager. This clears all running tasks and unregisters all callbacks

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
reset(): void
```

#### Returns

`void`

### serviceExists()

Simple helper to find the existing Services

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
serviceExists(id: string): boolean
```

#### Parameters

| Parameter | Type     | Description                                              |
| :-------- | :------- | :------------------------------------------------------- |
| id        | `string` | The id of the service, which is used during registration |

#### Returns

`boolean`

The result

### toDescription()

Description of a RPC-Manager

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

### unregisterAll()

Unregisters all registered Callbacks

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
unregisterAll(): void
```

#### Returns

`void`

### unregisterService()

Helper to unregister an callback.

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
unregisterService(func: string | (...args: any[]) => any): Promise<boolean>
```

#### Parameters

| Parameter | Type                                      |
| :-------- | :---------------------------------------- |
| func      | `string` \| (...`args`: `any`[]) => `any` |

#### Returns

`Promise`<`boolean`\>

Success of the Operation

### updateDispatcher()

Function, that must be called, to update the available dispatchers.

#### Author

M.Karkowski

#### Memberof

INopeRpcManager

```ts
updateDispatcher(dispatcher: IAvailableServicesMsg): void
```

#### Parameters

| Parameter  | Type                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------- |
| dispatcher | [`IAvailableServicesMsg`](../../../../types/namespaces/nope/interfaces/interface.IAvailableServicesMsg.md) |

#### Returns

`void`
