# Function: deletePath()

Deletes the complete Path recursevly.

> _WARNING: _ Deletes Everything in the Folder.

Example:
`deletePath('C:\\Test');`

This deletes all Files and Subfolders in the given Path.
Furthermore the Folder Test itself is removed.

## Export

```ts
deletePath(dir_path: string): Promise<void>
```

## Parameters

| Parameter | Type     |
| :-------- | :------- |
| dir_path  | `string` |

## Returns

`Promise`<`void`\>
