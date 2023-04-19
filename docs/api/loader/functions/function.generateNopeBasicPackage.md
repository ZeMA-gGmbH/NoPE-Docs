# Function: generateNopeBasicPackage()

Generates the Default Package, containing all relevant elements of the
nope-package. This package is used by the [NopePackageLoader](../classes/class.NopePackageLoader.md) to
provided a basic package, which could be used for injecting different
nope-elements into other elements. (To make use of injection, checkout https://inversify.io/)

## Export

```ts
generateNopeBasicPackage(options: INopeDispatcherOptions, singleton: boolean = false): IPackageDescription<{communicationLayer: symbol;
dispatcher: symbol;
dispatcherOptions: symbol;
emitter: symbol;
emitterFactory: symbol;
observable: symbol;
observableFactory: symbol;}>
```

## Parameters

| Parameter | Type                                                                                    | Default value | Description                                                                        |
| :-------- | :-------------------------------------------------------------------------------------- | :------------ | :--------------------------------------------------------------------------------- |
| options   | [`INopeDispatcherOptions`](../../dispatcher/types/type-alias.INopeDispatcherOptions.md) | undefined     | ommunicationLayer The Layer, which should be used.                                 |
| singleton | `boolean`                                                                               | false         | Enables a Single Dispatcher in a Process. Otherwise multiple Dispatchers are used. |

## Returns

[`IPackageDescription`](../../types/namespaces/nope/interfaces/interface.IPackageDescription.md)<\{communicationLayer: `symbol`;
dispatcher: `symbol`;
dispatcherOptions: `symbol`;
emitter: `symbol`;
emitterFactory: `symbol`;
observable: `symbol`;
observableFactory: `symbol`;}\>
