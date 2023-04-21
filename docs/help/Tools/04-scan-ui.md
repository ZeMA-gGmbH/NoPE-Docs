---
sidebar_position: 5
---

# `nope-js scan-ui`

Generates a new ui-configuration file. This configuration can then be uploaded using the `nope-js upload-ui`.

The tool scans the files located at the directory (chang that folder with `-d ./your/folder`) and searches  `*.package.js` files. They may include some ui-defintions. These definitions are callbacks which can be parsed and loaded into an ui. The `scan-ui` performs the scanning and parsing process. 

## parameters

- `-h`: shows the help.
- `-d`: Folder which should be scaned for the `*.package.js` files.
- `-f`: The Output File. Defaults to `./config/config.json`
- `-i`: Switchtes the tool to an interactive mode, where the user is able to determine which items should be included in the config file. 