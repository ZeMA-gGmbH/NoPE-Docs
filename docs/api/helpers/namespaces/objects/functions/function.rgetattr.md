# Function: rgetattr()

Function to recurvely get an Attribute of the Object.

## Export

## Example

```ts
data = [{a:1},{a:2}]; rgetattr(data, "0/a") -> 0; rgetattr(data,"hallo", "default") -> "default"
```

```ts
rgetattr<T>(
  _data: any,
  _path: string,
  _default?: any = _sentinel,
  _SPLITCHAR?: string = SPLITCHAR): T | null
```

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | `any`   |

## Parameters

| Parameter    | Type     | Default value | Description                                 |
| :----------- | :------- | :------------ | :------------------------------------------ |
| \_data       | `any`    | undefined     | Data, where the item should be received     |
| \_path       | `string` | undefined     | The path to extract                         |
| \_default?   | `any`    | \_sentinel    | Default Object, if nothing else is provided |
| \_SPLITCHAR? | `string` | SPLITCHAR     | -                                           |

## Returns

`T` \| `null`

The extracted data.
