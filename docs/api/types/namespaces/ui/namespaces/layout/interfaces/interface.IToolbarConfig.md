# Interface: IToolbarConfig<D\>

An Interface to define a Windows-Like-Toolbar.

## Type parameters

| Parameter                                                             |
| :-------------------------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) |

## Properties

### activeTab

```ts
optional activeTab: string
```

### tabs

```ts
tabs: object;
```

#### Index signature

\[`index`: `string`\]: \{disabled: `boolean`;
hidden: `boolean`;
menu: [`IMenubar`](interface.IMenubar.md)<`D`\>;
onActive: (`D`: `any`) => `Promise`<`boolean`\>;
onLeave: (`D`: `any`) => `Promise`<`boolean`\>;
text: `string`;
tooltip: `string`;}

#### Type declaration
