Let's dive into the **Adapter Pattern**.

### Problem:
Imagine you have a system that needs to interact with a third-party library or legacy code. The interface of this library or legacy code doesn’t match the interface of your system. You need a way to make these incompatible interfaces work together without changing the existing code.

### Design Pattern: Adapter
The Adapter Pattern allows incompatible interfaces to work together by converting the interface of a class into another interface that a client expects. This pattern acts as a bridge between two incompatible interfaces, making them compatible.

### Key Characteristics:
- **Interface Compatibility:** Converts one interface into another interface that clients expect.
- **Flexibility:** Allows existing code to interact with new or third-party code without modifying it.
- **Encapsulation:** Encapsulates the code of the adaptee (the existing class) and provides a compatible interface.

### Example in TypeScript:

Let’s consider an example where you need to integrate a legacy `OldPrinter` class with a new `Printer` interface.

### Legacy Code

```typescript
// Legacy code with an incompatible interface
class OldPrinter {
    printText(text: string) {
        console.log(`Old Printer: ${text}`);
    }
}
```

### Target Interface

```typescript
// The new interface that the client expects
interface Printer {
    print(message: string): void;
}
```

### Adapter Class

```typescript
// Adapter class to make OldPrinter compatible with the Printer interface
class PrinterAdapter implements Printer {
    private oldPrinter: OldPrinter;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print(message: string) {
        this.oldPrinter.printText(message);
    }
}
```

### Client Code

```typescript
// Client code using the Printer interface
function printDocument(printer: Printer, message: string) {
    printer.print(message);
}

// Usage
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

printDocument(adapter, "Hello, Adapter Pattern!");
```

### Explanation:
- **Legacy Code (`OldPrinter`)**: A class with an incompatible interface that we need to integrate.
- **Target Interface (`Printer`)**: Defines the interface that the client code expects.
- **Adapter Class (`PrinterAdapter`)**: Implements the target interface and adapts the legacy class to the expected interface.
- **Client Code**: Uses the `Printer` interface to interact with the `PrinterAdapter`, which in turn uses the `OldPrinter`.

### Practice Problems:
1. **Problem 1:** Implement an adapter for a `LegacyMediaPlayer` class with methods like `playMedia()` to work with a new `MediaPlayer` interface that expects a `play()` method.

2. **Problem 2:** Create an adapter for a `LegacyTemperatureSensor` class with methods like `getTemperature()` to work with a new `TemperatureSensor` interface that expects a `readTemperature()` method.

These problems will help you understand how to use the Adapter Pattern to bridge incompatible interfaces. Let me know if you need any assistance with the implementation!