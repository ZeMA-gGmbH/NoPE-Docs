# Type alias: TLimitedOptions

```ts
TLimitedOptions: object;
```

The options for call

## Type declaration

> ```ts
> activeTasks: Set<string>;
> ```
>
> An overview with active Tasks. This is relevant for multiple Funtions.
>
> ```ts
> assignControlFunction: Function;
> ```
>
> ### Type declaration - assignControlFunction
>
> Helper to assign the control function, for example on an async function.
>
> ```ts
> (args: any[], functions: object): any[]
> ```
>
> #### Parameters
>
> | Parameter | Type     |
> | :-------- | :------- |
> | args      | `any`[]  |
> | functions | `object` |
>
> #### Returns
>
> `any`[]
>
> ```ts
> awaitingTasks: Set<string>;
> ```
>
> An overview with active Tasks. This is relevant for multiple Funtions.
>
> ```ts
> optional callbackBetween: Function
> ```
>
> ### Type declaration - callbackBetween
>
> An additional function, wich can be used between the next function in is called. e.g. sleep.
>
> ```ts
> (): Promise<void>
> ```
>
> #### Returns
>
> `Promise`<`void`\>
>
> ```ts
> emitter: EventEmitter;
> ```
>
> An emitter to use.
>
> ```ts
> functionId: string;
> ```
>
> The Id to use. If not provided, an specific id is generated
>
> ```ts
> getLock: Function;
> ```
>
> ### Type declaration - getLock
>
> Helper function to request a lock.
>
> ```ts
> (functionId: string, newTaskId: string): boolean
> ```
>
> #### Parameters
>
> | Parameter  | Type     |
> | :--------- | :------- |
> | functionId | `string` |
> | newTaskId  | `string` |
>
> #### Returns
>
> `boolean`
>
> ```ts
> lastDone: number;
> ```
>
> ```ts
> loggerLevel: false | LoggerLevel;
> ```
>
> A logger to use.
>
> ```ts
> mapping: object;
> ```
>
> Mapping for the Functions.
>
> ### Index signature - mapping
>
> \[`index`: `string`\]: (...`args`: `any`) => `Promise`<`any`\>
>
> ### Type declaration - mapping
>
> ```ts
> maxParallel: number;
> ```
>
> Number of elements, which could be called in parallel. 0 = sequntial
>
> ```ts
> minDelay: number;
> ```
>
> ```ts
> queue: [string, string, any[]][]
> ```
>
> An queue that should be used. If not provided, a queue is used.
