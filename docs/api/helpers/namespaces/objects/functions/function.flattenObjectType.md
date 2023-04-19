# Function: flattenObjectType()

Exports the used Types of an Object. The result is the
a Map, where the key represents the path and the value
represents the type of the element (stored in the path)

## Author

M.Karkowski

## Export

```ts
flattenObjectType(data: any, options?: object = {}): Map<string, string>
```

## Parameters

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| data      | `any`    | The Data to check |
| options?  | `object` |                   |

## Returns

`Map`<`string`, `string`\>

`key` = `path`; `value` = `type of element` as string;
