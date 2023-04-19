# Interface: ICallOptions

## Properties

### resultSink

```ts
optional resultSink: string
```

Desired result sink. If implemented,
the result will be published on this
topic as well.

#### Author

M.Karkowski

#### Memberof

ICallOptions

### timeout

```ts
optional timeout: number
```

A User Provided Timeout of the call. After the timeout has been
ellapsed, the task is cancelled with a timeout error.
The Time is given in **ms**
