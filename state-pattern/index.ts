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
