# Function: rsetattr()

Function to Set recursely a Attribute of an Object

## Author

M.Karkowski

## Export

```ts
rsetattr(
  _data: any,
  _path: string,
  _value: any,
  _SPLITCHAR?: string = SPLITCHAR): void
```

## Parameters

| Parameter    | Type     | Default value | Description                                                                                                  |
| :----------- | :------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| \_data       | `any`    | undefined     | The Object, where the data should be stored                                                                  |
| \_path       | `string` | undefined     | The Path of the Attribute. All are seprated by a the splitchar. (Defaults to'.' => For Instance 'a/b/0/a/c') |
| \_value      | `any`    | undefined     | The Value which should be Stored in the Attribute.                                                           |
| \_SPLITCHAR? | `string` | SPLITCHAR     | The Splitchar to use. Defaults to "/"                                                                        |

## Returns

`void`
