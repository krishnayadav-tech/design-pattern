# Singleton Design Pattern

## Overview

The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance. This is particularly useful in scenarios where exactly one object is needed to coordinate actions across the system.

### Key Characteristics
- **Single Instance:** Only one instance of the class is created.
- **Global Access:** The instance is accessible globally.
- **Lazy Initialization:** The instance is created only when it is first needed.

## Use Cases
- **Configuration Manager:** Where the entire application needs to access a single set of configuration settings.
- **Logging:** Ensures that all parts of the application log to the same file or output stream.
- **Database Connection:** Manages a single connection to the database to prevent resource leaks and ensure data consistency.

## Implementation in TypeScript

## Example: Logger System

Here’s an example of a logger system using the Singleton Pattern. This implementation includes both `ConsoleLogger` and `FileLogger`:

```typescript
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
      });
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
```

### Key Points
- **Private Constructor:** The constructor is private to prevent direct instantiation.
- **Static Method:** The `getInstance()` method ensures that only one instance of the class is created.
- **Global Access Point:** The `getInstance()` method provides a global point of access to the instance.

### Testing the Logger

You can test the logger by setting the `logger_type` environment variable and running the appropriate logging methods:

```typescript
import { loggerClass } from './path-to-your-logger-file';

if (loggerClass) {
  loggerClass.log('This is the first log message');
  loggerClass.log('This is the second log message');
  loggerClass.log('This is the third log message');
}
```

- **Test with `ConsoleLogger`:**

```bash
export logger_type=ConsoleLogger
ts-node testLogger.ts
```

- **Test with `FileLogger`:**

```bash
export logger_type=FileLogger
ts-node testLogger.ts
```

### Summary
The Singleton Pattern is a powerful design pattern for managing global shared resources like configurations, logging, and database connections. By ensuring that only one instance of a class exists, the pattern helps maintain consistency and control resource usage across an application.
