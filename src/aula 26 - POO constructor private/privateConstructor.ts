// Singleton / construtor privado. Nesse exemplo de database, quero criar apenas uma conexão, então não da p deixar as instancias dessa classe usar esse recurso.

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string
  ) {}

  // factory method (quando um método de uma classe cria um novo objeto)
  static connection(host: string, user: string): Database | string {
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
