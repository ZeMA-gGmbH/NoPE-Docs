# Type alias: ITaskCancelationMsg

```ts
ITaskCancelationMsg: object;
```

## Type declaration

> ```ts
> dispatcher: string;
> ```
>
> The Id of the Dispatcher
>
> ```ts
> optional quiet: boolean
> ```
>
> Flag to indicate, that this task should be canceled quiet.
>
> ### Author
>
> M.Karkowski
>
> ```ts
> reason: any;
> ```
>
> Reason, why the Task has been canceled.
>
> ```ts
> taskId: string;
> ```
>
> ID of the canceled Task
