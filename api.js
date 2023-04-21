// // // const axios = require("axios");

// // // const options = {
// // //   method: 'GET',
// // //   url: 'https://climate-change-news48.p.rapidapi.com/news',
// // //   headers: {
// // //     'X-RapidAPI-Key': 'a839c15e35msh1de20c000fc33e6p198feejsnf96230d1d607',
// // //     'X-RapidAPI-Host': 'climate-change-news48.p.rapidapi.com'
// // //   }
// // // };

// // // axios.request(options).then(function (response) {
// // // 	console.log(response.data);
// // // }).catch(function (error) {
// // // 	console.error(error);
// // // });

// // // fetch('https://news-about-climate-change-api.herokuapp.com/news');

// // const getArticlesFromApi = async () => {
// //     let response = await fetch(
// //       'https://news-about-climate-change-api.herokuapp.com/news'
// //     );
// //     let json = await response.json();
// //     return json.title;
// // }

// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View } from 'react-native';

// export default Stories = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     fetch('https://news-about-climate-change-api.herokuapp.com/news')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (

//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <Text>Loading...</Text> : 
//       ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
//           <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
//           <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
//           <FlatList
//             data={data.articles}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <Text>{item.id + '. ' + item.title}</Text>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };