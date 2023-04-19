# Type alias: INopeDescriptorSchemaTypes

```ts
INopeDescriptorSchemaTypes: INopeDescriptorSchemaBaseTypes | INopeDescriptorSchemaBaseTypes[] | {$ref: string;}
```

A (JSON-Schema and) Nope-Descriptor allows to use multiple types.
Therefore this type uses some additonal types. Alternativly, a reference
**`$ref`** can be used to describe some data. Therefore the schema
must be availalbe on the reference.
