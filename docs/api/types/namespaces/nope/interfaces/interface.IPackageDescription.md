# Interface: IPackageDescription<T\>

Element used to define a nopePackages.
A Package can be loaded automatically.

## Export

IPackageDescription

## Type parameters

| Parameter       | Description |
| :-------------- | :---------- |
| T _extends_ \{} |             |

## Properties

### activationHandlers

```ts
activationHandlers: INopeActivationHanlder[]
```

For Compatibility. The activation handlers are loaded after
an instance has been created.

#### Memberof

IPackageDescription

### autostart

```ts
autostart: object;
```

An autostart Element.

#### Memberof

IPackageDescription

#### Index signature

\[`index`: `string`\]: \{delay: `number`;
params: `any`[];
service: `string`;}[]

#### Type declaration

### defaultInstances

```ts
defaultInstances: {
  options: Partial<IInstanceCreationMsg>;
  selector: string | symbol;
}
[];
```

List of Defaultly created Instances. (This can be adapted by the Programmer via the config.)

#### Memberof

IPackageDescription

### nameOfPackage

```ts
nameOfPackage: string;
```

Name of the Module.

#### Memberof

IPackageDescription

### providedClasses

```ts
providedClasses: IClassDescription[]
```

Element containing the classes of the module.

#### Memberof

IPackageDescription

### providedServices

```ts
providedServices: {
  options: IServiceOptions<any>;
  service: (...args: any[]) => IValidPromise<any>;
}
[];
```

Element containing functions of the module.

#### Memberof

IPackageDescription

### requiredPackages

```ts
requiredPackages: string[]
```

Requried Assemblies.

#### Memberof

IPackageDescription

### types

```ts
types: T;
```

Element containing the Type-Identifiers

#### Memberof

IPackageDescription
