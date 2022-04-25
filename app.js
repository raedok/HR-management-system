"use sticrt";
let allEmployee = [];


// let department =["Administration","Marketing","Development","Finance"]
// let level =["Junior","Mid-Senior","Senior"]

function Employee(employeeID, fullName, department, level, imageURL, salary) {

  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  allEmployee.push(this);
}


Employee.prototype.render = function () {
  document.write("<h1>Company Employee</h1>");
  document.write(`<p> ${this.employeeID}`);
  document.write(`<p> ${this.fullName}`);
  document.write(`<p> ${this.department}`);
  document.write(`<p> ${this.level}`);
  document.write(`<p> ${this.imageURL}`);
  document.write(`<p> ${this.getSalary()}`);
};

let Ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior","salary", "./img/ghazi.PNG");
let Lana = new Employee(1001, "Lana Ali", "Finance", "Senior","salary", "./images/lana.PNG");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","salary", "./images/tamara.PNG");
let Safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","salary", "./images/safi.PNG");
let Omar = new Employee(1004, "Omar Zaid", "Development", "Senior","salary", "./images/omar.PNG");
let Rana = new Employee(1005, "Rana Saleh", "Development", "Junior","salary", "./images/rana.PNG");
let Hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","salary", "./images/hadi.PNG");

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random(min, max) * (max - min + 1) + min);
}
getRandomNumberBetween(500, 1000);
console.log(getRandomNumberBetween(500,100))

Employee.prototype.getSalary = function () {
  if (this.level == "Junior") {
      console.log(this.level)
    let netSalary = getRandomNumberBetween(500, 1000);

    this.salary = netSalary - netSalary * 0.075;
  } else if (this.level == "Mid-Senior") {
    console.log(this.level)

    let netSalary = getRandomNumberBetween(1000, 1500);

    this.salary = netSalary - netSalary * 0.075;
  } else {
    console.log(this.level)

    let netSalary = getRandomNumberBetween(1500, 2000);

    this.salary = netSalary - netSalary * 0.075;
  }
  return this.salary

};


Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();
console.log(Ghazi)