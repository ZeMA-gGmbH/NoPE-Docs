# Interface: IDataChangedMsg

Element, showing the changes, of data. This contains the path and the updated data.

## Properties

### args

```ts
args: any[]
```

Additional arguments, share during emitting the message.

#### Inherited from

[IIncrementalChange](interface.IIncrementalChange.md).[args](interface.IIncrementalChange.md#args)

### data

```ts
data: unknown;
```

#### Inherited from

[IIncrementalChange](interface.IIncrementalChange.md).[data](interface.IIncrementalChange.md#data)

### forced

```ts
forced: boolean;
```

Flag to indicate, that the message must be emitted or not

#### Inherited from

[IIncrementalChange](interface.IIncrementalChange.md).[forced](interface.IIncrementalChange.md#forced)

### path

```ts
path: string;
```

#### Inherited from

[IIncrementalChange](interface.IIncrementalChange.md).[path](interface.IIncrementalChange.md#path)

### sender

```ts
sender: string;
```

An Id of an element that emits the change. This
id can be used to determine cycles in the emitting process

#### Inherited from

[IIncrementalChange](interface.IIncrementalChange.md).[sender](interface.IIncrementalChange.md#sender)

### timestamp

```ts
timestamp: number;
```

A Timestamp of the message

#### Inherited from

[IIncrementalChange](interface.IIncrementalChange.md).[timestamp](interface.IIncrementalChange.md#timestamp)
