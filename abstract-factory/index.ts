// Abstract Product: Button
interface Button {
  render(): void;
}

// Abstract Product: Checkbox
interface Checkbox {
  check(): void;
}

// Concrete Product: WindowsButton
class WindowsButton implements Button {
  render(): void {
      console.log("Rendering a Windows button");
  }
}

// Concrete Product: MacButton
class MacButton implements Button {
  render(): void {
      console.log("Rendering a Mac button");
  }
}

// Concrete Product: WindowsCheckbox
class WindowsCheckbox implements Checkbox {
  check(): void {
      console.log("Checking a Windows checkbox");
  }
}

// Concrete Product: MacCheckbox
class MacCheckbox implements Checkbox {
  check(): void {
      console.log("Checking a Mac checkbox");
  }
}

// Abstract Factory
interface UIAbstractFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory: WindowsFactory
class WindowsFactory implements UIAbstractFactory {
  createButton(): Button {
      return new WindowsButton();
  }

  createCheckbox(): Checkbox {
      return new WindowsCheckbox();
  }
}

// Concrete Factory: MacFactory
class MacFactory implements UIAbstractFactory {
  createButton(): Button {
      return new MacButton();
  }

  createCheckbox(): Checkbox {
      return new MacCheckbox();
  }
}

// Client Code
function clientCode(factory: UIAbstractFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.check();
}

// Running client code with different factories
console.log("App running on Windows:");
clientCode(new WindowsFactory());

console.log("App running on macOS:");
clientCode(new MacFactory());
