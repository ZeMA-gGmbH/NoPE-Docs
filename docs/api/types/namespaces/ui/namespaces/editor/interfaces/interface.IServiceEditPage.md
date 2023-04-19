# Interface: IServiceEditPage<T\>

Type which is used to render an custom html code.
Must return a function, which will be called if
the panel is destroyed.

Result, that must be provided by the Render Function.

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | `any`   |

## Properties

### getDescriptionText

```ts
optional getDescriptionText: Function
```

#### Type declaration

Function used to Descripe the configured Settings in a short sentence.

```ts
(): Promise<string>
```

##### Returns

`Promise`<`string`\>

### onDestroy

```ts
optional onDestroy: Function
```

#### Type declaration

Callback, which is called on destroyed

```ts
(): Promise<boolean>
```

##### Returns

`Promise`<`boolean`\>

#### Inherited from

TRenderFunctionResult.onDestroy

### onHide

```ts
optional onHide: Function
```

#### Type declaration

Callback, which is called, if the panel is hide

```ts
(): Promise<boolean>
```

##### Returns

`Promise`<`boolean`\>

#### Inherited from

TRenderFunctionResult.onHide

### onShow

```ts
optional onShow: Function
```

#### Type declaration

Callback, which is calle, if the Element is rendered.

```ts
(): Promise<void>
```

##### Returns

`Promise`<`void`\>

#### Inherited from

TRenderFunctionResult.onShow

### type

```ts
type: "node" | "edge";
```

Element showing the type of the edit panel.

## Methods

### getData()

Function, which must return the current service-data.

#### Author

M.Karkowski

#### Memberof

IEditPage

```ts
getData(): Promise<T>
```

#### Returns

`Promise`<`T`\>

### isValid()

Function which must return true, if the Entered-
Data is valid. Otherwise the Update will be refused

#### Author

M.Karkowski

#### Memberof

IEditPage

```ts
isValid(): Promise<boolean>
```

#### Returns

`Promise`<`boolean`\>
