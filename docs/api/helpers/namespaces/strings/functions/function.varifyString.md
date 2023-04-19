# Function: varifyString()

Helper Function to varify the given string.
Removes every char which doesn't match a variable name.
(a-z, A-Z, 0-9).

If `str` starts with an invalid char, (like a number),
an underscore is added.

```ts
varifyString(str: string): string
```

## Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| str       | `string` | the Stirng  |

## Returns

`string`

the adapted name
