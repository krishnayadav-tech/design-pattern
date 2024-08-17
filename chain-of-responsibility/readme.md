# Chain of Responsibility Pattern

## Overview
The **Chain of Responsibility** is a behavioral design pattern that allows a request to be passed along a chain of handlers. Each handler can either process the request or pass it to the next handler in the chain. This pattern decouples the sender of a request from its potential receivers.

## Structure
- **Handler Interface**: Declares methods for handling requests and setting the next handler in the chain.
- **Abstract Handler**: Implements the common functionality of passing requests along the chain.
- **Concrete Handlers**: Each concrete handler implements the handler interface and contains logic to process specific requests.

## Example: Authentication Pipeline

In this example, we implement a pipeline that handles authentication, validation, and authorization. Each step is handled by a different handler, which processes the request and passes it to the next handler.

### Code

```typescript
// Handler Interface
interface Handler {
    handle: (request: string) => void;
    setNext: (handler: Handler) => Handler;
}

// Abstract Handler
class AbstractHandler implements Handler {
    private next: Handler | null;
    constructor () {
        this.next = null;
    }
    handle(request : string) {
        if (this.next) {
            this.next.handle(request);
        }
    }
    setNext(handler: Handler) {
        this.next = handler;
        return this.next;
    }
}

// Concrete Handlers
class Authentication extends AbstractHandler {
    handle(request : string): void {
        // authentication logic
        console.log('Authenticated');
        super.handle(request);
    }
}

class Validation extends AbstractHandler {
    handle(request: string): void {
        // validation logic
        console.log('validated');
        super.handle(request);
    }
}

class Authorization extends AbstractHandler {
    handle(request: string): void {
        // authorization logic
        console.log('authorized');
        super.handle(request);
    }
}

// Client Code
const authClass = new Authentication();
const validationClass = new Validation();
const authorizationClass = new Authorization();

authClass.setNext(validationClass).setNext(authorizationClass);

authClass.handle('Whoami');
```

### Output
```
Authenticated
validated
authorized
```

### Key Points
- **Chaining**: Handlers are linked together, forming a chain.
- **Request Processing**: Each handler processes the request and passes it to the next handler if it can't fully handle it.
- **Flexibility**: Handlers can be easily added, removed, or reordered.

## Use Cases
- Handling requests that can be processed by multiple objects, without knowing which object will handle it.
- Implementing a processing pipeline where each step must be executed in sequence.

---

Would you like to make any adjustments or add more details to this `README.md`?