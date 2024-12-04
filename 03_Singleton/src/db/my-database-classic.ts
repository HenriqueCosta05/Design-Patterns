import { User } from "../interfaces/User";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null; //Ou instance?: MyDatabaseClassic, que inicialmente retorna undefined
  private users: User[] = [];
  private constructor() {} // Impede que a classe seja instanciada fora dela mesma

  static get instance(): MyDatabaseClassic {
    //Verifica se a instância já foi criada, se não, cria uma nova
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  };

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
