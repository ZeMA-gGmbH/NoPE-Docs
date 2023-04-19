# Interface: IPubSubEmitterOptions<AD\>

Only used interanlly.

## Type parameters

| Parameter                                                                                                    | Default                                                           |
| :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| AD _extends_ [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md) & \{pubSubUpdate: `boolean`;} | [`ITopicSetContentOptions`](interface.ITopicSetContentOptions.md) |

## Properties

### callback

```ts
optional callback: IEventCallback<unknown, AD>
```

For internal use only. A Callback to call if there is an update.

### observer

```ts
optional observer: INopeObserver
```

For internal use only.

### options

```ts
options: IEventOptions;
```

The options for a event.

### pubTopic

```ts
pubTopic: string | false;
```

The Topic to publish the content to. If set to `false` no update will be emitted.

### subTopic

```ts
subTopic: string | false;
```

The Topic, to subscribe to. If set to `false` no update will be received via the system.
