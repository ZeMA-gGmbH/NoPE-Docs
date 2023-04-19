# Interface: IPanelInstance

## Properties

### element

```ts
element: HTMLElement;
```

### options

```ts
options: IPanelOptions;
```

### panel

```ts
panel: any;
```

## Methods

### closeMessage()

```ts
closeMessage(): void
```

#### Returns

`void`

### destroy()

```ts
destroy(): void
```

#### Returns

`void`

### height()

```ts
height(): number
```

#### Returns

`number`

### hide()

```ts
hide(immediate?: boolean): void
```

#### Parameters

| Parameter  | Type      |
| :--------- | :-------- |
| immediate? | `boolean` |

#### Returns

`void`

### lock()

```ts
lock(message?: string, showSpinner?: boolean): void
```

#### Parameters

| Parameter    | Type      |
| :----------- | :-------- |
| message?     | `string`  |
| showSpinner? | `boolean` |

#### Returns

`void`

### resize()

```ts
resize(size: number): void
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| size      | `number` |

#### Returns

`void`

### show()

```ts
show(immediate?: boolean): void
```

#### Parameters

| Parameter  | Type      |
| :--------- | :-------- |
| immediate? | `boolean` |

#### Returns

`void`

### showMessage()

```ts
showMessage(options: object): void
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| options   | `object` |

#### Returns

`void`

### unlock()

```ts
unlock(): void
```

#### Returns

`void`

### width()

```ts
width(): number
```

#### Returns

`number`
