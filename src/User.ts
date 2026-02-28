export default class User {
    private name: string;
    private email: string;
    private age: number;
    private password: string;
    private isAdmin: boolean;

    constructor(name: string, email: string, age: number, password: string, isAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.isAdmin = isAdmin;

        console.log(`User ${this.name} created successfully`);
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }
    
    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        if (age < 0 || age > 120) {
            throw new Error("Age must be between 0 and 120");
        }
        this.age = age;
    }
}
