# Type alias: TInstanceManagerPage<T, Extension\>

```ts
TInstanceManagerPage: <T, Extension> Function
```

## Type parameters

| Parameter                                                                            | Default                                                                  |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| T _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |
| Extension                                                                            | \{}                                                                      |

## Type declaration

UI to define an instance.

```ts
(div: HTMLDivElement, options: IDynamicUiRenderData & {createInstance: (description: Partial<IInstanceCreationMsg>, options?: {assignmentValid: TValidAsssignmentChecker;
selector: ValidSelectorFunction;}) => Promise<T & IGenericNopeModule>;
ctorName: string;
instances: INopeModuleDescription[];} & Extension): Promise<TInstanceManagerPageResult>
```

### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| div       | `HTMLDivElement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| options   | [`IDynamicUiRenderData`](../interfaces/interface.IDynamicUiRenderData.md) & \{createInstance: (`description`: `Partial`<[`IInstanceCreationMsg`](../../nope/interfaces/interface.IInstanceCreationMsg.md)\>, `options?`: \{assignmentValid: [`TValidAsssignmentChecker`](../../nope/types/type-alias.TValidAsssignmentChecker.md);<br />selector: [`ValidSelectorFunction`](../../../../dispatcher/namespaces/rpcManager/types/type-alias.ValidSelectorFunction.md);}) => `Promise`<`T` & [`IGenericNopeModule`](../../../../modules/interfaces/interface.IGenericNopeModule.md)\>;<br />ctorName: `string`;<br />instances: [`INopeModuleDescription`](../../../../modules/interfaces/interface.INopeModuleDescription.md)[];} & `Extension` |

### Returns

`Promise`<[`TInstanceManagerPageResult`](../interfaces/interface.TInstanceManagerPageResult.md)\>
