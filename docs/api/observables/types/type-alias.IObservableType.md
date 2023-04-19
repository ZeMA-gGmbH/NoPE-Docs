# Type alias: IObservableType<T, AD\>

```ts
IObservableType: <T, AD> Partial<AD> & {value: T;}
```

The IObservable data contains additional value.
This is the data, which will be utilized by the
underlying RXJS implementation.

## Export

## Type parameters

| Parameter                                                                                              | Default                                                                                   | Description                                                                       |
| :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| T                                                                                                      | -                                                                                         | The datatype of the [INopeObservable](../interfaces/interface.INopeObservable.md) |
| AD _extends_ [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | The additional data of which is utilized by the RXJS Implementation.              |
