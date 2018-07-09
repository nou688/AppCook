import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import I18n from './src/translations/I18n';
//import * as I18n from 'react-native-i18n'
import configureStore from './src/config/configureStore'
const store = configureStore()
import Home from './src/Authentification'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={ styles.container }>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
