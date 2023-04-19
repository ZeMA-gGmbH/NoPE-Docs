# Type alias: IPipe<T, K\>

```ts
IPipe: <T, K> Function
```

## Type parameters

| Parameter |
| :-------- |
| T         |
| K         |

## Type declaration

Helper to interact with the underlying RXJS implementation.

```ts
(scope: object, observable: Observable<T>): Observable<K>
```

### Parameters

| Parameter  | Type                |
| :--------- | :------------------ |
| scope      | \{}                 |
| observable | `Observable`<`T`\> |

### Returns

`Observable`<`K`\>
