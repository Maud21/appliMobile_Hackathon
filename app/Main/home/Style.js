import { StyleSheet} from 'react-native';
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';


const Style = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.black,
      textAlign: 'center',
    },
    highlight: {
      fontWeight: '700',
      fontSize :25,
      color: Colors.blue,
      marginBottom: 20,
      alignItems: 'center',
      
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

  export default Style;