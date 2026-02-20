import { StyleSheet, Text, View } from 'react-native';

import Exemplo04 from './jsx_examplas/04_listas_jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04/>
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

