import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  TextInput
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
                <Button
          onPress={() => navigate('Add')}
          title="Add"
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
        <Text>Your List!</Text>
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

class AddScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'Add',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{padding: 10}}>
        <Text>Add a new item!</Text>
        <Button
          onPress={() => navigate('Home')}
          title="Home"
        />
                <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
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
  Add: {screen: AddScreen}
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