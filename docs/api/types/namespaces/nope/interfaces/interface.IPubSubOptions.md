# Interface: IPubSubOptions

Options to define the behavior of a [IPubSubSystem](interface.IPubSubSystem.md)

The **Default** settings are.

```typescript
{
  mqttPatternBasedSubscriptions: true,
  forwardChildData: true,
  forwardParentData: true,
  matchTopicsWithoutWildcards: true,
}
```

## Properties

### forwardChildData

```ts
optional forwardChildData: boolean
```

Flag to enable propagation of child data.
Defaults to true. This will forward data changes, if
a subscriber is listening to `'a/b'` and data on `'a/b/c'` is
changed. The subscriber will receive an object like { ... , c: ... }

If set to false, these changes arent forwarded.

#### Author

M.Karkowski

#### Memberof

TPubSubOptions

### forwardParentData

```ts
optional forwardParentData: boolean
```

Flag to enable the propagation of parent
changed data. Defaults to true. This will forward data changes, if
a subscriber is listening to `'a/b/c'` and data on `'a/b'` is
changed. The subscriber will get the property `c` of the published object
on `'a/b'` (if it exists, otherwise it will receive null)

If set to false, these changes arent forwarded.

#### Author

M.Karkowski

#### Memberof

TPubSubOptions

### matchTopicsWithoutWildcards

```ts
optional matchTopicsWithoutWildcards: boolean
```

If enabled, the topics match without wildcards. (must be enabled for
the defined behavior in `forwardChildData` and `forwardParentData`)

#### Author

M.Karkowski

#### Memberof

TPubSubOptions

### mqttPatternBasedSubscriptions

```ts
optional mqttPatternBasedSubscriptions: boolean
```

If set to true, subscriptions with patterns will be handled
like on mqtt. Otherwise, we will distribute the content more
or lesss like on pattern less topic. ('#' and '+' in a topic
will cause an exception)

#### Author

M.Karkowski

#### Memberof

TPubSubOptions
