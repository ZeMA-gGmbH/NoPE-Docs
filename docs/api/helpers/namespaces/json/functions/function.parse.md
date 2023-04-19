# Function: parse()

Function to parse a JSON String. This Function is able to parse Functions as well. Use the Flag withFunctions

```ts
parse(json: string, withFunctions: boolean = false): any
```

## Parameters

| Parameter     | Type      | Default value | Description                                    |
| :------------ | :-------- | :------------ | :--------------------------------------------- |
| json          | `string`  | undefined     | A String containing the json Object            |
| withFunctions | `boolean` | false         | Flag to Turn on / off the parsing of functions |

## Returns

`any`
