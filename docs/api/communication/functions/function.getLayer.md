# Function: getLayer()

Function, that will create a Bridge, based on the provided function.
Based on the parameter "layer", a corresponding layer or mirror will
be added to the bridge. You can provide custom parameters using the
parameter "parameter". This will receive either the uri or ports.
Additionally you are able to assign a log-level to the bridge.

## Export

```ts
getLayer(
  layer: validLayerOrMirror,
  parameter?: string | number = null,
  logger?: ValidLoggerDefinition = false): ICommunicationBridge
```

## Parameters

| Parameter  | Type                                                                              | Default value | Description                                             |
| :--------- | :-------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------ |
| layer      | `validLayerOrMirror`                                                              | undefined     | the layer to add                                        |
| parameter? | `string` \| `number`                                                              | null          | the parameter required for the additonal layer / mirror |
| logger?    | [`ValidLoggerDefinition`](../../logger/types/type-alias.ValidLoggerDefinition.md) | false         | the level of the debugger                               |

## Returns

[`ICommunicationBridge`](../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md)

A bridge
