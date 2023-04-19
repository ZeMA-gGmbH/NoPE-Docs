# Class: ParallelPriorityTaskQueue

A Task-Queue. This could be used to make parallel
Request run sequentially. For Instance during
Saving and Reading Vars to achive a consistent set
of Data.

Usage:

```typescript
 // Create a Queue
 const _queue = new PriorityTaskQueue();
 // Create a Function
 const _func = (_input: string, _cb) => {
     console.log("Hallo ", _input)
     _cb(null, null);
 }

const promises = [
 _queue.execute(_func, ['Welt priority=0'],0),
 _queue.execute(_func, ['Welt priority=1'],1),
 _queue.execute(_func, ['Welt priority=2'],2) *
];

// => Hallo Welt priority=0 <- Startet directly.
// => Hallo Welt priority=2 <- Startet because it has the highest priority.
// => Hallo Welt priority=1
```

## Export

## Constructors

### constructor()

```ts
new ParallelPriorityTaskQueue(): ParallelPriorityTaskQueue
```

#### Returns

[`ParallelPriorityTaskQueue`](class.ParallelPriorityTaskQueue.md)

## Properties

### maxParallel

```ts
maxParallel: number = 1;
```

### usePriority

```ts
usePriority: boolean = true;
```

## Accessors

### length

```ts
get length(): number
```

## Methods

### execute()

Executes the given Task. If now Task is running it is executed immediatelly,
otherwise it is pushed in the queue and call if the other tasks are call.

#### Memberof

TaskQeue

```ts
execute<T>(
  func: Function,
  args: any[],
  priority: number = 0,
  cancel: Function = ...): NopePromise<T, any>
```

#### Type parameters

| Parameter |
| :-------- |
| T         |

#### Parameters

| Parameter | Type                                            | Default value |
| :-------- | :---------------------------------------------- | :------------ |
| func      | (...`args`: `any`[]) => `T` \| `Promise`<`T`\> | undefined     |
| args      | `any`[]                                         | undefined     |
| priority  | `number`                                        | 0             |
| cancel    | () => `void`                                    | undefined     |

#### Returns

[`NopePromise`](../../../../promises/classes/class.NopePromise.md)<`T`, `any`\>
