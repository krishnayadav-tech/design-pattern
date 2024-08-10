/* Computer Builder Interface */
interface ComputerBuilder {
  addCpu(): this;
  addGpu(): this;
  addRam(): this;
}

/* Concrete Builders */
class GamingPc implements ComputerBuilder {
  addCpu() {
    console.log("Adding gaming CPU");
    return this;
  }
  addGpu() {
    console.log("Adding gaming GPU");
    return this;
  }
  addRam() {
    console.log("Adding RAM for gaming");
    return this;
  }
}

class OfficePC implements ComputerBuilder {
  addCpu() {
    console.log("Adding office CPU");
    return this;
  }
  addGpu() {
    console.log("Adding office GPU");
    return this;
  }
  addRam() {
    console.log("Adding RAM for office work");
    return this;
  }
}

class Server implements ComputerBuilder {
  addCpu() {
    console.log("Adding server CPU");
    return this;
  }
  addGpu() {
    console.log("Adding server GPU");
    return this;
  }
  addRam() {
    console.log("Adding RAM for server");
    return this;
  }
}

/* Director */
class ComputerDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  constructServerBuilder() {
    console.log("Constructing a Server:");
    this.builder.addCpu().addGpu().addRam();
  }

  constructGamingBuilder() {
    console.log("Constructing a Gaming PC:");
    this.builder.addCpu().addGpu().addRam();
  }

  constructOfficeBuilder() {
    console.log("Constructing an Office PC:");
    this.builder.addCpu().addGpu().addRam();
  }
}

/* Client Code */
const gamingPcBuilder = new GamingPc();
const officePcBuilder = new OfficePC();
const serverBuilder = new Server();

const gamingDirector = new ComputerDirector(gamingPcBuilder);
gamingDirector.constructGamingBuilder();

const officeDirector = new ComputerDirector(officePcBuilder);
officeDirector.constructOfficeBuilder();

const serverDirector = new ComputerDirector(serverBuilder);
serverDirector.constructServerBuilder();
