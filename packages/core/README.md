# `@woken/core`

Holds core logic for Woken game engine

## Structure

- Core
  - Services
    - EntityService
      - Entities
    - ComponentService
      - Components
  - Objects

### Core

Core is basically a service manager, all the logic is done in services.

Another part of the core is to handle objects (not js objects). They are the integral part of saving any data.

### Services

A service is a class where logic is placed. It handles anything from characters, quests, scene logic and so on. This is broad, but this empowers many types of games to be build on top of woken.

Core itself will mostly focus on managing these, while we will publish some utility and frequently used services.

### Objects

Objects are classes that can be serialized and deserialized into json. This is powered by `class-transformer`. The concept comes from [DTO](https://en.wikipedia.org/wiki/Data_transfer_object).

Validation happens with `class-validator`.

Services will be in charge of registering these objects.
