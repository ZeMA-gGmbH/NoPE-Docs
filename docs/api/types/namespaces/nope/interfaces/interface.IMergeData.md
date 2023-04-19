# Interface: IMergeData<T, K\>

## Author

Martin Karkowski

## Email

m.karkowski@zema.de

## Create

date 2021-11-23 12:31:01

## Modify

date 2021-11-23 12:31:01

## Desc

[description]

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | `any`   |
| K         | `any`   |

## Properties

### data

```ts
data: INopeObservable<T[], T[], T[], IEventAdditionalData>;
```

The simplified data. A simple List, containing only the Values for all Keys.

### onChange

```ts
onChange: INopeEventEmitter<
  { added: T[]; removed: T[] },
  { added: T[]; removed: T[] },
  { added: T[]; removed: T[] },
  IEventAdditionalData
>;
```

Event Emitter, which is called on changes, with the removed and Added Items.

### originalData

```ts
originalData: K;
```

The Original Data.

## Methods

### dispose()

Removes all subscriptions.

#### Author

M.Karkowski

#### Memberof

IMergeData

```ts
dispose(): void
```

#### Returns

`void`

### update()

Function, which must be called on data updates.

```ts
update(data?: K): void
```

#### Parameters

| Parameter | Type | Description       |
| :-------- | :--- | :---------------- |
| data?     | `K`  | The updated Data. |

#### Returns

`void`
