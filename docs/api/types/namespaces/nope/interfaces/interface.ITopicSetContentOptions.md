# Interface: ITopicSetContentOptions

Defines the data, that are share on event emitting.

## Properties

### args

```ts
args: any[]
```

Additional arguments, share during emitting the message.

#### Inherited from

[IEventAdditionalData](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md).[args](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md#args)

### forced

```ts
forced: boolean;
```

Flag to indicate, that the message must be emitted or not

#### Inherited from

[IEventAdditionalData](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md).[forced](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md#forced)

### sender

```ts
sender: string;
```

An Id of an element that emits the change. This
id can be used to determine cycles in the emitting process

#### Inherited from

[IEventAdditionalData](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md).[sender](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md#sender)

### timestamp

```ts
timestamp: number;
```

A Timestamp of the message

#### Inherited from

[IEventAdditionalData](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md).[timestamp](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md#timestamp)

### topicOfChange

```ts
topicOfChange: string;
```

### topicOfContent

```ts
topicOfContent: string;
```

### topicOfSubscription

```ts
topicOfSubscription: string;
```
