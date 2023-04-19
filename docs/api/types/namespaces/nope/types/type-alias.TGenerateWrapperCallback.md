# Type alias: TGenerateWrapperCallback<I\>

```ts
TGenerateWrapperCallback: <I>Function;
```

## Type parameters

| Parameter                                                                            | Default                                                                  |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

## Type declaration

```ts
(
  core: INopeCore,
  description: INopeModuleDescription,
  options: object,
  ...args: any): Promise<I>
```

### Parameters

| Parameter   | Type                                                                                           |
| :---------- | :--------------------------------------------------------------------------------------------- |
| core        | [`INopeCore`](../interfaces/interface.INopeCore.md)                                            |
| description | [`INopeModuleDescription`](../../../../modules/interfaces/interface.INopeModuleDescription.md) |
| options     | `object`                                                                                       |
| ...args     | `any`                                                                                          |

### Returns

`Promise`<`I`\>
