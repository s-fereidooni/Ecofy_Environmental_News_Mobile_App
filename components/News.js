import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stories from './Stories';

export default function Header() {
  return (
    <View style={styles.newsContainer}>
        <Text style={styles.titleText}>News</Text>
        {/* <Text>Hi</Text> */}
        <Stories></Stories>
        {/* <Text>Hi</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    backgroundColor: '#d5ede4', // Change the background color of the bubble here
    borderRadius: 30, // Change the border radius to make it more or less rounded
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  titleText: {
    color: '#455F52',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    textAlign: 'left',
  },
});
