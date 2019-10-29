
import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 

//Components import
import Home from './home/Home';
import MeetUp from './meetUp/MeetUp';
import News from './news/News';

const MainTabNavigator = createAppContainer(
  createBottomTabNavigator ({
    Home: Home,
    MeetUp: MeetUp,
    News : News
  }, {
    initialRouteName: 'Home'

  })
);

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <MainTabNavigator/>
    );
  }
};

export default Main;