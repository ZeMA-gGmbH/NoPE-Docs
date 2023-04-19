# Function: generateId()

Generates an ID.

# Example:

```javascript
// Default behavior:
generateId() // ==> 'b655f9d5-d581-411e-84b8-a6dbe1fd6cd6' will be allways different

// Using a prestring:
generateId({
 prestring: "test"
}) // ==> 'testb655f9d5-d581-411e-84b8-a6dbe1fd6cd6' will be allways different

// Using a useAsVar:
generateId({
 prestring: "test"
 useAsVar: true
}) // ==> 'testb655f9d5_d581_411e_84b8_a6dbe1fd6cd6' will be allways different
```

## Author

M.Karkowski

```ts
generateId(options: object = {}): string
```

## Parameters

| Parameter | Type     |
| :-------- | :------- |
| options   | `object` |

## Returns

`string`
