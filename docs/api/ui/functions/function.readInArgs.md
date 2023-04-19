# Function: readInArgs()

Helper Function to Read-In the Arguments used by the
cli-tool

```ts
readInArgs(additionalArguments: {defaultValue: any;
help: string;
name: string;
type: "string" | "number";}[] = [], forcedArgs: Partial<UploadArgs> = {}): Promise<UploadArgs>
```

## Parameters

| Parameter           | Type                                                                                                 | Default value |
| :------------------ | :--------------------------------------------------------------------------------------------------- | :------------ |
| additionalArguments | \{defaultValue: `any`;<br />help: `string`;<br />name: `string`;<br />type: "string" \| "number";}[] | []            |
| forcedArgs          | `Partial`<[`UploadArgs`](../interfaces/interface.UploadArgs.md)\>                                   | \{}           |

## Returns

`Promise`<[`UploadArgs`](../interfaces/interface.UploadArgs.md)\>
