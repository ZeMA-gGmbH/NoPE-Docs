---
sidebar_position: 2
---

# 2. EventEmitters

EventEmitters implent the default `Observer` (or `publish and subscribe`) Pattern. Checkout [wikipedia](https://en.wikipedia.org/wiki/Observer_pattern) for a short overview of the pattern. 

## Usage of `nope.eventemitters`

To work with `eventemitters` we have to import these:

```typescript
import * as nope from "nope-js-node";
```

Afterward we are able to create our first Event-Emitter.

```typescript
// Create our Event-Emitter:
const obs = new nope.eventemitters.NopeEventEmitter<number>()
```

## `emit`: Emit Events.

To em, use the method `emit`.


```typescript
// Set the content to "1337"
emitter.emit(5);

// There is no observer, of that event
// lets create one:
const observer = emitter.subscribe(event => console.log('emitted value =',event));
``` 

Because events are not persistent, our observer will be informed, 
the next time an event is emitted.

## `setter`: Define a specific setter for the observable.

You can specify a specifc getter for the observable for instance, to limit the number to the following constrains `> 0` and `< 10`.

---

The setter function will receive multiple parameters, as listed below:

1. `value`,
2. ``options`` containing:
    * `sender`: The Element, which changed the data
    * `timestamp`: The timestamp of the change
    * `args`: additional args. 

---

The setter function have to return a `dict` with the following keys:
| key | type | content |
| - | - | - |
| `valid` | `bool` | A Flag, to show whether the data are valid or not. If the data is invalid, the observable wont store them |
| `value` | `any` | The Data that has been adapted |

---

Below, we will implement an example to show the setter above.


```typescript
emitter.setter = (value, options) => {
  // Print, which data we received
  console.log("setter received", value, options);
  // Show the result of our comparison
  console.log("data is valid:", (value > 0) && (value < 10));
  return {
    // The Value
    value: value,
    // Valid
    valid: (value > 0) && (value < 10)
  }
}

// Emit "1337" ==> But our setter will prevent using this value because it isnt valid.
emitter.emit(1337);
```

This will print:

    setter received 1337 {}
    data is valid: false

> Because our setter defined the data as invalid, the observer wont receive information.    

Now we can reset the setter by assigning `null`. This disables the setter again:

```typescript
emitter.setter = null

// Emit "1337" we do not have any setter ==> we will use this parameter
emitter.emit(1337);

```

This will print:

    emitted value =1337
    
## `getter`: Define a specific getter for the observable.

You can specify a specifc getter for the emitter e.g., to allways return a `string`


```typescript
// Define a getter
emitter.getter = (value) => "Allways this result";

// Now lets emit something
emitter.emit(1234)
```

This will print:

    emitted value = Allways this result
    

To remove such a getter just set the getter property to `null`. This wont trigger the emitter.  

# Subscriptions

You can use an emitter to get informed about changes (we already did that to get an log message):

1. define a `callback`, which receives both, the value and the options.
2. `subscribe` the emitter.