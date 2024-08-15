# Design Patterns

This repository contains implementations and explanations of various design patterns using TypeScript. Each design pattern is organized into its own folder with detailed documentation and example code.

## Patterns Included

- **[Singleton Pattern](./singleton-pattern/Readme.md)**
  - Ensures a class has only one instance and provides a global point of access to it.

- **[Factory Method Pattern](./factory-method/Readme.md)**
  - Defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.

- **[Builder Pattern](./builder-method/readme.md)**
  - Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

- **[Prototype Pattern](./prototype-pattern/Readme.md)**
  - Creates new objects by copying an existing object (prototype) rather than creating new instances from scratch.

- **[Abstract Factory Pattern](./abstract-factory/readme.md)**
  - Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

- **[Adapter Pattern](./adapter-pattern/readme.md)**
  - The Adapter Pattern allows incompatible interfaces to work together by converting the interface of a class into another interface that a client expects. This pattern acts as a bridge between two incompatible interfaces, making them compatible..

- **[Observer Pattern](./observer-pattern/Readme.md)**
  - The Observer Pattern is a behavioral design pattern used to implement distributed event-handling systems. It defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This pattern is useful for creating a loosely coupled system where components can react to changes in other components.

- **[Dependency Injection / Inversion](./dependency-injection/readme.md)**
  - Dependency Injection is a design pattern used to implement the Dependency Inversion Principle. It involves passing dependencies (e.g., services, objects, functions) into a class rather than having the class create the dependencies itself.

- **[State Pattern] (./state-pattern/readme.md)**
  - The State Pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. The object appears to change its class as it transitions between different states. This pattern is useful when an object’s behavior is dependent on its state and needs to change its behavior dynamically at runtime.


## Folder Structure

Each design pattern is organized in a separate folder with the following structure:

```
design-patterns/
│
├── singleton-pattern/
│   ├── readme.md
│   └── index.ts
│
├── factory-method/
│   ├── readme.md
│   └── index.ts
│
├── builder-pattern/
│   ├── readme.md
│   └── index.ts
│
├── prototype-pattern/
│   ├── readme.md
│   └── index.ts
│
├── observer-pattern/
│   ├── readme.md
│   └── index.ts
│
└── abstract-factory/
    ├── readme.md
    └── index.ts
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the design pattern folder you are interested in.

3. Follow the instructions in the respective `readme.md` file to understand the pattern and run the example code.

## Contribution

If you want to contribute to this repository, please follow the guidelines in the `CONTRIBUTING.md` file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
