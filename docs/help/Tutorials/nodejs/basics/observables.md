---
sidebar_position: 3
---

# Observables

Observables implent the default `Observer` Pattern. Checkout [wikipedia](https://en.wikipedia.org/wiki/Observer_pattern) for a short overview of the pattern. 

Our Implementation enhances the `EventEmitters`

## Usage of `nope.observables`

To work with `observables` we have to import these:

```typescript
import * as nope from "nope-js-node";
```

Afterward we are able to create our first Observable.

```typescript
// Create our Observable:
const obs = new nope.observables.NopeObservable<number>()
```

### `setContent`: Change the content of the Observable.

To change the content of an observable use the method `setContent`.


```typescript
// Set the content to "1337"
obs.setContent(5);

// Print the content (see getContent)
console.log("current value =",obs.getContent());
```
This will print:

    current value = 5
    

#### `setter`: Define a specific setter for the observable.

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
obs.setter = (value, options) => {
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

// Set the content to "1337" ==> But our setter will prevent using this value because it isnt valid.
obs.setContent(1337);

// Print the content (see getContent) ==> we expect to get "5"
console.log("current value =", obs.getContent());
```

This will print:

    setter received 1337 {}
    data is valid: false
    current value = 5
    

Now we can reset the setter by assigning `null`. This disables the setter again:

```typescript
obs.setter = null

// Set the content to "1337" we do not have any setter ==> we will use this parameter
obs.setContent(1337);

// Print the content (see getContent) ==> we expect to get "1337"
console.log("current value =", obs.getContent());
```

This will print:

    current value = 1337
    

To remove such a getter just set the getter property to `null`.

### `getContent`: Get the current content of the Observable.
To extract the content of our observable, we are able to use the function `getContent`


```typescript
let content = obs.getContent();
console.log("current value =", content)
```

This will print:

    current value = 1337
    

If no data is assigned, this will result in `undefined`. Otherwise the current data is returned.

#### `getter`: Define a specific getter for the observable.

You can specify a specifc getter for the observable for instance, to allways return a `string`


```typescript
// Define a getter
obs.getter = (value) => "Allways this result";
console.log("current value (with getter) =", obs.getContent());
```

This will print:

    current value (with getter) = Allways this result
    

To remove such a getter just set the getter property to `null`. 

The Original value is not changed ==> we expect to get "1337"


```typescript
// Reset the getter.
obs.getter = null;
console.log("current value (after removing the getter) =", obs.getContent());
```

This will print:

    current value (after removing the getter) = 1337
    

# Subscriptions

You can use an observable to get informed about changes:

1. define a `callback`, which receives both, the value and the options.
2. `subscribe` the observable.

During subscribing you can use the following options for subscribing:

| key | type | content |
| - | - | - |
| `skipCurrent` | `bool` | A Flag, which will call the callback if set to true the first time after a change. Defaults to False |

Lets determine the behavior using an example code:

```typescript
function onChange(value, options){
    console.log("options.skipCurrent = False. Value is now:", value)
}
    
function onChangeSkip(value, options){
    console.log("options.skipCurrent = True. Value is now:", value);
}

const observer_01 = obs.subscribe(onChange)
const observer_02 = obs.subscribe(onChangeSkip, {"skipCurrent": true})

obs.setContent("new-value")
obs.setContent("new-value-2")
```

This code results in:

    options.skipCurrent = False. Value is now: 1337
    options.skipCurrent = False. Value is now: new-value
    options.skipCurrent = True. Value is now: new-value
    options.skipCurrent = False. Value is now: new-value-2
    options.skipCurrent = True. Value is now: new-value-2


