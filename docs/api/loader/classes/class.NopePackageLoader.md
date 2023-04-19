# Class: NopePackageLoader

Helper Class to Build an inversify Container.

## Export

## Implements

## Constructors

### constructor()

```ts
new NopePackageLoader(): NopePackageLoader
```

#### Returns

[`NopePackageLoader`](class.NopePackageLoader.md)

#### Inherited from

NopePackageLoader.constructor

## Properties

### \_logger

```ts
_logger: ILogger;
```

#### Inherited from

NopePackageLoader.\_logger

### availableElements

```ts
availableElements: IClassDescriptor < INopeModule > [];
```

#### Inherited from

NopePackageLoader.availableElements

### container

```ts
container: Container;
```

The Inversify-Container see https://github.com/inversify/InversifyJS

#### Memberof

NopePackageLoader

#### Inherited from

NopePackageLoader.container

### packages

```ts
packages: object = {};
```

#### Index signature

\[`index`: `string`\]: [`IPackageDescription`](../../types/namespaces/nope/interfaces/interface.IPackageDescription.md)<`any`\>

#### Type declaration

#### Inherited from

NopePackageLoader.packages

## Accessors

### activationHandlers

```ts
get activationHandlers(): INopeActivationHanlder[]
```

#### Inherited from

NopePackageLoader.activationHandlers

### dispatcher

```ts
get dispatcher(): INopeDispatcher
```

#### Inherited from

NopePackageLoader.dispatcher

## Methods

### addActivationHandler()

Adds an Activation Handler. (Those are called, after an Object has been created)

#### Memberof

NopePackageLoader

```ts
addActivationHandler(func: INopeActivationHanlder | INopeActivationHanlder[]): Promise<void>
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                       | Description                                    |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------- |
| func      | [`INopeActivationHanlder`](../../types/namespaces/nope/types/type-alias.INopeActivationHanlder.md) \| [`INopeActivationHanlder`](../../types/namespaces/nope/types/type-alias.INopeActivationHanlder.md)[] | The Corresponding Method which will be called. |

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.addActivationHandler

### addContainers()

Adds the Container to the given Container.

#### Memberof

NopePackageLoader

```ts
addContainers(container: Container): void
```

#### Parameters

| Parameter | Type        | Description                          |
| :-------- | :---------- | :----------------------------------- |
| container | `Container` | the Container, that should be merged |

#### Returns

`void`

#### Inherited from

NopePackageLoader.addContainers

### addDecoratedElements()

Function to load all decorated elements with the decorators `exportAsNopeService`

```ts
addDecoratedElements(options: object = ...): Promise<void>
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| options   | `object` |

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.addDecoratedElements

### addDescription()

Method to add an Element to the Build

#### Memberof

NopePackageLoader

```ts
addDescription(_elements: IClassDescriptor<INopeModule>[], _instance: NopePackageLoader = null): Promise<void>
```

#### Parameters

| Parameter  | Type                                                                                                                                                               | Default value | Description                                             |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------ |
| \_elements | [`IClassDescriptor`](../../types/namespaces/nope/interfaces/interface.IClassDescriptor.md)<[`INopeModule`](../../modules/interfaces/interface.INopeModule.md)\>[] | undefined     | Definition containing the Elements that should be added |
| \_instance | `NopePackageLoader`                                                                                                                                                | null          | -                                                       |

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.addDescription

### addPackage()

Loader Function. This function will register all provided functions,
create the desired instances. Additionally it will add all descriptors.

#### Memberof

NopePackageLoader

```ts
addPackage(element: IPackageDescription<any>): Promise<void>
```

#### Parameters

| Parameter | Type                                                                                                      |
| :-------- | :-------------------------------------------------------------------------------------------------------- |
| element   | [`IPackageDescription`](../../types/namespaces/nope/interfaces/interface.IPackageDescription.md)<`any`\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.addPackage

### dispose()

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.dispose

### generateInstances()

Function to initialize all the instances.

#### Memberof

NopePackageLoader

```ts
generateInstances(testRequirements?: boolean = true): Promise<void>
```

#### Parameters

| Parameter         | Type      | Default value |
| :---------------- | :-------- | :------------ |
| testRequirements? | `boolean` | true          |

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.generateInstances

### loadPackageFile()

A Method, to load a package file, located at the given path.

```ts
loadPackageFile(
  path: string,
  useAutostart: boolean = true,
  useInstance: boolean = true): Promise<void>
```

#### Parameters

| Parameter    | Type      | Default value | Description                                         |
| :----------- | :-------- | :------------ | :-------------------------------------------------- |
| path         | `string`  | undefined     | Path to the `javascript` file                       |
| useAutostart | `boolean` | true          | Flag to enable / disable the Autostart              |
| useInstance  | `boolean` | true          | Flag to enable / disable considering the Instances. |

#### Returns

`Promise`<`void`\>

### provideLinkedServices()

Helper to provide all linked services.

```ts
provideLinkedServices(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.provideLinkedServices

### reset()

```ts
reset(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

NopePackageLoader.reset
