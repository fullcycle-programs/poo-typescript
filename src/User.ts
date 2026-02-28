import Address from "./Address.js";

export default class User {
    private name: string;
    private email: string;
    private age: number = 0;
    private password: string;
    private address: Address;

    constructor(name: string, email: string, age: number, password: string, address: Address) {
        this.name = name;
        this.email = email; 
        this.setAge(age);
        this.password = password; 
        this.address = address;
        console.log(`User ${this.name} created successfully`);
    }
 
    protected setAge(age: number): void {
        if (age < 0 || age > 120) {
            throw new Error("Age must be between 0 and 120");
        }
        this.age = age;
    }

    get userName(): string {
        return this.name;
    }

    get userEmail(): string {
        return this.email;
    }
    
}
