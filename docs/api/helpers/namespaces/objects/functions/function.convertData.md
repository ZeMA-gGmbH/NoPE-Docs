# Function: convertData()

Helper to query data from an object.

props is defined as followed:

```typescript
props: {
  key: string;
  query: string;
}
[];
```

## Example

Example 1:

```javascript
const data = { deep: { nested: "test" } };
const result = convert_data(data, [
  {
    key: "result",
    query: "deep/nested",
  },
]);

// ==> result = [{"result": "test"}]
```

## Example

Example 2:

```javascript
data = {
  array: [
    {
      data1: 0,
      data2: "a",
    },
    {
      data1: 1,
      data2: "a",
    },
  ],
  not: { nested: "hello" },
};

let result = convert_data(data, [
  {
    key: "a",
    query: "array/+/data1",
  },
  {
    key: "b",
    query: "array/+/data2",
  },
]);

// ==> result = [{"a": 0, "b": "a"}, {"a": 1, "b": "a"}]
```

```ts
convertData<T>(data: any, props: {key: string;
query: string;}[]): T[]
```

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type                                      | Description |
| :-------- | :---------------------------------------- | :---------- |
| data      | `any`                                     | The data    |
| props     | \{key: `string`;<br />query: `string`;}[] | -           |

## Returns

`T`[]

Returns an array
