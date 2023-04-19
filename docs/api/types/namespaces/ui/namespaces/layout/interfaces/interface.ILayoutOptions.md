# Interface: ILayoutOptions<D\>

Options for a Layout

## Export

ILayoutOptions

## Template

The Template Element.

## Type parameters

| Parameter                                                             | Description   |
| :-------------------------------------------------------------------- | :------------ |
| D _extends_ [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) | Callback Data |

## Properties

### adaptData

```ts
adaptData: IAdaptDataCallback<D>;
```

An addtional Function which will be called before a Callback of the Context-Menu
or Toolbar will be called.

#### Memberof

ILayoutOptions

### dispose

```ts
optional dispose: Function
```

#### Type declaration

Function, which will be called before the Componented is getting destroyed.
This function could be used to clean up everything

##### Memberof

ILayoutOptions

```ts
(): Promise<void>
```

##### Returns

`Promise`<`void`\>

### fullScreen

```ts
optional fullScreen: boolean
```

Boolean to toggle the FullScreen

#### Author

M.Karkowski

#### Memberof

ILayoutOptions

### hotkeys

```ts
optional hotkeys: IHotKeyAction<D>[]
```

Optional Hotkey, which will triggerd custom Functions

#### Memberof

ILayoutOptions

### id

```ts
optional id: string
```

Define a custom ID.

### onEditModeChanged

```ts
optional onEditModeChanged: Function
```

#### Type declaration

Callback, which will be used to provide the actual Editmode.

##### Memberof

ILayoutOptions

```ts
(editingEnabled: boolean): Promise<void>
```

##### Parameters

| Parameter      | Type      |
| :------------- | :-------- |
| editingEnabled | `boolean` |

##### Returns

`Promise`<`void`\>

### onReady

```ts
optional onReady: Function
```

#### Type declaration

Called if the layout is ready

##### Author

M.Karkowski

##### Memberof

ILayoutOptions

```ts
(): Promise<void>
```

##### Returns

`Promise`<`void`\>

### onResized

```ts
optional onResized: Function
```

#### Type declaration

Optional callback which will be called it a resize event occours.

##### Memberof

ILayoutOptions

```ts
(panels: IPossiblePanels): Promise<void>
```

##### Parameters

| Parameter | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| panels    | [`IPossiblePanels`](../types/type-alias.IPossiblePanels.md) |

##### Returns

`Promise`<`void`\>

### panels

```ts
panels: IPanel[]
```

A List containing all Panels, which should be generaged

#### Memberof

ILayoutOptions

### showToggleElements

```ts
optional showToggleElements: boolean
```

Helper to show the Toggle Elements or not.

### title

```ts
title: string;
```

The Title which will be shown on the Top.
If not present, no titlebar will be shown

#### Memberof

ILayoutOptions

### toolbar

```ts
optional toolbar: object
```

Configuration of the Toolbar.

#### Memberof

ILayoutOptions

#### Type declaration

> ```ts
> config: IToolbarConfig<D>;
> ```
>
> A Toolbar Configuration.
>
> ```ts
> panel: ValidPanels;
> ```
>
> The Panel, which will be used to render the Toolbar. Normally this should be
> set to "top".
