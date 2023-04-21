---
sidebar_position: 2
---

# `nope-js conf`

Generates a new configuration file which will used in run.

The Config Tool creates a configuration that contains the packages and services to be loaded. The file is saved as a JSON file and can be manipulated afterwards. 

The config file describes what a NoPE instance should execute inital and provide to other systems. To do this| the tool scans a folder and identifies all `*.package.js` files.  These are loaded by the tool and if present the NoPE packages are extracted.


## parameters

- `-h`: shows the help.
- `-d`: Folder which should be scaned for the `*.package.js` files.
- `-f`: The Output File. Defaults to `./config/config.json`
- `-i`: Switchtes the tool to an interactive mode, where the user is able to determine which items should be included in the config file. 

:::info info

If you want to manipulate your config-file without an editor use the `-i` option. The interactive tool will assist you to build your configuration!

:::


## output

The `cli` will find all defined `services` or `modules` exposed in a so called `NoPE-Package` (This has been created automatically during the initalization of the project). The tool will store its results in the following configuration (located at `./config/config.json`):

```json
{
    // Our toool fund the following functions:
    "functions": [
        {
            "path": "dist\\src\\HelloWorld.functions.js",
            "functions": []
        }
    ],

    // Additionally the tool found our `HelloWorld` Project as "module"
    "packages": [
        {
            "nameOfPackage": "HelloWorld",
            "defaultInstances": [],
            "autostart": {},
            "path": "dist\\src\\HelloWorld.package.js"
        }
    ]
}
```