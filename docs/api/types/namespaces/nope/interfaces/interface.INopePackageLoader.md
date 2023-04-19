# Interface: INopePackageLoader

## Properties

### activationHandlers

```ts
activationHandlers: INopeActivationHanlder[]
```

This is a helper used during the Building process of
utilizing inversify. This might be deprecated.

#### Deprecated

### container

```ts
container: Container;
```

Internally the loader is build using inversify. InversifyJS is a powerful and lightweight
inversion of control container for JavaScript & Node.js apps powered by TypeScript.

For more details about InversifyJS please checkout: https://inversify.io/

This Element contains a default inversify container

### dispatcher

```ts
dispatcher: INopeDispatcher;
```

Accessor for a Dispatcher; This dispatcher is created using a default package,
containing definition for the dispatcher etc. please see nope.loader.generateNopeBasicPackage
to checkout the default function.

#### Memberof

INopePackageLoader

## Methods

### addActivationHandler()

Function to add Activation Handlers.

#### Memberof

INopePackageLoader

```ts
addActivationHandler(handler: INopeActivationHanlder | INopeActivationHanlder[]): Promise<void>
```

#### Parameters

| Parameter | Type                                                                                                                                                     |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| handler   | [`INopeActivationHanlder`](../types/type-alias.INopeActivationHanlder.md) \| [`INopeActivationHanlder`](../types/type-alias.INopeActivationHanlder.md)[] |

#### Returns

`Promise`<`void`\>

### addContainers()

Function to Add a different inversify container to the system. This will lead to a
merge. This might be deprecated.

#### Deprecated

#### Memberof

INopePackageLoader

```ts
addContainers(container: Container): any
```

#### Parameters

| Parameter | Type        |
| :-------- | :---------- |
| container | `Container` |

#### Returns

`any`

### addDecoratedElements()

Helper to add the decorated Elements.

```ts
addDecoratedElements(options?: object): Promise<void>
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| options?  | `object` |

#### Returns

`Promise`<`void`\>

### addDescription()

Add a Description of a Package to the Loader.
This results in hosting the contained services and
providing constructors for the shared classes.

Additionally all defined instances of a pac

#### Memberof

INopePackageLoader

```ts
addDescription(element: IClassDescriptor<INopeModule>[]): Promise<void>
```

#### Parameters

| Parameter | Type                                                                                                                              |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| element   | [`IClassDescriptor`](interface.IClassDescriptor.md)<[`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md)\>[] |

#### Returns

`Promise`<`void`\>

### addPackage()

Functionality to add a complete Package.
This results in hosting the contained services and
providing constructors for the shared classes.

Afterwards the provided instances can be created using
[generateInstances](interface.INopePackageLoader.md#generateinstances).

#### Memberof

INopePackageLoader

```ts
addPackage(element: IPackageDescription<any>): Promise<void>
```

#### Parameters

| Parameter | Type                                                               |
| :-------- | :----------------------------------------------------------------- |
| element   | [`IPackageDescription`](interface.IPackageDescription.md)<`any`\> |

#### Returns

`Promise`<`void`\>

### generateInstances()

Generate the Instances that has been added via the packages.

#### Memberof

INopePackageLoader

```ts
generateInstances(testRequirements?: boolean): Promise<void>
```

#### Parameters

| Parameter         | Type      | Description                                                                                              |
| :---------------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| testRequirements? | `boolean` | Flag to turn on / off the Tests. Defaultly the test is activated. Circular dependencies are not handled. |

#### Returns

`Promise`<`void`\>

### provideLinkedServices()

Generates all linked services.

#### Memberof

INopePackageLoader

```ts
provideLinkedServices(): Promise<void>
```

#### Returns

`Promise`<`void`\>

### reset()

Resets the Package Loader

#### Memberof

INopePackageLoader

```ts
reset(): Promise<void>
```

#### Returns

`Promise`<`void`\>
