---
sidebar_position: 6
---

# 6. Event-Distributor

The NoPE-Dispatcher uses one `eventDistributor`. The `EventDistributor` essentially represents a `PubSubSystem`. It distributes events over the network (or internally). The `eventDistributor` is essentially a `PubSubSystem` and can be used to listen for specific events. 

The `PubSubSystem` keeps a so called root object (essentially any data object). Data can be `subscribed` or `published` by means of so-called topics. The topics follow the `mqtt` patterns. While MQTT only allows subscriptions with so-called **single-level wildcards** and **multi-level wildcards**, the `PubSubSystem` can also use them to publish data / changes.

## PubSubSystem
The system consists of `Publishers` and `Subscribers`, which are connected by `Topics` (based on `strings`).
- To add new `Publishers` or `Subscribers` use the function: `register` and specify the required options.
- To add new `subscribers` you can use the function: `registerSubscription` which will get a subject and a `callback`.
- After adding `publishers` or `subscribers` you can change the behavior with `updateOptions`.
- To remove `publishers` or `subscribers` use `unregister`.
- to `emit` data use `emit`.
- internally, when a subscriber / publisher is added, its options are changed or it is removed, the pub subsystem updates an appropriate structure. In case you want to do this manually, run
- to check which `publishers` and `subscribers` exist, and check the appropriate properties.
- You can subscribe to incremental changes using the eventEmitter.
- When the pub subsystem is no longer needed, `dispose` the system!
- Incremental data changes are published to `onIncrementalDataChange`. This is an `EventEmitter` that contains the incremental data change. This is triggered when a publisher changes its data. The emitter contains only the last sent data and the topic.

A publisher can be an `observabes` or an `eventEmitters`. 

In order to distribute the events to the different `EventDistributors` in `NoPE`, they are linked by `Bridge` and forward the all changes (see `onIncrementalDataChange`).

## An Event

A event is not persisent. Once it is fired the `event-listeners` will be informed. There is ***no*** historic access to events. If you subscribed after the Event has been fired, you wont get

## Interact with the EventDistributor:

Firstly we have to create a Dispatcher, that we are using to access the `eventDistributor`


```typescript
// First lets install nope using npm
import * as nope from "nope-js-node";

// Create a communicator:
// We will use the event layer (which just runs internally)
const communicator = nope.getLayer("event");

// Lets create our dispatcher

// 1. Dispatcher simulates our local system
const localDispatcher = nope.dispatcher.getDispatcher({
  communicator,
  id: "local"
}, {
  singleton: false,
  useBaseServices: false
});

// Lets wait for our element to be ready.
await localDispatcher.ready.waitFor();
```

### Topics in a PubSubSystem

The Distributor uses Wildcards. 
- `+` is a so-called **single-level wildcard** and 
- `#` is a so-called **multi-level wildcard**. 

While a **single-level wildcard** can be used on all levels of a topic, a **multi-level wildcard** can only be used at the end (otherwise this is a syntax-error).

The symbol `/` is used as **level separator**. This is always the same within Nope.

In the example, the following JSON object is published on `''` (an empty topic):

```json
{
    "foo1": ["bar1", "baz2"],
    "foo2": ["bar2", "baz2"],
}
```

Then the following Topic strings can be `subscribed` to get the associated values:

```json
""         -> // the entire object
"foo1"     -> // ["bar1", "baz1"]
"foo1/0"   -> // "bar1"
"+/0"      -> // ["bar1", "bar2"]
"+/+"      -> // ["bar1", "bar2", "baz1", "baz2"]
"#",       -> // [{"foo1": ["bar1", "baz2"]}, {"foo2": ["bar2", "baz2"]}, "bar1", "bar2", "baz1", "baz2"
```

Lets test that in our example: 


```typescript
// We firstly create our subscriptions:

let observers = [];

const toSubscribe = [
    "",
    "foo1",
    "foo1/0",
    "foo2",
    "foo2/0",
    "+/0",      // Singlelevel wildcards
    "+/+",      // Singlelevel wildcards
    "#"         // multilevel wildcard
]

// A function to add some extra space in a string:
function renderTopic(s, _size){
    s = "'" + s + "'";
    while (s.length < _size) {
        s = " " + s;
    }
    return s;
}

// Now subscribe the topics of toSubscribe
for (const [idx,topic] of toSubscribe.entries()){
    observers.push(
        localDispatcher.eventDistributor.registerSubscription(topic, (data, rest) => {
            console.log(idx," - "+renderTopic(topic,8)+" received " + JSON.stringify(data))
        })
    );
}
```


After we have defined the elements to subscribe the content, we now are able to publish some content and identify, which observer gets informed:


```typescript
localDispatcher.eventDistributor.emit("",{
    "foo1": ["bar1", "baz2"],
    "foo2": ["bar2", "baz2"],
});
```

This results in:

    0  -       '' received {"foo1":["bar1","baz2"],"foo2":["bar2","baz2"]}
    1  -   'foo1' received ["bar1","baz2"]
    2  - 'foo1/0' received "bar1"
    3  -   'foo2' received ["bar2","baz2"]
    4  - 'foo2/0' received "bar2"
    5  -    '+/0' received [{"path":"foo1/0","data":"bar1"},{"path":"foo2/0","data":"bar2"}]
    6  -    '+/+' received [{"path":"foo1/0","data":"bar1"},{"path":"foo1/1","data":"baz2"},{"path":"foo2/0","data":"bar2"},{"path":"foo2/1","data":"baz2"}]
    7  -      '#' received [{"path":"foo1","data":["bar1","baz2"]},{"path":"foo1/0","data":"bar1"},{"path":"foo1/1","data":"baz2"},{"path":"foo2","data":["bar2","baz2"]},{"path":"foo2/0","data":"bar2"},{"path":"foo2/1","data":"baz2"}]
    

As you can see using this structure, all subscriptions get informed.

Not let's change the emitting event to `'foo1'` and adapt the data to see which observer receives the info:


```typescript
localDispatcher.eventDistributor.emit("foo1",[1,2,3,4,5]);
```

This results in:

    0  -       '' received {"foo1":[1,2,3,4,5],"foo2":["bar2","baz2"]}
    1  -   'foo1' received [1,2,3,4,5]
    7  -      '#' received [1,2,3,4,5]
    2  - 'foo1/0' received 1
    5  -    '+/0' received [{"path":"foo1/0","data":1}]
    6  -    '+/+' received [{"path":"foo1/0","data":1},{"path":"foo1/1","data":2},{"path":"foo1/2","data":3},{"path":"foo1/3","data":4},{"path":"foo1/4","data":5}]
    

```typescript
localDispatcher.eventDistributor.emit("foo1/0","test");
```

This results in:

    0  -       '' received {"foo1":["test",2,3,4,5],"foo2":["bar2","baz2"]}
    1  -   'foo1' received ["test",2,3,4,5]
    2  - 'foo1/0' received "test"
    5  -    '+/0' received "test"
    6  -    '+/+' received "test"
    7  -      '#' received "test"
    

Now we will send an event that is not subscribed. This should only inform : 
- `''`
- `#`


```typescript
localDispatcher.eventDistributor.emit("eventName","eventData");
```

Results in:

    0  -       '' received {"foo1":["test",2,3,4,5],"foo2":["bar2","baz2"],"eventName":"eventData"}
    7  -      '#' received "eventData"
    

### Connectes Pub-Sub-Systems

We will add an additional dispatcher, to show how multiple eventDistributors work together. This additional dispatcher is created manually but simulates an extra runtime on a different computing node.


```typescript
// 2. Dispatcher simulates our remote system
const remoteDispatcher = nope.dispatcher.getDispatcher({
  communicator,
  id: "remote"
}, {
  singleton: false,
  useBaseServices: false
});

```

Now we wait for our dispatcher to be ready.


```typescript
// Lets wait for our element to be ready.
await remoteDispatcher.ready.waitFor();
```

Now we want to use our `eventDistributor` to emit Events instead of the local one. Therefore we will create different subscriptions:


```typescript
remoteDispatcher.eventDistributor.emit("test/event", {hello: "World"});

```

    0  -       '' received {"foo1":["test",2,3,4,5],"foo2":["bar2","baz2"],"eventName":"eventData","test":{"event":{"hello":"World"}}}
    6  -    '+/+' received {"hello":"World"}
    7  -      '#' received {"hello":"World"}
    

### Using EventEmitter instead of callbacks

Instead of using the functions `emit` and `registerSubscription` we can use the method `register`, to register `EventEmitter` directly. This mechanism is used for modules, containing eventEmitters. 

Let's show this in an example:


```typescript
// Create a Publisher and Subscriber
let emitter_01 = new nope.NopeEventEmitter();
let emitter_02 = new nope.NopeEventEmitter();

// Now we create some extra Subscriptions for these emitters:
emitter_01.subscribe((data) => {
    console.log("Subscription on emitter_01 received =",data)
});
emitter_02.subscribe((data) => {
    console.log("Subscription on emitter_02 received =",data)
});

// Now we register them at the dispatchers:

remoteDispatcher.eventDistributor.register(emitter_01, {
   // we could receive and emit events:
   mode: ["publish", "subscribe"],
   topic: "this/is/an/example", 
});

localDispatcher.eventDistributor.register(emitter_02, {    
   // we could receive and emit events:
   mode: ["subscribe"],
   topic: "this/is/an/example", 
});

// We now want to see the subscribed events:
const subscribers = localDispatcher.eventDistributor.subscriptions.data.getContent();
const publishers = localDispatcher.eventDistributor.publishers.data.getContent();

console.log("subscribers = ",subscribers);
console.log("publishers = ",publishers)
```

    subscribers =  [
      '',
      'foo1',
      'foo1/0',
      'foo2',
      'foo2/0',
      '+/0',
      '+/+',
      '#',
      'this/is/an/example'
    ]

    publishers =  [ false ]

As we expected, we are getting all subscribers, including the ones from above.
Currently only 1 fix publisher is known. Using the method `emit` wont create
an emitter.    

By utilizing the same topics (here `'this/is/an/example'`) those elements are linked.
Additionally, we defined, that the system is capable of publish and subscribe on the 
same topics. this enables the emitters to emit and receive events from external elements.

We now exchange some events.


```typescript
// For better readability we remove our old subscriptions:

for (const obs of observers){
    obs.unsubscribe();
}

observers = [];

emitter_01.emit("shared")
```

Emitting the Event results in calling both subscribers:

    Subscription on emitter_01 received = shared
    Subscription on emitter_02 received = shared


This works for more complex data as well. 
Bescause our emitter_02 only is capable to receive data (see above, the mode was set to `subscribe`) events wont be send to other dispatchers.


```typescript
emitter_02.emit({complex:"data"})
```

    Subscription on emitter_02 received = { complex: 'data' }
    

Only the subscription of emitter_02 received the data change. This same holds for the mode `publish`. Thoses emitters wont receive external signals.

