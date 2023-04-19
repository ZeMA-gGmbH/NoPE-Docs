# Function: getDispatcher()

Helper to get a Dispatcher.

```typescript
// Create a communication layer:
const communicator = getLayer("event");
// Now create the Dispatcher.
const dispatcher = getDispatcher({ communicator });
```

## Export

```ts
getDispatcher(dispatcherOptions: INopeDispatcherOptions, options?: TAdditionalOptions = {}): INopeDispatcher
```

## Parameters

| Parameter         | Type                                                                      | Description                                                                                                                                                                   |
| :---------------- | :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dispatcherOptions | [`INopeDispatcherOptions`](../types/type-alias.INopeDispatcherOptions.md) | The options, that will be used for the dispatcher.                                                                                                                            |
| options?          | `TAdditionalOptions`                                                      | Options. You can provide a different Dispatcher-Class; Controll the scope (Singleton or not.) and define wehter the Base-Services should be added etc. see TAdditionalOptions |

## Returns

[`INopeDispatcher`](../interfaces/interface.INopeDispatcher.md)

The dispatcher.
