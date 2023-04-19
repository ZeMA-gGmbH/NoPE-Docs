# Interface: IPubSubSystemConstructor

## Constructors

### constructor()

```ts
new IPubSubSystemConstructor(_generateObservable: Function): IPubSubSystem<ITopicSetContentOptions, INopeEventEmitter<unknown, unknown, unknown, ITopicSetContentOptions>, INopeTopic<any, any, any>>
```

#### Parameters

| Parameter            | Type                                                                                                                                                                                                                   |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_generateObservable | <T\>() => [`INopeEventEmitter`](../../../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> |

#### Returns

[`IPubSubSystem`](interface.IPubSubSystem.md)<[`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md), [`INopeEventEmitter`](../../../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`unknown`, `unknown`, `unknown`, [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md)\>, [`INopeTopic`](../types/type-alias.INopeTopic.md)<`any`, `any`, `any`\>\>
