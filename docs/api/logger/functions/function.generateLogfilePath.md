# Function: generateLogfilePath()

Generates a Log-File Path based on the given name with the following format:
/logs/{name}\_{date}.log

## Export

## Backend

**Only in Nodejs available**

```ts
generateLogfilePath(name: string): string
```

## Parameters

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| name      | `string` | Name of the File. |

## Returns

`string`
