interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null; //Ou instance?: MyDatabaseClassic, que inicialmente retorna undefined
  private users: User[] = [];
  private constructor() {} // Impede que a classe seja instanciada fora dela mesma

  static getInstance(): MyDatabaseClassic {
    //Verifica se a instância já foi criada, se não, cria uma nova
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
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
