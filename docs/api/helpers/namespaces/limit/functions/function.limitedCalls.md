# Function: limitedCalls()

Function to limit the calls based on the settings.

```ts
limitedCalls<T>(func: Function, options: Partial<TLimitedOptions>): Function
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type                                                                     | Description                                            |
| :-------- | :----------------------------------------------------------------------- | :----------------------------------------------------- |
| func      | (...`args`: `any`[]) => `Promise`<`T`\>                                 | The function to use. This should be an async function. |
| options   | `Partial`<[`TLimitedOptions`](../types/type-alias.TLimitedOptions.md)\> | The Options.                                           |

## Returns

`Function`

```ts
(...args: any[]): Promise<T>
```

### Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...args   | `any`[] |

### Returns

`Promise`<`T`\>
