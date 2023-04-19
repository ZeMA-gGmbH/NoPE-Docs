# Function: useLogFile()

Function to use a log file instead of the console log.

## Author

M.Karkowski

## Export

## Backend

**Only in Nodejs available**

```ts
useLogFile(pathToFile?: string = DEFAULT_FILE, bufferSize?: number = 100): Function
```

## Parameters

| Parameter   | Type     | Default value | Description                                                       |
| :---------- | :------- | :------------ | :---------------------------------------------------------------- |
| pathToFile? | `string` | DEFAULT_FILE  | Path to the logfile                                               |
| bufferSize? | `number` | 100           | Default Buffer-Size. If > 0 we will write the log with buffering. |

## Returns

`Function`

```ts
(): Promise<void>
```

### Returns

`Promise`<`void`\>
