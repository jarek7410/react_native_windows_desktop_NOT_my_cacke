import SQLite from 'react-native-sqlite-storage';

export const getData = async () => {
  let db = SQLite.openDatabase({
    name: 'C:\\Users\\jarek\\WebstormProjects\\afmib_desktop\\helpers\\bwsActons.js',
    location: 'default',
  });

  // Execute SQL
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM rounddata',
      [], (tx, results) => {
      console.log('Table created successfully');
    });
  });
};
// Open database
