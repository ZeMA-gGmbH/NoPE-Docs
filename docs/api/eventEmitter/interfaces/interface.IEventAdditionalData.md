# Interface: IEventAdditionalData

Defines the data, that are share on event emitting.

## Properties

### args

```ts
args: any[]
```

Additional arguments, share during emitting the message.

### forced

```ts
forced: boolean;
```

Flag to indicate, that the message must be emitted or not

### sender

```ts
sender: string;
```

An Id of an element that emits the change. This
id can be used to determine cycles in the emitting process

### timestamp

```ts
timestamp: number;
```

A Timestamp of the message
