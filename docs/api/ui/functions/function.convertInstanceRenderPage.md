# Function: convertInstanceRenderPage()

Converts the convertInstanceRenderPage to a string, which could be
store or something similar.

## Export

```ts
convertInstanceRenderPage<I>(callback: TRenderInstancePage<I & IGenericNopeModule, {}>): string
```

## Type parameters

| Parameter                                                                      | Description       |
| :----------------------------------------------------------------------------- | :---------------- |
| I _extends_ [`INopeModule`](../../modules/interfaces/interface.INopeModule.md) | The Instance Type |

## Parameters

| Parameter | Type                                                                                                                                                                                      | Description                |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| callback  | [`TRenderInstancePage`](../../types/namespaces/ui/types/type-alias.TRenderInstancePage.md)<`I` & [`IGenericNopeModule`](../../modules/interfaces/interface.IGenericNopeModule.md), \{}\> | The callback to stringify. |

## Returns

`string`

The parsed String.
