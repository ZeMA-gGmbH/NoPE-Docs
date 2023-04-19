# Interface: ICustomRender

## Properties

### create

```ts
create: Function;
```

#### Type declaration

```ts
(div: HTMLElement): Promise<void>
```

##### Parameters

| Parameter | Type          |
| :-------- | :------------ |
| div       | `HTMLElement` |

##### Returns

`Promise`<`void`\>

### destroy

```ts
destroy: Function;
```

#### Type declaration

```ts
(): Promise<void>
```

##### Returns

`Promise`<`void`\>

### type

```ts
type: "custom";
```
