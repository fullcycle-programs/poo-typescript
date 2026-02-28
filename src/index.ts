import User from "./User.js";
import Address from "./Address.js";

const user = new User("John Doe", "john.doe@example.com", 144, "123456", false, new Address("123 Main St", 123, "Anytown", "CA", "USA"));
console.log(user);