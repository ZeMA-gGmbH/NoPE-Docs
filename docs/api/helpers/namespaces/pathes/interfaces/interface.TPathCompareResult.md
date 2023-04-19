# Interface: TPathCompareResult

## Properties

### affected

```ts
affected: boolean;
```

Shows that there might be matcht. Just the combination of
affectedByChild | affectedOnSameLevel | affectedByChild

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### affectedByChild

```ts
affectedByChild: boolean;
```

True if the pattern is shorter / equals the pattern and matches.
This means, the path changes a child attribue of the data requested
by the path.

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### affectedByParent

```ts
affectedByParent: boolean;
```

Generally set to true if the pattern is longer then the
path, but they still match in the beginning. This means,
the parent might change the data requested with this pattern

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### affectedOnSameLevel

```ts
affectedOnSameLevel: boolean;
```

Generally set to true if the size pf the pattern matches then the
path. This means the data requested with this pattern if directly
changed by the path.

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### containsWildcards

```ts
containsWildcards: boolean;
```

Flag, indicating whether the pattern contains a pattern or is just
a regular path.

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### pathToExtractData

```ts
pathToExtractData: string | false;
```

The Path to access the data. If a pattern is required to extract the
data, this property is set to false and the property "patternToExtractData"
is filled with the pattern.

The PathToExtractData is allways false, if the path is smaller then the
pattern

#### Example

```ts
path = "a/b/c"; pattern = "a/#"; => pathToExtractData = "a/b/c"
```

#### Example

```ts
path = "a"; pattern = "a/b/#"; => pathToExtractData = false
```

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### patternLengthComparedToPathLength

```ts
patternLengthComparedToPathLength: ">" | "=" | "<";
```

A Flag showing, that the pattern contains more segments than

#### Author

M.Karkowski

#### Memberof

TPathCompareResult

### patternToExtractData

```ts
patternToExtractData: string | false;
```

The Pattern to access the data. If no pattern is required to extract the
data, this property is set to false and the property "pathToExtractData"
is filled with the defined path. If the path is longer than the pattern,
than we need to extract the data.

#### Example

```ts
path = "a/b/c"; pattern = "a/#"; => patternToExtractData = "a/#"
```

#### Example

```ts
path = "a"; pattern = "a/b/#"; => patternToExtractData = "a/b/#"
```

#### Example

```ts
path = "a"; pattern = "a"; => patternToExtractData = false
```

#### Example

```ts
path = "a/b"; pattern = "a"; => patternToExtractData = false
```

#### Author

M.Karkowski
