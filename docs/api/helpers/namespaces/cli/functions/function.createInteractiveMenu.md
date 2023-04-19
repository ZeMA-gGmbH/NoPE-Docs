# Function: createInteractiveMenu()

Helper to create an interactive menu using Inquirer.
Therefore definition of the menu is required. Once,
a choice is selected -> the provided callback is called.

Normally, in the menu, a 'back' item is added to go back
to the upper menu. Additionally the user gets an 'exit'
option to leave the app.

```ts
createInteractiveMenu(menu: TMenuDefinition, options: object = {}): Promise<void>
```

## Parameters

| Parameter | Type                                                        | Description                                            |
| :-------- | :---------------------------------------------------------- | :----------------------------------------------------- |
| menu      | [`TMenuDefinition`](../types/type-alias.TMenuDefinition.md) | The menu which should be rendered                      |
| options   | `object`                                                    | Options to control the behavior of the exit-entry etc. |

## Returns

`Promise`<`void`\>
