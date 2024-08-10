import fs from 'fs';
interface Logger {
  log: (data: string) => void;
}

class ConsoleLogger implements Logger {
  private static loggerInstance: ConsoleLogger;
  private count = 0;
  private constructor() {}
  static getInstance() {
    if (!ConsoleLogger.loggerInstance) {
      ConsoleLogger.loggerInstance = new ConsoleLogger();
    }
    return ConsoleLogger.loggerInstance;
  }

  log(data: string) {
    console.log(`${this.count++}: ${data}`);
  }
}

class FileLogger implements Logger {
  private static loggerInstance: FileLogger;
  private fileName = '';
  private count = 0;
  private constructor() {}
  static getInstance() {
    if (!FileLogger.loggerInstance) {
      const fl = new FileLogger();
      fl.fileName = './hello.txt';
      FileLogger.loggerInstance = fl;
    }
    return FileLogger.loggerInstance;
  }
  async log(data: string) {
    const promise = new Promise((resolve, reject) => {
      fs.appendFile(FileLogger.getInstance().fileName, `${this.count++}: ${data}\n`, null, (err) => {
        if(err) {
          reject(err);
        } else {
          resolve(0);
        }
      })
    });
    return promise;
  }
}

class LoggerClass {
  private constructor() {}
  static getInstance() {
    const type = process.env.logger_type as 'ConsoleLogger' | 'FileLogger';
    switch (type) {
      case "ConsoleLogger":
        return ConsoleLogger.getInstance();
      case "FileLogger":
        return FileLogger.getInstance();
    }
  }
};

export const loggerClass = LoggerClass.getInstance();