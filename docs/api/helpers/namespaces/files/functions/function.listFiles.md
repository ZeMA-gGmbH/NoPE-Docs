# Function: listFiles()

Returns a List of File-Names.

## Export

```ts
listFiles(_dir_path: string, type?: string = ""): Promise<string[]>
```

## Parameters

| Parameter  | Type     | Default value | Description                                        |
| :--------- | :------- | :------------ | :------------------------------------------------- |
| \_dir_path | `string` | undefined     | Path where the system should look                  |
| type?      | `string` | ""            | specified ending of the File. For Instance '.conf' |

## Returns

`Promise`<`string`[]\>

List containing all Files
