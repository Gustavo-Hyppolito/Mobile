import { StyleSheet, Text, View } from 'react-native';
import Exercicio12 from './somativa/layout';

export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio12/>
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


