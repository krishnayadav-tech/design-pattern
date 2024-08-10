# Observer Pattern

## Overview

The Observer Pattern is a behavioral design pattern used to implement distributed event-handling systems. It defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This pattern is useful for creating a loosely coupled system where components can react to changes in other components.

## Problem

In a system where multiple components need to be notified of changes in a central component, managing direct communication between all components can become complex. The Observer Pattern simplifies this by decoupling the subject (the component that changes) from its observers (the components that react to the changes).

## Components

- **Subject:** The object that holds a list of observers and notifies them of changes.
- **Observer:** The object that receives updates from the subject and reacts to changes.
- **Concrete Subject:** Implements the subject interface and maintains the state.
- **Concrete Observer:** Implements the observer interface and defines how to respond to updates.

## Example

### Interfaces

```typescript
interface Observer {
    update(message: number): void;
}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}
```

### Concrete Subject

```typescript
class StockPriceIncidents implements Subject {
    private observers: Observer[] = [];
    private stockPrice: number = 0;

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.stockPrice));
    }

    update(price: number) {
        this.stockPrice = price;
        this.notifyObservers();
    }
}
```

### Concrete Observers

```typescript
class IndividualInvestor implements Observer {
    private ucc: string;

    constructor(ucc: string) {
        this.ucc = ucc;
    }

    update(price: number): void {
        console.log(`Notifying user: ${this.ucc} - ${price}`);
    }
}

class InstitutionalInvestor implements Observer {
    private ucc: string;

    constructor(ucc: string) {
        this.ucc = ucc;
    }

    update(price: number): void {
        console.log(`Notifying InstitutionalInvestor user: ${this.ucc} - ${price}`);
    }
}
```

### Client Code

```typescript
const stockPriceIncident = new StockPriceIncidents();
stockPriceIncident.addObserver(new InstitutionalInvestor("100"));
stockPriceIncident.addObserver(new IndividualInvestor("200"));

stockPriceIncident.update(100);
```

## Explanation

1. **Subject (`StockPriceIncidents`)**: Manages a list of observers and notifies them when the stock price changes.
2. **Observer Interface (`Observer`)**: Defines the `update` method that observers must implement to receive updates.
3. **Concrete Observers (`IndividualInvestor`, `InstitutionalInvestor`)**: Implement the `Observer` interface and handle notifications.
4. **Client Code**: Shows how to register observers with the subject and update the stock price, which triggers notifications to all observers.

## Practice Problems

1. **Problem 1:** Implement a weather monitoring system where the `WeatherStation` class notifies different display units (like `TemperatureDisplay`, `HumidityDisplay`) about weather changes.

2. **Problem 2:** Create a stock market simulation where a `Stock` class notifies various types of investors (like `IndividualInvestor`, `InstitutionalInvestor`) about changes in stock prices.
