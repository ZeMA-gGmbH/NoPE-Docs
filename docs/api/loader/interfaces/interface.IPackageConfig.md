# Interface: IPackageConfig

## Properties

### activationHandlers

```ts
optional activationHandlers: INopeActivationHanlder[]
```

For Compatibility. The activation handlers are loaded after
an instance has been created.

#### Memberof

IPackageDescription

#### Inherited from

Partial.activationHandlers

### autostart

```ts
optional autostart: object
```

An autostart Element.

#### Memberof

IPackageDescription

#### Index signature

\[`index`: `string`\]: \{delay: `number`;
params: `any`[];
service: `string`;}[]

#### Type declaration

#### Inherited from

Partial.autostart

### defaultInstances

```ts
optional defaultInstances: {options: Partial<IInstanceCreationMsg>;
selector: string | symbol;}[]
```

List of Defaultly created Instances. (This can be adapted by the Programmer via the config.)

#### Memberof

IPackageDescription

#### Inherited from

Partial.defaultInstances

### nameOfPackage

```ts
optional nameOfPackage: string
```

Name of the Module.

#### Memberof

IPackageDescription

#### Inherited from

Partial.nameOfPackage

### path

```ts
path: string;
```

### providedClasses

```ts
optional providedClasses: IClassDescription[]
```

Element containing the classes of the module.

#### Memberof

IPackageDescription

#### Inherited from

Partial.providedClasses

### providedServices

```ts
optional providedServices: {options: IServiceOptions<any>;
service: (...args: any[]) => IValidPromise<any>;}[]
```

Element containing functions of the module.

#### Memberof

IPackageDescription

#### Inherited from

Partial.providedServices

### requiredPackages

```ts
optional requiredPackages: string[]
```

Requried Assemblies.

#### Memberof

IPackageDescription

#### Inherited from

Partial.requiredPackages

### types

```ts
optional types: any
```

Element containing the Type-Identifiers

#### Memberof

IPackageDescription

#### Inherited from

Partial.types
