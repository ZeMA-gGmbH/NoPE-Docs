# Type alias: IWaitForCallback<T, AD\>

```ts
IWaitForCallback: <T, AD> Function
```

## Type parameters

| Parameter                                                                              | Default                                                                   | Description                                                                                                        |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| T                                                                                      | `unknown`                                                                 | The Type, the callback receives. This type depends of the                                                          |
| AD _extends_ [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../interfaces/interface.IEventAdditionalData.md) | The Additional Data that is reicved. (see [IEventAdditionalData](../interfaces/interface.IEventAdditionalData.md)) |

## Type declaration

The Definition of a callback which can be used in the `waitFor` (see [waitFor](../interfaces/interface.INopeEventEmitter.md#waitfor)) method of
an [INopeEventEmitter](../interfaces/interface.INopeEventEmitter.md) or an nope.types.INopeObservable

### Export

```ts
(content: T | null, options: Partial<AD>): boolean | Promise<boolean>
```

### Parameters

| Parameter | Type              |
| :-------- | :---------------- |
| content   | `T` \| `null`     |
| options   | `Partial`<`AD`\> |

### Returns

`boolean` \| `Promise`<`boolean`\>
