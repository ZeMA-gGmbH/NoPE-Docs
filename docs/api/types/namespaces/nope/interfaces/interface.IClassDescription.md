# Interface: IClassDescription

## Properties

### description

```ts
description: IClassDescriptor<INopeModule>;
```

Descriptor of the class

### settings

```ts
settings: object;
```

Settings used for the creator.

#### Type declaration

> ```ts
> optional allowInstanceGeneration: boolean
> ```
>
> You can prevent creating instances.
> Defaults to `true`
>
> ```ts
> optional maxAmountOfInstance: number
> ```
>
> Max amount, of instances, that are allowed to
> be created by the local dispatcher. (This is only
> used for hosting.)

### ui

```ts
optional ui: object
```

UI Related Methods.

#### Type declaration

> ```ts
> optional config: TRenderInstancePage<INopeModule, {}>
> ```
>
> Specialized config view.
>
> ```ts
> optional creator: TInstanceManagerPage<INopeModule, {}>
> ```
>
> Creates a a custom function used for rendering the creator function.
> This wont be used if a `creatorSchema` is provided.
>
> ```ts
> optional creatorSchema: object
> ```
>
> Helper to simply creation of a creator interface. Uses the the schema
> to create the ui.
>
> ##### Type declaration - creatorSchema
>
> > ```ts
> > order: Function;
> > ```
> >
> > ###### Type declaration - order
> >
> > Function used sort the inputs given by the schema.
> >
> > ```ts
> > (item: object): any[]
> > ```
> >
> > ####### Parameters
> >
> > | Parameter | Type |
> > | :-------- | :--- |
> > | item      | \{}  |
> >
> > ####### Returns
> >
> > `any`[]
> >
> > ```ts
> > schema: IJsonSchema;
> > ```
> >
> > Schema for the init method.
>
> ```ts
> optional icon: string
> ```
>
> Helper to get the Icon, it must be available under
> 'assets/icons/{icon}.png'. Just enter the **name**
