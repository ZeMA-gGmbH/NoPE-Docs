# Function: getCentralDecoratedContainer()

Return the central loger. This logger is a singleton (see [getSingleton](../../helpers/namespaces/singletons/functions/function.getSingleton.md))

## Author

M.Karkowski

## Export

```ts
getCentralDecoratedContainer(): object
```

## Returns

`object`

A Returns the Logger NopeLogger

```ts
classes: Map<string, INopeModule>;
```

```ts
services: Map<
  string,
  {
    callback: (...args: any) => Promise<any>;
    options: IexportAsNopeServiceParameters;
    uri: string;
  }
>;
```
