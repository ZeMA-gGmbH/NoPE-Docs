# Function: getSingleton()

Function to get a singleton. To create the singleton, the parameter _create_ is used. This will be called once.
The singleton will be stored as _global_ variable and can be accessed by the identifier

## Author

M.Karkowski

## Export

```ts
getSingleton<T>(identifier: string, create: Function): object
```

## Type parameters

| Parameter | Description               |
| :-------- | :------------------------ |
| T         | The Type of the singleton |

## Parameters

| Parameter  | Type      | Description                                        |
| :--------- | :-------- | :------------------------------------------------- |
| identifier | `string`  | Identifier to access the singleton                 |
| create     | () => `T` | The Callback which is used to create the instance. |

## Returns

`object`

An object, containing the key **instances**, where you'll find the instance and an helper function **setInstance** to redefine the instance

```ts
instance: T;
```

```ts
setInstance: Function;
```

### Type declaration - setInstance

```ts
(value: T): void
```

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| value     | `T`  |

#### Returns

`void`
