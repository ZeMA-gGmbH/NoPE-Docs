# Function: waitFor()

Function which will halt the Process until the Testcallback deliveres "true"

## Export

```ts
waitFor(testCallback: Function, options?: object = {}): Promise<void>
```

## Parameters

| Parameter    | Type                                      | Description                                           |
| :----------- | :---------------------------------------- | :---------------------------------------------------- |
| testCallback | () => `boolean` \| `Promise`<`boolean`\> | Function which is used to periodically test the State |
| options?     | `object`                                  | Options to enhance the behavior. Look at the details  |

## Returns

`Promise`<`void`\>
