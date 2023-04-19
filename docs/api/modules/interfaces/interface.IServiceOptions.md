# Interface: IServiceOptions<T\>

Options, used to register a Function.

## Export

IServiceOptions

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | `any`   |

## Properties

### id

```ts
optional id: string
```

Instead of generating a uuid an id could be provided

#### Memberof

IServiceOptions

### isDynamic

```ts
optional isDynamic: boolean
```

Flag, to indicate, that the Item is dynamic.

#### Memberof

IServiceOptions

### package

```ts
optional package: string
```

The Package of the service to list it in.

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

#### Inherited from

Partial.resultSink

### schema

```ts
schema: INopeDescriptor;
```

Schema of the Function.

#### Memberof

IServiceOptions

### timeout

```ts
optional timeout: number
```

A User Provided Timeout of the call. After the timeout has been
ellapsed, the task is cancelled with a timeout error.
The Time is given in **ms**

#### Inherited from

Partial.timeout

### ui

```ts
optional ui: object
```

The ui definition of the service.

#### Type declaration

> ```ts
> optional autoGenBySchema: true | {getData: (item: {}) => T;
> getDescriptionText: (item: {}) => string;
> getPorts: (item: {}) => TServiceGetPortsReturn;}
> ```
>
> Helper to enable auto generating a configuration
>
> ```ts
> optional getPorts: TGetPorts<T, {}>
> ```
>
> Helper to generate the Pors based on the provided node data.
>
> ```ts
> optional icon: string
> ```
>
> Helper to get the Icon, it must be available under
> 'assets/icons/{icon}.png'. Just enter the **name**
>
> ```ts
> optional requiredProvidersForRendering: string[]
> ```
>
> Flag to indicate, that rendering the service configuration requires
> a provider itself. This for instance is the case, if some functions
> needs to be called.
>
> ```ts
> optional serviceConfiguration: TRenderConfigureServicePage<T, {}>
> ```
>
> Custom function to render the service in the editor
