# Function: flattenObject()

Flattens an Object to a Map.

For Instance:

     data = {a : { b : { c : 1, d: "hallo"}}}

     // Normal Call
     res = flatteObject(data)
     => res = {"a.b.c":1,"a.b.d":"hallo"}

     // With a Selected prefix 'additional.name'
     res = flatteObject(data,{prefix:'additional.name'})
     => res = {"additional.name.a.b.c":1,"additional.name.a.b.d":"hallo"}

## Export

```ts
flattenObject(data: any, options: object = {}): Map<string, any>
```

## Parameters

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| data      | `any`    | The Data that should be converted |
| options   | `object` | -                                 |

## Returns

`Map`<`string`, `any`\>

The flatten Object
