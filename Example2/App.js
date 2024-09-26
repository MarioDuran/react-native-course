import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

//export default App = () => {}

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
  return (
      <Text style={styles.header}> {props.name}</Text>
  );
};

const DATA = [
  {id:1, name:"Mario"},
  {id:2, name:"Ana"},
  {id:3, name:"Paco"},
  {id:4, name:"Francisco"},
  {id:5, name:"Luis"},
  {id:6, name:"Alumno 1"},
  {id:7, name:"Alumno 2"},
  {id:8, name:"Alumno 2"},
]

const App = () => {
  return (
    <FlatList 
      data = {DATA}
      renderItem = {({item}) => <Cell name={item.name}/>}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000000',
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
  header:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  }
});

export default App;
