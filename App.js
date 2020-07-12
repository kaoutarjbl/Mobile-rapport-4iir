import React from 'react'

import Navigation from './Navigation/Navigation'

import { Provider } from 'react-redux'

import Store from './Store/configureStore'


export default class App extends React.Component
 {
  render() {
    
return (
     
 <Provider store={Store}>
     
   <Navigation/>
     
 </Provider>
    )
  }
}



/*    initialRegion={{
        laltitude,
        longitude,
        laltitudeDelta:0.092,
        longitudeDelta: 0.04
      }}

import { createStackNavigator } from 'react-navigation-stack'

import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'


const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)
*/







/*
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import * as firebase from "firebase";
import { TextInput } from 'react-native-gesture-handler';

   export default class HomeScreen extends React.Component{
     state = {
       email: "",
       displayName: ""
     };

     componentDidMount()
     {
       const { email, displayName} = firebase.auth().currentUser;
       this.setState({email, displayName});
     }

     signOutUser = () =>  {
       firebase.auth().signOut();

     };

render()

  {
      return (
        <View style={styles.container} >
               <Text>Hi {this.state.email}!</Text>
               <TouchableOpacity style ={{marginTop: 32}} onPress={this.signOutUser}>
               <Text>Logout</Text>
               </TouchableOpacity>

       </View>
      );
  }
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justufyContent: "center",
    alignItems: "center"
}

});

*/!!!


{
   tabBarOptions:
   {
     activeTintColor= "#161F3D",
     ibactiveTintColor: "#B8B8C4",
     showLabel:false
   }
}

