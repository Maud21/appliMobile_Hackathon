import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

class News extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'News',
        /*tabBarIcon: () => (<Icon name=""/>)*/
    };

    render() {
        return (
            <View>
                <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>

                    <View style={styles.main_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title}>Sophia : le 3ème Hackathon du Collectif WHAT06 sera vert</Text>
                    </View>
                    <View style={styles.image_container}>
                    <Image style={styles.image}
                            source={require('../../../assets/images/green.jpeg')}/>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.decription} numberOfLines={20}>
                        En terme d’innovation et de créativité, c'est une référence sur la Côte d’Azur : 
                        le 3ème Hackathon du collectif WHAT06 aura lieu à Skema Business School les 15 et 16 
                        novembre sur le thème de la Green Tech. Il sera consacré aux enjeux majeurs du 
                        21ème siècle : changement climatique, énergie renouvelable, transition énergétique, 
                        qualité de l’air, gestion des déchets, réchauffement climatique, énergie propre, 
                        biodiversité, consommation responsable. Un thème large qui ouvre sur des sujets 
                        comme smart city, covoiturage, gestion des déchets, changement climatique, 
                        réduction d'empreinte carbone, énergie propre, 0 gaspillage, permaculture, biodiversité…..
                        </Text>
                    </View>
                    

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 1000
    },
    header_container: {
        flex: 1,
        margin: 5
    },
    title: {
        fontSize: 20,
        color: '#056418',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image_container: {
        flex: 2,
        margin: 10
    },
    image: {
        width: 330,
        height: 150,
        margin: 5,
        alignItems: 'center'
    },
    description_container: {
        flex: 7,
        margin: 5,

    },
    description: {
        fontSize: 18,
        margin: 20,
        textAlign :'justify'
    }
})

export default News;

