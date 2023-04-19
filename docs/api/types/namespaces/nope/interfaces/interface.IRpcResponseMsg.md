# Interface: IRpcResponseMsg

## Properties

### error

```ts
optional error: object
```

Property containing the error, if
it occourd.

#### Type declaration

> ```ts
> error: any;
> ```
>
> ```ts
> msg: string;
> ```

### result

```ts
optional result: any
```

Property containing the result. Is
only present, if no error exists.

### sink

```ts
optional sink: string
```

Sink for the data (the modules provide them.)

#### Author

M.Karkowski

#### Memberof

IRpcResponseMsg

### taskId

```ts
taskId: string;
```

ID of the Task.
