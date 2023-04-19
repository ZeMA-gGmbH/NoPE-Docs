# Interface: IBasicLayoutComponent<D\>

Base Component to render a Layout.

## Type parameters

| Parameter                                                             | Default                                                   |
| :-------------------------------------------------------------------- | :-------------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) | [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) |

## Properties

### currentMousePosition

```ts
currentMousePosition: MouseEvent;
```

Element to access the current Mouse-Position

#### Memberof

IBasicLayoutComponent

### data

```ts
readonly data: D
```

Contains an actual set of the current data.

### helpers

```ts
helpers: object;
```

Element containing specific helpers.

#### Author

M.Karkowski

#### Memberof

IBasicLayoutComponent

#### Index signature

\[`index`: `string`\]: (...`args`: `any`) => `any`

#### Type declaration

### hotkeysEnabled

```ts
hotkeysEnabled: boolean;
```

You can disable the hot-keys defined in configuration

#### Memberof

IBasicLayoutComponent

### panelControlEnabled

```ts
panelControlEnabled: boolean;
```

Flag, to toggle the Panel-Control. If set to false this control is not shown.

#### Memberof

IBasicLayoutComponent

### panelControlls

```ts
panelControlls: IPanelControl[]
```

Controll elements for the Panels. Contains a toggle function,
an icon, tooltip etc. This shows / hides the panels.

#### Memberof

IBasicLayoutComponent

### panels

```ts
panels: IPossiblePanels;
```

The Elment, holding the currently created instances.

#### Memberof

IBasicLayoutComponent

### ready

```ts
ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, showing if the layout is ready or not.

#### Memberof

IBasicLayoutComponent

### resized

```ts
resized: INopeEventEmitter<
  IPossiblePanels,
  IPossiblePanels,
  IPossiblePanels,
  IEventAdditionalData
>;
```

An Eventemitter, to show that the system has been resized

#### Memberof

IBasicLayoutComponent

### toolbar

```ts
toolbar: object;
```

Items of the Toolbar.

#### Memberof

IBasicLayoutComponent

#### Type declaration

> ```ts
> tabElement: any;
> ```
>
> The w2ui-elment of the tabs.
>
> ```ts
> toolbarElement: any;
> ```
>
> The w2ui-element of the toolbar (The icons)
>
> ```ts
> add;
> ```
>
> ```ts
> destroy;
> ```
>
> ```ts
> lock;
> ```
>
> ```ts
> release;
> ```
>
> ```ts
> remove;
> ```

### w2uiLayout

```ts
w2uiLayout: any;
```

The original W2UI Layout. See [here](https://w2ui.com/web/docs/2.0/) for more details and navigate to `layout`.
There you'll find all methods, events and properties to manipulate the layout. But you should use the wrappers,
provided by the abstraction in here.

#### Memberof

IBasicLayoutComponent

## Methods

### closeDynamicW2UiPanel()

Closes a dynamic window!

```ts
closeDynamicW2UiPanel(options: object): Promise<void>
```

#### Parameters

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| options   | `object` | The options to use. |

#### Returns

`Promise`<`void`\>

### closeFullscreen()

Helper to close the fullscreen of the Lay

```ts
closeFullscreen(): void
```

#### Returns

`void`

### controllVisibilityOfPanel()

Function to toggle the visiblity of a given panel.

#### Memberof

IBasicLayoutComponent

```ts
controllVisibilityOfPanel(panel: ValidPanels, visible: boolean): void
```

#### Parameters

| Parameter | Type                                                  | Description                                           |
| :-------- | :---------------------------------------------------- | :---------------------------------------------------- |
| panel     | [`ValidPanels`](../variables/variable.ValidPanels.md) | The panel to manipulate.                              |
| visible   | `boolean`                                             | The visibility. `false` => hidden; `true` => visible. |

#### Returns

`void`

### enablePanelControllButton()

Helper to enable/disable the Controll Button of a panel. Therefore the Controll-Button
must be present.

#### Memberof

IBasicLayoutComponent

```ts
enablePanelControllButton(panel: ValidPanels, enabled: boolean): void
```

#### Parameters

| Parameter | Type                                                  | Description                            |
| :-------- | :---------------------------------------------------- | :------------------------------------- |
| panel     | [`ValidPanels`](../variables/variable.ValidPanels.md) | The panel of the button to manipulate. |
| enabled   | `boolean`                                             | `false` => disable; `true` => enable.  |

#### Returns

`void`

### getElementOfPanel()

Returns the div of the panel.

```ts
getElementOfPanel(panel: ValidPanels): any
```

#### Parameters

| Parameter | Type                                                  | Description |
| :-------- | :---------------------------------------------------- | :---------- |
| panel     | [`ValidPanels`](../variables/variable.ValidPanels.md) | THe Panel.  |

#### Returns

`any`

### isPanelVisible()

Helper, to check if the desired Panel is visible or not

#### Memberof

IBasicLayoutComponent

```ts
isPanelVisible(panel: ValidPanels): boolean
```

#### Parameters

| Parameter | Type                                                  | Description         |
| :-------- | :---------------------------------------------------- | :------------------ |
| panel     | [`ValidPanels`](../variables/variable.ValidPanels.md) | The panel to check. |

#### Returns

`boolean`

### openDynamicW2UiPanel()

Opens a dynamic w2ui panel

#### Author

M.Karkowski

#### Memberof

IBasicLayoutComponent

```ts
openDynamicW2UiPanel<I, O>(options: object): Promise<O>
```

#### Type parameters

| Parameter                                                                           | Default                                                                 | Description                     |
| :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------- | :------------------------------ |
| I                                                                                   | `any`                                                                   | Input data                      |
| O _extends_ [`TRenderFunctionResult`](../types/type-alias.TRenderFunctionResult.md) | [`TRenderFunctionResult`](../types/type-alias.TRenderFunctionResult.md) | Result Function of the Function |

#### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| options   | `object` | The ptions  |

#### Returns

`Promise`<`O`\>

### openFullscreen()

Helper to open the fullscreen of the Layout.

```ts
openFullscreen(): void
```

#### Returns

`void`

### setContentOfPanel()

Updates the content of the Panel.

```ts
setContentOfPanel(panel: ValidPanels, content: string): void
```

#### Parameters

| Parameter | Type                                                  | Description        |
| :-------- | :---------------------------------------------------- | :----------------- |
| panel     | [`ValidPanels`](../variables/variable.ValidPanels.md) | The panel          |
| content   | `string`                                              | The content / HTML |

#### Returns

`void`

### setVisibilityOfPanel()

Changes the visiblity of a panel

#### Author

M.Karkowski

#### Memberof

IBasicLayoutComponent

```ts
setVisibilityOfPanel(panel: ValidPanels, show: boolean): void
```

#### Parameters

| Parameter | Type                                                  | Description                                        |
| :-------- | :---------------------------------------------------- | :------------------------------------------------- |
| panel     | [`ValidPanels`](../variables/variable.ValidPanels.md) | The panel to consider                              |
| show      | `boolean`                                             | The Flag to show / hide the panel. VISIBLE = TRUE; |

#### Returns

`void`

### toggleEdit()

Toggles the Edit mode.

#### Memberof

IBasicLayoutComponent

```ts
toggleEdit(mode?: boolean): void
```

#### Parameters

| Parameter | Type      | Description         |
| :-------- | :-------- | :------------------ |
| mode?     | `boolean` | The Mode. To force. |

#### Returns

`void`

### toggleScreenMode()

Helper to toggle the Screen mode (Fullscreen or normal)

#### Author

M.Karkowski

#### Memberof

IBasicLayoutComponent

```ts
toggleScreenMode(): void
```

#### Returns

`void`
