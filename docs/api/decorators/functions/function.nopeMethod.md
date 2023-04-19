# Function: nopeMethod()

Decorator, used to export the Method as Service to Nope..

```ts
nopeMethod(options: IServiceOptions<any>): Function
```

## Parameters

| Parameter | Type                                                                                | Description                   |
| :-------- | :---------------------------------------------------------------------------------- | :---------------------------- |
| options   | [`IServiceOptions`](../../modules/interfaces/interface.IServiceOptions.md)<`any`\> | The options used for linking. |

## Returns

`Function`

```ts
(
  target: INopeModule,
  methodName: string,
  descriptor: PropertyDescriptor): void
```

### Parameters

| Parameter  | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| target     | [`INopeModule`](../../modules/interfaces/interface.INopeModule.md) |
| methodName | `string`                                                           |
| descriptor | `PropertyDescriptor`                                               |

### Returns

`void`
