import {Connection, createConnection} from "typeorm";	

export default class Database {
    private static connection: Connection;

    public getConnection(): Connection {
        if (Database.connection === null || Database.connection === undefined) {
            throw new Error("Database connection is not initialized");
        }
        return Database.connection;
    }

    public async openConnection(): Promise<void> {
        if (Database.connection === null || Database.connection === undefined) {
           try {	
               Database.connection = await createConnection();
           } catch (error){
               console.error("Error creating connection", error)
               throw new Error(`Error creating connection: ${error}`);	
           }
        }
    }
}