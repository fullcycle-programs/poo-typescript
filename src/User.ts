import Address from "./Address.js";

export default class User {
    private name: string;
    private email: string;
    private age: number = 0;
    private password: string;
    private isAdmin: boolean;
    private address: Address;

    constructor(name: string, email: string, age: number, password: string, isAdmin: boolean, address: Address) {
        this.name = name;
        this.email = email; 
        this.setAge(age);
        this.password = password;
        this.isAdmin = isAdmin;
        this.address = address;
        console.log(`User ${this.name} created successfully`);
    }
 
    public setAge(age: number): void {
        if (age < 0 || age > 120) {
            throw new Error("Age must be between 0 and 120");
        }
        this.age = age;
    }
}
