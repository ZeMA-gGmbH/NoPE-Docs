# Interface: IAdditionalSelectionContextMenuEntry<T\>

## Type parameters

| Parameter |
| :-------- |
| T         |

## Properties

### callback

```ts
callback: Function;
```

#### Type declaration

```ts
(menu: ISelectionContextMenuEntry<T>[], item: T): void
```

##### Parameters

| Parameter | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| menu      | [`ISelectionContextMenuEntry`](interface.ISelectionContextMenuEntry.md)<`T`\>[] |
| item      | `T`                                                                              |

##### Returns

`void`

#### Overrides

[ISelectionContextMenuEntry](interface.ISelectionContextMenuEntry.md).[callback](interface.ISelectionContextMenuEntry.md#callback)

### hidden

```ts
optional hidden: boolean
```

#### Inherited from

[ISelectionContextMenuEntry](interface.ISelectionContextMenuEntry.md).[hidden](interface.ISelectionContextMenuEntry.md#hidden)

### icon

```ts
optional icon: string
```

#### Inherited from

[ISelectionContextMenuEntry](interface.ISelectionContextMenuEntry.md).[icon](interface.ISelectionContextMenuEntry.md#icon)

### id

```ts
id: string;
```

#### Inherited from

[ISelectionContextMenuEntry](interface.ISelectionContextMenuEntry.md).[id](interface.ISelectionContextMenuEntry.md#id)

### text

```ts
text: string;
```

#### Inherited from

[ISelectionContextMenuEntry](interface.ISelectionContextMenuEntry.md).[text](interface.ISelectionContextMenuEntry.md#text)
