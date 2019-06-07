import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PickerBox from './PickerBox';

export default class App extends Component {

  state={
    data: [
      {label: 'Português', value: 'pt'},
      {label: 'Deutsch', value: 'de'},
      {label: 'English', value: 'en'}
    ],
    selectedValue: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.myref.openPicker()}>Press to select language</Text>
        <Text style={styles.instructions}>{ this.state.selectedValue }</Text>
        <PickerBox
          ref={ref => this.myref = ref}
          data={ this.state.data }
          onValueChange={value => this.setState({ selectedValue: value })}
          selectedValue={ this.state.selectedValue }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0071b2',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});
