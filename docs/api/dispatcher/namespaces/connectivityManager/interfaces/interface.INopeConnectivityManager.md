# Interface: INopeConnectivityManager

A `connectivityManager` observes the connection to various dispatchers. This element displays all found dispatchers
in the network (if there are no others only itself) in the `dispatchers` property. It manages the status (`dead`,
`slow`, `warn`, `alive`) of the other dispatchers.

The manager uses a `bridge` [ICommunicationBridge](../../../../types/namespaces/nope/interfaces/interface.ICommunicationBridge.md) to search for new dispatchers. When a link layer connection
is established via the bridge, a so-called `bonjour` message is sent. With this message all `dispatchers` in a network
register themselves. If such a message is sent, all other dispatchers report their current status. Thus all dispatchers
are known to each other.

The `connectivityManager` checks their status time-based. To do this, all ConnectivityManagers`send each other a`live`message (a`heartbeat`) defined time interval. This can be used to monitor when a dispatcher last checked in. If this
exceeds a certain time interval, that dispatcher is first classified as 'slow' and then as 'dead'. If the dispatcher
does not check in after a defined time interval, it is removed.

The described changes can be observed using the `dispatchers` property.

In addition, the `connectivityManager` allows synchronization of timestamps with other systems (usually other dispatchers).
This is useful when different systems store sensor data, for example. The timestamp is calculated with a delay, which can
be determined during pings.

- You can get a sync timestamp using the `now` property.

The `connectivityManager` provides properties that simplify the collection of some information:

- `getStatus` to get the status of a particular dispatcher.
- `getAllHosts`: to get all hosts on the network. (It is possible that several nope runtimes are running on the same host)
- `upTime`: since when the Connectivity Manager is running.

Sometimes it is useful to define a `master` in the network with nope runtime, (e.g. time synchronization). For this
the flag `master` can be set to `true` or `false`. This sets the master mode of the `connectivityManager` manually. If
it is set to `null`, the master is determined automatically and the `connectivityManager` could be a master. The selection
of the master is based on the operation time and the connection time.

> For better understanding please read the `13-ConnectivityManager` Jupyter notebook in the `wiki`-section! \*

## Properties

### connectedSince

```ts
readonly connectedSince: number
```

Timestamp of the connection since it has been established.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

### dispatchers

```ts
dispatchers: IMapBasedMergeData<string, INopeStatusInfo, string, string>;
```

Mapping for the External Dispatchers.
You can use the Event, onChange, to
get the latest changes. Use the "data"
field, to subscribe for the latest data.

- `OriginalKey` = Dispatcher ID`
- `OriginalValue` = `INopeStatusInfo`
- `ExtractedKey` = Dispatcher ID
- `ExtractedValue` = Dispatcher ID

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

### id

```ts
readonly id: string
```

The utilized ID, which will be used
for the Status Messages etc.

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

### info

```ts
readonly info: INopeStatusInfo
```

The current info of this connectivity-manager.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

### isMaster

```ts
isMaster: boolean;
```

Flag, showing, that we

#### Author

M.Karkowski

#### Memberof

INopeDispatcher

### master

```ts
readonly master: INopeStatusInfo
```

Returns the Status of the Master.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

### now

```ts
readonly now: number
```

Returns the current timestamp.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

### options

```ts
options: INopeINopeConnectivityOptions;
```

Options of the StatusManager.

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

### ready

```ts
ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>;
```

Flag, to show, that the System is ready

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

### upTime

```ts
readonly upTime: number
```

The time since the systeme is connected.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

## Methods

### dispose()

Disposes the StatusManager and thereby,

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

```ts
dispose(quiet?: boolean): Promise<void>
```

#### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| quiet?    | `boolean` |

#### Returns

`Promise`<`void`\>

### emitBonjour()

Emitts a Bonjour Message.

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

```ts
emitBonjour(): Promise<void>
```

#### Returns

`Promise`<`void`\>

### getAllHosts()

Returns all connected Hosts.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

```ts
getAllHosts(): string[]
```

#### Returns

`string`[]

{string[]}

### getStatus()

Returns the Status of an other Manager.

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

```ts
getStatus(id: string): INopeStatusInfo
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| id        | `string` |

#### Returns

[`INopeStatusInfo`](../../../../types/namespaces/nope/interfaces/interface.INopeStatusInfo.md)

{INopeStatusInfo}

### reset()

Resets the System

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

```ts
reset(): void
```

#### Returns

`void`

### setTimings()

Adapts the Timing Options and resets the internally used
Timers etc.

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

```ts
setTimings(options: Partial<INopeINopeConnectivityTimeOptions>): void
```

#### Parameters

| Parameter | Type                                                                                                         |
| :-------- | :----------------------------------------------------------------------------------------------------------- |
| options   | `Partial`<[`INopeINopeConnectivityTimeOptions`](../types/type-alias.INopeINopeConnectivityTimeOptions.md)\> |

#### Returns

`void`

### syncTime()

Helper function, which will synchronize the Timestamp.
Timestamp must be provided in UTC (https://www.timeanddate.de/stadt/info/zeitzone/utc)

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

```ts
syncTime(timestamp: number, delay?: number): void
```

#### Parameters

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| timestamp | `number` | The UTC-Timestamp                                 |
| delay?    | `number` | The Delay, since the Timestamp has been generated |

#### Returns

`void`

### toDescription()

Function to describe the System.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
dispatchers: string[]
```
