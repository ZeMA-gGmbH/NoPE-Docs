# Function: listPackages()

List the available Packages

## Export

```ts
listPackages(dir?: string = "./modules"): Promise<{package: IPackageDescription<any>;
path: string;}[]>
```

## Parameters

| Parameter | Type     | Default value |
| :-------- | :------- | :------------ |
| dir?      | `string` | "./modules"   |

## Returns

`Promise`<\{package: [`IPackageDescription`](../../types/namespaces/nope/interfaces/interface.IPackageDescription.md)<`any`\>;
path: `string`;}[]\>
