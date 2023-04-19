# Interface: IHostOverview

## Properties

### cores

```ts
cores: number;
```

Number of Cores

#### Author

M.Karkowski

#### Inherited from

[IHost](../../types/namespaces/nope/interfaces/interface.IHost.md).[cores](../../types/namespaces/nope/interfaces/interface.IHost.md#cores)

### cpu

```ts
cpu: object;
```

Some Details about the Model

#### Author

M.Karkowski

#### Type declaration

> ```ts
> model: string;
> ```
>
> ```ts
> speed: number;
> ```
>
> ```ts
> usage: number;
> ```

#### Inherited from

[IHost](../../types/namespaces/nope/interfaces/interface.IHost.md).[cpu](../../types/namespaces/nope/interfaces/interface.IHost.md#cpu)

### dispatchers

```ts
dispatchers: {
  id: string;
  pid: string | number;
}
[];
```

### instances

```ts
instances: INopeModuleDescription[]
```

### name

```ts
name: string;
```

#### Inherited from

[IHost](../../types/namespaces/nope/interfaces/interface.IHost.md).[name](../../types/namespaces/nope/interfaces/interface.IHost.md#name)

### os

```ts
os: string;
```

#### Inherited from

[IHost](../../types/namespaces/nope/interfaces/interface.IHost.md).[os](../../types/namespaces/nope/interfaces/interface.IHost.md#os)

### ram

```ts
ram: object;
```

#### Type declaration

> ```ts
> free: number;
> ```
>
> ```ts
> total: number;
> ```
>
> ```ts
> usedPerc: number;
> ```

#### Inherited from

[IHost](../../types/namespaces/nope/interfaces/interface.IHost.md).[ram](../../types/namespaces/nope/interfaces/interface.IHost.md#ram)

### services

```ts
services: {
  name: string;
  schema: INopeDescriptor;
}
[];
```
