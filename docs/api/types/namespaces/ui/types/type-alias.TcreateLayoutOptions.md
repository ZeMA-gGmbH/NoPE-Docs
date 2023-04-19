# Type alias: TcreateLayoutOptions

```ts
TcreateLayoutOptions: object;
```

## Type declaration

> ```ts
> optional colors: any
> ```
>
> To define.
>
> ```ts
> divId: string;
> ```
>
> ID of the div. given via `<div id="blabla" #blabla></div>`
>
> ```ts
> optional height: string | number
> ```
>
> The height, that should be set e.g. `100%` or `100px`
>
> ```ts
> id: string;
> ```
>
> Id of the Layout
>
> ```ts
> optional onResizeCallback: Function
> ```
>
> ### Type declaration - onResizeCallback
>
> Function which is called during resizing.
>
> Receives the `event` and the `panels` (containg all panels of the layout)
>
> ```ts
> (event: any, panels?: IPossiblePanels): void
> ```
>
> #### Parameters
>
> | Parameter | Type                                                                          |
> | :-------- | :---------------------------------------------------------------------------- |
> | event     | `any`                                                                         |
> | panels?   | [`IPossiblePanels`](../namespaces/layout/types/type-alias.IPossiblePanels.md) |
>
> #### Returns
>
> `void`
>
> ```ts
> optional width: string | number
> ```
>
> The width, that should be set e.g. `100%` or `100px`
