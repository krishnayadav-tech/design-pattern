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
