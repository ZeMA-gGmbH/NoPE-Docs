# Interface: IEmitter

Default Emitter, which will be used

## Export

IEmitter

## Properties

### getMaxListeners

```ts
optional getMaxListeners: Function
```

#### Type declaration

Sometimes the max amount of emitters is limited. This
function returns this amount

```ts
(): number
```

##### Returns

`number`

### setMaxListeners

```ts
optional setMaxListeners: Function
```

#### Type declaration

Sometimes the max amount of emitters is limited. This
function uüdates this amount.

```ts
(n: number): void
```

##### Parameters

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| n         | `number` | The amount to use. |

##### Returns

`void`

## Methods

### emit()

Function to emit an event

```ts
emit(event: string | symbol, ...args: any[]): boolean
```

#### Parameters

| Parameter | Type                 | Description           |
| :-------- | :------------------- | :-------------------- |
| event     | `string` \| `symbol` | the name of the event |
| ...args   | `any`[]              | The content to emit   |

#### Returns

`boolean`

### off()

Method to unsubscribe to events

```ts
off(event: string | symbol, listener: Function): IEmitter
```

#### Parameters

| Parameter | Type                           | Description    |
| :-------- | :----------------------------- | :------------- |
| event     | `string` \| `symbol`           | the event name |
| listener  | (...`args`: `any`[]) => `void` | the callback   |

#### Returns

[`IEmitter`](interface.IEmitter.md)

### on()

Method to subscribe to events

```ts
on(event: string | symbol, listener: Function): IEmitter
```

#### Parameters

| Parameter | Type                           | Description    |
| :-------- | :----------------------------- | :------------- |
| event     | `string` \| `symbol`           | the event name |
| listener  | (...`args`: `any`[]) => `void` | the callback   |

#### Returns

[`IEmitter`](interface.IEmitter.md)
