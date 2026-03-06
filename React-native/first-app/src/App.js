import { StyleSheet, Text, View } from 'react-native';

import Lista03 from './jsx_listas/03_lista_jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Lista03/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

