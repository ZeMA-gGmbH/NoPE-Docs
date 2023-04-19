# Class: NopeInstanceManager

Please checkout the Docu of [INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md)

## Implements

- [`INopeInstanceManager`](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md)

## Constructors

### constructor()

Create the Instance Manager.

```ts
new NopeInstanceManager(
  options: INopeDispatcherOptions,
  _generateEmitter: Function,
  _generateObservable: Function,
  _defaultSelector: ValidSelectorFunction,
  _id: string = null,
  _connectivityManager: INopeConnectivityManager = null,
  _rpcManager: INopeRpcManager<IServiceOptions<any>> = null,
  _core: INopeCore = null): NopeInstanceManager
```

#### Parameters

| Parameter             | Type                                                                                                                                                                                                                   | Default value |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| options               | [`INopeDispatcherOptions`](../../../types/type-alias.INopeDispatcherOptions.md)                                                                                                                                        | undefined     |
| \_generateEmitter     | <T\>() => [`INopeEventEmitter`](../../../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | undefined     |
| \_generateObservable  | <T\>() => [`INopeObservable`](../../../../observables/interfaces/interface.INopeObservable.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>      | undefined     |
| \_defaultSelector     | [`ValidSelectorFunction`](../../rpcManager/types/type-alias.ValidSelectorFunction.md)                                                                                                                                  | undefined     |
| \_id                  | `string`                                                                                                                                                                                                               | null          |
| \_connectivityManager | [`INopeConnectivityManager`](../../connectivityManager/interfaces/interface.INopeConnectivityManager.md)                                                                                                               | null          |
| \_rpcManager          | [`INopeRpcManager`](../../rpcManager/interfaces/interface.INopeRpcManager.md)<[`IServiceOptions`](../../../../modules/interfaces/interface.IServiceOptions.md)<`any`\>\>                                             | null          |
| \_core                | [`INopeCore`](../../../../types/namespaces/nope/interfaces/interface.INopeCore.md)                                                                                                                                     | null          |

#### Returns

[`NopeInstanceManager`](class.NopeInstanceManager.md)

## Properties

### constructorServices

```ts
readonly constructorServices: INopeObservable<string[], string[], string[], IEventAdditionalData>
```

Contains the rpcs used to create instances.

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[constructorServices](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#constructorservices)

### constructors

```ts
readonly constructors: IMapBasedMergeData<string, string[], string, string>
```

Element showing the available services.
Its more or less a map, that maps the
services with their dispatchers.

T = services name.
K = dispatcher - ids

#### Author

M.Karkowski

#### Memberof

NopeInstanceManager

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[constructors](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#constructors)

### instances

```ts
readonly instances: IMapBasedMergeData<string, IAvailableInstancesMsg, string, INopeModuleDescription>
```

Element showing the available instances.
Its more or less a map, that maps the
instances with their dispatchers.

- `originalKey` = DispatcherID (`string`);
- `originalValue` = Available Instance Messages (`IAvailableInstancesMsg`);
- `extractedKey` = The name of the Instance (`string`);`
- `extractedValue` = instance-description (`INopeModuleDescription`);

#### Author

M.Karkowski

#### Memberof

NopeInstanceManager

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[instances](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#instances)

### internalInstances

```ts
readonly internalInstances: INopeObservable<string[], string[], string[], IEventAdditionalData>
```

Contains the identifiers of the instances, which are hosted in the provided dispatcher.

#### Author

M.Karkowski

#### Memberof

NopeInstanceManager

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[internalInstances](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#internalinstances)

### options

```ts
options: INopeDispatcherOptions;
```

### ready

```ts
readonly ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag to indicate, that the system is ready.

#### Author

M.Karkowski

#### Memberof

NopeInstanceManager

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[ready](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#ready)

## Methods

### constructorExists()

Helper to test if a constructor linkt to the provided "typeIdentifier" exists or not.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
constructorExists(typeIdentifier: string): boolean
```

#### Parameters

| Parameter      | Type     | Description                                         |
| :------------- | :------- | :-------------------------------------------------- |
| typeIdentifier | `string` | The identifier for the Constructor (Like a service) |

#### Returns

`boolean`

Result

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[constructorExists](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#constructorexists)

### createInstance()

Allows to create an instance. This might be the case on remote dispatchers or
on the same element. Only a wrapper is returned, which communicates with a
dispatcher, because we dont know where the element is provided. To know which
`instanceManager` hosts the instance can use the INopeInstanceManager.getDispatcherForInstance method.
The returned `wrapper` behaves like a normal "internal" class. If this method
is called, a `{@link IGenericNopeModule}` is returned as type by default. If a
special wrapper is required for a type, such wrappers can be defined and customized
via [registerInternalWrapperGenerator](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#registerinternalwrappergenerator) and [unregisterInternalWrapperGenerator](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#unregisterinternalwrappergenerator).
Here, too, the type is decisive. \*

If there are multiple [INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md) able to create an instance,
the `selector` is used to select a `dispatcher`and its instanceManger, to create
the instance.

If the instances already exists and the type is matching, the `assignmentValid` callback
is used, to test if the required assignmet could be valid. E.g. you require the instance
to be hosted on a specific host. The `assignmentValid` will check if the assignment is valid.

# Example

```typescript *
// Create an Instance:
const instance = await manager.createInstance<TestModule>({
  identifier: "instance", // <- Must be provided
  type: "TestModule", // <- Must be provided and present in the Network
  params: ["p1", "p2"], // <- Optional. The Parameters, required by the class to initialize see {@link INopeModule.init}
});
```

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
createInstance<I>(description: Partial<IInstanceCreationMsg>, options: object = {}): Promise<I & IGenericNopeModule>
```

#### Type parameters

| Parameter | Default                                                                                | Description                  |
| :-------- | :------------------------------------------------------------------------------------- | :--------------------------- |
| I         | [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md) | The Type of the Return type. |

#### Parameters

| Parameter   | Type                                                                                                                  | Description                                                                                                                                                                                                                 |
| :---------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description | `Partial`<[`IInstanceCreationMsg`](../../../../types/namespaces/nope/interfaces/interface.IInstanceCreationMsg.md)\> | Description requrired to create the Message (see [IInstanceCreationMsg](../../../../types/namespaces/nope/interfaces/interface.IInstanceCreationMsg.md)).<br />The properties `type` and `identifier` **must** be provided. |
| options     | `object`                                                                                                              | Additional Options used during creating the Instance                                                                                                                                                                        |

#### Returns

`Promise`<`I` & [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md)\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[createInstance](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#createinstance)

### deleteInstance()

Disposes an instance and removes it. Thereby the Instance wont be available for other
InstanceManagers in the system.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
deleteInstance<I>(
  instance: string | I,
  preventSendingUpdate: boolean = false,
  callInstanceDispose: boolean = true): Promise<boolean>
```

#### Type parameters

| Parameter                                                                            | Description |
| :----------------------------------------------------------------------------------- | :---------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |             |

#### Parameters

| Parameter            | Type            | Default value | Description              |
| :------------------- | :-------------- | :------------ | :----------------------- |
| instance             | `string` \| `I` | undefined     | The Instance to consider |
| preventSendingUpdate | `boolean`       | false         | -                        |
| callInstanceDispose  | `boolean`       | true          | -                        |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[deleteInstance](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#deleteinstance)

### dispose()

Disposes all instances and the Manager.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[dispose](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#dispose)

### getInstanceDescription()

Returns the instance Description for a specific instance. It is just a simplified wrapper
for the "instances"-property.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
getInstanceDescription(instanceIdentifier: string): false | INopeModuleDescription
```

#### Parameters

| Parameter          | Type     | Description                            |
| :----------------- | :------- | :------------------------------------- |
| instanceIdentifier | `string` | The identifier for instance (its name) |

#### Returns

false \| [`INopeModuleDescription`](../../../../modules/interfaces/interface.INopeModuleDescription.md)

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[getInstanceDescription](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#getinstancedescription)

### getInstancesOfType()

Creates Wrappers for the Type of the given element.

```ts
getInstancesOfType<I>(type: string): Promise<I[]>
```

#### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| type      | `string` |

#### Returns

`Promise`<`I`[]\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[getInstancesOfType](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#getinstancesoftype)

### getManagerOfInstance()

Returns the hosting dispatcher for the given instance.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
getManagerOfInstance(identifier: string): INopeStatusInfo
```

#### Parameters

| Parameter  | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| identifier | `string` | The identifier for instance (its name) |

#### Returns

[`INopeStatusInfo`](../../../../types/namespaces/nope/interfaces/interface.INopeStatusInfo.md)

The Status or false if not present.

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[getManagerOfInstance](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#getmanagerofinstance)

### getServiceName()

Helper to get the corresponding Service name

```ts
getServiceName(name: string, type: "constructor" | "dispose"): string
```

#### Parameters

| Parameter | Type                       | Description                                    |
| :-------- | :------------------------- | :--------------------------------------------- |
| name      | `string`                   | name                                           |
| type      | "constructor" \| "dispose" | The desired type of the requested service name |

#### Returns

`string`

the name.

### instanceExists()

Helper, to test if an instance with the given identifier exists or not.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
instanceExists(identifier: string, externalOnly: boolean = true): boolean
```

#### Parameters

| Parameter    | Type      | Default value | Description                 |
| :----------- | :-------- | :------------ | :-------------------------- |
| identifier   | `string`  | undefined     | identifier of the instance. |
| externalOnly | `boolean` | true          | -                           |

#### Returns

`boolean`

Result

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[instanceExists](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#instanceexists)

### registerConstructor()

Registers a Constructor, that enables other NopeInstanceManagers to create an instance of the
given type. Therefore a callback "cb" is registered with the given "typeIdentifier".

The function allways need as callback which must return a [INopeModule](../../../../modules/interfaces/interface.INopeModule.md) (or an extension of it)

# Example:

# Example

```typescript
// Now we register the constructor with the type 'TestModule'
await manager.registerConstructor("TestModule", async (core, identifier) => {
  assert(identifier === "instance", "The identifier has not been transmitted");
  return new TestModule(core);
});
```

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
registerConstructor<I>(identifier: string, cb: TConstructorCallback<I>): Promise<void>
```

#### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

#### Parameters

| Parameter  | Type                                                                                                        | Description                                         |
| :--------- | :---------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| identifier | `string`                                                                                                    | The identifier for the Constructor (Like a service) |
| cb         | [`TConstructorCallback`](../../../../types/namespaces/nope/types/type-alias.TConstructorCallback.md)<`I`\> | The callback used, to create an instance.           |

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[registerConstructor](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#registerconstructor)

### registerInstance()

Option, to statically register an instance, without using an specific generator etc.
This instance is just present in the network.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
registerInstance<I>(instance: I): Promise<I>
```

#### Type parameters

| Parameter                                                                            | Description |
| :----------------------------------------------------------------------------------- | :---------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |             |

#### Parameters

| Parameter | Type | Description              |
| :-------- | :--- | :----------------------- |
| instance  | `I`  | The Instance to consider |

#### Returns

`Promise`<`I`\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[registerInstance](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#registerinstance)

### registerInternalWrapperGenerator()

Defaultly a generic wrapper will be returned, when an instance is created. you
can specifiy specific wrapper type for different "typeIdentifier" with this method.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
registerInternalWrapperGenerator<I>(identifier: string, cb: TGenerateWrapperCallback<I>): void
```

#### Type parameters

| Parameter                                                                            |
| :----------------------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

#### Parameters

| Parameter  | Type                                                                                                                | Description                                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| identifier | `string`                                                                                                            | The identifier for the Constructor (Like a service) |
| cb         | [`TGenerateWrapperCallback`](../../../../types/namespaces/nope/types/type-alias.TGenerateWrapperCallback.md)<`I`\> | The Callback which creates the specific wrapper.    |

#### Returns

`void`

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[registerInternalWrapperGenerator](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#registerinternalwrappergenerator)

### removeDispatcher()

Helper to remove a dispatcher.

#### Author

M.Karkowski

#### Memberof

NopeRpcIn

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

Resets the Instance Manager.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
reset(): void
```

#### Returns

`void`

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[reset](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#reset)

### toDescription()

Describes the Data.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
constructors: object;
```

##### Type declaration - constructors

> ```ts
> all: string[]
> ```
>
> ```ts
> internal: string[]
> ```

```ts
instances: object;
```

##### Type declaration - instances

> ```ts
> all: INopeModuleDescription[]
> ```
>
> ```ts
> internal: string[]
> ```

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[toDescription](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#todescription)

### unregisterConstructor()

Unregisters a present Constructor. After this, created instances are still valid, the user isnt
able to create new ones.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
unregisterConstructor(identifier: string): Promise<void>
```

#### Parameters

| Parameter  | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| identifier | `string` | The identifier for the Constructor (Like a service) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[unregisterConstructor](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#unregisterconstructor)

### unregisterInternalWrapperGenerator()

Removes a specific generator for for a wrapper.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
unregisterInternalWrapperGenerator(identifier: string): void
```

#### Parameters

| Parameter  | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| identifier | `string` | The identifier for the Constructor (Like a service) |

#### Returns

`void`

#### Implementation of

[INopeInstanceManager](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md).[unregisterInternalWrapperGenerator](../../../../types/namespaces/nope/interfaces/interface.INopeInstanceManager.md#unregisterinternalwrappergenerator)
