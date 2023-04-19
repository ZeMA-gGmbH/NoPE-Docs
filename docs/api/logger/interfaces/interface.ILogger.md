# Interface: ILogger

## Properties

### DEBUG

```ts
DEBUG: ILogLevel;
```

### ERROR

```ts
ERROR: ILogLevel;
```

### INFO

```ts
INFO: ILogLevel;
```

### OFF

```ts
OFF: ILogLevel;
```

### TIME

```ts
TIME: ILogLevel;
```

### TRACE

```ts
TRACE: ILogLevel;
```

### WARN

```ts
WARN: ILogLevel;
```

## Methods

### debug()

```ts
debug(...x: any[]): void
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...x      | `any`[] |

#### Returns

`void`

### enabledFor()

```ts
enabledFor(level: ILogLevel): boolean
```

#### Parameters

| Parameter | Type        |
| :-------- | :---------- |
| level     | `ILogLevel` |

#### Returns

`boolean`

### error()

```ts
error(...x: any[]): void
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...x      | `any`[] |

#### Returns

`void`

### getLevel()

Gets the global logging filter level

```ts
getLevel(): ILogLevel
```

#### Returns

`ILogLevel`

the current logging level

### info()

```ts
info(...x: any[]): void
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...x      | `any`[] |

#### Returns

`void`

### log()

```ts
log(...x: any[]): void
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...x      | `any`[] |

#### Returns

`void`

### setLevel()

Sets the global logging filter level which applies to _all_ previously
registered, and future Logger instances. (note that named loggers (retrieved
via `Logger.get`) can be configured independently if required).

```ts
setLevel(level: ILogLevel): void
```

#### Parameters

| Parameter | Type        | Description            |
| :-------- | :---------- | :--------------------- |
| level     | `ILogLevel` | the level to switch to |

#### Returns

`void`

### time()

```ts
time(label: string): void
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| label     | `string` |

#### Returns

`void`

### timeEnd()

```ts
timeEnd(label: string): void
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| label     | `string` |

#### Returns

`void`

### trace()

```ts
trace(...x: any[]): void
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...x      | `any`[] |

#### Returns

`void`

### warn()

```ts
warn(...x: any[]): void
```

#### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...x      | `any`[] |

#### Returns

`void`
