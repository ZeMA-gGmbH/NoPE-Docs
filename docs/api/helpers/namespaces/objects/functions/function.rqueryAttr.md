# Function: rqueryAttr()

Helper to query data from an object.

## Example

```ts
data = [{a:1},{a:2}]; rqueryAttr(data, "+/a") -> [{path: "0/a", data: 0},{path: "1/a", data: 1}]
```

```ts
rqueryAttr<T>(data: any, query: string): {data: T;
path: string;}[]
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| data      | `any`    | The data          |
| query     | `string` | The query to use. |

## Returns

\{data: `T`;
path: `string`;}[]

Returns an array
