# Function: determineDifference()

Helper Function which will determine the Difference between set01 and set02.
If values are in set02 and not in set01 they will be putted into added. If
items are in set01 but not in set02 they will be added to removed.

## Export

```ts
determineDifference<T>(set01: Set<T>, set02: Set<T>): object
```

## Type parameters

| Parameter | Description |
| :-------- | :---------- |
| T         |             |

## Parameters

| Parameter | Type         | Description            |
| :-------- | :----------- | :--------------------- |
| set01     | `Set`<`T`\> | Base Set               |
| set02     | `Set`<`T`\> | Set to compare it with |

## Returns

`object`

```ts
added: Set<T>;
```

```ts
removed: Set<T>;
```
