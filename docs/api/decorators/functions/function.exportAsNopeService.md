# Function: exportAsNopeService()

Decorator, that will export the Function to a Dispatcher

```ts
exportAsNopeService<T>(func: T, options: IexportAsNopeServiceParameters): T & {options: IexportAsNopeServiceParameters;}
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type                                                                                      | Description  |
| :-------- | :---------------------------------------------------------------------------------------- | :----------- |
| func      | `T`                                                                                       | The Function |
| options   | [`IexportAsNopeServiceParameters`](../types/type-alias.IexportAsNopeServiceParameters.md) | The Options. |

## Returns

`T` & \{options: [`IexportAsNopeServiceParameters`](../types/type-alias.IexportAsNopeServiceParameters.md);}
