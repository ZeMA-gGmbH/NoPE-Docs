# Class: InjectableNopeGenericWrapper

A Generic Wrapper

## Author

M.Karkowski

## Export

## Constructors

### constructor()

Creates an instance of NopeGenericModule.

#### Memberof

NopeGenericModule

```ts
new InjectableNopeGenericWrapper(
  _core: INopeCore,
  _observableFactory: Function,
  _emitterFactory: Function): InjectableNopeGenericWrapper
```

#### Parameters

| Parameter           | Type                                                                                                                                                                                                        | Description                                            |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| \_core              | [`INopeCore`](../../types/namespaces/nope/interfaces/interface.INopeCore.md)                                                                                                                                | The NopeCore-Element. Usally is provided as dispatcher |
| \_observableFactory | () => [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>      | A Factory, to generate some Observables.               |
| \_emitterFactory    | () => [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | -                                                      |

#### Returns

[`InjectableNopeGenericWrapper`](class.InjectableNopeGenericWrapper.md)

#### Overrides

[NopeGenericWrapper](class.NopeGenericWrapper.md).[constructor](class.NopeGenericWrapper.md#constructor)

## Properties

### \_markedElements

```ts
_markedElements: {
  accessor: string;
  options: IEventOptions | IServiceOptions<any>;
  type: "event" | "method" | "prop";
}
[];
```

Internal Element, which is used to store elements, that should be added
automaticallay.

#### Memberof

INopeModule

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[\_markedElements](class.NopeGenericWrapper.md#_markedelements)

### author

```ts
author: IAuthor;
```

A Description of the Author. Use to Mail etc.

#### Memberof

BaseModule

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[author](class.NopeGenericWrapper.md#author)

### description

```ts
description: string;
```

A Description of the Module. This is used to Describe roughly
what the module is capable of
doing.

#### Memberof

BaseModule

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[description](class.NopeGenericWrapper.md#description)

### dynamicInstanceEvents

```ts
dynamicInstanceEvents: object = {};
```

#### Index signature

\[`index`: `string`\]: [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`any`\>

#### Type declaration

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[dynamicInstanceEvents](class.NopeGenericWrapper.md#dynamicinstanceevents)

### dynamicInstanceMethods

```ts
dynamicInstanceMethods: object = {};
```

#### Index signature

\[`index`: `string`\]: <T\>(...`args`: `any`) => [`INopePromise`](../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[dynamicInstanceMethods](class.NopeGenericWrapper.md#dynamicinstancemethods)

### dynamicInstanceMethodsWithOptions

```ts
dynamicInstanceMethodsWithOptions: object = {};
```

#### Index signature

\[`index`: `string`\]: <T\>(`options`: `Partial`<[`ICallOptions`](../../types/namespaces/nope/interfaces/interface.ICallOptions.md)\>, ...`args`: `any`) => [`INopePromise`](../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[dynamicInstanceMethodsWithOptions](class.NopeGenericWrapper.md#dynamicinstancemethodswithoptions)

### dynamicInstanceProperties

```ts
dynamicInstanceProperties: object = {};
```

#### Index signature

\[`index`: `string`\]: [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`\>

#### Type declaration

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[dynamicInstanceProperties](class.NopeGenericWrapper.md#dynamicinstanceproperties)

### identifier

```ts
identifier: string;
```

The Identifier of the Module.

#### Memberof

BaseModule

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[identifier](class.NopeGenericWrapper.md#identifier)

### uiLinks

```ts
uiLinks: {
  description: string;
  link: string;
  name: string;
}
[];
```

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[uiLinks](class.NopeGenericWrapper.md#uilinks)

### version

```ts
version: IVersion;
```

Description of the provided Version of the Module.

#### Memberof

BaseModule

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[version](class.NopeGenericWrapper.md#version)

## Accessors

### events

```ts
get events(): object
```

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[events](class.NopeGenericWrapper.md#events)

### methods

```ts
get methods(): object
```

Contains the provided functions.

> **key** = `id` of the function

#### Memberof

INopeModuleDescription

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[methods](class.NopeGenericWrapper.md#methods)

### properties

```ts
get properties(): object
```

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[properties](class.NopeGenericWrapper.md#properties)

### type

```ts
get type(): string
```

Type of the Module

#### Memberof

INopeModuleDescription

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[type](class.NopeGenericWrapper.md#type)

## Methods

### dispose()

Function, which is used to unregister the element.

#### Memberof

NopeBaseModule

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[dispose](class.NopeGenericWrapper.md#dispose)

### fromDescription()

Function, used to add the Attributes based on the Description.

#### Memberof

NopeGenericModule

```ts
fromDescription(description: INopeModuleDescription, mode?: "add" | "overwrite" = "overwrite"): Promise<void>
```

#### Parameters

| Parameter   | Type                                                                          | Default value |
| :---------- | :---------------------------------------------------------------------------- | :------------ |
| description | [`INopeModuleDescription`](../interfaces/interface.INopeModuleDescription.md) | undefined     |
| mode?       | "add" \| "overwrite"                                                          | "overwrite"   |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[fromDescription](class.NopeGenericWrapper.md#fromdescription)

### getIdentifierOf()

Helper Function to extract the used identifiert of Property

#### Memberof

NopeBaseModule

```ts
getIdentifierOf(prop_event_or_func: INopeObservable<any, any, any, IEventAdditionalData> | (...args: any[]) => Promise<any>, type: "topicToPublish" | "topicToSubscribe" = null): string
```

#### Parameters

| Parameter          | Type                                                                                                                                                                                                                                           | Default value | Description                                       |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------ |
| prop_event_or_func | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> \| (...`args`: `any`[]) => `Promise`<`any`\> | undefined     | The Property or the Function to receive the Name. |
| type               | "topicToPublish" \| "topicToSubscribe"                                                                                                                                                                                                         | null          | -                                                 |

#### Returns

`string`

{string}

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[getIdentifierOf](class.NopeGenericWrapper.md#getidentifierof)

### init()

An init Function. Used to initialize the Element.

#### Memberof

NopeBaseModule

```ts
init(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[init](class.NopeGenericWrapper.md#init)

### listEvents()

Function used to list all available Properties.

#### Memberof

NopeBaseModule

```ts
listEvents(): Promise<{emitter: INopeEventEmitter<any, any, any, IEventAdditionalData>;
options: IEventOptions;}[]>
```

#### Returns

`Promise`<\{emitter: [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>;
options: [`IEventOptions`](../interfaces/interface.IEventOptions.md);}[]\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[listEvents](class.NopeGenericWrapper.md#listevents)

### listMethods()

Function to return all available Methods. \*

#### Memberof

NopeBaseModule

```ts
listMethods(): Promise<{method: <T>(...args: any[]) => INopePromise<T, any>;
options: any;}[]>
```

#### Returns

`Promise`<\{method: <T\>(...`args`: `any`[]) => [`INopePromise`](../../promises/interfaces/interface.INopePromise.md)<`T`, `any`\>;
options: `any`;}[]\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[listMethods](class.NopeGenericWrapper.md#listmethods)

### listProperties()

Function used to list all available Properties.

#### Memberof

NopeBaseModule

```ts
listProperties(): Promise<{observable: INopeObservable<any, any, any, IEventAdditionalData>;
options: IEventOptions;}[]>
```

#### Returns

`Promise`<\{observable: [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>;
options: [`IEventOptions`](../interfaces/interface.IEventOptions.md);}[]\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[listProperties](class.NopeGenericWrapper.md#listproperties)

### registerEvent()

Helper Function to register an Event(Emitter) (a Property.)

#### Memberof

NopeBaseModule

```ts
registerEvent<T, S, G>(
  name: string,
  emitter: INopeObservable<T, S, G, IEventAdditionalData>,
  options: IEventOptions): Promise<void>
```

#### Type parameters

| Parameter | Default | Description                       |
| :-------- | :------ | :-------------------------------- |
| T         | -       | Type of the Event(Emitter)        |
| S         | `T`     | Setter Type of the Event(Emitter) |
| G         | `T`     | Getter Type of the Event(Emitter) |

#### Parameters

| Parameter | Type                                                                                                                                                                                       | Description                                                                                                                                           |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `string`                                                                                                                                                                                   | Name, which should be used to register the element. The Name will ALLWAYS (automatically) be assembled using the modules identifier an then the name. |
| emitter   | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`T`, `S`, `G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Event(Emitter) representing the Property                                                                                                          |
| options   | [`IEventOptions`](../interfaces/interface.IEventOptions.md)                                                                                                                                | The Options used to define the registration.                                                                                                          |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[registerEvent](class.NopeGenericWrapper.md#registerevent)

### registerMethod()

Function used to register a Method. This Method will be available in the shared network.

#### Memberof

NopeBaseModule

```ts
registerMethod(
  name: string,
  func: Function,
  options: IServiceOptions<any>): Promise<void>
```

#### Parameters

| Parameter | Type                                                                     | Description                                                             |
| :-------- | :----------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| name      | `string`                                                                 | Name of the Method, which is used during registration at the dispatcher |
| func      | (...`args`: `any`[]) => `Promise`<`any`\>                               | The function itself. It must be async.                                  |
| options   | [`IServiceOptions`](../interfaces/interface.IServiceOptions.md)<`any`\> | The Options, used for registering.                                      |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[registerMethod](class.NopeGenericWrapper.md#registermethod)

### registerProperty()

Helper Function to register an Observable (a Property.)

#### Memberof

NopeBaseModule

```ts
registerProperty<T, S, G>(
  name: string,
  observable: INopeObservable<T, S, G, IEventAdditionalData>,
  options: IEventOptions): Promise<void>
```

#### Type parameters

| Parameter | Default | Description                 |
| :-------- | :------ | :-------------------------- |
| T         | -       | Type of the Property        |
| S         | `T`     | Setter Type of the Property |
| G         | `T`     | Getter Type of the Property |

#### Parameters

| Parameter  | Type                                                                                                                                                                                       | Description                                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string`                                                                                                                                                                                   | Name, which should be used to register the element. The Name will ALLWAYS (automatically) be assembled using the modules identifier an then the name. |
| observable | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`T`, `S`, `G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Observable representing the Property                                                                                                              |
| options    | [`IEventOptions`](../interfaces/interface.IEventOptions.md)                                                                                                                                | The Options used to define the registration.                                                                                                          |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[registerProperty](class.NopeGenericWrapper.md#registerproperty)

### toDescription()

Helper function to extract an description of the Module.

#### Memberof

NopeBaseModule

```ts
toDescription(): INopeModuleDescription
```

#### Returns

[`INopeModuleDescription`](../interfaces/interface.INopeModuleDescription.md)

a parsed description

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[toDescription](class.NopeGenericWrapper.md#todescription)

### unregisterEvent()

Helper Function to unregister an Eventbased Property

#### Memberof

NopeBaseModule

```ts
unregisterEvent(name: string): Promise<void>
```

#### Parameters

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| name      | `string` | Name of the Property, that has been used to register. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[unregisterEvent](class.NopeGenericWrapper.md#unregisterevent)

### unregisterFunction()

Unregister a Function

#### Memberof

NopeBaseModule

```ts
unregisterFunction(name: string): Promise<void>
```

#### Parameters

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| name      | `string` | Name of the function used during registering. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[unregisterFunction](class.NopeGenericWrapper.md#unregisterfunction)

### unregisterProperty()

Helper Function to unregister an Observable (a Property.)

#### Memberof

NopeBaseModule

```ts
unregisterProperty(name: string): Promise<void>
```

#### Parameters

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| name      | `string` | Name of the Property, that has been used to register. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeGenericWrapper](class.NopeGenericWrapper.md).[unregisterProperty](class.NopeGenericWrapper.md#unregisterproperty)
