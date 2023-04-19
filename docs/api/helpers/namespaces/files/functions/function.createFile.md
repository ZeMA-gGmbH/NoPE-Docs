# Function: createFile()

Function to create a File

```ts
createFile(
  fileName: string,
  content: string,
  options?: ObjectEncodingOptions & {flag: string | number;
mode: string | number;} | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"): Promise<string>
```

## Parameters

| Parameter | Type                                                                                                                                                                                                     | Description                                                                                                                                       |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileName  | `string`                                                                                                                                                                                                 | Read the File.                                                                                                                                    |
| content   | `string`                                                                                                                                                                                                 | content which should be stored                                                                                                                    |
| options?  | `ObjectEncodingOptions` & \{flag: `string` \| `number`;<br />mode: `string` \| `number`;} \| "ascii" \| "utf8" \| "utf-8" \| "utf16le" \| "ucs2" \| "ucs-2" \| "base64" \| "latin1" \| "binary" \| "hex" | The options to write the file. See original docu: https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback |

## Returns

`Promise`<`string`\>
