import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';


class Splachscreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('App');
        }, 3000)
    }

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35, marginTop: 230, color: '#D30651'}}>HACKATHON</Text>
            </View>
        );
    }
}

export default Splachscreen;