# Interface: INopePromise<T, E\>

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | -       |
| E         | `any`   |

## Properties

### [toStringTag]

```ts
readonly [toStringTag]: string
```

#### Inherited from

Promise.[toStringTag]

### taskId

```ts
taskId: string;
```

## Methods

### cancel()

```ts
cancel(reason: E): void
```

#### Parameters

| Parameter | Type |
| :-------- | :--- |
| reason    | `E`  |

#### Returns

`void`

### catch()

Attaches a callback for only the rejection of the Promise.

```ts
catch<TResult>(onrejected?: Function): Promise<T | TResult>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| TResult   | `never` |

#### Parameters

| Parameter   | Type                                                         | Description                                           |
| :---------- | :----------------------------------------------------------- | :---------------------------------------------------- |
| onrejected? | (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

### finally()

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

```ts
finally(onfinally?: Function): Promise<T>
```

#### Parameters

| Parameter  | Type         | Description                                                                  |
| :--------- | :----------- | :--------------------------------------------------------------------------- |
| onfinally? | () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

### then()

Attaches callbacks for the resolution and/or rejection of the Promise.

```ts
then<TResult1, TResult2>(onfulfilled?: Function, onrejected?: Function): Promise<TResult1 | TResult2>
```

#### Type parameters

| Parameter | Default |
| :-------- | :------ |
| TResult1  | `T`     |
| TResult2  | `never` |

#### Parameters

| Parameter    | Type                                                           | Description                                           |
| :----------- | :------------------------------------------------------------- | :---------------------------------------------------- |
| onfulfilled? | (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\>    | The callback to execute when the Promise is resolved. |
| onrejected?  | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then
