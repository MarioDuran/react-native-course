import {View, Text, StyleSheet, Image} from 'react-native';


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

export default App = () => {
  return (
    <View>
      <Header name="Profesores" />
      <Cell name="Mario"/>
      <Cell name="Ana"/>
      <Cell name="Francisco"/>
      <Header name="Alumnos" />
      <Cell name="Estudiante 1"/>
      <Cell name="Estudiante 2"/>
      <Cell name="Estudiante 3"/>
      <Cell name="Estudiante 4"/>
      <Cell name="Estudiante 5"/>
      <Cell name="Estudiante 6"/>
      <Cell name="Estudiante 7"/>

    </View>
  )
}

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