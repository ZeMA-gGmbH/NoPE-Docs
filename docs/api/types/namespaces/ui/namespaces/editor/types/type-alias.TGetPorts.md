# Type alias: TGetPorts<T, Extension\>

```ts
TGetPorts: <T, Extension> Function
```

## Type parameters

| Parameter                                                          | Default |
| :----------------------------------------------------------------- | :------ |
| T _extends_ [`PN`](../namespaces/nodes/interfaces/interface.PN.md) | -       |
| Extension                                                          | \{}     |

## Type declaration

Function, used to define the Ports of a service.

```ts
(options?: IRenderData & {input: T;} & Extension): Promise<TServiceGetPortsReturn>
```

### Parameters

| Parameter | Type                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------- |
| options?  | [`IRenderData`](../../../interfaces/interface.IRenderData.md) & \{input: `T`;} & `Extension` |

### Returns

`Promise`<[`TServiceGetPortsReturn`](type-alias.TServiceGetPortsReturn.md)\>
