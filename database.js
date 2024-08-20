import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'AlzheimerAppDB',
    location: 'default',
  },
  () => {
    console.log('Banco de dados conectado');
  },
  error => {
    console.log('Erro ao conectar ao banco de dados:', error);
  }
);

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY NOT NULL, 
        email TEXT, 
        password TEXT, 
        name TEXT, 
        phone_number TEXT
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reminders (
        id TEXT PRIMARY KEY NOT NULL, 
        user_id TEXT, 
        title TEXT, 
        description TEXT, 
        date_time TEXT, 
        confirmed INTEGER
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS locations (
        id TEXT PRIMARY KEY NOT NULL, 
        user_id TEXT, 
        latitude REAL, 
        longitude REAL, 
        timestamp TEXT
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS diary_entries (
        id TEXT PRIMARY KEY NOT NULL, 
        user_id TEXT, 
        title TEXT, 
        content TEXT, 
        media_uri TEXT, 
        date_time TEXT
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS caregivers (
        id TEXT PRIMARY KEY NOT NULL, 
        user_id TEXT, 
        name TEXT, 
        phone_number TEXT
      );`
    );
  }, error => {
    console.log('Erro ao criar tabelas:', error);
  }, () => {
    console.log('Tabelas criadas com sucesso');
  });
};

export default db;
