# Interface: INopeDescriptor

# INopeDescriptor

A generic descriptor of data or a function. This descriptors will be used to describe `NoPE` data-points or functions. The Descriptor is based on **JSON-Schemas** (see [here](https://json-schema.org/) for more details).

## Describing data

A valid example - _describing some data_ - is given below (in the form of `JSON`-data). This example matches a **JSON-Schema**: \*

```json
{
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    }
  }
}
```

## Describing functions

A valid example - _describing a function_ - is given below (in the form of `JSON`-data):

```json
{
  "type": "function",
  "description": "A Sample Function",
  "inputs": [
    {
      "name": "parameter_01",
      "description": "The first Parameter of the Function",
      "schema": {
        "type": "string",
        "maxLength": 10
      }
    },
    {
      "name": "parameter_02",
      "description": "The second Parameter of the Function. This is optional",
      "optional": true,
      "schema": {
        "type": "boolean"
      }
    }
  ]
}
```

## Export

INopeDescriptor

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
optional additionalItems: boolean | INopeDescriptor
```

### additionalProperties

```ts
optional additionalProperties: boolean | INopeDescriptor
```

### allOf

```ts
optional allOf: INopeDescriptor[]
```

### anyOf

```ts
optional anyOf: INopeDescriptor[]
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

\[`key`: `string`\]: [`INopeDescriptor`](interface.INopeDescriptor.md)

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

\[`key`: `string`\]: [`INopeDescriptor`](interface.INopeDescriptor.md) \| `string`[]

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

### inputs

```ts
optional inputs: INopeDescriptorFunctionParameter[]
```

Data-Field, which must be filled out, if we are describing a function. This will describe the entire data of the inputs.

### items

```ts
optional items: INopeDescriptor | INopeDescriptor[]
```

### maxItems

```ts
optional maxItems: number
```

max. amount of items, the array is allwoed to contain.

### maxLength

```ts
optional maxLength: number
```

Max length of the string.

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

min. amount of items, the array must contain.

### minLength

```ts
optional minLength: number
```

Min length of the string.

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
optional not: INopeDescriptor
```

The entity being validated must not match this schema

### oneOf

```ts
optional oneOf: INopeDescriptor[]
```

### outputs

```ts
optional outputs: INopeDescriptor | INopeDescriptorFunctionParameter[]
```

The Return (output) of a function. This must be provided if the type is set to **_function_** [type](interface.INopeDescriptor.md#type)

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

\[`pattern`: `string`\]: [`INopeDescriptor`](interface.INopeDescriptor.md)

#### Type declaration

### properties

```ts
optional properties: object
```

The keys that can exist on the object with the
json schema that should validate their value

#### Index signature

\[`property`: `string`\]: [`INopeDescriptor`](interface.INopeDescriptor.md)

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
optional type: INopeDescriptorSchemaTypes
```

The basic type of this schema, can be one of
['string' | 'number' | 'object' | 'array' | 'boolean' | 'null']
or an array of the acceptable types

### uniqueItems

```ts
optional uniqueItems: boolean
```

Flag, to define, that every item in the array must be unique.
