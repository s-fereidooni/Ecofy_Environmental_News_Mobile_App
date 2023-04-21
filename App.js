import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import News from './components/News';
import Header from './components/Header';
import Stories from './components/Stories';


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <News></News>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7faf9',
    justifyContent: 'flex-start',
  },
});
