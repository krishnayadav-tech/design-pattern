// The new interface that the client expects
interface Printer {
  print(message: string): void;
}

class NewPrinter implements Printer {
  print(message: string) {
    console.log(`NewPrinter: ${message}`);
  }
}

class OldPrinter implements Printer {
  print(message: string) {
    console.log(`OldPrint: ${message}`);
  }
}

class PrinterAdapter {
  private printer;
  constructor(printer: Printer) {
    this.printer = printer;
  }
  print(message: string) {
    this.printer.print(message);
  }
}

const printer = new PrinterAdapter(new NewPrinter());
printer.print('Hello World');