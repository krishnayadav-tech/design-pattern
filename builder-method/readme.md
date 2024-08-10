# Builder Design Pattern

## Overview

The Builder Pattern is a creational design pattern that allows for the step-by-step construction of complex objects. It separates the construction of an object from its representation, enabling the same construction process to create different representations. This pattern is particularly useful when the object being built can have various configurations or requires multiple steps to be assembled.

### Key Characteristics:
- **Step-by-Step Construction:** The builder pattern allows you to construct an object step by step, providing flexibility in the construction process.
- **Separation of Concerns:** The object creation process is separated from the actual object, making the code more modular and easier to maintain.
- **Method Chaining:** The builder pattern often uses method chaining to enable a clean and readable construction process.

## Use Cases
- **Complex Object Construction:** When an object requires multiple steps or configurations to be created.
- **Immutable Objects:** When constructing immutable objects that require all data to be provided at the time of creation.
- **Multiple Representations:** When the same construction process should create different representations of the object.

## Implementation in TypeScript

### Example: Computer Builder

In this example, we’ll implement a builder for different types of computers, such as Gaming PCs, Office PCs, and Servers.

### Interface Definition

```typescript
interface ComputerBuilder {
    addCpu(): this;
    addGpu(): this;
    addRam(): this;
}
```

### Concrete Builders

```typescript
class GamingPc implements ComputerBuilder {
    addCpu() {
        console.log("Adding gaming CPU");
        return this;
    }
    addGpu() {
        console.log("Adding gaming GPU");
        return this;
    }
    addRam() {
        console.log("Adding RAM for gaming");
        return this;
    }
}

class OfficePC implements ComputerBuilder {
    addCpu() {
        console.log("Adding office CPU");
        return this;
    }
    addGpu() {
        console.log("Adding office GPU");
        return this;
    }
    addRam() {
        console.log("Adding RAM for office work");
        return this;
    }
}

class Server implements ComputerBuilder {
    addCpu() {
        console.log("Adding server CPU");
        return this;
    }
    addGpu() {
        console.log("Adding server GPU");
        return this;
    }
    addRam() {
        console.log("Adding RAM for server");
        return this;
    }
}
```

### Director

```typescript
class ComputerDirector {
    private builder: ComputerBuilder;

    constructor(builder: ComputerBuilder) {
        this.builder = builder;
    }

    constructServerBuilder() {
        console.log("Constructing a Server:");
        this.builder.addCpu().addGpu().addRam();
    }

    constructGamingBuilder() {
        console.log("Constructing a Gaming PC:");
        this.builder.addCpu().addGpu().addRam();
    }

    constructOfficeBuilder() {
        console.log("Constructing an Office PC:");
        this.builder.addCpu().addGpu().addRam();
    }
}
```

### Client Code

```typescript
const gamingPcBuilder = new GamingPc();
const officePcBuilder = new OfficePC();
const serverBuilder = new Server();

const gamingDirector = new ComputerDirector(gamingPcBuilder);
gamingDirector.constructGamingBuilder();

const officeDirector = new ComputerDirector(officePcBuilder);
officeDirector.constructOfficeBuilder();

const serverDirector = new ComputerDirector(serverBuilder);
serverDirector.constructServerBuilder();
```

### Explanation:
- **Interface (`ComputerBuilder`)**: Defines the steps required to build a computer, with each method returning `this` to enable method chaining.
- **Concrete Builders (`GamingPc`, `OfficePC`, `Server`)**: Implement the `ComputerBuilder` interface, providing specific implementations for building different types of computers.
- **Director (`ComputerDirector`)**: Manages the construction process. It uses a builder to construct different types of computers by calling the appropriate methods in the correct order.
- **Client Code**: The client code uses the director to construct different types of computers by instructing the builder.

## Benefits
- **Flexibility:** Easily extendable to support different types of objects by implementing new builders.
- **Reusability:** The same construction process can create different representations of an object.
- **Clarity:** Method chaining and the separation of concerns lead to clean and maintainable code.

## Summary
The Builder Pattern is an excellent choice for constructing complex objects that require multiple steps or configurations. It promotes separation of concerns and enhances code readability by isolating the construction process from the final object representation.
