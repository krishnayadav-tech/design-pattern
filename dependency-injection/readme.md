# Dependency Inversion and Dependency Injection

## Overview

This document explains the concepts of Dependency Inversion and Dependency Injection, two key principles in software design that help create flexible, modular, and maintainable code.

## Dependency Inversion Principle (DIP)

### Definition

The Dependency Inversion Principle (DIP) is one of the SOLID principles of object-oriented design. It states:

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

### Purpose

The goal of DIP is to reduce the coupling between high-level and low-level modules, making the system more flexible, easier to maintain, and allowing for the easy swapping of implementations.

### Example

```typescript
interface NotificationService {
    send(message: string): void;
}

class EmailNotification implements NotificationService {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotification implements NotificationService {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}
```

In this example:

- `NotificationService` is an abstraction that defines a contract.
- `EmailNotification` and `SMSNotification` are concrete implementations that depend on this abstraction.
- High-level modules can use the `NotificationService` interface without knowing the specifics of the low-level modules (e.g., email or SMS).

## Dependency Injection (DI)

### Definition

Dependency Injection is a design pattern used to implement the Dependency Inversion Principle. It involves passing dependencies (e.g., services, objects, functions) into a class rather than having the class create the dependencies itself.

### Purpose

The main purpose of Dependency Injection is to decouple the creation of dependencies from the business logic. This makes the code more modular, easier to test, and maintainable.

### Types of Dependency Injection

1. **Constructor Injection**: Dependencies are provided through a class constructor.
2. **Setter Injection**: Dependencies are provided through setter methods.
3. **Interface Injection**: Dependencies are provided by an external injector through an interface.

### Example (Constructor Injection)

```typescript
class UserController {
    private notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }

    notifyUser() {
        this.notificationService.send("Hello User!");
    }
}

// Injecting dependency
const emailNotification = new EmailNotification();
const userController = new UserController(emailNotification);
userController.notifyUser();
```

In this example:

- `UserController` depends on the `NotificationService` interface, but it doesn't create the instance of `EmailNotification` itself.
- The dependency (`EmailNotification`) is injected into `UserController` via the constructor, adhering to the Dependency Inversion Principle.

## Key Differences

- **Dependency Inversion** is a principle that focuses on the relationship between high-level and low-level modules, ensuring both depend on abstractions.
- **Dependency Injection** is a pattern for implementing Dependency Inversion, where dependencies are provided to a class from the outside, rather than being created within the class.

## Summary

- **Dependency Inversion Principle**: Ensure that high-level and low-level modules both depend on abstractions.
- **Dependency Injection**: Inject these abstractions into classes to decouple the creation of dependencies from the business logic.

These two concepts work together to make your codebase more flexible, modular, and easier to maintain.