interface NotificationInterface {
  send: (message: string) => void;
}

class EmailNotification implements NotificationInterface {
  send(message: string) {
    console.log(`Email Notification: ${message}`);
    /*
      Logic
    */
  }
}

class SmsNotification implements NotificationInterface {
  send(message: string) {
    console.log(`Sms Notification: ${message}`);
    /*
      Logic
    */
  }
}

class NotificationFactory {
  private constructor () {}
  static getNotification(type: 'SmsNotification' | 'EmailNotification') {
    switch(type) {
      case 'SmsNotification': 
        return new SmsNotification();
      case 'EmailNotification': 
        return new EmailNotification();
    }
  }
}


const notification = NotificationFactory.getNotification('SmsNotification');
notification.send('Hello World');