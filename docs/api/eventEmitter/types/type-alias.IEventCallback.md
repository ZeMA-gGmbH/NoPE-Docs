# Type alias: IEventCallback<T, AD\>

```ts
IEventCallback: <T, AD> Function
```

## Type parameters

| Parameter                                                                              | Default                                                                   |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| T                                                                                      | `unknown`                                                                 |
| AD _extends_ [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) |

## Type declaration

```ts
(content: T | null, options: Partial<AD>): void
```

### Parameters

| Parameter | Type              |
| :-------- | :---------------- |
| content   | `T` \| `null`     |
| options   | `Partial`<`AD`\> |

### Returns

`void`
