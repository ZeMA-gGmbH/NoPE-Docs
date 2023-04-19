# Function: registerGarbageCallback()

Helper to register a callback which will be called, if the item is getting remove by the gc.

```ts
registerGarbageCallback(item: any, callback: Function): void
```

## Parameters

| Parameter | Type                          | Description                         |
| :-------- | :---------------------------- | :---------------------------------- |
| item      | `any`                         | The item to be collected by the gc. |
| callback  | (...`args`: `any`[]) => `any` | The callback to call.               |

## Returns

`void`
