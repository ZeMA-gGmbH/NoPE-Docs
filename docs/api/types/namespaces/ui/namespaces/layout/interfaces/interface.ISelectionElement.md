# Interface: ISelectionElement<T\>

The Element, which is rendered in the Selection

(The ID is required by the W2UI)

## Type parameters

| Parameter |
| :-------- |
| T         |

## Properties

### icon

```ts
optional icon: string
```

The Icon to use

#### Inherited from

[ISelectionTemplate](interface.ISelectionTemplate.md).[icon](interface.ISelectionTemplate.md#icon)

### id

```ts
id: number;
```

### keywords

```ts
keywords: string[]
```

A List of Keywords, which are used to Find the corresponding Elements

#### Inherited from

[ISelectionTemplate](interface.ISelectionTemplate.md).[keywords](interface.ISelectionTemplate.md#keywords)

### template

```ts
template: T;
```

The Element containing the Template of a Node

#### Inherited from

[ISelectionTemplate](interface.ISelectionTemplate.md).[template](interface.ISelectionTemplate.md#template)

### text

```ts
text: string;
```

The Label / Text of the Group, if it is rendered in the Sidebar

#### Inherited from

[ISelectionTemplate](interface.ISelectionTemplate.md).[text](interface.ISelectionTemplate.md#text)
