# Function: readInWriteUiFileArgs()

Helper to extract the Arguments for the `writeUiFile` function

## See

writeUiFile

## Author

M.Karkowski

## Export

```ts
readInWriteUiFileArgs(additionalArguments: {defaultValue: any;
help: string;
name: string;
type: "string" | "number";}[] = []): object
```

## Parameters

| Parameter           | Type                                                                                                 | Default value | Description                     |
| :------------------ | :--------------------------------------------------------------------------------------------------- | :------------ | :------------------------------ |
| additionalArguments | \{defaultValue: `any`;<br />help: `string`;<br />name: `string`;<br />type: "string" \| "number";}[] | []            | Arguments added by the nope.cli |

## Returns

`object`

The Arguments

```ts
dir: string;
```

```ts
filename: string;
```
