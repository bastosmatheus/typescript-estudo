"use strict";
// Singleton / construtor privado. Nesse exemplo de database, quero criar apenas uma conexão, então não da p deixar as instancias dessa classe usar esse recurso.
class Database {
    constructor(host, user) {
        this.host = host;
        this.user = user;
    }
    static connection(host, user) {
        if (Database.database) {
            return Database.database;
        }
        // const database = new Database(host, user);
        Database.database = new Database(host, user);
        return `User ${Database.database.user} já está conectado na URL ${Database.database.host}.`;
    }
}
console.log(Database.connection("localhost", "Matheus"));
// console.log(Database.connection("localhost", "Lohan"));
