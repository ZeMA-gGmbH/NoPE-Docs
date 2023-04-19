# Class: InjectableNopeBaseModule

Base Implementation of a Module.

The Module is used to share information and data. Although it implements the
the Basic behavior to fullfill a given traget.

## Export

## Implements

## Constructors

### constructor()

Creates an instance of BaseModule.

#### Memberof

InjectableNopeBaseModule

```ts
new InjectableNopeBaseModule(_core: INopeCore): InjectableNopeBaseModule
```

#### Parameters

| Parameter | Type                                                                         |
| :-------- | :--------------------------------------------------------------------------- |
| \_core    | [`INopeCore`](../../types/namespaces/nope/interfaces/interface.INopeCore.md) |

#### Returns

[`InjectableNopeBaseModule`](class.InjectableNopeBaseModule.md)

#### Overrides

[NopeBaseModule](class.NopeBaseModule.md).[constructor](class.NopeBaseModule.md#constructor)

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

[NopeBaseModule](class.NopeBaseModule.md).[\_markedElements](class.NopeBaseModule.md#_markedelements)

### author

```ts
author: IAuthor;
```

A Description of the Author. Use to Mail etc.

#### Memberof

BaseModule

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[author](class.NopeBaseModule.md#author)

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

[NopeBaseModule](class.NopeBaseModule.md).[description](class.NopeBaseModule.md#description)

### identifier

```ts
identifier: string;
```

The Identifier of the Module.

#### Memberof

BaseModule

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[identifier](class.NopeBaseModule.md#identifier)

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

[NopeBaseModule](class.NopeBaseModule.md).[uiLinks](class.NopeBaseModule.md#uilinks)

### version

```ts
version: IVersion;
```

Description of the provided Version of the Module.

#### Memberof

BaseModule

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[version](class.NopeBaseModule.md#version)

## Accessors

### events

```ts
get events(): object
```

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[events](class.NopeBaseModule.md#events)

### methods

```ts
get methods(): object
```

Contains the provided functions.

> **key** = `id` of the function

#### Memberof

INopeModuleDescription

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[methods](class.NopeBaseModule.md#methods)

### properties

```ts
get properties(): object
```

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[properties](class.NopeBaseModule.md#properties)

### type

```ts
get type(): string
```

Type of the Module

#### Memberof

INopeModuleDescription

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[type](class.NopeBaseModule.md#type)

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

[NopeBaseModule](class.NopeBaseModule.md).[dispose](class.NopeBaseModule.md#dispose)

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

[NopeBaseModule](class.NopeBaseModule.md).[getIdentifierOf](class.NopeBaseModule.md#getidentifierof)

### init()

An init Function. Used to initialize the Element.

#### Memberof

NopeBaseModule

```ts
init(...args: any[]): Promise<void>
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...args   | `any`[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[init](class.NopeBaseModule.md#init)

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

[NopeBaseModule](class.NopeBaseModule.md).[listEvents](class.NopeBaseModule.md#listevents)

### listMethods()

Function to return all available Methods. \*

#### Memberof

NopeBaseModule

```ts
listMethods(): Promise<{method: (...args: any[]) => Promise<any>;
options: IServiceOptions<any>;}[]>
```

#### Returns

`Promise`<\{method: (...`args`: `any`[]) => `Promise`<`any`\>;
options: [`IServiceOptions`](../interfaces/interface.IServiceOptions.md)<`any`\>;}[]\>

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[listMethods](class.NopeBaseModule.md#listmethods)

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

[NopeBaseModule](class.NopeBaseModule.md).[listProperties](class.NopeBaseModule.md#listproperties)

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

[NopeBaseModule](class.NopeBaseModule.md).[registerEvent](class.NopeBaseModule.md#registerevent)

### registerMethod()

Function used to register a Method. This Method will be available in the shared network.

#### Memberof

NopeBaseModule

```ts
registerMethod(
  name: string,
  method: Function,
  options: IServiceOptions<any>): Promise<void>
```

#### Parameters

| Parameter | Type                                                                     | Description                                                             |
| :-------- | :----------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| name      | `string`                                                                 | Name of the Method, which is used during registration at the dispatcher |
| method    | (...`args`: `any`[]) => `Promise`<`any`\>                               | The function itself. It must be async.                                  |
| options   | [`IServiceOptions`](../interfaces/interface.IServiceOptions.md)<`any`\> | The Options, used for registering.                                      |

#### Returns

`Promise`<`void`\>

#### Inherited from

[NopeBaseModule](class.NopeBaseModule.md).[registerMethod](class.NopeBaseModule.md#registermethod)

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

[NopeBaseModule](class.NopeBaseModule.md).[registerProperty](class.NopeBaseModule.md#registerproperty)

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

[NopeBaseModule](class.NopeBaseModule.md).[toDescription](class.NopeBaseModule.md#todescription)

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

[NopeBaseModule](class.NopeBaseModule.md).[unregisterEvent](class.NopeBaseModule.md#unregisterevent)

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

[NopeBaseModule](class.NopeBaseModule.md).[unregisterFunction](class.NopeBaseModule.md#unregisterfunction)

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

[NopeBaseModule](class.NopeBaseModule.md).[unregisterProperty](class.NopeBaseModule.md#unregisterproperty)
