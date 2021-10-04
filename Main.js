/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import ToptabBar from '../src/screen/ToptabBar';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="chat" component={ToptabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Main;
