// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';

// export default function Stories() {
//   return (
//     <View>
//       <Text>Hi</Text>
//     </View>
//   );
// }

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking, ScrollView } from 'react-native';

const Stories = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a839c15e35msh1de20c000fc33e6p198feejsnf96230d1d607',
          'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
        }
      };

      const response = await fetch('https://climate-news-feed.p.rapidapi.com/page/1?limit=6', options);
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchArticles();
  }, []);

  const renderArticle = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.url)}>
      <View style={styles.article}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image style={{ width: 100, height: 100}} source={{ uri: `${item.thumbnail}` }} /> */}
        {/* <View style={styles.articleContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={{ width: 100, height: 100}} source={{ uri: `${item.thumbnail}`}} />
          <Image source={{ uri: item.imageUrl }} style={styles.image} /> */}
      {/* </View> */}
      </View>
    </TouchableOpacity>
  );

  const handlePress = (url) => {
    // do something when an article is pressed, like opening the URL in a browser
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
      /> */}
      <ScrollView style={{height: "70%"}}>
        <View>
        <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.url}
        />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: 50,
  },
  article: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    marginRight: 5,
    marginLeft: 20,
    marginVertical: 5,
    // height: 100,
    backgroundColor: '#b4d9cb', // Change the background color of the bubble here
    borderRadius: 30,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },  
  image: {
    width: 100,
    height: 100,
    marginLeft: 16,
  },
  articleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Stories;
