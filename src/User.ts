import Address from "./Address.js";

export default class User {
    private _name: string;
    private _email: string;
    private _age: number = 0;
    private _password: string;
    private _address: Address;

    constructor(name: string, email: string, age: number, password: string, address: Address) {
        this._name = name;
        this._email = email; 
        this.setAge(age);
        this._password = password; 
        this._address = address;
        console.log(`User ${this.userName} created successfully`);
    }
 
    protected setAge(age: number): void {
        if (age < 0 || age > 120) {
            throw new Error("Age must be between 0 and 120");
        }
        this._age = age;
    }

    get userName(): string {
        return this._name;
    }


    get userEmail(): string {
        return this._email;
    }
    
    getReports() : void {
        console.log(`User ${this._name} getting a report`);
    }
}
