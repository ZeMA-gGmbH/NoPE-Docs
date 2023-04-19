# Type alias: INopeINopeConnectivityTimeOptions

```ts
INopeINopeConnectivityTimeOptions: object;
```

## Type declaration

> ```ts
> checkInterval: number;
> ```
>
> Interval, to check the other dispatcher for being slow, dead, etc..
> should be lager then the "sendAliveInterval". The value is given in [ms]
> If "0" is provided, no alive messages are provided
>
> ### Author
>
> M.Karkowski
>
> ```ts
> dead: number;
> ```
>
> Amount of Time, after which an external dispatcher is declared as dead. The value is given in [ms]
>
> ### Author
>
> M.Karkowski
>
> ```ts
> remove: number;
> ```
>
> Amount of Time, after which an external dispatcher is removed.
>
> ### Author
>
> M.Karkowski
>
> ```ts
> sendAliveInterval: number;
> ```
>
> Interval for the alive message given in [ms]. If "0" is provided,
> no alive messages are provided
>
> ### Author
>
> M.Karkowski
>
> ```ts
> slow: number;
> ```
>
> Amount of Time, after which an external dispatcher is declared as slow.
> The value is given in [ms]
>
> ### Author
>
> M.Karkowski
>
> ```ts
> warn: number;
> ```
>
> Time, after which an warning is given. The value is given in [ms]
>
> ### Author
>
> M.Karkowski
