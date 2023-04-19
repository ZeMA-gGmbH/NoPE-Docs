# Interface: INopeStatusInfo

## Properties

### connectedSince

```ts
connectedSince: number;
```

The Amount of Time, the system is up.

#### Author

M.Karkowski

#### Memberof

INopeStatusInfo

### env

```ts
env: string;
```

The Environment, in which the Dispatcher is running
In nodejs it should be "nodejs".

#### Author

M.Karkowski

#### Memberof

IDispatcherInfo

### host

```ts
host: IHost;
```

Some Information about the Host.

#### Author

M.Karkowski

#### Memberof

IDispatcherInfo

### id

```ts
id: string;
```

Id of the Dispatcher

#### Author

M.Karkowski

#### Memberof

IDispatcherInfo

### isMaster

```ts
isMaster: boolean;
```

Status, whether the system is regarded as master or not.

#### Author

M.Karkowski

#### Memberof

INopeStatusInfo

### isMasterForced

```ts
isMasterForced: boolean;
```

Status, whether master-status is forced or not.

#### Author

M.Karkowski

#### Memberof

INopeStatusInfo

### pid

```ts
pid: string | number;
```

Process ID of the Dispatcher.

### plugins

```ts
plugins: string[]
```

Field containing the Plugins

### status

```ts
status: ENopeDispatcherStatus;
```

The Status of the Dispatcher

#### Author

M.Karkowski

#### Memberof

IDispatcherInfo

### timestamp

```ts
timestamp: number;
```

Timestamp of the Message

#### Author

M.Karkowski

#### Memberof

IDispatcherInfo

### version

```ts
version: string;
```

Displays the current Version of the Implementation. This is espacially relevant
for the protocol

#### Author

M.Karkowski

#### Memberof

IDispatcherInfo
