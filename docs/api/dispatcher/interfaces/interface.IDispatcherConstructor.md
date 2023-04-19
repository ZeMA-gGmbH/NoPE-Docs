# Interface: IDispatcherConstructor

## Constructors

### constructor()

```ts
new IDispatcherConstructor(
  options: INopeDispatcherOptions,
  _generateEmitter: Function,
  _generateObservable: Function): INopeDispatcher
```

#### Parameters

| Parameter            | Type                                                                                                                                                                                                       |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options              | [`INopeDispatcherOptions`](../types/type-alias.INopeDispatcherOptions.md)                                                                                                                                  |
| \_generateEmitter    | <T\>() => [`INopeEventEmitter`](../../eventEmitter/interfaces/interface.INopeEventEmitter.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> |
| \_generateObservable | <T\>() => [`INopeObservable`](../../observables/interfaces/interface.INopeObservable.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\>      |

#### Returns

[`INopeDispatcher`](interface.INopeDispatcher.md)
