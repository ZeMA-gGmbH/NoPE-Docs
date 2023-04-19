# Interface: IRequestRpcMsg

## Properties

### functionId

```ts
functionId: string;
```

ID of the Function, on which it is available.

### params

```ts
params: {
  data: any;
  idx: number;
}
[];
```

The Parameters

### requestedBy

```ts
requestedBy: string;
```

Contains the Requester

#### Author

M.Karkowski

### resultSink

```ts
resultSink: string;
```

Element, allowing to describe where the result should be hosted.

### taskId

```ts
taskId: string;
```

UUID of a Task
