# Interface: IJsonSchema

Definition for a JSON Schema

## Export

IJsonSchema

## Properties

### $id

```ts
optional $id: string
```

This is important because it tells refs where
the root of the document is located

### $ref

```ts
optional $ref: string
```

### $schema

```ts
optional $schema: string
```

### additionalItems

```ts
optional additionalItems: boolean | IJsonSchema
```

### additionalProperties

```ts
optional additionalProperties: boolean | IJsonSchema
```

### allOf

```ts
optional allOf: IJsonSchema[]
```

### anyOf

```ts
optional anyOf: IJsonSchema[]
```

### default

```ts
optional default: any
```

Default json for the object represented by

### definitions

```ts
optional definitions: object
```

Holds simple JSON Schema definitions for
referencing from elsewhere.

#### Index signature

\[`key`: `string`\]: [`IJsonSchema`](interface.IJsonSchema.md)

#### Type declaration

### dependencies

```ts
optional dependencies: object
```

If the key is present as a property then the
string of properties must also be present.
If the value is a JSON Schema then it must
also be valid for the object if the key is
present.

#### Index signature

\[`key`: `string`\]: [`IJsonSchema`](interface.IJsonSchema.md) \| `string`[]

#### Type declaration

### description

```ts
optional description: string
```

Schema description

### enum

```ts
optional enum: any[]
```

Enumerates the values that this schema can be
e.g.

{
"type": "string",
"enum": ["red", "green", "blue"]
}

### examples

```ts
optional examples: any
```

### exclusiveMaximum

```ts
optional exclusiveMaximum: boolean
```

If true maximum must be > value, >= otherwise

### exclusiveMinimum

```ts
optional exclusiveMinimum: boolean
```

If true minimum must be < value, <= otherwise

### items

```ts
optional items: IJsonSchema | IJsonSchema[]
```

### maxItems

```ts
optional maxItems: number
```

### maxLength

```ts
optional maxLength: number
```

### maxProperties

```ts
optional maxProperties: number
```

### maximum

```ts
optional maximum: number
```

### minItems

```ts
optional minItems: number
```

### minLength

```ts
optional minLength: number
```

### minProperties

```ts
optional minProperties: number
```

### minimum

```ts
optional minimum: number
```

### multipleOf

```ts
optional multipleOf: number
```

The value must be a multiple of the number
(e.g. 10 is a multiple of 5)

### not

```ts
optional not: IJsonSchema
```

The entity being validated must not match this schema

### oneOf

```ts
optional oneOf: IJsonSchema[]
```

### pattern

```ts
optional pattern: string
```

This is a regex string that the value must
conform to

### patternProperties

```ts
optional patternProperties: object
```

The key of this object is a regex for which
properties the schema applies to

#### Index signature

\[`pattern`: `string`\]: [`IJsonSchema`](interface.IJsonSchema.md)

#### Type declaration

### properties

```ts
optional properties: object
```

The keys that can exist on the object with the
json schema that should validate their value

#### Index signature

\[`property`: `string`\]: [`IJsonSchema`](interface.IJsonSchema.md)

#### Type declaration

### required

```ts
optional required: string[]
```

Props that must be integrated

### title

```ts
optional title: string
```

Title of the schema

### type

```ts
optional type: IJsonSchemaTypes
```

The basic type of this schema, can be one of
['string' | 'number' | 'object' | 'array' | 'boolean' | 'null']
or an array of the acceptable types

### uniqueItems

```ts
optional uniqueItems: boolean
```
