# Function: nopeProperty()

Decorator, will link the Parameter to Nope and make it available. it available as
Nope-Property.

```ts
nopeProperty(options: IEventOptions): Function
```

## Parameters

| Parameter | Type                                                                   | Description                                       |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------------ |
| options   | [`IEventOptions`](../../modules/interfaces/interface.IEventOptions.md) | The Options, describing the settings for linking. |

## Returns

`Function`

```ts
(
  target: INopeModule,
  propertyKey: string,
  descriptor: PropertyDescriptor): void
```

### Parameters

| Parameter   | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| target      | [`INopeModule`](../../modules/interfaces/interface.INopeModule.md) |
| propertyKey | `string`                                                           |
| descriptor  | `PropertyDescriptor`                                               |

### Returns

`void`
