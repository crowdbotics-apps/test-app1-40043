import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Picker, Button } from "react-native";

class App extends React.Component {
  state = {
    selectedTab: 'search'
  };

  render() {
    return <SafeAreaView style={styles.container}>
        <View style={styles.tabs}>
          <Button title="Search" onPress={() => this.setState({
          selectedTab: 'search'
        })} />
          <Button title="Advanced Search" onPress={() => this.setState({
          selectedTab: 'advancedSearch'
        })} />
        </View>
        {this.state.selectedTab === 'search' ? <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Input 1" />
            <TextInput style={styles.input} placeholder="Input 2" />
            <TextInput style={styles.input} placeholder="Input 3" />
          </View> : <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Input 4" />
            <TextInput style={styles.input} placeholder="Input 5" />
            <TextInput style={styles.input} placeholder="Input 6" />
          </View>}
        <View style={styles.row}>
          <Picker style={styles.picker}>
            <Picker.Item label="Option 1" value="1" />
            <Picker.Item label="Option 2" value="2" />
            <Picker.Item label="Option 3" value="3" />
          </Picker>
          <Picker style={styles.picker}>
            <Picker.Item label="Option 4" value="4" />
            <Picker.Item label="Option 5" value="5" />
            <Picker.Item label="Option 6" value="6" />
          </Picker>
          <Picker style={styles.picker}>
            <Picker.Item label="Option 7" value="7" />
            <Picker.Item label="Option 8" value="8" />
            <Picker.Item label="Option 9" value="9" />
          </Picker>
          <TextInput style={styles.input} placeholder="Input 7" />
        </View>
      </SafeAreaView>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  input: {
    width: "30%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10
  },
  picker: {
    width: "30%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
export default App;