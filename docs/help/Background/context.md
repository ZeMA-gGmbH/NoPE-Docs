---
sidebar_position: 3
---

# The context of `NoPE`


> The context delimitation delimits the system from all communication partners (neighboring systems and user roles). It thus defines the external interfaces and also shows the responsibility (scope) of the system: What responsibility does the system bear and what responsibility do the neighboring systems assume?

In order to answer this question, the following example should be explained:


![Network](/img/background/context.png)

A **robot** shall be controlled by a **smart-button**. The goal is to have the robot move to a defined position when the smart button is pressed. In the context of the approach of the Msys group, corresponding reusable modules are to be created for the individual components "robot" and "smart button".

In this context, the **context** can be represented as follows:
- The user implements the specific `code` to control the robot. He can do this in `python` or `javascript`. He implements a special interface to communicate with the robot controller (e.g. TCP-IP based, specified by the manufacturer).
- The user implements a wrapper for the smart button.
- `NoPE` supports the user by providing various base classes and functionalities (communication, distribution, event messaging, etc.).
    - To do this, the user must call various methods so that `NoPE` can provide the appropriate `properties`, `event emitters` or `services` to other systems.
- `NoPE` does not implement the special logic required to control the real robot.
- `NoPE` does not provide any special containers, virtual machines, network connections or hardware in this context.

This is illustrated in the figure below

## Business context:
- `NoPE` only provides implementation support (especially regarding connectivity and distribution).
- The logic of the above mentioned use case for both the wrappers and the central control logic is implemented by (possibly different) users in an object-oriented approach.


## Technical context

`NoPE` is used to ensure the connectivity of the individual subcomponents. A standardized communication layer is used for this purpose. This enables the necessary technical communication (e.g. RPC calls, event forwarding, data propagation) between the modules. The following figure illustrates this connection in a simplified way. 

From a technical point of view, the following context delimitation can be made:
- `NoPE` provides a concept for configuration: 

    > A standardized *configuration file* (as `JSON`) is created. This can be customized in an IDE

- NoPE` provides a concept for communication and message trading.
    - The following message formats are defined:
        - Infos about the runtime (e.g. provided data, events, services, instances and class structures).
        - Information about services (parameters and their types, functionality as textual description, return values).
        - Info about instances (methods, attributes and event emitters)
        - Messages to perform data changes, remote procedure calls, status messages (see Infos)
        - ...
    - If communication layers are used that require a `broker` (e.g. `MQTT`) they are **not** provided by `NoPE`.
- NoPE provides the following console based tools:
    - dyanmsic interaction with the runtime environment,
    - creating a runtime environment (`run`)
    - creating configuration files (`scan`)
    - implementing the configuration as `windows` or `linux` services.
- Standard classes etc.
- Concepts for describing data (here `JSON schemas`)