import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  Button,
  Pressable
} from 'react-native';

//Static data to display in list
const DATA = ['first row', 'second row', 'third row', ' fourth row', ' fifth row', ' sixth row', ' seventh row', 'Eight row', ' Nine row', 'Tenth row'];
const DATA2 = [
  {
    title: "Category 1",
    data: ["Sub-category 1.1", "Sub-category 1.2", "Sub-category 1.3"]
  },
  {
    title: "Category 2",
    data: ["Sub-category 2.1", "Sub-category 2.2", "Sub-category 3.3"]
  },
  {
    title: "Category 3",
    data: ["Sub-category 3.1", "Sub-category 3.2"]
  },
];

const App = () => {
  const [ count, setCount ] = useState(0);

  return (
    <View style={styles.container_style}>
      <Text style={styles.textStyle}>React Native Counter App</Text>
      <View style={styles.secondContainer}>
        <Text style={styles.textStyle}>{count}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Button 
            title="Decrease Count"
            style={{ padding: 2, backgroundColor: "green"}}
            onPress={() => setCount(count - 1)}
          />
          <Button 
            title="Increase Count"
            style={{ padding: 2, backgroundColor: "green"}}
            onPress={() => setCount(count + 1)}
          />
        </View>
      </View>
      <Text style={styles.textStyle}>Made by Niraj Kumar Jha</Text>
    </View>
  );
};

// <Text style={styles.header}> FLat List Example</Text>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Text style={styles.item_style}>{item}</Text>}
//       />
//       <SectionList 
//         sections={DATA2}
//         renderItem={({ item }) => <Text style={styles.item_style}>{item}</Text>}
//         renderSectionHeader={({ section }) => <Text style={styles.section_styles}>{section.title}</Text>}
//         keyExtractor={( item, index ) => index}
//       />

//Styles
const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  secondContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "green"
  },  
  item_style: {
    backgroundColor: '#B591FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }, header: {
    textAlign: 'centre',
    backgroundColor: '#B2C2D2',
    padding: 20,
    fontSize: 20,
  },
  section_styles: {
    textAlign: "center",
    backgroundColor: "#FF9900",
    padding: 20,
    fontSize: 20
  }
});

export default App;