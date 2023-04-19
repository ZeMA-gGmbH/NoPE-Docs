# Interface: IClassDescriptor<T\>

## Type parameters

| Parameter                                                                            | Default                                                                  |
| :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| T _extends_ [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) | [`INopeModule`](../../../../modules/interfaces/interface.INopeModule.md) |

## Properties

### factorySelector

```ts
optional factorySelector: string | symbol | (string | symbol)[]
```

Selector for a the Factory.

#### Memberof

Y

### name

```ts
name: string;
```

Name of the Element.

#### Memberof

IDescriptor

### options

```ts
optional options: object
```

Additional Options

#### Memberof

Y

#### Type declaration

> ```ts
> optional addition: object
> ```
>
> ##### Type declaration - addition
>
> > ```ts
> > args: any[]
> > ```
> >
> > ```ts
> > name: "whenTargetTagged" | "whenTargetNamed" | "onActivation";
> > ```
>
> ```ts
> optional factoryCallback: Function
> ```
>
> ##### Type declaration - factoryCallback
>
> ```ts
> (context: Context): Function
> ```
>
> ###### Parameters
>
> | Parameter | Type      |
> | :-------- | :-------- |
> | context   | `Context` |
>
> ###### Returns
>
> `Function`
>
> ```ts
> (...args: any[]): T
> ```
>
> ####### Parameters
>
> | Parameter | Type    |
> | :-------- | :------ |
> | ...args   | `any`[] |
>
> ####### Returns
>
> `T`
>
> ```ts
> optional scope: "inRequestScope" | "inSingletonScope" | "inTransientScope"
> ```
>
> ```ts
> optional toConstant: boolean
> ```

### selector

```ts
optional selector: string | symbol | (string | symbol)[]
```

Identifier for a Single Element

#### Memberof

Y

### type

```ts
optional type: any
```

Contains the Type of Constant or something similar

#### Memberof

Y
