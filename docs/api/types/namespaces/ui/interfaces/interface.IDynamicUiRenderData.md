# Interface: IDynamicUiRenderData<D\>

Helper for the provided data:

## Type parameters

| Parameter                                                                                             | Default                                                                                   |
| :---------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| D _extends_ [`IMinProvidedDataSet`](../namespaces/layout/interfaces/interface.IMinProvidedDataSet.md) | [`IMinProvidedDataSet`](../namespaces/layout/interfaces/interface.IMinProvidedDataSet.md) |

## Properties

### currentUi

```ts
currentUi: IBasicLayoutComponent<IMinProvidedDataSet & IDynamicUiRenderData<D>>;
```

### dispatcher

```ts
dispatcher: INopeDispatcher;
```

#### Inherited from

[IRenderData](interface.IRenderData.md).[dispatcher](interface.IRenderData.md#dispatcher)

### helpers

```ts
helpers: object;
```

#### Type declaration

> ```ts
> connection: object;
> ```
>
> ##### Type declaration - connection
>
> > ```ts
> > readonly hostname: string
> > ```
> >
> > Hostname used in the browser.
> >
> > ###### Author
> >
> > M.Karkowski
> >
> > ```ts
> > readonly layers: TSession & {connected: boolean;}[]
> > ```
> >
> > Returns the available layers.
> >
> > ###### Author
> >
> > M.Karkowski
> >
> > ###### Memberof
> >
> > NoPEService
> >
> > ```ts
> > readonly noExternalConnectionRequired: boolean
> > ```
> >
> > Flag, to define, whether a external connection is required to
> > set the INoPEConnectService.sessionsConnected to true.
> >
> > ###### Memberof
> >
> > INoPEConnectService
> >
> > ```ts
> > readonly sessionsConnected: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
> > ```
> >
> > Flag showing whether the Service is connected to a backend or not
> >
> > ```ts
> > addCommunicationLayer;
> > ```
> >
> > ```ts
> > connect;
> > ```
> >
> > ```ts
> > removeCommunicationLayer;
> > ```
>
> ```ts
> data: object;
> ```
>
> ##### Type declaration - data
>
> > ```ts
> > getData;
> > ```
> >
> > ```ts
> > hasData;
> > ```
> >
> > ```ts
> > registerSchema;
> > ```
> >
> > ```ts
> > setData;
> > ```
> >
> > ```ts
> > store;
> > ```
>
> ```ts
> file: object;
> ```
>
> ##### Type declaration - file
>
> > ```ts
> > download: Function;
> > ```
> >
> > ###### Type declaration - download
> >
> > Downloads some content as file.
> >
> > ```ts
> > (
> > content: string,
> > fileName?: string,
> > option?: object): void
> > ```
> >
> > ####### Parameters
> >
> > | Parameter | Type     |
> > | :-------- | :------- |
> > | content   | `string` |
> > | fileName? | `string` |
> > | option?   | `object` |
> >
> > ####### Returns
> >
> > `void`
> >
> > ```ts
> > upload: Function;
> > ```
> >
> > ###### Type declaration - upload
> >
> > Helper to upload data to the browser. (Opens a Popup)
> >
> > > The data is only available in the Browser.
> >
> > ```ts
> > (options: object): void
> > ```
> >
> > ####### Parameters
> >
> > | Parameter | Type     |
> > | :-------- | :------- |
> > | options   | `object` |
> >
> > ####### Returns
> >
> > `void`
>
> ```ts
> layout: object;
> ```
>
> ##### Type declaration - layout
>
> > ```ts
> > toolbar: object;
> > ```
> >
> > ###### Type declaration - toolbar
> >
> > > ```ts
> > > generateRadioMenuEntry;
> > > ```
> > >
> > > ```ts
> > > generateSelectMenuEntry;
> > > ```
> >
> > ```ts
> > createLayout;
> > ```
>
> ```ts
> logging: object;
> ```
>
> ##### Type declaration - logging
>
> > ```ts
> > log;
> > ```
> >
> > ```ts
> > toast;
> > ```
>
> ```ts
> ui: object;
> ```
>
> ##### Type declaration - ui
>
> > ```ts
> > readonly fullscreen: INopeObservable<boolean, boolean, boolean, IEventAdditionalData>
> > ```
> >
> > Contains a Flag to toggle the ui into fullscreen or not.
> >
> > ```ts
> > closeFullscreen;
> > ```
> >
> > ```ts
> > getTheme;
> > ```
> >
> > ```ts
> > openFullscreen;
> > ```
>
> ```ts
> url: object;
> ```
>
> ##### Type declaration - url
>
> > ```ts
> > generateLinkWithQueryParams;
> > ```
> >
> > ```ts
> > getObjectFromQuery;
> > ```
> >
> > ```ts
> > getObjectFromQueryWithSchema;
> > ```

#### Inherited from

[IRenderData](interface.IRenderData.md).[helpers](interface.IRenderData.md#helpers)

### libraries

```ts
libraries: TLibraries;
```

#### Inherited from

[IRenderData](interface.IRenderData.md).[libraries](interface.IRenderData.md#libraries)

### logger

```ts
logger: ILogger;
```

#### Inherited from

[IRenderData](interface.IRenderData.md).[logger](interface.IRenderData.md#logger)

### session

```ts
session: IUiDefinition;
```

Contains the information about the session.

#### Inherited from

[IRenderData](interface.IRenderData.md).[session](interface.IRenderData.md#session)
