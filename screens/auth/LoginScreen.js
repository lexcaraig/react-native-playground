import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { RkButton, RkTextInput } from 'react-native-ui-kitten';

import { MonoText } from '../../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
            <RkTextInput label={'Username'}/>
            <RkTextInput label={'Password'}/>
            <RkButton onPress={() => this.props.navigation.navigate('Home')}>
                Login
            </RkButton>
            <Button onPress={() => this.props.navigation.navigate('SignUp')} title='Sign Up' />
        </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});
