import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Get Woke.</Text>
        <Text style={styles.subText}>Save The Earth.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingHorizontal: 20,
  },
  titleContainer: {
    // flex: 1,
    backgroundColor: '#98DCBC', // Change the background color of the bubble here
    borderRadius: 30, // Change the border radius to make it more or less rounded
    // paddingHorizontal: 80,
    // paddingVertical: 10,
    // alignSelf: 'center', // Center the bubble horizontally
    // marginTop: 50, // Add some margin to position the bubble at the top of the screen
    marginHorizontal: 20,
    marginTop: 50,
    paddingLeft: 20,
    paddingVertical: 10,
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'left',
  },
  subText: {
    color: '#455F52',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    textAlign: 'left',
  },
});
