# Interface: IEventOptions

Descriptor of an Property.

## Export

IEventOptions

## Properties

### isDynamic

```ts
optional isDynamic: boolean
```

Flag, to indicate, that the Item is dynamic.

#### Memberof

IEventOptions

### mode

```ts
mode: "subscribe" | "publish" | ("subscribe" | "publish")[]
```

Mode of the Property Connection.

### schema

```ts
schema: INopeDescriptor | {getter: INopeDescriptor;
internal: INopeDescriptor;
setter: INopeDescriptor;}
```

Schema of the Property.

### topic

```ts
topic: string | {publish: string;
subscribe: string;}
```
