# Function: defineNopeLogger()

Helper to define a Logger based on the given Logger-Definition.
Based on the type, a new logger is created ("LoggerLevel"), the
provided Logger is used or if "false" no logger is returned.

## Author

M.Karkowski

## Export

```ts
defineNopeLogger(param: ValidLoggerDefinition, defaultName: string): ILogger
```

## Parameters

| Parameter   | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| param       | [`ValidLoggerDefinition`](../types/type-alias.ValidLoggerDefinition.md) |
| defaultName | `string`                                                                |

## Returns

[`ILogger`](../interfaces/interface.ILogger.md)
