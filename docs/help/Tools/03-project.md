---
sidebar_position: 4
---

# `nope-js project`

A Helper to create a new Project or add new items to an existing project.

:::danger Overwrite Files

`nope-js project` doesn't pre check, whether folder etc. exists. It may overwrites files. 

:::

## parameters

- `create`: creates new Projects.
    - The tool will create a new folder based on the project name. 
    - The folder contains a default structure for a project    

- `edit`: Helper to enhance your project and add `services` or `modules`. It only works in projects created with `nope-js project`

:::info Dialogs guide you

`nope-js project` uses interactive dialogs to guide you throught the process.

:::

## output

By using `nope-js project` the following features are added to the project folder:
- Debugging of the application using VS code (launch-file)
- Creation of a doc file (see doc/make)
- Helpers to build a browser related version
- Defined Project Structure (using interfaces etc.)
- Use of a changelog
- Deployment as a package
- Simple extension using project-tool