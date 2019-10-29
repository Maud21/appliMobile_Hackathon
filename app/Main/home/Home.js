import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  Button,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,

} from 'react-native';


import styles from './Style';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  static navigationOptions = {
    tabBarIcon: () => (<Icon name="home" size={30} color="#4F8EF7"/>)
  };

  render(){
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                
                <View>
                <Image
          style={{width: 300, height: 180, marginLeft: 5, marginRight: 5, flex: 1}}
          source={require('../../../assets/images/hackathon.jpeg')}
        />
        
        <Button style={{padding: 20}}
          title="Plus d'infos"
          onPress={() => alert('De 20h à 6h du mat à Biot')}
        />
      </View>
              <Text style={{fontWeight: 'bold', fontSize: 25, flex: 1, alignItems: 'center', marginLeft: 5, marginRight: 5, color: '#D30651', textAlign: 'center'}}>Hacker - Marathon</Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Samedi 26 octobre</Text>
                <Button style={{width: 20}}
          title="M'inscrire"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
                <Text style={styles.sectionDescription}>
                  
                </Text>
              </View>
              <View style={styles.sectionContainer}>

              <Image
          style={{width: 150, height: 150, marginLeft: 75, marginRight: 20, flex: 1}}
          source={require('../../../assets/images/Hackathon_logo.jpeg')}
        />

              <View style={{flex: 1, backgroundColor: '#D30651', alignItems: 'center'}}> 
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white', marginTop: 15, marginBottom: 15 }}>Voir les participants</Text></View>

              <Text style={{fontSize: 18, textAlign:'center', marginTop: 20,}}>« Le hackathon est un formidable concept pour booster l’innovation dans l’entreprise » 
              Les hackathons - contraction de « hack » et de « marathon » - se développent dans les entreprises. Sur un temps prédéfini, des groupes de développeurs peuvent tester des idées, produire des prototypes d’applications...</Text>

              <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={{textAlign: 'center', fontSize: 22, color: '#D30651', fontWeight: 'bold', marginTop: 20 }}>Autres évènements</Text>
                    <Image
                      style={styles.button}
                      style={{width: 200, height: 200, marginLeft: 60, marginRight: 20, flex: 1}}
                      source={require('../../../assets/images/events.jpeg')}
                    />
              </TouchableOpacity>
                
              <View style={{flex: 1, backgroundColor: '#D30651', marginTop: 30, height: 100}}> 
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: 15, marginBottom: 15, textAlign: 'center' }}>
                Agence spécialisée dans l'organisation de Hackathons
                depuis 2010
              </Text></View>
              </View>
              
              
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
};

export default Home;

