Here’s a `README.md` file that explains the Factory Method Pattern, including your implementation for the `NotificationFactory`.

---

# Factory Method Design Pattern

## Overview

The Factory Method Pattern provides an interface for creating objects but allows subclasses to alter the type of objects that will be created. This pattern promotes loose coupling by allowing the client code to work with abstract types while the concrete types are instantiated by a factory.

### Key Characteristics
- **Factory Method:** Defines an interface for creating an object but lets subclasses decide which class to instantiate.
- **Polymorphism:** Allows for polymorphic behavior by using the same method to create different types of objects.
- **Encapsulation:** Encapsulates object creation in subclasses, keeping the creation logic separate from the client code.

## Use Cases
- **UI Components:** Creating platform-specific UI components (e.g., WindowsButton, HTMLButton).
- **Notification Systems:** Creating different types of notifications (e.g., EmailNotification, SMSNotification).
- **Document Generation:** Generating different types of documents (e.g., PDF, Word).

## Implementation in TypeScript

### Example: Notification System

In this example, we'll implement a notification system where we can generate different types of notifications (Email, SMS) using the Factory Method Pattern.

### Interface Definition

```typescript
interface NotificationInterface {
    send: (message: string) => void;
}
```

### Concrete Products

```typescript
class EmailNotification implements NotificationInterface {
    send(message: string) {
        console.log(`Email Notification: ${message}`);
        /*
          Logic for sending email
        */
    }
}

class SmsNotification implements NotificationInterface {
    send(message: string) {
        console.log(`SMS Notification: ${message}`);
        /*
          Logic for sending SMS
        */
    }
}
```

### Factory Class

```typescript
class NotificationFactory {
    private constructor () {}
    
    static getNotification(type: 'SmsNotification' | 'EmailNotification'): NotificationInterface {
        switch(type) {
            case 'SmsNotification': 
                return new SmsNotification();
            case 'EmailNotification': 
                return new EmailNotification();
        }
    }
}
```

### Client Code

```typescript
const notification = NotificationFactory.getNotification('SmsNotification');
notification.send('Hello World');
```

### Explanation

- **Interface (`NotificationInterface`):** This defines the `send` method that all notification types must implement.
- **Concrete Products (`EmailNotification`, `SmsNotification`):** These classes implement the `NotificationInterface` and provide specific logic for sending email and SMS notifications, respectively.
- **Factory Class (`NotificationFactory`):** This class contains a static method `getNotification` that returns an instance of either `SmsNotification` or `EmailNotification` based on the type passed.
- **Client Code:** The client code uses the factory method to obtain a notification instance and send a message.

## Benefits
- **Flexibility:** Easily extendable to support new types of notifications without changing the existing client code.
- **Encapsulation:** Keeps the object creation code in one place, making it easier to manage and modify.

## Summary
The Factory Method Pattern is a creational design pattern that centralizes the creation of objects. It allows you to encapsulate object creation, promotes loose coupling, and makes your code more modular and maintainable.
