export default class User {
    name: string;
    email: string;
    age: number;
    password: string;
    isAdmin: boolean;

    constructor(name: string, email: string, age: number, password: string, isAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.isAdmin = isAdmin;

        console.log(`User ${this.name} created successfully`);
    }
}

