
// Employee class

class Employee {
    constructor(name) {
        this.name = name;
        this.isFree = true;
    }

    handleCall(call) {
        if (this.isFree) {
          console.log(` ${this.name} is handling the call. he is occupied for now.`);
          this.isFree = false;
          setTimeout(() => this.endCall(), 3000); // The timeout is for simulating a call.For oour convienience I set it to 3seconds
          return true;
        }
        return false;
      }
    
      endCall() {
        this.isFree = true;
        console.log(`${this.name} has finished the call.He is free.`);
      }
}
    
class Respondent extends Employee {
    constructor(name) {
      super(name);
      this.rank = 1;
    }
  }


  class Manager extends Employee {
    constructor(name) {
      super(name);
      this.rank = 2;
    }
  }

  class Director extends Employee {
    constructor(name) {
      super(name);
      this.rank = 3;
    }
  }
  // CallCenter class

  class CallCenter {
    constructor() {
      this.respondents = [];
      this.managers = [];
      this.directors = [];
    }
  
    addEmployee(employee) {
      if (employee instanceof Respondent) { // instanceof is an operator that allows to verify that employee is a child of Respondent
        this.respondents.push(employee);
      } else if (employee instanceof Manager) { 
        this.managers.push(employee);
      } else if (employee instanceof Director) {
        this.directors.push(employee);
      }
    }
  
    dispatchCall(call) {
      console.log(`Dispatching ${call}...`);
      for (let respondent of this.respondents) {
        if (respondent.handleCall(call)) {
          return;
        }
      }
      for (let manager of this.managers) {
        if (manager.handleCall(call)) {
          return;
        }
      }
      for (let director of this.directors) {
        if (director.handleCall(call)) {
          return;
        }
      }
      console.log('All employees are busy. Please wait a moment.');
    }
  }
  

  // Now we make a simulation with 2 employees 1 manager and 1 director

  // Creating some employees to handle calls
  const respondent1 = new Respondent('Respondent 1');
  const respondent2 = new Respondent('Respondent 2');
  const manager1 = new Manager('Manager 1');
  const director1 = new Director('Director 1');
  
  // Creating the Call Center
  const callCenter = new CallCenter();
  
  // Now we add the employees to the call center
  callCenter.addEmployee(respondent1);
  callCenter.addEmployee(respondent2);
  callCenter.addEmployee(manager1);
  callCenter.addEmployee(director1);
  
  // Dispatching incoming calls
  callCenter.dispatchCall('Call 1');
  callCenter.dispatchCall('Call 2');
  callCenter.dispatchCall('Call 3');
  callCenter.dispatchCall('Call 4');