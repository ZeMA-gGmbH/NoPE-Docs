# Interface: IBaseElement<D\>

Base data of an W2UI-Element

## Export

IBaseElement

## Type parameters

| Parameter                                                             | Description                                            |
| :-------------------------------------------------------------------- | :----------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) | The desired data, which will be used during callbacks. |

## Properties

### count

```ts
optional count: number
```

Badge to be rendered as counter (number)

### disabled

```ts
optional disabled: boolean
```

Flag to disable the Element

### hidden

```ts
optional hidden: boolean
```

Flag to hide the element.

### id

```ts
id: string;
```

Id of the Element

### onClick

```ts
optional onClick: ICallback<D>
```

Callback which will be called, on clicking the element

### onRefresh

```ts
optional onRefresh: ICallback<D>
```

Callback which will be called, on refresing (rerendering) the element

### style

```ts
optional style: string
```

Style sheet

### text

```ts
optional text: string | (item: any) => string
```

Text to render

### tooltip

```ts
optional tooltip: string
```

A Tooltip, which will be renderd on hovering.

### type

```ts
optional type: string
```

The Type. This will be overwritten by the elements.
