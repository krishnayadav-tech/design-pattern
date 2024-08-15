## State Pattern

### Overview
The **State Pattern** is a behavioral design pattern that allows an object to change its behavior when its internal state changes. The object appears to change its class as it transitions between different states. This pattern is useful when an object’s behavior is dependent on its state and needs to change its behavior dynamically at runtime.

### Problem Statement
You are building an ATM machine simulation where the machine can be in different states, such as `CardInserted`, `DispensingCash`, or `Reset`. The behavior of the ATM machine changes depending on the current state. Implementing this with conditional logic like `if-else` or `switch` can result in complex and hard-to-maintain code. The State Pattern offers a more organized approach by encapsulating state-specific behavior in separate state classes.

### Participants
- **State Interface**: Declares methods that all concrete states must implement.
- **Concrete States**: Implement the state-specific behavior.
- **Context (Machine)**: Maintains a reference to an instance of a `State` subclass and delegates the state-specific behavior to the current state object.

### Example

Below is an implementation of the State Pattern for an ATM machine:

```typescript
// State Interface
interface State {
    insertCard(): void;
    dispenseCash(): void;
    resetMachine(): void;
}

// Concrete State: InsertedCard
class InsertedCard implements State {
    private machine: Machine;
    
    constructor(machine: Machine) {
        this.machine = machine;
    }

    insertCard(): void {
        console.log('Card is already inserted');
    }

    dispenseCash(): void {
        console.log('Dispensing cash...');
        this.machine.setDispenseState();
    }

    resetMachine(): void {
        console.log('Machine is resetting...');
        this.machine.setResetState();
    }
}

// Concrete State: DispensedCard
class DispensedCard implements State {
    private machine: Machine;
    
    constructor(machine: Machine) {
        this.machine = machine;
    }

    insertCard(): void {
        console.log('Please take the cash before inserting a new card');
    }

    dispenseCash(): void {
        console.log('Cash already dispensed');
    }

    resetMachine(): void {
        console.log('Machine is resetting...');
        this.machine.setResetState();
    }
}

// Concrete State: ResetMachine
class ResetMachine implements State {
    private machine: Machine;
    
    constructor(machine: Machine) {
        this.machine = machine;
    }

    insertCard(): void {
        console.log('Card inserted');
        this.machine.setInsertedState();
    }

    dispenseCash(): void {
        console.log('Please insert a card first');
    }

    resetMachine(): void {
        console.log('Machine is already reset');
    }
}

// Context Class: Machine
class Machine {
    private resetState: State;
    private dispenseState: State;
    private insertedState: State;
    private currentState: State;

    constructor() {
        this.resetState = new ResetMachine(this);
        this.dispenseState = new DispensedCard(this);
        this.insertedState = new InsertedCard(this);
        this.currentState = this.resetState;
    }

    setResetState() {
        this.currentState = this.resetState;
    }

    setInsertedState() {
        this.currentState = this.insertedState;
    }

    setDispenseState() {
        this.currentState = this.dispenseState;
    }

    insertCard() {
        this.currentState.insertCard();
    }

    dispenseCash() {
        this.currentState.dispenseCash();
    }

    resetMachine() {
        this.currentState.resetMachine();
    }
}

// Client Code
const atmMachine = new Machine();

atmMachine.insertCard();     // Output: Card inserted
atmMachine.dispenseCash();   // Output: Dispensing cash...
atmMachine.dispenseCash();   // Output: Cash already dispensed
atmMachine.resetMachine();   // Output: Machine is resetting...
atmMachine.insertCard();     // Output: Card inserted
```

### Advantages
- **Simplifies State-Dependent Code**: By encapsulating the state-specific behavior into separate classes, the code is easier to manage and extend.
- **Promotes Open/Closed Principle**: New states can be added without modifying the existing state classes or the context class.

### Use Cases
- When an object’s behavior changes based on its state.
- When an object has large conditional logic that depends on its state.

### Related Patterns
- **Strategy Pattern**: While the State Pattern focuses on changing the object’s behavior as it transitions between states, the Strategy Pattern allows for changing the algorithm that an object uses.
- **Observer Pattern**: Can be used in combination with the State Pattern to notify observers when the state changes.