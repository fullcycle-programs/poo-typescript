import User from "./User.js";
import Address from "./Address.js";
import EmployeeUser from "./EmployeeUser.js";

export default class ManagerUser extends User {

    private isAdmin: boolean = true;

    constructor(name: string, email: string, age: number, password: string, isAdmin: boolean, address: Address) {
        super(name, email, age, password, address);
        this.isAdmin = isAdmin;
    }

    getReportEmployee(employee: EmployeeUser): string {
        if(this.isAdmin) {
            return `Getting report for ${employee.userName}`; }
        else{ 
            throw new Error(`Manager  ${this.userName} is not a admin`);
        }
    }
}
 