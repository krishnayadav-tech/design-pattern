interface Observer {
  update(message: number): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void; // Changed to plural for clarity
}

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

class IndividualInvestor implements Observer {
  private ucc: string;

  constructor(ucc: string) {
    this.ucc = ucc;
  }

  update(price: number): void {
    // fetch user from db
    // notify user
    console.log(`Notifying user: ${this.ucc} - ${price}`);
  }
}

class InstitutionalInvestor implements Observer {
  private ucc: string;

  constructor(ucc: string) {
    this.ucc = ucc;
  }

  update(price: number): void {
    // fetch InstitutionalInvestor from db
    // notify InstitutionalInvestor
    console.log(`Notifying InstitutionalInvestor user: ${this.ucc} - ${price}`);
  }
}

const stockPriceIncident = new StockPriceIncidents();
stockPriceIncident.addObserver(new InstitutionalInvestor("100"));
stockPriceIncident.addObserver(new IndividualInvestor("200"));

stockPriceIncident.update(100);
