# Type alias: TRenderConfigureServicePage<T, Extension\>

```ts
TRenderConfigureServicePage: <T, Extension> Function
```

## Type parameters

| Parameter                                                                            | Default |
| :----------------------------------------------------------------------------------- | :------ |
| T _extends_ [`PN`](../namespaces/editor/namespaces/nodes/interfaces/interface.PN.md) | -       |
| Extension                                                                            | \{}     |

## Type declaration

Helper to configurate a service

```ts
(div: HTMLDivElement, options: IRenderData & {input: T;} & Extension): Promise<IServiceEditPage>
```

### Parameters

| Parameter | Type                                                                                   |
| :-------- | :------------------------------------------------------------------------------------- |
| div       | `HTMLDivElement`                                                                       |
| options   | [`IRenderData`](../interfaces/interface.IRenderData.md) & \{input: `T`;} & `Extension` |

### Returns

`Promise`<[`IServiceEditPage`](../namespaces/editor/interfaces/interface.IServiceEditPage.md)\>
