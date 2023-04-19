# Interface: ITabProps

A Configuration to define a Tab-Group

## Export

ITabProps

## Properties

### layoutId

```ts
layoutId: string;
```

The id of the W2UI-Layout, where the tab-group is getting rendered

#### Memberof

ITabProps

### name

```ts
name: string;
```

### onConfigChanged

```ts
optional onConfigChanged: Function
```

#### Type declaration

Callback, which is called if the Configuration has been changed. This is the case, if a
tab as been `added`, `selected` or `removed`

##### Memberof

ITabProps

```ts
(config: ITabProps): void
```

##### Parameters

| Parameter | Type                                  |
| :-------- | :------------------------------------ |
| config    | [`ITabProps`](interface.ITabProps.md) |

##### Returns

`void`

### onMount

```ts
optional onMount: Function
```

#### Type declaration

Callback, which will be call during rendering the tab group for the first time.

##### Memberof

ITabProps

```ts
(item: ITabProps): void
```

##### Parameters

| Parameter | Type                                  |
| :-------- | :------------------------------------ |
| item      | [`ITabProps`](interface.ITabProps.md) |

##### Returns

`void`

### onNewTab

```ts
optional onNewTab: Function
```

#### Type declaration

Callback, which will be called if a new tab is created. If creating is permitted,
the promise must resolve `false`, otherwise a tab-defintion (see [ITab](interface.ITab.md)) must
be resolved.

##### Memberof

ITabProps

```ts
(): Promise<false | ITab>
```

##### Returns

`Promise`<false \| [`ITab`](interface.ITab.md)\>

### onNoTabSelected

```ts
optional onNoTabSelected: Function
```

#### Type declaration

A callback, which will be called, if all tabs has been closed.

##### Memberof

ITabProps

```ts
(): Promise<void>
```

##### Returns

`Promise`<`void`\>

### onTabDelete

```ts
optional onTabDelete: Function
```

#### Type declaration

Callback, which is call if the user wants to change the tab. The callback must resolve
a `boolean`, where as `true` allows the deleting the tab, `false` permits deleting the
tab.

##### Memberof

ITabProps

```ts
(tabId: ITab, forced?: boolean): Promise<boolean>
```

##### Parameters

| Parameter | Type                        |
| :-------- | :-------------------------- |
| tabId     | [`ITab`](interface.ITab.md) |
| forced?   | `boolean`                   |

##### Returns

`Promise`<`boolean`\>

### onTabEdit

```ts
optional onTabEdit: Function
```

#### Type declaration

Callback, which is called, if the Tab receivs a `double-click`. The function can adapt
the Tab configuration (for example its label) which must be returned by this label.

##### Memberof

ITabProps

```ts
(tab: ITab): Promise<ITab>
```

##### Parameters

| Parameter | Type                        |
| :-------- | :-------------------------- |
| tab       | [`ITab`](interface.ITab.md) |

##### Returns

`Promise`<[`ITab`](interface.ITab.md)\>

### onTabSelect

```ts
optional onTabSelect: Function
```

#### Type declaration

Callback, which is call if the user wants to change the tab. The callback must resolve
a `boolean`, where as `true` allows the tab-change, `false` permits the change.

##### Memberof

ITabProps

```ts
(oldTabId: ITab, newTabId: ITab): Promise<boolean>
```

##### Parameters

| Parameter | Type                        |
| :-------- | :-------------------------- |
| oldTabId  | [`ITab`](interface.ITab.md) |
| newTabId  | [`ITab`](interface.ITab.md) |

##### Returns

`Promise`<`boolean`\>

### position

```ts
position: ValidPanels;
```

The position on the W2UI-Layout, where the tab-group is getting rendered

#### Memberof

ITabProps

### reorder

```ts
optional reorder: boolean
```

Flag to allow / disable reordering of the tabs.

#### Memberof

ITabProps

### tabs

```ts
tabs: object;
```

Object, containing the inital tabs.

#### Memberof

ITabProps

#### Type declaration

> ```ts
> active: string;
> ```
>
> Flag of the active tab.
>
> ```ts
> optional allowNewTabs: boolean
> ```
>
> Flag, which will ensure that there exits a tab
> with the label `+`. If clicked, a new tab will
> be inserted. This results in the calling the
> [onNewTab](interface.ITabProps.md#onnewtab) callback.
>
> ```ts
> items: ITab[]
> ```
>
> List of the available tabs.
