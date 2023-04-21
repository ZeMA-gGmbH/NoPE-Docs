---
sidebar_position: 3
---

# `nope-js run`

Start a NoPE-Backend. The `run` command will start an `NoPE` Runtime. This tool is used to spool up an entire environment, using the provided configuration (defaultly located at `./config/config.json`).

:::danger Before you start

`nope-js run` starts a runtime environment. If you connected hardware using `NoPE`, keep in mind, that autostart function will be executed. This may lead to moving systems, power etc.

> Before you start make shure you are able to start the system.

:::

If you are using `io-sockets` as communication layer, please provide:
- a server (`nope-js run -c io-server`); it wont host anything. it will only act as server.
- Afterwards you are able to use multiple io-clients `io-client`

## parameters

| *shortcut* | full parameter | description | 
| --- | --- | --- |
| ``-h`` | `--help` | shows the help  |
| `-f FILE`| `--file FILE` |  File containing containing the configuration. <br/><br/>Defaults to `./config/config.json` |
| `-c CHANNEL` | `--channel CHANNEL` | The Communication Channel, which should be used. Possible Values are: `"event"`, `"io-server"`, `"io-client"`, `"mqtt"`. Defaults to `"event"`. If you want to connect different Runtimes please use `"io-client"` or `"mqtt"` |
| `-p CHANNELPARAMS` | `--channelParams CHANNELPARAMS` | Paramas for the Channel, to connect to. The Following Defaults are used: `{ "amqp": "localhost", "io-server": 7000, "io-client": "http://localhost:7000", "mqtt": "mqtt://localhost:1883" }`. <br/><br/>If you want to enhance the default parameters please provide them as valid json-list. <br/><br/>Example: `nope-js run -c io-client -p ["http"://google.de:7000"]` |
| `-s` | `--skip-loading-config` | Flag to prevent loading the elements defined in the configuration. | 
|  | `--default-selector DEFAULTSELECTOR` | The default-strategy to select the service providers during callbacks (this will only be the case if there are multiple providers). Possible Values are: `"master"`, `"first"`, `"dispatcher"`, `"host"`, `"free-ram"`, `"cpu-usage"`. Defaultly the strategy `first` is used. | 
|  | `--force-selector`| Forces to use the Selector. Otherwise a smart approach is used| which only enables them if required.|
|  | `--id ID ` | Define a custom id to the Dispatcher, otherwise a generic id is generated. |
| `-l LOG` | `--log LOG` | Specify the Logger Level. Defaults to "info". Valid values are: `error`, `warn`, `info`, `debug`, `trace` |
|  | `--log-to-file` | Log will be stored in a logfile |
|  | `--dispatcher-log DISPATCHERLOGLEVEL`| Specify the Logger Level of the Dispatcher. Defaults to "info". Valid values are: `error`, `warn`, `info`, `debug`, `trace` |
|  | `--communication-log COMMUNICATIONLOGLEVEL`| Specify the Logger Level of the Communication. Defaults to "info". Valid values are: `error`, `warn`, `info`, `debug`, `trace` | 
|  | `--prevent-varified-names`| Enables Random names for variables etc. including number as start. No additional check is performed or so.
| `-d DELAY` | `--delay DELAY` | Adds an delay, which will be waited, after the system connected. Parmeter is provided in [s]. Defaults to ``2`` [s]
|  | `--profile` | Flag to enable Profiling (CPU Profiling. )|
|  | `--noBaseServices`| Flag to prevent using the base Services to be loaded |

## output

Based on the settings (`--log-to-file`) an additional loggin file is created.

![](/img/run-js.png)