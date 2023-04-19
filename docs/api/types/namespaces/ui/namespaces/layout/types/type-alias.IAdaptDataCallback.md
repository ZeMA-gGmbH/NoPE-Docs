# Type alias: IAdaptDataCallback<D\>

```ts
IAdaptDataCallback: <D>Function;
```

## Type parameters

| Parameter                                                                           |
| :---------------------------------------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](../interfaces/interface.IMinProvidedDataSet.md) |

## Type declaration

Default Callback for Buttons etc inside of a toolbar and the layout.

```ts
(event: any, panels: IPossiblePanels): D
```

### Parameters

| Parameter | Type                                               |
| :-------- | :------------------------------------------------- |
| event     | `any`                                              |
| panels    | [`IPossiblePanels`](type-alias.IPossiblePanels.md) |

### Returns

`D`
