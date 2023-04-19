# Interface: IPanel

## Properties

### callback

```ts
optional callback: Function
```

#### Type declaration

```ts
(event: any): void
```

##### Parameters

| Parameter | Type  |
| :-------- | :---- |
| event     | `any` |

##### Returns

`void`

### content

```ts
optional content: any
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[content](interface.IPanelOptions.md#content)

### height

```ts
optional height: number
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[height](interface.IPanelOptions.md#height)

### hidden

```ts
optional hidden: boolean
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[hidden](interface.IPanelOptions.md#hidden)

### id

```ts
id: string;
```

#### Overrides

[IPanelOptions](interface.IPanelOptions.md).[id](interface.IPanelOptions.md#id)

### maxSize

```ts
optional maxSize: number
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[maxSize](interface.IPanelOptions.md#maxsize)

### minSize

```ts
optional minSize: number
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[minSize](interface.IPanelOptions.md#minsize)

### onHide

```ts
optional onHide: Function
```

#### Type declaration

```ts
(event: any): void
```

##### Parameters

| Parameter | Type  |
| :-------- | :---- |
| event     | `any` |

##### Returns

`void`

### onRefresh

```ts
optional onRefresh: Function
```

#### Type declaration

```ts
(event: any): void
```

##### Parameters

| Parameter | Type  |
| :-------- | :---- |
| event     | `any` |

##### Returns

`void`

### onResizing

```ts
optional onResizing: Function
```

#### Type declaration

```ts
(event: any): void
```

##### Parameters

| Parameter | Type  |
| :-------- | :---- |
| event     | `any` |

##### Returns

`void`

### onShow

```ts
optional onShow: Function
```

#### Type declaration

```ts
(event: any): void
```

##### Parameters

| Parameter | Type  |
| :-------- | :---- |
| event     | `any` |

##### Returns

`void`

### overflow

```ts
optional overflow: string
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[overflow](interface.IPanelOptions.md#overflow)

### rendering

```ts
optional rendering: TRendering
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[rendering](interface.IPanelOptions.md#rendering)

### resizable

```ts
optional resizable: boolean
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[resizable](interface.IPanelOptions.md#resizable)

### show

```ts
optional show: object
```

#### Type declaration

> ```ts
> tabs: boolean;
> ```
>
> ```ts
> toolbar: boolean;
> ```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[show](interface.IPanelOptions.md#show)

### size

```ts
optional size: number
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[size](interface.IPanelOptions.md#size)

### style

```ts
optional style: string
```

Style for the Panel

#### Overrides

[IPanelOptions](interface.IPanelOptions.md).[style](interface.IPanelOptions.md#style)

### tabs

```ts
optional tabs: Partial<ITabProps>
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[tabs](interface.IPanelOptions.md#tabs)

### title

```ts
optional title: string
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[title](interface.IPanelOptions.md#title)

### toggle

```ts
optional toggle: boolean | {icon: string | {hide: string;
show: string;};
tooltip: string | {hide: string;
show: string;};}
```

Enable / Disable the Toggle Button on the bottom. Defaults to false.

### type

```ts
type: ValidPanels;
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[type](interface.IPanelOptions.md#type)

### width

```ts
optional width: number
```

#### Inherited from

[IPanelOptions](interface.IPanelOptions.md).[width](interface.IPanelOptions.md#width)
