import User from "./User.js";
import Address from "./Address.js";
import ManagerUser from "./ManagerUser.js";
import EmployeeUser from "./EmployeeUser.js";
import Database from "./Database.js";

/*const user = new User("John Doe", "john.doe@example.com", 85, "123456", new Address("123 Main St", 123, "Anytown", "CA", "USA"));
console.log(user);*/


const employee = new EmployeeUser("John Employee", "john.doe@example.com", 11, "123456", false, new Address("123 Main St", 123, "Anytown", "CA", "USA"), 2000);
console.log(employee);
console.log( `Getting salary for Employee ${employee.employeeSalary}`);
 

/*const manager = new ManagerUser("John Manager", "john.doe@example.com", 15, "123456", false, new Address("123 Main St", 123, "Anytown", "CA", "USA"));
console.log(manager);
manager.getReportEmployee(employee);
console.log( `Getting report for Employee ${manager.getReportEmployee(employee)}`);*/


const manager2 = new ManagerUser("John Manager Admin", "john.doe@example.com", 15, "123456", true, new Address("123 Main St", 123, "Anytown", "CA", "USA"));
console.log(manager2);
manager2.getReportEmployee(employee);
console.log( `${manager2.getReportEmployee(employee)}`);


employee.getReports();


Database.getInstance();
