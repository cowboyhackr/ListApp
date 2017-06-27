import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  FlatList,
  StyleSheet
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
                <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
      );
  }
}

const ListApp = StackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
});

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('ListApp', () => ListApp);