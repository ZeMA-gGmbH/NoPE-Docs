# Type alias: TRenderInstancePage<T, Extension\>

```ts
TRenderInstancePage: <T, Extension> Function
```

## Type parameters

| Parameter                                                                            | Default                                                                  |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| T _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |
| Extension                                                                            | \{}                                                                      |

## Type declaration

Helper used, to render the instance details

```ts
(div: HTMLDivElement, options: IDynamicUiRenderData & {input: T & IGenericNopeModule;} & Extension): Promise<TRenderFunctionResult>
```

### Parameters

| Parameter | Type                                                                                                                                                                                              |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| div       | `HTMLDivElement`                                                                                                                                                                                  |
| options   | [`IDynamicUiRenderData`](../interfaces/interface.IDynamicUiRenderData.md) & \{input: `T` & [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md);} & `Extension` |

### Returns

`Promise`<[`TRenderFunctionResult`](../namespaces/layout/types/type-alias.TRenderFunctionResult.md)\>
