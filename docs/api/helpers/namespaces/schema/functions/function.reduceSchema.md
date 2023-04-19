# Function: reduceSchema()

Helper Function to reduce the Schema and remove multiple definitions.

```ts
reduceSchema(schema: IJsonSchema, getName: Function = _defaultCombiner): IJsonSchema
```

## Parameters

| Parameter | Type                                                                                                                | Default value     |
| :-------- | :------------------------------------------------------------------------------------------------------------------ | :---------------- |
| schema    | [`IJsonSchema`](../../../../types/interfaces/interface.IJsonSchema.md)                                              | undefined         |
| getName   | (`schema`: [`IJsonSchema`](../../../../types/interfaces/interface.IJsonSchema.md), `names`: `string`[]) => `string` | \_defaultCombiner |

## Returns

[`IJsonSchema`](../../../../types/interfaces/interface.IJsonSchema.md)
