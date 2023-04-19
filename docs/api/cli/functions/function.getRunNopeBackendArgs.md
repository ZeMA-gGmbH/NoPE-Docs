# Function: getRunNopeBackendArgs()

Helper Function to Read-In the Arguments used by the
cli-tool `run`

## Export

## Async

```ts
getRunNopeBackendArgs(
  additionalArguments: {defaultValue: any;
help: string;
name: string;
type: "string" | "number";}[] = [],
  forcedArgs?: Partial<RunArgs> = {},
  parser?: ArgumentParser = null): Promise<RunArgs>
```

## Parameters

| Parameter           | Type                                                                                                 | Default value | Description                                                 |
| :------------------ | :--------------------------------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------- |
| additionalArguments | \{defaultValue: `any`;<br />help: `string`;<br />name: `string`;<br />type: "string" \| "number";}[] | []            | arguments for the `ArgumentParser`                          |
| forcedArgs?         | `Partial`<`RunArgs`\>                                                                               | \{}           | The settings to run the args.                               |
| parser?             | `ArgumentParser`                                                                                     | null          | An additional `ArgumentParser`. If not provided its created |

## Returns

`Promise`<`RunArgs`\>
