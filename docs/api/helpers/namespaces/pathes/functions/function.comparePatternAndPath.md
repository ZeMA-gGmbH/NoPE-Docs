# Function: comparePatternAndPath()

Matches the given path, with the pattern and determines, if the path might affect
the given pattern.

## Example

```ts
path = "a/b/c"; pattern = "a/#"; => totalPath = "a/b/c"; diffPath = "b/c"
```

## Author

M.Karkowski

## Export

```ts
comparePatternAndPath(
  pathPattern: string,
  contentPath: string,
  options: object = ...): TPathCompareResult
```

## Parameters

| Parameter   | Type     | Description              |
| :---------- | :------- | :----------------------- |
| pathPattern | `string` | The pattern to test      |
| contentPath | `string` | The path to use as basis |
| options     | `object` | -                        |

## Returns

[`TPathCompareResult`](../interfaces/interface.TPathCompareResult.md)
