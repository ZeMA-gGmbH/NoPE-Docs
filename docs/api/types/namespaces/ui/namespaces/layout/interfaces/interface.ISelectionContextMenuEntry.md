# Interface: ISelectionContextMenuEntry<T\>

## Type parameters

| Parameter |
| :-------- |
| T         |

## Properties

### callback

```ts
optional callback: Function
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

### hidden

```ts
optional hidden: boolean
```

### icon

```ts
optional icon: string
```

### id

```ts
id: string;
```

### text

```ts
text: string;
```
