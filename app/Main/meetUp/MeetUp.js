import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Communications from 'react-native-communications';




class MeetUp extends React.Component {

        _action = () => {
            Communications.web('http://www.fanstriker.com/human2sport-hackathon-experience-spectateur/')
        }   

        _action2 = () => {
            Communications.web('https://www.hackathon.com/event/hackathon-cnp-assurances---vers-de-nouvelles-experiences-clients-50434390620/')
        }  

        _action3 = () => {
            Communications.web('https://miss-mooc.paris/2017/12/11/dossier-hackathon-4-on-vous-parle-de-hackathons-cercleape-et-renault/')
        } 

        render() {
            return (
                <View>
                <View style={styles.main_container}>
                    <Image style={styles.image}
                    source={require('../../../assets/images/rencontre1.jpeg')}/>
                    <View style={styles.content_container}>        
                        <View style={styles.view_header}>
                            <TouchableOpacity onPress={this._action}>
                            <Text style={styles.title1}>HUMAN2SPORT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.description_container}>
                            <View style={styles.description} >
                                <Text style={styles.nbre_participants}>60 participants</Text>
                                <Text style={styles.description_text} numberOfLines={3}>La participation à ce hackathon était entièrement gratuite. Les repas étaient inclus et des salles équipées pour travailler étaient à disposition (lors d’un hackathon, 
                                tout est fourni ou presque pour que le participant puisse travailler dans les meilleures conditions possibles). Une salle commune était à disposition pour déjeuner, 
                                qui nous permettait de discuter tout en continuant de travailler.</Text>
                            </View>
                            
                            
                            
                            
                            
                        </View>
                    </View>
                </View>

                 <View style={styles.main_container}>
                    <Image style={styles.image}
                    source={require('../../../assets/images/hackathon_assurance.jpeg')}/>
                    <View style={styles.content_container}>        
                        <View style={styles.view_header}>
                        <TouchableOpacity onPress={this._action2}>
                            <Text style={styles.title1}>HACKATHON CNP ASSURANCES</Text>
                        </TouchableOpacity>     
                        </View>
                        <View style={styles.description_container}>
                            <View style={styles.description} >
                                <Text style={styles.nbre_participants}>20 participants</Text>
                                <Text style={styles.description_text} numberOfLines={3}>
                                Le but de ces événements est de créer des projets de produits/services 
                                les plus aboutis possibles en un temps limité.</Text>
                            </View>
                            
                        </View>
                    </View>
                </View>

                   <View style={styles.main_container}>
                    <Image style={styles.image}
                    source={require('../../../assets/images/hack_exp.jpeg')}/>
                    <View style={styles.content_container}>        
                        <View style={styles.view_header}>
                        <TouchableOpacity onPress={this._action3}>
                            <Text style={styles.title1}>HACKER LES PROCESS RH</Text>
                        </TouchableOpacity>    
                        </View>
                        <View style={styles.description_container}>
                            <View style={styles.description} >
                                <Text style={styles.nbre_participants}>34 participants</Text>
                                <Text style={styles.description_text} numberOfLines={3}>
                                Celui-ci était dans les “règles de l’art”, c’est à dire sur 33h ! 
                                Autant vous dire qu’au niveau implication c’était décuplé. 
                                Sur celui-ci j’ai eu la chance de faire partie de l’équipe logistique 
                                qui est un des groupes qui a fait que l’événement a pu aller au bout du week end.</Text>
                            </View>
                        </View>
                    </View>
                </View>                   
                
                </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        main_container: {
            height: 180,
            flexDirection: 'row'
        },
        image: {
            width: 120,
            height: 120,
            margin: 5,
            
        },
        content_container: {
            flex: 1,
            margin: 5
        },
        view_header: {
            flex: 4,
            flexDirection: 'row'
        },
        title1: {
           fontSize: 15,
           color: '#080AD2',
           fontWeight: 'bold'
        },
        nbre_participants: {
            fontWeight: 'bold',
            color: '#D30651',
            fontSize: 15
        },
        description_container: {
            flex: 7
        },
        description_text: {
            fontSize: 10,
            fontStyle: 'italic'
        }
    
    });
    
    


export default MeetUp;

/*
_action = () => {
    Communication.web('http://')
}
<TouchableOpacity onPress={this._action}>
      <Image
        style={styles.button}
        source={require('./myButton.png')}
      />
    </TouchableOpacity> */