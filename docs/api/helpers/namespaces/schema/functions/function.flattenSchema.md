# Function: flattenSchema()

A Helper to flatten a schema. This will add additional "$ref" items instead of nested items.
This will perhaps help to reduce the amount of data.

## Author

M.Karkowski

## Export

```ts
flattenSchema(
  schema: IJsonSchema,
  prePath?: string = "root",
  postPath?: string = "",
  splitChar?: string = SPLITCHAR,
  definitions?: IJsonSchema = ...): IJsonSchema
```

## Parameters

| Parameter    | Type                                                                   | Default value | Description                                                                 |
| :----------- | :--------------------------------------------------------------------- | :------------ | :-------------------------------------------------------------------------- |
| schema       | [`IJsonSchema`](../../../../types/interfaces/interface.IJsonSchema.md) | undefined     | The Schema used as input. This will be flattend                             |
| prePath?     | `string`                                                               | "root"        | The Name of the Schema. It is used for the "main" definition                |
| postPath?    | `string`                                                               | ""            | An additional path for every item which is added to the name. example "msg" |
| splitChar?   | `string`                                                               | SPLITCHAR     | The char to split the elements.                                             |
| definitions? | [`IJsonSchema`](../../../../types/interfaces/interface.IJsonSchema.md) | undefined     | -                                                                           |

## Returns

[`IJsonSchema`](../../../../types/interfaces/interface.IJsonSchema.md)

The Adapted Item.
