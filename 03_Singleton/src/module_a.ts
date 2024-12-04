import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Lucas', age: 22 });
myDatabaseModule.add({ name: 'Maria', age: 23 });
myDatabaseModule.add({ name: 'João', age: 24 });
myDatabaseModule.show();
