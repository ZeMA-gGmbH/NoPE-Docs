# Interface: INopePartialObserver<T, AD\>

## Type parameters

| Parameter                                                                                              | Default                                                                                   |
| :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| T                                                                                                      | -                                                                                         |
| AD _extends_ [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) | [`IEventAdditionalData`](../../eventEmitter/interfaces/interface.IEventAdditionalData.md) |

## Properties

### complete

```ts
optional complete: Function
```

#### Type declaration

```ts
(): void
```

##### Returns

`void`

### error

```ts
optional error: Function
```

#### Type declaration

```ts
(error: any): void
```

##### Parameters

| Parameter | Type  |
| :-------- | :---- |
| error     | `any` |

##### Returns

`void`

### next

```ts
optional next: IEventCallback<T, AD>
```
