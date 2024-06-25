import { MyDatabaseClassic } from "./db/my-database-classic";

const MyDatabaseClassic1 = MyDatabaseClassic.getInstance();
MyDatabaseClassic1.add({ name: 'Lucas', age: 22 });
MyDatabaseClassic1.add({ name: 'Maria', age: 23 });
MyDatabaseClassic1.add({ name: 'João', age: 24 });
MyDatabaseClassic1.show();
