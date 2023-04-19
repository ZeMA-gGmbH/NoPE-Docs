# Class: LazyConstructor<T\>

Sometimes, the creation of an new Instance is very slow. Therefore this Lazy-Constructor could be used.
Instead of creating a new Instance, it looks for a not used and returns that Instance. By returning
the unused Instance it is marked as used. After the usage the instance could marked as unused again.
If there is no unused Instance available an new Instance is created.

To utilize the Lazy-Constructor a specific create-instance method and a compare function is required.

## Export

## Template

Type of the Instance

## Type parameters

| Parameter | Description                                      |
| :-------- | :----------------------------------------------- |
| T         | Args which are required to Construct an Instance |

## Constructors

### constructor()

Creates an instance of LazyConstructor.

#### Memberof

LazyConstructor

```ts
new LazyConstructor<T>(_ctor: Function): LazyConstructor<T>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                         |
| :-------- | :--------------------------- |
| \_ctor    | (...`arggs`: `any`[]) => `T` |

#### Returns

[`LazyConstructor`](class.LazyConstructor.md)<`T`\>

## Methods

### createInstance()

Creates a new Instance and tries to use an already existing
one if possible.

#### Memberof

LazyConstructor

```ts
createInstance(...args: any[]): T
```

#### Parameters

| Parameter | Type    | Description                                                            |
| :-------- | :------ | :--------------------------------------------------------------------- |
| ...args   | `any`[] | An Object containing the args which are required to create an Instance |

#### Returns

`T`

new Object

### releaseInstance()

Releases a used Instance. Thereby it could be
used again.

#### Memberof

LazyConstructor

```ts
releaseInstance(instance: T): void
```

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| instance  | `T`  |

#### Returns

`void`
