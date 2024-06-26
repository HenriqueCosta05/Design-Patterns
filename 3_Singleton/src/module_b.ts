import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Pedro', age: 25 });
myDatabaseClassic.add({ name: 'Marina', age: 28 });
myDatabaseClassic.add({ name: 'Paulo', age: 29 });
myDatabaseClassic.show();
