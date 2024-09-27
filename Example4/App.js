import { Text, View, Image, StyleSheet, SectionList } from 'react-native';

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

const DATA2 = [
  {
    title: 'Profesores',
    data: [
      { id: 1, name: 'mario' },
      { id: 2, name: 'ana' },
      { id: 3, name: 'francisco' },
    ],
  },
  {
    title: 'Estudiantes',
    data: [
      { id: 4, name: 'daniel' },
      { id: 5, name: 'karina' },
      { id: 6, name: 'daniela' },
      { id: 7, name: 'cuauhtemoc' },
      { id: 8, name: 'resendez' },
      { id: 9, name: 'socrates' },
    ],
  },
];

export default App = () => {
  return (
    <SectionList
      sections={DATA2}
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
