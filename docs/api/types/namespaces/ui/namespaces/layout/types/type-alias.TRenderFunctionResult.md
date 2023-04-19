# Type alias: TRenderFunctionResult

```ts
TRenderFunctionResult: object;
```

Type which is used to render an custom html code.
Must return a function, which will be called if
the panel is destroyed.

Result, that must be provided by the Render Function.

## Type declaration

> ```ts
> optional onDestroy: Function
> ```
>
> ### Type declaration - onDestroy
>
> Callback, which is called on destroyed
>
> ```ts
> (): Promise<boolean>
> ```
>
> #### Returns
>
> `Promise`<`boolean`\>
>
> ```ts
> optional onHide: Function
> ```
>
> ### Type declaration - onHide
>
> Callback, which is called, if the panel is hide
>
> ```ts
> (): Promise<boolean>
> ```
>
> #### Returns
>
> `Promise`<`boolean`\>
>
> ```ts
> optional onShow: Function
> ```
>
> ### Type declaration - onShow
>
> Callback, which is calle, if the Element is rendered.
>
> ```ts
> (): Promise<void>
> ```
>
> #### Returns
>
> `Promise`<`void`\>
