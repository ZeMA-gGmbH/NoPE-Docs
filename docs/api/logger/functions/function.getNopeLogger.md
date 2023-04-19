# Function: getNopeLogger()

Helper Function, to create a Logger. Therefore it uses a specific Level and a Lable of the
Logger. The Logger-Level can be overwritten by the central-logger see [getCentralNopeLogger](function.getCentralNopeLogger.md)

## Export

```ts
getNopeLogger(name: string, level?: LoggerLevel): ILogger
```

## Parameters

| Parameter | Type                                                | Description                         |
| :-------- | :-------------------------------------------------- | :---------------------------------- |
| name      | `string`                                            | -                                   |
| level?    | [`LoggerLevel`](../types/type-alias.LoggerLevel.md) | The Level, which should be rendered |

## Returns

[`ILogger`](../interfaces/interface.ILogger.md)

Returns a Logger.
