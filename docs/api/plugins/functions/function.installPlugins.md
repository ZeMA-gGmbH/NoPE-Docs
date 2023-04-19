# Function: installPlugins()

Helper function to install Plugins.

```ts
installPlugins(
  lib: string | NodeModule,
  plugins: string | Plugin | (string | Plugin)[],
  log: boolean = true): void
```

## Parameters

| Parameter | Type                                             | Default value | Description                                                                                        |
| :-------- | :----------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------- |
| lib       | `string` \| `NodeModule`                         | undefined     | The Library to modify.                                                                             |
| plugins   | `string` \| `Plugin` \| (`string` \| `Plugin`)[] | undefined     | The Plugins install. This can be the registered names, pathes in the library or the plugin itself. |
| log       | `boolean`                                        | true          | Flag to control the log information.                                                               |

## Returns

`void`
