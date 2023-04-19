# Function: enabledFor()

Tests if the Logger is enabled for the level, or extracts the level.

```ts
enabledFor(logger: ILogger, lvl?: LoggerLevel): boolean | LoggerLevel
```

## Parameters

| Parameter | Type                                                | Description                                                                          |
| :-------- | :-------------------------------------------------- | :----------------------------------------------------------------------------------- |
| logger    | [`ILogger`](../interfaces/interface.ILogger.md)     | The logger                                                                           |
| lvl?      | [`LoggerLevel`](../types/type-alias.LoggerLevel.md) | if provided tests if the lvl matches the logger. otherwise returns the current level |

## Returns

`boolean` \| [`LoggerLevel`](../types/type-alias.LoggerLevel.md)
