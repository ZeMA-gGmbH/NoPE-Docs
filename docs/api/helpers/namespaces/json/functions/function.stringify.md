# Function: stringify()

Function to stringify an Object. This Function is able to stringify Functions as well. Use the Flag withFunctions

```ts
stringify(obj: any, withFunctions: boolean = false): string
```

## Parameters

| Parameter     | Type      | Default value | Description                                    |
| :------------ | :-------- | :------------ | :--------------------------------------------- |
| obj           | `any`     | undefined     | The Object.                                    |
| withFunctions | `boolean` | false         | Flag to Turn on / off the parsing of functions |

## Returns

`string`
