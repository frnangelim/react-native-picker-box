/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PickerBox from './PickerBox';

export default class App extends Component {

  state={
    data: [
      {label: 'Java', value: 'java'},
      {label: 'JavaScript', value: 'js'}
    ],
    selectedValue: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.myref._openPicker}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{ this.state.selectedValue }</Text>
        <PickerBox
          ref={ref => this.myref = ref}
          data={ this.state.data }
          onChangeValue={value => this.setState({ selectedValue: value })}
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
