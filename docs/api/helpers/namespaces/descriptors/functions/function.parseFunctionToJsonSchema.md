# Function: parseFunctionToJsonSchema()

Helper, to parse a [INopeDescriptor](../../../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md) to a

```ts
parseFunctionToJsonSchema(
  schema: INopeDescriptor,
  toJSONSchema: boolean = true,
  workWithRefs: boolean = true,
  definitions: object = {},
  prePathInput: string = "input",
  prePathOutput: string = "output",
  splitChar: string = SPLITCHAR): object
```

## Parameters

| Parameter     | Type                                                                                           | Default value |
| :------------ | :--------------------------------------------------------------------------------------------- | :------------ |
| schema        | [`INopeDescriptor`](../../../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md) | undefined     |
| toJSONSchema  | `boolean`                                                                                      | true          |
| workWithRefs  | `boolean`                                                                                      | true          |
| definitions   | \{}                                                                                            | \{}           |
| prePathInput  | `string`                                                                                       | "input"       |
| prePathOutput | `string`                                                                                       | "output"      |
| splitChar     | `string`                                                                                       | SPLITCHAR     |

## Returns

`object`

```ts
definitions: object;
```

### Index signature - definitions

\[`index`: `string`\]: [`INopeDescriptor`](../../../../types/namespaces/nope/interfaces/interface.INopeDescriptor.md)

### Type declaration - definitions

```ts
ids: string[]
```

```ts
inputId: string = prePathInput;
```

```ts
order: string[]
```

```ts
outputId: string = prePathOutput;
```
