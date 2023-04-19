# Type alias: TRenderFunction<I, O, D\>

```ts
TRenderFunction: <I, O, D> Function
```

## Type parameters

| Parameter                                                                           | Default                                                                 |
| :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| I                                                                                   | -                                                                       |
| O _extends_ [`TRenderFunctionResult`](type-alias.TRenderFunctionResult.md)          | [`TRenderFunctionResult`](type-alias.TRenderFunctionResult.md)          |
| D _extends_ [`IMinProvidedDataSet`](../interfaces/interface.IMinProvidedDataSet.md) | [`IMinProvidedDataSet`](../interfaces/interface.IMinProvidedDataSet.md) |

## Type declaration

Type which is used to render an custom html code.
Must return a function, which will be called if
the panel is destroyed.

```ts
(div: HTMLDivElement, options: object): Promise<O>
```

### Parameters

| Parameter | Type             |
| :-------- | :--------------- |
| div       | `HTMLDivElement` |
| options   | `object`         |

### Returns

`Promise`<`O`\>
