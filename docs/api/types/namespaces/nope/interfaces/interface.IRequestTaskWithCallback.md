# Interface: IRequestTaskWithCallback

## Properties

### callbacks

```ts
callbacks: {deleteAfterCalling: boolean;
functionId: string;
idx: number;} & ICallOptions[]
```

Callbacks, that are available in a Dispatcher.

#### Author

M.Karkowski

#### Memberof

IRequestTaskWithCallback

### functionId

```ts
functionId: string;
```

ID of the Function, on which it is available.

#### Inherited from

[IRequestRpcMsg](interface.IRequestRpcMsg.md).[functionId](interface.IRequestRpcMsg.md#functionid)

### params

```ts
params: {
  data: any;
  idx: number;
}
[];
```

The Parameters

#### Inherited from

[IRequestRpcMsg](interface.IRequestRpcMsg.md).[params](interface.IRequestRpcMsg.md#params)

### requestedBy

```ts
requestedBy: string;
```

Contains the Requester

#### Author

M.Karkowski

#### Inherited from

[IRequestRpcMsg](interface.IRequestRpcMsg.md).[requestedBy](interface.IRequestRpcMsg.md#requestedby)

### resultSink

```ts
resultSink: string;
```

Element, allowing to describe where the result should be hosted.

#### Inherited from

[IRequestRpcMsg](interface.IRequestRpcMsg.md).[resultSink](interface.IRequestRpcMsg.md#resultsink)

### taskId

```ts
taskId: string;
```

UUID of a Task

#### Inherited from

[IRequestRpcMsg](interface.IRequestRpcMsg.md).[taskId](interface.IRequestRpcMsg.md#taskid)
