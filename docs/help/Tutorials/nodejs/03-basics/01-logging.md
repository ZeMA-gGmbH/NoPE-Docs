---
sidebar_position: 1
---


# 1. Logging

It may becomes hard to debug applications running in a distributed manner. Make shure you use alot of debugging!

## The Basics in distributed systems

`NoPE` provides a Basic logging concept for this purpose. Lets figure it out by a Handson Example.

## Example using the `console`

1. Lets create our logger:


```javascript
// First lets install nope using npm
const nope = require("nope-js-node");

// Create our Observable:
const logger = nope.getNopeLogger("demo");
```

Now, that our logger has been created, we are able to log our first messages:


```javascript
logger.trace("hello from 'trace' level")
logger.debug("hello from 'debug' level")
logger.info("hello from 'info' level")
logger.warn("hello from 'warn' level")
logger.error("hello from 'error' level")
```

    2023-03-28T15:50:49.827Z - DEBUG- demo : hello from 'debug' level
    2023-03-28T15:50:49.827Z - INFO - demo : hello from 'info' level
    

    2023-03-28T15:50:49.827Z - WARN - demo : hello from 'warn' level
    2023-03-28T15:50:49.827Z - ERROR- demo : hello from 'error' level
    

To change the logging level use the property level:


```javascript
logger.setLevel(nope.WARN);
```


```javascript
logger.trace("hello from 'trace' level")
logger.debug("hello from 'debug' level")
logger.info("hello from 'info' level")
logger.warn("hello from 'warn' level")
logger.error("hello from 'error' level")
```

    2023-03-28T15:52:36.027Z- WARN - demo: hello from 'warn' level
    2023-03-28T15:52:36.027Z- ERROR- demo: hello from 'error' level
    

As you can see you are able to change the available output.

## Logging to a `file`

to log content to a file please use the function ``

## converting the loggers to an `eventemitter`

to log content to a file please use the function ``