import React, {useEffect, useState} from 'react';
import { Text, View, Image, StyleSheet, SectionList, ActivityIndicator} from 'react-native';

const Cell = (props) => {
  const randomNumber = Math.floor(Math.random() * 100 + 50);
  return (
    <View style={styles.cell}>
      <Image
        style={styles.cellImage}
        source={{ uri: `https://picsum.photos/${randomNumber}` }}
      />
      <Text> {props.name}</Text>
    </View>
  );
};

const Header = (props) => {
  return <Text style={styles.header}> {props.name} </Text>;
};

const Dog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/MarioDuran/react-native-course/refs/heads/main/Example3/TC2007B.json');
      const json = await response.json();
      setData(json.TC2007B)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect( () => {
    getData();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SectionList
      sections={data}
      renderSectionHeader = {({ section }) => <Header name={section.title} />}
      renderItem={({ item }) => <Cell name={item.name} />}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10,
  },
  cell: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cellImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default Dog;
