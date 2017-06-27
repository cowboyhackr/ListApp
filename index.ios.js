import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Home App!</Text>
        <Button
          onPress={() => navigate('List')}
          title="List"
        />
      </View>
      );
  }
}

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'List',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, LIST App!</Text>
        <Button
          onPress={() => navigate('Home')}
          title="Home"
        />
      </View>
      );
  }
}

const ListApp = StackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
});

AppRegistry.registerComponent('ListApp', () => ListApp);