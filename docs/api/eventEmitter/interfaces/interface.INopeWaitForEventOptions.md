# Interface: INopeWaitForEventOptions

Declaration of the Options used in the `waitFor` (see [waitFor](interface.INopeEventEmitter.md#waitfor)) method of
an [INopeEventEmitter](interface.INopeEventEmitter.md) or an nope.types.INopeObservable

## Properties

### subscriptionMode

```ts
optional subscriptionMode: "immediate" | "sync"
```

The Style, how the callback should be called.
use `"immediate"` to prevent cycles.

Normaly this options is selected by the system.

### timeout

```ts
optional timeout: number
```

Timeout in _ms_ after the waifFor fails with an `Timeout` Error.

### triggerMode

```ts
optional triggerMode: ("sub" | "super" | "direct")[]
```

If the Emitter is connected to the pubsubsystem (see nope.pubSub)
message can be shared in different ways:

1. A Change may be emitted by a parent emitter (e.g. `topic/of/emitter`; event emitted on `topic`) `->` use the mode `super`
2. A Change may be emitted by an emitter on the same topic (e.g. `topic/of/emitter`; event emitted on `topic/of/emitter`) `->` use the mode `direct`
3. A Change may be emitted by a child emitter (e.g. `topic/of/emitter`; event emitted on `topic/of/emitter/subtopic`) `->` use the mode `sub`

Defaultly on all type of changes the wait method will be react.
