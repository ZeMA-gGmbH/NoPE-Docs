# Type alias: IGenerateRemoteInstanceCallback<I\>

```ts
IGenerateRemoteInstanceCallback: <I>Function;
```

## Type parameters

| Parameter                                                                      |
| :----------------------------------------------------------------------------- |
| I _extends_ [`INopeModule`](../../modules/interfaces/interface.INopeModule.md) |

## Type declaration

```ts
(
  dispatcher: INopeDispatcher,
  description: INopeModuleDescription,
  ...args: any): Promise<I>
```

### Parameters

| Parameter   | Type                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| dispatcher  | [`INopeDispatcher`](../interfaces/interface.INopeDispatcher.md)                          |
| description | [`INopeModuleDescription`](../../modules/interfaces/interface.INopeModuleDescription.md) |
| ...args     | `any`                                                                                    |

### Returns

`Promise`<`I`\>
