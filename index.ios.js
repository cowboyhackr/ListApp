import Swipeout from 'react-native-swipeout';



import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  Alert,
  AsyncStorage,
  ListView,
  TouchableWithoutFeedback,
  TouchableOpacity
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


  constructor(props){
    super(props);

    this.list = [];
    this.loadItems();
  }

  loadItems(){
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
         // get at each store's key/value so you can work with it
         let key = store[i][0];
         let value = store[i][1];
         this.list.push({key:value});
    
        });
      });
    });
  }



  static navigationOptions = {
    title: 'List',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
     
      <View>
        <Text>Location 1 List!</Text>
        <Button
          onPress={() => navigate('Home')}
          title="Home"
        />
        <FlatList
          data={this.list}
          renderItem={({item}) =>  

          <ListItem item={item}/>
        }

        />
          
      </View>
      );
  }
}

class ListItem extends React.Component {


 completeTask(){

 }

 
  render(){

      let swipeoutBtns = [
        {
          text: 'Complete',

          onPress: () => { 

                   Alert.alert(
            'Task completed',
            this.props.item.key
              );

           this.completeTask(this.props.item.key);
                             },

        },
        {text: 'Delete', backgroundColor : '#ff0000'},
        {text: 'Delegate', backgroundColor : '#000000'}
      ];

      return (
          <Swipeout right={swipeoutBtns} id={this.props.item} >
              <View  >
                <Text style={styles.item}>{this.props.item.key}</Text>
              </View>
          </Swipeout>
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

  saveItem(item){
    Alert.alert(
            'Alert Title',
            item
          );

    AsyncStorage.setItem(item, item);

  }
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
          placeholder="Type here to add new item!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button
          onPress={() => this.saveItem(this.state.text)}
          title="Add Item"
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