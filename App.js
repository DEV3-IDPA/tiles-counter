import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import Tile from './components/Tile'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tilesContainer}>
        {/* note that each component will rerender whenever it's state changes */}
        <Tile title="tile one" startCounter="2" />
        <Tile title="tile two" startCounter="2" />
        <Tile title="tile three" startCounter="2" />
        <Tile title="tile four" startCounter="8" />
        <Tile title="tile five" startCounter="20" />
        <Tile title="tile six" startCounter="0" />
        <Tile title="tile seven" startCounter="0" />
        <Tile title="tile eight" startCounter="0" />
        <StatusBar style="auto" />
      </View>
    </ScrollView >
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
});
