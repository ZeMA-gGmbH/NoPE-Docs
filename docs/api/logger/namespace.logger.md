# Namespace: logger

## Author

Martin Karkowski

## Email

m.karkowski@zema.de

This module contains the basics of for logging content.

For a logger please use the following methods.

- [defineNopeLogger](functions/function.defineNopeLogger.md) -> Helper to define Logger, based on given parameters or prevent to create that logger.
- [getCentralNopeLogger](functions/function.getCentralNopeLogger.md) -> The main Logger (singleton)
- [getNopeLogger](functions/function.getNopeLogger.md) -> A logger with a given name. Child of the `centralLogger`

To change the logging behavior use the one of the following funtions:

- [enabledFor](functions/function.enabledFor.md),
- [enableFor](functions/function.enableFor.md),
- [shouldLog](functions/function.shouldLog.md),

You can convert the logger to an eventEmitter using the function [getLogerAsEventEmitter](functions/function.getLogerAsEventEmitter.md)

In the backend (`nodejs`) you can use the [useLogFile](functions/function.useLogFile.md) method to log the content to a file.

---

# Using a Logger:

1. Lets create our logger:

```javascript
// First lets install nope using npm
const nope = require("nope-js-node");

// Create our Observable:
const logger = nope.getNopeLogger("demo");
```

Now, that our logger has been created, we are able to log our first messages:

```javascript
logger.trace("hello from 'trace' level");
logger.debug("hello from 'debug' level");
logger.info("hello from 'info' level");
logger.warn("hello from 'warn' level");
logger.error("hello from 'error' level");
```

> ```
>    2023-03-28T15:50:49.827Z - DEBUG - demo : hello from 'debug' level
>    2023-03-28T15:50:49.827Z - INFO  - demo : hello from 'info' level
>
>
>    2023-03-28T15:50:49.827Z - WARN  - demo : hello from 'warn' level
>    2023-03-28T15:50:49.827Z - ERROR - demo : hello from 'error' level
> ```

To change the logging level use the property level:

```javascript
logger.setLevel(nope.WARN);
```

```javascript
logger.trace("hello from 'trace' level");
logger.debug("hello from 'debug' level");
logger.info("hello from 'info' level");
logger.warn("hello from 'warn' level");
logger.error("hello from 'error' level");
```

> ```
>    2023-03-28T15:52:36.027Z - WARN  - demo : hello from 'warn' level
>    2023-03-28T15:52:36.027Z - ERROR - demo : hello from 'error' level
> ```

As you can see you are able to change the log level.

## Index

### Classes

- [LoggerAsEventEmitter](classes/class.LoggerAsEventEmitter.md)

### Interfaces

- [ILogger](interfaces/interface.ILogger.md)

### Type Aliases

- [LoggerLevel](types/type-alias.LoggerLevel.md)
- [TCallback](types/type-alias.TCallback.md)
- [TCallbackWithLevel](types/type-alias.TCallbackWithLevel.md)
- [ValidLoggerDefinition](types/type-alias.ValidLoggerDefinition.md)

### Variables

- [DEBUG](variables/variable.DEBUG.md)
- [ERROR](variables/variable.ERROR.md)
- [INFO](variables/variable.INFO.md)
- [LEVELS](variables/variable.LEVELS.md)
- [LoggerLevels](variables/variable.LoggerLevels.md)
- [TRACE](variables/variable.TRACE.md)
- [WARN](variables/variable.WARN.md)

### Functions

- [defineNopeLogger](functions/function.defineNopeLogger.md)
- [enableFor](functions/function.enableFor.md)
- [enabledFor](functions/function.enabledFor.md)
- [generateLogfilePath](functions/function.generateLogfilePath.md)
- [getCentralNopeLogger](functions/function.getCentralNopeLogger.md)
- [getLogerAsEventEmitter](functions/function.getLogerAsEventEmitter.md)
- [getNopeLogger](functions/function.getNopeLogger.md)
- [setGlobalLoggerLevel](functions/function.setGlobalLoggerLevel.md)
- [shouldLog](functions/function.shouldLog.md)
- [useEventLogger](functions/function.useEventLogger.md)
- [useLogFile](functions/function.useLogFile.md)
