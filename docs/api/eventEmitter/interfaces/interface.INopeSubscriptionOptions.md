# Interface: INopeSubscriptionOptions

## Properties

### mode

```ts
optional mode: ("sub" | "super" | "direct")[]
```

If the Emitter is connected to the pubsubsystem (see nope.pubSub)
message can be shared in different ways:

1. A Change may be emitted by a parent emitter (e.g. `topic/of/emitter`; event emitted on `topic`) `->` use the mode `super`
2. A Change may be emitted by an emitter on the same topic (e.g. `topic/of/emitter`; event emitted on `topic/of/emitter`) `->` use the mode `direct`
3. A Change may be emitted by a child emitter (e.g. `topic/of/emitter`; event emitted on `topic/of/emitter/subtopic`) `->` use the mode `sub`

Defaultly on all type of changes the wait method will be react.

### skipCurrent

```ts
optional skipCurrent: boolean
```

Skips the current value during an subscription. This is relevant for
nope.types.INopeObservable. `Subscriptions` on [INopeEventEmitter](interface.INopeEventEmitter.md)
will only get informed on an updates. Events are not persitent.

### type

```ts
optional type: "immediate" | "sync"
```

The Style, how the callback should be called.
use `"immediate"` to prevent cycles.

Normaly this options is selected by the system.
