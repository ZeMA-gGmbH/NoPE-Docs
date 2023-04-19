# Interface: INopeModuleDescription

## Properties

### author

```ts
author: IAuthor;
```

The Author of the Module

#### Memberof

INopeModuleDescription

### description

```ts
description: string;
```

A Description of the Module. This is used to describe roughly
what the module is capable of doing. Consider this as Module
a kind of Documentation. Based on the fact, that the module
will be offered in the Network, provide a meaning full documentation

#### Memberof

INopeModuleDescription

### events

```ts
readonly events: object
```

#### Index signature

\[`index`: `string`\]: [`IEventOptions`](interface.IEventOptions.md)

#### Type declaration

### identifier

```ts
identifier: string;
```

Name of the Module. The name of the module must be written in lowercase.

#### Memberof

INopeModuleDescription

### methods

```ts
readonly methods: object
```

Contains the provided functions.

> **key** = `id` of the function

#### Memberof

INopeModuleDescription

#### Index signature

\[`index`: `string`\]: [`IServiceOptions`](interface.IServiceOptions.md)

#### Type declaration

### properties

```ts
readonly properties: object
```

#### Index signature

\[`index`: `string`\]: [`IEventOptions`](interface.IEventOptions.md)

#### Type declaration

### type

```ts
readonly type: string
```

Type of the Module

#### Memberof

INopeModuleDescription

### uiLinks

```ts
readonly uiLinks: {description: string;
link: string;
name: string;}[]
```

### version

```ts
version: IVersion;
```

Description of the provided Version of the Module.

#### Memberof

INopeModuleDescription
