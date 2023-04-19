# Class: LoggerAsEventEmitter

## Constructors

### constructor()

```ts
new LoggerAsEventEmitter(_emitter: EventEmitter = ...): LoggerAsEventEmitter
```

#### Parameters

| Parameter | Type           |
| :-------- | :------------- |
| \_emitter | `EventEmitter` |

#### Returns

[`LoggerAsEventEmitter`](class.LoggerAsEventEmitter.md)

## Methods

### emit()

Emits a logging message.

#### Author

M.Karkowski

#### Memberof

LoggerAsEventEmitter

```ts
emit(
  level: LoggerLevel,
  name: string,
  msg: string): void
```

#### Parameters

| Parameter | Type                                                | Description         |
| :-------- | :-------------------------------------------------- | :------------------ |
| level     | [`LoggerLevel`](../types/type-alias.LoggerLevel.md) | The logging level   |
| name      | `string`                                            | Name of the Logger. |
| msg       | `string`                                            | Message             |

#### Returns

`void`

### onDebug()

Register a Callback for debug messages

#### Author

M.Karkowski

#### Memberof

LoggerAsEventEmitter

```ts
onDebug(callback: TCallback): void
```

#### Parameters

| Parameter | Type                                            | Description         |
| :-------- | :---------------------------------------------- | :------------------ |
| callback  | [`TCallback`](../types/type-alias.TCallback.md) | The callback to use |

#### Returns

`void`

### onError()

Register a Callback for error messages

#### Author

M.Karkowski

#### Memberof

LoggerAsEventEmitter

```ts
onError(callback: TCallback): void
```

#### Parameters

| Parameter | Type                                            | Description         |
| :-------- | :---------------------------------------------- | :------------------ |
| callback  | [`TCallback`](../types/type-alias.TCallback.md) | The callback to use |

#### Returns

`void`

### onInfo()

Register a Callback for info messages

#### Author

M.Karkowski

#### Memberof

LoggerAsEventEmitter

```ts
onInfo(callback: TCallback): void
```

#### Parameters

| Parameter | Type                                            | Description         |
| :-------- | :---------------------------------------------- | :------------------ |
| callback  | [`TCallback`](../types/type-alias.TCallback.md) | The callback to use |

#### Returns

`void`

### onLog()

Register a Callback for All Log Messages

#### Author

M.Karkowski

#### Memberof

LoggerAsEventEmitter

```ts
onLog(callback: TCallbackWithLevel): void
```

#### Parameters

| Parameter | Type                                                              | Description          |
| :-------- | :---------------------------------------------------------------- | :------------------- |
| callback  | [`TCallbackWithLevel`](../types/type-alias.TCallbackWithLevel.md) | The callback to use. |

#### Returns

`void`

### onWarn()

Register a Callback for warn messages

#### Author

M.Karkowski

#### Memberof

LoggerAsEventEmitter

```ts
onWarn(callback: TCallback): void
```

#### Parameters

| Parameter | Type                                            | Description         |
| :-------- | :---------------------------------------------- | :------------------ |
| callback  | [`TCallback`](../types/type-alias.TCallback.md) | The callback to use |

#### Returns

`void`
