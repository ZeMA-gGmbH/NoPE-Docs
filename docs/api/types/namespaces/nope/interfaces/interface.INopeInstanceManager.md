# Interface: INopeInstanceManager

A Manager, which is capable of creating instance on different Managers in the Network.

It is defaultly implemented by NopeInstanceManager

The `instanceManager` is used to create, remove and get access to instances. the approach is based on the object oriented method. I.e. there are the following elements:

- Classes:
- These describe a blueprint of a behavior.
- Are identified in `NoPE` by an ID / a `type`.
- Classes have constructors that create an instance:
  - Offered in `NoPE` as a service (service name includes the identifier, among other things).
- Instances:
  - Are instances of a class (corresponds to so-called objects).
  - Are identified in `NoPE` by identifier (here `strings`)
  - have the properties, methods and eventEmitters created in the classes.
  - Can be "destroyed" via so-called destroyers. Thus they are deleted.

The manager keeps track of the available instances in the network and allows to create `wrappers` for these instances. This allows to simplify and unify the access for the user of instances running in a different runtime. To make this possible it uses the following elements:

- `connectivityManager`: see above. Used to identify new and dead dispatchers.
  - if a new `dispatcher` is identified, standardized descriptions of all hosted instances are sent.
  - if a `dispatcher` is identified as dead, the `wrappers` are deleted or removed.
- rpcManager`: see above. Used here to distribute `constructors`of classes and`destructors`of instances on the network. I.e.:
    - The creation of a new instance corresponds to a service call.
    - Deleting an instance corresponds to a service call
    - The`constructors`of the classes and`destructors`of the instances follow a defined naming convention, so that they can be identified by the`instanceManager`.
The `InstanceManger` can be interacted with using the following methods and properties:
- `getInstancesOfType`: returns all available instances of a given type.
- `instanceExists`: tests if an instance with the given identifier exists.
- `getInstanceDescription`: Returns the standardized description of an instance. This information is also shared with all `instanceManagers` on the network.
- `registerInstance`: Allows to **manually** register an instance.
- `deleteInstance`: Allows the **manual** removal of an instance.
- `registerConstructor`: Registers a constructor. Among other things, it is possible to specify the number of instances that may be created on the `instanceManager`. If more than one `dispatcher` is able to create an instance with the given type, then - as with `rpcManger` - the selection follows via a so-called selector.
- `unregisterConstructor`: Removes a constructor.
- `constructorExists`: Tests if a constructor is known for a type.
- `createInstance`: Allows the creation of an instance. This may be the case for remote dispatchers or for the same element. Only a wrapper communicating with a dispatcher is returned, since we do not know where the element is provided. To know which `instanceManager` hosts the instance can use the `getDispatcherForInstance` method. The returned `wrapper` behaves like a normal "internal" class. If this method is called, a `GenericModule` is returned as type by default. If a special wrapper is required for a type, such wrappers can be defined and customized via `registerInternalWrapperGenerator` and `unregisterInternalWrapperGenerator`. Here, too, the type is decisive.

# Example

```typescript
// Describe the required Test:
let manager = new NopeInstanceManager(
  {
    communicator: getLayer("event", "", false),
    logger: false,
  },
  () => new NopeEventEmitter(),
  () => new NopeObservable(),
  async () => "test",
  "test",
  undefined,
  undefined,
  manager as any
);

// Crate a sample Class we want to be able to create:
class TestModule extends NopeBaseModule {
  public async dispose(): Promise<void> {
    await super.dispose();
    called = true;
  }

  public async init(p1: string, p2: string): Promise<void> {
    this.author = {
      forename: "test",
      surename: "test",
      mail: "test",
    };
    this.version = {
      date: new Date(),
      version: 1,
    };
    this.description = "Sample Class";
    await super.init();
  }
}

await manager.ready.waitFor();

// Now we register the constructor with the type 'TestModule'
await manager.registerConstructor("TestModule", async (core, identifier) => {
  assert(identifier === "instance", "The identifier has not been transmitted");
  return new TestModule(core);
});

// Check the Constructors
const constructors = manager.constructors.extractedKey;
expect(constructors).to.include("TestModule");
expect(manager.constructors.amountOf.get("TestModule")).to.be(1);
expect(manager.constructorExists("TestModule")).to.be.true;

// Create an Instance:
const instance = await manager.createInstance<TestModule>({
  identifier: "instance",
  type: "TestModule",
  params: ["p1", "p2"],
});
```

## Author

M.Karkowski

## Export

INopeInstanceManager

## Properties

### constructorServices

```ts
readonly constructorServices: INopeObservable<string[], string[], string[], IEventAdditionalData>
```

Contains the rpcs used to create instances.

### constructors

```ts
readonly constructors: IMapBasedMergeData<string, string[], string, string>
```

Overview of the available Constructors in the
network.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

### instances

```ts
readonly instances: IMapBasedMergeData<string, IAvailableInstancesMsg, string, INopeModuleDescription>
```

Overview of the available instances in the network.

- `OriginalKey` = `DispatcherID (string);`
- `OriginalValue` = `Available Instance Messages (IAvailableInstancesMsg);`
- `ExtractedKey` = `The name of the Instance (string);`
- `ExtractedValue` = `instance-description (INopeModuleDescription);`

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

### internalInstances

```ts
readonly internalInstances: INopeObservable<string[], string[], string[], IEventAdditionalData>
```

Contains the identifiers of the instances, which are hosted in the provided dispatcher.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

### ready

```ts
readonly ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag to indicate, that the system is ready.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

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

### createInstance()

Allows to create an instance. This might be the case on remote dispatchers or
on the same element. Only a wrapper is returned, which communicates with a
dispatcher, because we dont know where the element is provided. To know which
`instanceManager` hosts the instance can use the INopeInstanceManager.getDispatcherForInstance method.
The returned `wrapper` behaves like a normal "internal" class. If this method
is called, a `{@link IGenericNopeModule}` is returned as type by default. If a
special wrapper is required for a type, such wrappers can be defined and customized
via [registerInternalWrapperGenerator](interface.INopeInstanceManager.md#registerinternalwrappergenerator) and [unregisterInternalWrapperGenerator](interface.INopeInstanceManager.md#unregisterinternalwrappergenerator).
Here, too, the type is decisive. \*

If there are multiple [INopeInstanceManager](interface.INopeInstanceManager.md) able to create an instance,
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
createInstance<I>(description: Partial<IInstanceCreationMsg>, options?: object): Promise<I & IGenericNopeModule>
```

#### Type parameters

| Parameter | Default                                                                                | Description                  |
| :-------- | :------------------------------------------------------------------------------------- | :--------------------------- |
| I         | [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md) | The Type of the Return type. |

#### Parameters

| Parameter   | Type                                                                     | Description                                                                                                                                                                    |
| :---------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description | `Partial`<[`IInstanceCreationMsg`](interface.IInstanceCreationMsg.md)\> | Description requrired to create the Message (see [IInstanceCreationMsg](interface.IInstanceCreationMsg.md)).<br />The properties `type` and `identifier` **must** be provided. |
| options?    | `object`                                                                 | Additional Options used during creating the Instance                                                                                                                           |

#### Returns

`Promise`<`I` & [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md)\>

### deleteInstance()

Disposes an instance and removes it. Thereby the Instance wont be available for other
InstanceManagers in the system.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
deleteInstance<I>(instance: string | I): Promise<boolean>
```

#### Type parameters

| Parameter                                                                            | Default                                                                  | Description |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :---------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |             |

#### Parameters

| Parameter | Type            | Description              |
| :-------- | :-------------- | :----------------------- |
| instance  | `string` \| `I` | The Instance to consider |

#### Returns

`Promise`<`boolean`\>

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

### getInstancesOfType()

Creates Wrappers for the Type of the given element.

```ts
getInstancesOfType<I>(type: string): Promise<I & IGenericNopeModule[]>
```

#### Type parameters

| Parameter | Default                                                                                |
| :-------- | :------------------------------------------------------------------------------------- |
| I         | [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md) |

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| type      | `string` |

#### Returns

`Promise`<`I` & [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md)[]\>

### getManagerOfInstance()

Returns the hosting dispatcher for the given instance.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
getManagerOfInstance(instanceIdentifier: string): false | INopeStatusInfo
```

#### Parameters

| Parameter          | Type     | Description                            |
| :----------------- | :------- | :------------------------------------- |
| instanceIdentifier | `string` | The identifier for instance (its name) |

#### Returns

false \| [`INopeStatusInfo`](interface.INopeStatusInfo.md)

The Status or false if not present.

### instanceExists()

Helper, to test if an instance with the given identifier exists or not.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
instanceExists(instanceIdentifier: string): boolean
```

#### Parameters

| Parameter          | Type     | Description                 |
| :----------------- | :------- | :-------------------------- |
| instanceIdentifier | `string` | identifier of the instance. |

#### Returns

`boolean`

Result

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
registerConstructor<I>(typeIdentifier: string, cb: TConstructorCallback<I>): Promise<void>
```

#### Type parameters

| Parameter                                                                            | Default                                                                  |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

#### Parameters

| Parameter      | Type                                                                         | Description                                         |
| :------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------- |
| typeIdentifier | `string`                                                                     | The identifier for the Constructor (Like a service) |
| cb             | [`TConstructorCallback`](../types/type-alias.TConstructorCallback.md)<`I`\> | The callback used, to create an instance.           |

#### Returns

`Promise`<`void`\>

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

| Parameter                                                                            | Default                                                                  | Description |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :---------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |             |

#### Parameters

| Parameter | Type | Description              |
| :-------- | :--- | :----------------------- |
| instance  | `I`  | The Instance to consider |

#### Returns

`Promise`<`I`\>

### registerInternalWrapperGenerator()

Defaultly a generic wrapper will be returned, when an instance is created. you
can specifiy specific wrapper type for different "typeIdentifier" with this method.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
registerInternalWrapperGenerator(typeIdentifier: string, cb: TGenerateWrapperCallback<INopeModule>): void
```

#### Parameters

| Parameter      | Type                                                                                                                                                      | Description                                         |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| typeIdentifier | `string`                                                                                                                                                  | The identifier for the Constructor (Like a service) |
| cb             | [`TGenerateWrapperCallback`](../types/type-alias.TGenerateWrapperCallback.md)<[`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md)\> | The Callback which creates the specific wrapper.    |

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

### toDescription()

Description of an Instance-Manager

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

### unregisterConstructor()

Unregisters a present Constructor. After this, created instances are still valid, the user isnt
able to create new ones.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
unregisterConstructor(typeIdentifier: string): Promise<void>
```

#### Parameters

| Parameter      | Type     | Description                                         |
| :------------- | :------- | :-------------------------------------------------- |
| typeIdentifier | `string` | The identifier for the Constructor (Like a service) |

#### Returns

`Promise`<`void`\>

### unregisterInternalWrapperGenerator()

Removes a specific generator for for a wrapper.

#### Author

M.Karkowski

#### Memberof

INopeInstanceManager

```ts
unregisterInternalWrapperGenerator(typeIdentifier: string): void
```

#### Parameters

| Parameter      | Type     | Description                                         |
| :------------- | :------- | :-------------------------------------------------- |
| typeIdentifier | `string` | The identifier for the Constructor (Like a service) |

#### Returns

`void`
