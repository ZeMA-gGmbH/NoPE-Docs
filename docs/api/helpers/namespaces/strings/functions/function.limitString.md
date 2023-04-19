# Function: limitString()

Helper to limit the string to a specific length. the rest is reduced by the limitChars

## Author

M.Karkowski

## Export

```ts
limitString(
  str: string,
  length: number,
  limitChars?: string = "..."): object
```

## Parameters

| Parameter   | Type     | Default value | Description                                        |
| :---------- | :------- | :------------ | :------------------------------------------------- |
| str         | `string` | undefined     | The string to work with                            |
| length      | `number` | undefined     | The max length including the limitChars            |
| limitChars? | `string` | "..."         | The chars which should be used to express limiting |

## Returns

`object`

{{
  isLimited: boolean,
  original: string,
  limited: string,
}}

```ts
isLimited: boolean;
```

```ts
limited: string;
```

```ts
original: string;
```
