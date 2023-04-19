# Type alias: IGenerateRemoteInstanceForOtherDispatcherCallback<I\>

```ts
IGenerateRemoteInstanceForOtherDispatcherCallback: <I>Function;
```

## Type parameters

| Parameter                                                                      |
| :----------------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../modules/interfaces/interface.INopeModule.md) |

## Type declaration

```ts
(
  dispatcher: INopeDispatcher,
  identifier: string,
  ...args: any): Promise<I>
```

### Parameters

| Parameter  | Type                                                            |
| :--------- | :-------------------------------------------------------------- |
| dispatcher | [`INopeDispatcher`](../interfaces/interface.INopeDispatcher.md) |
| identifier | `string`                                                        |
| ...args    | `any`                                                           |

### Returns

`Promise`<`I`\>
