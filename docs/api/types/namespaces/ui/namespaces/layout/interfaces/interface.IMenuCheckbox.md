# Interface: IMenuCheckbox<D\>

A Sub-Menu containing checkable Attributes

## Type parameters

| Parameter                                                             |
| :-------------------------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) |

## Properties

### count

```ts
optional count: number
```

Badge to be rendered as counter (number)

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[count](interface.IBaseElement.md#count)

### disabled

```ts
optional disabled: boolean
```

Flag to disable the Element

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[disabled](interface.IBaseElement.md#disabled)

### hidden

```ts
optional hidden: boolean
```

Flag to hide the element.

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[hidden](interface.IBaseElement.md#hidden)

### icon

```ts
optional icon: "icon-folder" | "icon-page" | "icon-reload" | "icon-columns" | "icon-search" | "icon-add" | "icon-delete" | "icon-save" | "icon-edit" | "icon-bullet-black"
```

### id

```ts
id: string;
```

Id of the Element

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[id](interface.IBaseElement.md#id)

### items

```ts
items: {
  checked: boolean;
  disabled: boolean;
  icon: string;
  id: string;
  img: string;
  selected: boolean;
  text: string;
}
[];
```

### onClick

```ts
optional onClick: ICallback<D>
```

Callback which will be called, on clicking the element

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[onClick](interface.IBaseElement.md#onclick)

### onRefresh

```ts
optional onRefresh: ICallback<D>
```

Callback which will be called, on refresing (rerendering) the element

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[onRefresh](interface.IBaseElement.md#onrefresh)

### selected

```ts
optional selected: string
```

### style

```ts
optional style: string
```

Style sheet

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[style](interface.IBaseElement.md#style)

### text

```ts
optional text: string | (item: any) => string
```

Text to render

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[text](interface.IBaseElement.md#text)

### tooltip

```ts
optional tooltip: string
```

A Tooltip, which will be renderd on hovering.

#### Inherited from

[IBaseElement](interface.IBaseElement.md).[tooltip](interface.IBaseElement.md#tooltip)

### type

```ts
type: "menu-check" | "menu-radio";
```

The Type. This will be overwritten by the elements.

#### Overrides

[IBaseElement](interface.IBaseElement.md).[type](interface.IBaseElement.md#type)
