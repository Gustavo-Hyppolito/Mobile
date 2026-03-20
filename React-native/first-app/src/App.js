import { StyleSheet, Text, View } from 'react-native';
import Exercicio01 from './Lista-exercicios/exercicio01';
import Exercicio02 from './Lista-exercicios/exercicio02';
import Exercicio03 from './Lista-exercicios/exercicio03';
import Exercicio04 from './Lista-exercicios/exercicio04';
import Exercicio05 from './Lista-exercicios/exercicio05';
import Exercicio06 from './Lista-exercicios/exercicio06';
import Exercicio07 from './Lista-exercicios/exercicio07';
import Exercicio08 from './Lista-exercicios/exercicio08';
import Exercicio09 from './Lista-exercicios/exercicio09';
import Exercicio10 from './Lista-exercicios/exercicio10';


export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio08/>
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


