# Interface: IMapBasedMergeData<OriginalKey, OriginalValue, ExtractedKey, ExtractedValue\>

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

| Parameter      | Default         |
| :------------- | :-------------- |
| OriginalKey    | -               |
| OriginalValue  | -               |
| ExtractedKey   | `OriginalKey`   |
| ExtractedValue | `OriginalValue` |

## Properties

### amountOf

```ts
amountOf: Map<ExtractedKey, number>;
```

Adds a dinfition of the Amounts, of the elements.

### conflicts

```ts
conflicts: Map<ExtractedKey, Set<ExtractedValue>>;
```

Contains conflicts.
key = ExtractedKey;
value = All determined different Values.

### data

```ts
data: INopeObservable<
  ExtractedValue[],
  ExtractedValue[],
  ExtractedValue[],
  IEventAdditionalData
>;
```

The simplified data. A simple List, containing only the Values for all Keys.

#### Inherited from

[IMergeData](interface.IMergeData.md).[data](interface.IMergeData.md#data)

### extractedKey

```ts
extractedKey: ExtractedKey[]
```

Contains the extracted Keys as Array.

### extractedValue

```ts
extractedValue: ExtractedValue[]
```

Contains the extracted Values.

### keyMapping

```ts
keyMapping: Map<OriginalKey, Set<ExtractedKey>>;
```

Contains the Mapping of the original Key to the Extracted Key.

- `key` = `OriginalKey`;
- `value` = `Set<ExtractedKey>`;

### keyMappingReverse

```ts
keyMappingReverse: Map<ExtractedKey, Set<OriginalKey>>;
```

Contains the Mapping of the `extracted Key` to the `original Key`.

- `key` = `ExtractedKey`;
- `value` = `OriginalKey`;

### onChange

```ts
onChange: INopeEventEmitter<
  { added: ExtractedValue[]; removed: ExtractedValue[] },
  { added: ExtractedValue[]; removed: ExtractedValue[] },
  { added: ExtractedValue[]; removed: ExtractedValue[] },
  IEventAdditionalData
>;
```

Event Emitter, which is called on changes, with the removed and Added Items.

#### Inherited from

[IMergeData](interface.IMergeData.md).[onChange](interface.IMergeData.md#onchange)

### orgKeyToExtractedValue

```ts
orgKeyToExtractedValue: Map<OriginalKey, Set<ExtractedValue>>;
```

Maps the Original Key to the Extracted value;

### originalData

```ts
originalData: Map<OriginalKey, OriginalValue>;
```

The Original Data.

#### Inherited from

[IMergeData](interface.IMergeData.md).[originalData](interface.IMergeData.md#originaldata)

### simplified

```ts
simplified: Map<ExtractedKey, ExtractedValue>;
```

Simplifed Data Access.

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

#### Inherited from

[IMergeData](interface.IMergeData.md).[dispose](interface.IMergeData.md#dispose)

### update()

Function, which must be called on data updates.

```ts
update(data?: Map<OriginalKey, OriginalValue>): void
```

#### Parameters

| Parameter | Type                                    | Description       |
| :-------- | :-------------------------------------- | :---------------- |
| data?     | `Map`<`OriginalKey`, `OriginalValue`\> | The updated Data. |

#### Returns

`void`

#### Inherited from

[IMergeData](interface.IMergeData.md).[update](interface.IMergeData.md#update)
