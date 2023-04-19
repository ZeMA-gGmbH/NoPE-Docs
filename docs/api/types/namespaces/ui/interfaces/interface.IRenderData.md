# Interface: IRenderData

Helper for the provided data:

## Properties

### dispatcher

```ts
dispatcher: INopeDispatcher;
```

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

### libraries

```ts
libraries: TLibraries;
```

### logger

```ts
logger: ILogger;
```

### session

```ts
session: IUiDefinition;
```

Contains the information about the session.
