---
sidebar_position: 2
---

# Constraints of `NoPE`

The following constraints were identified during the development of `NoPE`:
- In the researchgroup `Montagesysteme`, prototypes are developed first and foremost. Therefore the development speed is extremely important. Therefore the following boundary condition is met: 
    > In the development step, the rapid development of a runnable prototype usually takes place first, and the interfaces are not fixed until afterwards. Therefore, this development process / procedure should remain mappable in the system. (Differently than with e.g. `gRPC`, with which first the interfaces are defined. Here: `Logic first`)
- The users are not professional programmers. This has the following implications:
    - a simple application is extremely important
    - complicated constructs (e.g. `async` programming should be avoided or made as simple as possible by helpers)
    - The user has no understanding of *multithreading* etc.
- A spreading must be actively driven, since the training represents first an additional expenditure for the coworkers, since these are partially strongly in the daily and project business involved. Impact:
    - The introduction is not a self-runner,
    - Due to the uncertainty regarding the distribution of `NoPE` within the researchgroup, the modules must remain functional even without `NoPE`
    - The integration effort of `NoPE` must be minimized.
    - All hurdles have to be designed as low as possible. (e.g. easy usage, file based configuration principle, etc.)
    - Simple `batch` files for installation are required. 
    - Internally the software can be shared via `docker`, the internal npm and pip administration. However, these items must be actively documented!
- The Msys team has agreed on the restriction of different programming languages (backend = python, frontend = javascript).
    - The languages (python and javascript) must be compatible with the system.
    - Since these languages are dynamic, the environment can be dynamic as well.
- runnable on different systems (Linux, Windows, Browser), because different environments are used for application development at the researchgroup.
- The executability must be given on x86 systems. i.e.:
    - Embedded systems are neglected
    - PLCs are neglected.
- A uniform naming convention is used. Here `camelCase`