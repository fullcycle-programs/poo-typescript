import User from "./User.js";
import Address from "./Address.js";

export default class EmployeeUser extends User {
    private salary: number = 0;

    constructor(name: string, email: string, age: number, password: string, isAdmin: boolean, address: Address, salary: number) {
        super(name, email, age, password, address);
        this.salary = salary;
    }

    get employeeSalary() : number {
        return this.salary;
    }
}