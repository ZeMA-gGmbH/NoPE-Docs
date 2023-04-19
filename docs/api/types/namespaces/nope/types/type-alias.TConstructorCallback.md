# Type alias: TConstructorCallback<I\>

```ts
TConstructorCallback: <I>Function;
```

## Type parameters

| Parameter                                                                            | Default                                                                  |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

## Type declaration

```ts
(
  core: INopeCore,
  identifier: string,
  ...args: any): Promise<I>
```

### Parameters

| Parameter  | Type                                                |
| :--------- | :-------------------------------------------------- |
| core       | [`INopeCore`](../interfaces/interface.INopeCore.md) |
| identifier | `string`                                            |
| ...args    | `any`                                               |

### Returns

`Promise`<`I`\>
