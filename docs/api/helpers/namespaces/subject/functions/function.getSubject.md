# Function: getSubject()

Helper to define the correct RXJS Subject based on the options (see [TSubjectOptions](../interfaces/interface.TSubjectOptions.md))

## Author

M.Karkowski

```ts
getSubject<T>(options: TSubjectOptions = {}): Subject<T> | ReplaySubject<T> | BehaviorSubject<T>
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| options   | [`TSubjectOptions`](../interfaces/interface.TSubjectOptions.md) |

## Returns

`Subject`<`T`\> \| `ReplaySubject`<`T`\> \| `BehaviorSubject`<`T`\>
