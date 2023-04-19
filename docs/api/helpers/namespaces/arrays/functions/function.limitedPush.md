# Function: limitedPush()

Function which will limit the Amount of Element stored in the Array during
pushing a new Element. If the Maximum is exited the Elementes will be removed
with the FIFO Principal.

# Example 1:

In this example the limit will be reached.

```javascript
const a = [1, 2, 3, 4, 5];
limitedPush(a, 6, 5); // => [2,3,4,5,6];
```

# Example 2:

The limit wont be excided

```javascript
const a = [1, 2, 3, 4, 5];
limitedPush(a, 6, 10); // => [1,2,3,4,5,6];
```

```ts
limitedPush<T>(
  array: T[],
  element: T,
  maxElements: number): void
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter   | Type     | Description                                              |
| :---------- | :------- | :------------------------------------------------------- |
| array       | `T`[]    | The considered Array                                     |
| element     | `T`      | The Element which should be added                        |
| maxElements | `number` | The Max. Amount of Elements, which are allowed to store. |

## Returns

`void`
