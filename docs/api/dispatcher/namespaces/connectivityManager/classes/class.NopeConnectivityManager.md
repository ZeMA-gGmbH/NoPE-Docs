# Class: NopeConnectivityManager

A Modul to manage the status of other statusmanagers.
Dispatcher should have a status manager, to ensure, the
system is online etc. Its a base implemetation of the
[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md). Please checkout the interface
for more details or the corresponding jupyter notebook.

## Author

M.Karkowski

## Export

## Implements

## Implements

- [`INopeConnectivityManager`](../interfaces/interface.INopeConnectivityManager.md)

## Constructors

### constructor()

Creates an instance of NopeConnectivityManager.

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
new NopeConnectivityManager(
  options: INopeINopeConnectivityOptions,
  _generateObservable: Function,
  id?: string = null): NopeConnectivityManager
```

#### Parameters

| Parameter            | Type                                                                                                                                                                                                              | Default value | Description                              |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :--------------------------------------- |
| options              | [`INopeINopeConnectivityOptions`](../types/type-alias.INopeINopeConnectivityOptions.md)                                                                                                                           | undefined     | The Options, used by the Manager.        |
| \_generateObservable | <T\>() => [`INopeObservable`](../../../../observables/interfaces/interface.INopeObservable.md)<`T`, `T`, `T`, [`IEventAdditionalData`](../../../../eventEmitter/interfaces/interface.IEventAdditionalData.md)\> | undefined     | A Helper, to generate Observables.       |
| id?                  | `string`                                                                                                                                                                                                          | null          | specific id. Otherwise a ID is generated |

#### Returns

[`NopeConnectivityManager`](class.NopeConnectivityManager.md)

## Properties

### dispatchers

```ts
readonly dispatchers: IMapBasedMergeData<string, INopeStatusInfo, string, string>
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

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[dispatchers](../interfaces/interface.INopeConnectivityManager.md#dispatchers)

### id

```ts
readonly id: string  = null
```

specific id. Otherwise a ID is generated

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[id](../interfaces/interface.INopeConnectivityManager.md#id)

### options

```ts
options: INopeINopeConnectivityOptions;
```

The Options, used by the Manager.

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[options](../interfaces/interface.INopeConnectivityManager.md#options)

### ready

```ts
readonly ready: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
```

Flag, to show, that the System is ready

#### Author

M.Karkowski

#### Memberof

INopeStatusManager

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[ready](../interfaces/interface.INopeConnectivityManager.md#ready)

## Accessors

### connectedSince

```ts
get connectedSince(): number
```

Timestamp of the connection since it has been established.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[connectedSince](../interfaces/interface.INopeConnectivityManager.md#connectedsince)

### info

```ts
get info(): INopeStatusInfo
```

The current info of this connectivity-manager.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[info](../interfaces/interface.INopeConnectivityManager.md#info)

### isMaster

```ts
get isMaster(): boolean
```

Flag, showing, that we

#### Author

M.Karkowski

#### Memberof

INopeDispatcher

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[isMaster](../interfaces/interface.INopeConnectivityManager.md#ismaster)

### master

```ts
get master(): INopeStatusInfo
```

Returns the Status of the Master.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[master](../interfaces/interface.INopeConnectivityManager.md#master)

### now

```ts
get now(): number
```

Returns the current timestamp.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[now](../interfaces/interface.INopeConnectivityManager.md#now)

### upTime

```ts
get upTime(): number
```

The time since the systeme is connected.

#### Author

M.Karkowski

#### Memberof

INopeConnectivityManager

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[upTime](../interfaces/interface.INopeConnectivityManager.md#uptime)

## Methods

### dispose()

Will dispose the Dispatcher. Must be called on exit for a clean exit. Otherwise it is defined as dirty exits

```ts
dispose(quiet: boolean = false): Promise<void>
```

#### Parameters

| Parameter | Type      | Default value |
| :-------- | :-------- | :------------ |
| quiet     | `boolean` | false         |

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[dispose](../interfaces/interface.INopeConnectivityManager.md#dispose)

### emitBonjour()

see [emitBonjour](../interfaces/interface.INopeConnectivityManager.md#emitbonjour)

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
emitBonjour(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[emitBonjour](../interfaces/interface.INopeConnectivityManager.md#emitbonjour)

### getAllHosts()

see [getAllHosts](../interfaces/interface.INopeConnectivityManager.md#getallhosts)

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
getAllHosts(): string[]
```

#### Returns

`string`[]

{string[]}

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[getAllHosts](../interfaces/interface.INopeConnectivityManager.md#getallhosts)

### getStatus()

see [getStatus](../interfaces/interface.INopeConnectivityManager.md#getstatus)

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
getStatus(id: string): INopeStatusInfo
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| id        | `string` |

#### Returns

[`INopeStatusInfo`](../../../../types/namespaces/nope/interfaces/interface.INopeStatusInfo.md)

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[getStatus](../interfaces/interface.INopeConnectivityManager.md#getstatus)

### reset()

see [reset](../interfaces/interface.INopeConnectivityManager.md#reset)

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
reset(): void
```

#### Returns

`void`

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[reset](../interfaces/interface.INopeConnectivityManager.md#reset)

### setTimings()

see [setTimings](../interfaces/interface.INopeConnectivityManager.md#settimings)

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
setTimings(options: Partial<INopeINopeConnectivityTimeOptions>): void
```

#### Parameters

| Parameter | Type                                                                                                         |
| :-------- | :----------------------------------------------------------------------------------------------------------- |
| options   | `Partial`<[`INopeINopeConnectivityTimeOptions`](../types/type-alias.INopeINopeConnectivityTimeOptions.md)\> |

#### Returns

`void`

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[setTimings](../interfaces/interface.INopeConnectivityManager.md#settimings)

### syncTime()

see [syncTime](../interfaces/interface.INopeConnectivityManager.md#synctime)

#### Author

M.Karkowski

#### Memberof

NopeConnectivityManager

```ts
syncTime(timestamp: number, delay?: number = 0): void
```

#### Parameters

| Parameter | Type     | Default value |
| :-------- | :------- | :------------ |
| timestamp | `number` | undefined     |
| delay?    | `number` | 0             |

#### Returns

`void`

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[syncTime](../interfaces/interface.INopeConnectivityManager.md#synctime)

### toDescription()

Describes the Data.

```ts
toDescription(): object
```

#### Returns

`object`

```ts
dispatchers: string[]
```

#### Implementation of

[INopeConnectivityManager](../interfaces/interface.INopeConnectivityManager.md).[toDescription](../interfaces/interface.INopeConnectivityManager.md#todescription)
