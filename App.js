/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { createSwitchNavigator, createAppContainer} from 'react-navigation';

import splachscreen from './app/Loading/splachscreen/Splachscreen';
import Main from './app/Main/Main';


const AppContainer = createAppContainer (
    createSwitchNavigator({
        Loading: splachscreen,
        App : Main // vue principale de l'appli
    }, {
        initialRouteName: 'Loading'// route initiale qui sera au chargement
    })
);



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
        <SafeAreaView style={{flex: 1}}>
          <AppContainer/>
        </SafeAreaView>
    );
  }
};

export default App;