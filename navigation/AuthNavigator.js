import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, Ta, StackNavigatorbBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import LoginScreen from '../screens/auth/LoginScreen';
import SingUpScreen from '../screens/auth/SignUpScreen';

export default StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SingUpScreen,
    }
  }, {
    mode: 'modal',
    headerMode: 'none',
  }
);
