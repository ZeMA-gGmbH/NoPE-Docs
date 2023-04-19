# Class: PriorityList<T\>

A Priority List. All Items are sorted by a Priority Number.

## Export

## Type parameters

| Parameter |
| :-------- |
| T         |

## Constructors

### constructor()

```ts
new PriorityList<T>(): PriorityList<T>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Returns

[`PriorityList`](class.PriorityList.md)<`T`\>

## Accessors

### length

```ts
get length(): number
```

## Methods

### highest()

Returns the Element with the lowest priority

#### Memberof

PriorityList

```ts
highest(remove?: boolean = true): T
```

#### Parameters

| Parameter | Type      | Default value | Description                                                                  |
| :-------- | :-------- | :------------ | :--------------------------------------------------------------------------- |
| remove?   | `boolean` | true          | Flag to remove the item. Defaults to true. Otherwise it remains in the list. |

#### Returns

`T`

### list()

Function to returns a sorted List containing only the Value

#### Memberof

PriorityList

```ts
list(): T[]
```

#### Returns

`T`[]

Sorted List containing the Values.

### lowest()

Returns the Element with the highest priority

#### Memberof

PriorityList

```ts
lowest(remove?: boolean = true): T
```

#### Parameters

| Parameter | Type      | Default value | Description                                                                  |
| :-------- | :-------- | :------------ | :--------------------------------------------------------------------------- |
| remove?   | `boolean` | true          | Flag to remove the item. Defaults to true. Otherwise it remains in the list. |

#### Returns

`T`

### push()

Adds Data to the Priority List

```ts
push(_priority: number, _data: T): void
```

#### Parameters

| Parameter  | Type     | Description             |
| :--------- | :------- | :---------------------- |
| \_priority | `number` | lower => lower priority |
| \_data     | `T`      | data which are stored   |

#### Returns

`void`
