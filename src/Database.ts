export default class Database {

   private static instance : Database

   private constructor(){
        console.log(`Database connected...`);
   }

   public static getInstance(): Database{
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }

}