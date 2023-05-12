import React, { useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNav} from './src/navigation/Stack/MainNav';
import SQLite from 'react-native-sqlite-storage';
const App = () => {
  const db = SQLite.openDatabase({ name: 'task.db', location: 'default' });
  useEffect(()=>{
    CreateDatabase()
  },[])

  const CreateDatabase=()=>{
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);'
      )
    });
  }
  const Stack = createNativeStackNavigator();
  return <MainNav />;
};
export default App;
