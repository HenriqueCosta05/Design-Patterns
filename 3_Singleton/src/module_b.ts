import { MyDatabaseClassic } from './db/my-database-classic';

const MyDatabaseClassic2 = MyDatabaseClassic.getInstance();
MyDatabaseClassic2.add({ name: 'Pedro', age: 25 });
MyDatabaseClassic2.add({ name: 'Marina', age: 28 });
MyDatabaseClassic2.add({ name: 'Paulo', age: 29 });
MyDatabaseClassic2.show();
