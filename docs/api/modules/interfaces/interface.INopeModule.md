# Interface: INopeModule

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

### author

```ts
author: IAuthor;
```

The Author of the Module

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[author](interface.INopeModuleDescription.md#author)

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

[INopeModuleDescription](interface.INopeModuleDescription.md).[description](interface.INopeModuleDescription.md#description)

### events

```ts
readonly events: object
```

#### Index signature

\[`index`: `string`\]: [`IEventOptions`](interface.IEventOptions.md)

#### Type declaration

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[events](interface.INopeModuleDescription.md#events)

### identifier

```ts
identifier: string;
```

Name of the Module. The name of the module must be written in lowercase.

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[identifier](interface.INopeModuleDescription.md#identifier)

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

[INopeModuleDescription](interface.INopeModuleDescription.md).[methods](interface.INopeModuleDescription.md#methods)

### properties

```ts
readonly properties: object
```

#### Index signature

\[`index`: `string`\]: [`IEventOptions`](interface.IEventOptions.md)

#### Type declaration

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[properties](interface.INopeModuleDescription.md#properties)

### type

```ts
readonly type: string
```

Type of the Module

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[type](interface.INopeModuleDescription.md#type)

### uiLinks

```ts
readonly uiLinks: {description: string;
link: string;
name: string;}[]
```

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[uiLinks](interface.INopeModuleDescription.md#uilinks)

### version

```ts
version: IVersion;
```

Description of the provided Version of the Module.

#### Memberof

INopeModuleDescription

#### Inherited from

[INopeModuleDescription](interface.INopeModuleDescription.md).[version](interface.INopeModuleDescription.md#version)

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

### toDescription()

Function used to derive a parsable Description of the Module.

#### Memberof

INopeModule

```ts
toDescription(): INopeModuleDescription
```

#### Returns

[`INopeModuleDescription`](interface.INopeModuleDescription.md)

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
