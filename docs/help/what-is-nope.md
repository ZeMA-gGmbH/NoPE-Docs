---
sidebar_position: 1
---

# 1. What is NoPE ?

![](/logo/logo.png)

## What does `NoPE` stand for?

**No** **P**rogramming **Environment**

## Purpose of `NoPE`

NoPE" is essentially intended to simplify the implementation of distributed software systems. In the context of the researchgroup [Montagesysteme](https://montagesysteme.zema.de/) this includes all individual partial software components (e.g. wrapper for a robot, gripper or laser line sensor or software components), which are necessary to interact with an assembly system.


`NoPE` pursues the following goals and tasks, among others:

- Creation of a uniform communication structure so that individual software components can communicate with each other.
- Basis for subsystems that need to be connected.
- By `NoPE` software components should become more reusable and must not be provided each time again. 
- The user should not be influenced by the concepts of `NoPE`, much more `NoPE` should be understood as work facilitation.

## Technical task of `NoPE`

With the NoPE, employees develop software that is compatible with a common basis. For this purpose different patterns must be implemented. NoPE should support this process using a common communication basis. This communcation technology is compatible with other technologies (like `rest`, `opcua`, `ros` etc.)-

For this a basic basis software / library is developed, with which standardizes and simplifies the communication between different modules. The structure of the software is to be standardized in a certain form (e.g. via standard classes and methods), so that a handover can be simplified and the developers only have to worry about the implementation of the logic. Thus, the developers do not need to independently integrate e.g. `REST` or `mqtt` to interact with the modules of other developers. Furthermore, `NoPE` should enable a *distribution* of the software (e.g. on servers, IPCs etc.). Thus, e.g. ML solutions in Python can be implemented on a server and used in a javascript.

This is described in the following picture:

![](/img/background/nope-network.png)

## Requirements for `NoPE`

The following functional requirements are to be met by `NoPE`:
- A simple structure shall be used so that everyone can use `NoPE`.
- All relevant patterns (`pub-sub`, `request and response`) should be able to be implemented via `NoPE`. 
- The user should not worry about the communication, but concentrate on the implementation of his software component.
- The user should be able to use programming languages independently of the modules.
- NoPE should be so flexible that in the future further architectures can be built on it (e.g. Blackboard etc).

## Quality objectives of `NoPE`

The top 3 architectural quality requirements that key stakeholders are particularly concerned with meeting or maintaining are
are particularly important: 

1. **Functional Suitablity**.
    
    *Motivation*: The system should meet the requirements so that the system can be used and this is desired by the users.
2. **Operability**.

    *Motivation*: The application should merge different research topics by allowing individual software components (created by different users) to be used. This should lead to a change of culture in the long run. The software components are to become concomitantly better tested, more universal and versatile applicable.
3. **Transferablitiy**.

    *Motivation*: The system should be applicable in different use cases. Thus a long-term compatibility of the software written by the users is to be ensured.