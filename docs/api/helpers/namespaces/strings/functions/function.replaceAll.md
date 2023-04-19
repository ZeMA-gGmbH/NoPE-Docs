# Function: replaceAll()

Replaces all Chars in a String

```ts
replaceAll(
  str: string,
  value: string | (string | [string, string])[],
  replacement: string = null): string
```

## Parameters

| Parameter   | Type                                             | Default value | Description                                                                       |
| :---------- | :----------------------------------------------- | :------------ | :-------------------------------------------------------------------------------- |
| str         | `string`                                         | undefined     | base string                                                                       |
| value       | `string` \| (`string` \| [`string`, `string`])[] | undefined     | the value which should be replaced, Or an array containing the value and replacer |
| replacement | `string`                                         | null          | the value which is used as replacement                                            |

## Returns

`string`
