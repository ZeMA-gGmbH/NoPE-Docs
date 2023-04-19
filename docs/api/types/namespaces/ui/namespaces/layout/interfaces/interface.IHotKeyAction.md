# Interface: IHotKeyAction<D\>

## Type parameters

| Parameter                                                             |
| :-------------------------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](interface.IMinProvidedDataSet.md) |

## Properties

### altKey

```ts
optional altKey: boolean
```

Optional ALT Key, which has to be pressed

#### Author

M.Karkowski

#### Memberof

IHotKeyAction

### ctrlKey

```ts
optional ctrlKey: boolean
```

Optional CTRL Key, which has to be pressed

#### Author

M.Karkowski

#### Memberof

IHotKeyAction

### keyCode

```ts
keyCode: string;
```

The Pressed Key. Please use a valid "KeyCode".

### onPress

```ts
onPress: ICallback<D>;
```

The corresponding Callback, which will handle the
Action if a Hotkey Press has been detected.

### onRelease

```ts
optional onRelease: ICallback<D>
```

The corresponding Callback, which will handle the
Action if a Hotkey Press has been detected.

### shiftKey

```ts
optional shiftKey: boolean
```

Optional SHIFT Key, which has to be pressed

#### Author

M.Karkowski

#### Memberof

IHotKeyAction
