# Class: LimitedList<T\>

Limited List. This list at max contains a specific amount of elements.
After the max number of elements has been added, the first element added
will be removed.

## Type parameters

| Parameter |
| :-------- |
| T         |

## Constructors

### constructor()

```ts
new LimitedList<T>(maxLength: number): LimitedList<T>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| maxLength | `number` |

#### Returns

[`LimitedList`](class.LimitedList.md)<`T`\>

## Properties

### maxLength

```ts
maxLength: number;
```

## Accessors

### currentPointer

```ts
get currentPointer(): number
```

### length

```ts
get length(): number
```

## Methods

### current()

Returns the current item, the pointer is showing at.

```ts
current(): T
```

#### Returns

`T`

### first()

Returns the Pointer to the first item.

```ts
first(): T
```

#### Returns

`T`

### forEach()

Helper to iterate over all items.

```ts
forEach(callbackFn: Function, thisArg?: any): void
```

#### Parameters

| Parameter  | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| callbackFn | (`item`: `T`, `index`: `number`, `array`: `T`[]) => `void` |
| thisArg?   | `any`                                                      |

#### Returns

`void`

### last()

```ts
last(): T
```

#### Returns

`T`

### next()

```ts
next(): T
```

#### Returns

`T`

### pop()

Pops the last element. If there is no element undefined is returned.

```ts
pop(current: boolean = false): T
```

#### Parameters

| Parameter | Type      | Default value |
| :-------- | :-------- | :------------ |
| current   | `boolean` | false         |

#### Returns

`T`

The last element.

### previous()

Returns the last item. Adapts the pointer and the
current item is the last item.
example:
l = limited.last()
c = limited.current()

     l == c -> True

```ts
previous(): T
```

#### Returns

`T`

The last element.

### push()

Adds Data to the Stack. The Pointer is getting adapted.

#### Memberof

LimitedList

```ts
push(data: T): number
```

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| data      | `T`  |

#### Returns

`number`
