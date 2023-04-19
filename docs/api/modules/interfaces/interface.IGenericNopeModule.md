# Interface: IGenericNopeModule

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

[INopeModule](interface.INopeModule.md).[\_markedElements](interface.INopeModule.md#_markedelements)

### author

```ts
author: IAuthor;
```

The Author of the Module

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModule](interface.INopeModule.md).[author](interface.INopeModule.md#author)

### description

```ts
description: string;
```

A Description of the Module. This is used to describe roughly
what the module is capable of doing. Consider this as Module
a kind of Documentation. Based on the fact, that the module
will be offered in the Network, provide a meaning full documentation

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModule](interface.INopeModule.md).[description](interface.INopeModule.md#description)

### dynamicInstanceMethods

```ts
dynamicInstanceMethods: object;
```

#### Index signature

\[`index`: `string`\]: <T\>(...`args`: `any`) => [`INopePromise`](../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

### dynamicInstanceMethodsWithOptions

```ts
dynamicInstanceMethodsWithOptions: object;
```

#### Index signature

\[`index`: `string`\]: <T\>(`options`: `Partial`<[`ICallOptions`](../../types/namespaces/nope/interfaces/interface.ICallOptions.md)\>, ...`args`: `any`) => [`INopePromise`](../../promises/interfaces/interface.INopePromise.md)<`T`\>

#### Type declaration

### dynamicInstanceProperties

```ts
dynamicInstanceProperties: object;
```

#### Index signature

\[`index`: `string`\]: [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`\>

#### Type declaration

### events

```ts
readonly events: object
```

#### Index signature

\[`index`: `string`\]: [`IEventOptions`](interface.IEventOptions.md)

#### Type declaration

#### Inherited from

[INopeModule](interface.INopeModule.md).[events](interface.INopeModule.md#events)

### identifier

```ts
identifier: string;
```

Name of the Module. The name of the module must be written in lowercase.

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModule](interface.INopeModule.md).[identifier](interface.INopeModule.md#identifier)

### methods

```ts
readonly methods: object
```

Contains the provided functions.

> **key** = `id` of the function

#### Memberof

INopeModuleDescription

#### Index signature

\[`index`: `string`\]: [`IServiceOptions`](interface.IServiceOptions.md)

#### Type declaration

#### Inherited from

[INopeModule](interface.INopeModule.md).[methods](interface.INopeModule.md#methods)

### properties

```ts
readonly properties: object
```

#### Index signature

\[`index`: `string`\]: [`IEventOptions`](interface.IEventOptions.md)

#### Type declaration

#### Inherited from

[INopeModule](interface.INopeModule.md).[properties](interface.INopeModule.md#properties)

### type

```ts
readonly type: string
```

Type of the Module

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModule](interface.INopeModule.md).[type](interface.INopeModule.md#type)

### uiLinks

```ts
readonly uiLinks: {description: string;
link: string;
name: string;}[]
```

#### Inherited from

[INopeModule](interface.INopeModule.md).[uiLinks](interface.INopeModule.md#uilinks)

### version

```ts
version: IVersion;
```

Description of the provided Version of the Module.

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModule](interface.INopeModule.md).[version](interface.INopeModule.md#version)

## Methods

### dispose()

Function used to Dispose the Module.

#### Memberof

IBaseModule

```ts
dispose(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[dispose](interface.INopeModule.md#dispose)

### getIdentifierOf()

Helper Function, to extract the Name of the Property or the Identifier.

#### Memberof

INopeModule

```ts
getIdentifierOf(propOrFunc: INopeObservable<any, any, any, IEventAdditionalData> | (...args: any[]) => Promise<any>): string
```

#### Parameters

| Parameter  | Type                                                                                                                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propOrFunc | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> \| (...`args`: `any`[]) => `Promise`<`any`\> |

#### Returns

`string`

{string}

#### Inherited from

[INopeModule](interface.INopeModule.md).[getIdentifierOf](interface.INopeModule.md#getidentifierof)

### init()

Function used to initialze the Module.

#### Memberof

IBaseModule

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

[INopeModule](interface.INopeModule.md).[init](interface.INopeModule.md#init)

### listMethods()

Function to list the available Functions of the module. This will hold all available functions
(dynamic and static functions).

#### Memberof

IBaseModule

```ts
listMethods(): Promise<{method: (...args: any[]) => Promise<any>;
options: IServiceOptions<any>;}[]>
```

#### Returns

`Promise`<\{method: (...`args`: `any`[]) => `Promise`<`any`\>;
options: [`IServiceOptions`](interface.IServiceOptions.md)<`any`\>;}[]\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[listMethods](interface.INopeModule.md#listmethods)

### listProperties()

Function used to get an List of all registered Properties.

#### Memberof

IBaseModule

```ts
listProperties(): Promise<{observable: INopeObservable<any, any, any, IEventAdditionalData>;
options: IEventOptions;}[]>
```

#### Returns

`Promise`<\{observable: [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`any`, `any`, `any`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>;
options: [`IEventOptions`](interface.IEventOptions.md);}[]\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[listProperties](interface.INopeModule.md#listproperties)

### registerMethod()

Function used to register a Function

#### Memberof

IBaseModule

```ts
registerMethod(
  name: string,
  method: Function,
  options: IServiceOptions<any>): Promise<void>
```

#### Parameters

| Parameter | Type                                                       | Description                          |
| :-------- | :--------------------------------------------------------- | :----------------------------------- |
| name      | `string`                                                   | Name of the Function                 |
| method    | (...`args`: `any`[]) => `Promise`<`any`\>                 | The Function                         |
| options   | [`IServiceOptions`](interface.IServiceOptions.md)<`any`\> | The Options used during subscription |

#### Returns

`Promise`<`void`\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[registerMethod](interface.INopeModule.md#registermethod)

### registerProperty()

Function to Register a Property. If called for an existing Property, the Data will be
updated.

#### Memberof

IBaseModule

```ts
registerProperty<T, S, G>(
  name: string,
  observable: INopeObservable<T, S, G, IEventAdditionalData>,
  options: IEventOptions): Promise<void>
```

#### Type parameters

| Parameter | Default | Description   |
| :-------- | :------ | :------------ |
| T         | -       | Internal Type |
| S         | `T`     | Setter Type   |
| G         | `T`     | Getter Type   |

#### Parameters

| Parameter  | Type                                                                                                                                                                                       | Description                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| name       | `string`                                                                                                                                                                                   | Name of the Property.                                         |
| observable | [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`T`, `S`, `G`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | The Observable.                                               |
| options    | [`IEventOptions`](interface.IEventOptions.md)                                                                                                                                              | The Options which are used during registering the Observable. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[registerProperty](interface.INopeModule.md#registerproperty)

### toDescription()

Function used to derive a parsable Description of the Module.

#### Memberof

INopeModule

```ts
toDescription(): INopeModuleDescription
```

#### Returns

[`INopeModuleDescription`](interface.INopeModuleDescription.md)

#### Inherited from

[INopeModule](interface.INopeModule.md).[toDescription](interface.INopeModule.md#todescription)

### unregisterFunction()

Function used to unregister a Function

#### Memberof

IBaseModule

```ts
unregisterFunction(name: string): Promise<void>
```

#### Parameters

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| name      | `string` | Name of the Function. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[unregisterFunction](interface.INopeModule.md#unregisterfunction)

### unregisterProperty()

Function used to unregister a Property

#### Memberof

IBaseModule

```ts
unregisterProperty(name: string): Promise<void>
```

#### Parameters

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| name      | `string` | Name of the Property. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[INopeModule](interface.INopeModule.md).[unregisterProperty](interface.INopeModule.md#unregisterproperty)
