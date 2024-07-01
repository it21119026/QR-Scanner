import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/index';
import {StackParameterList} from './type';
import {NAVIGATION_STACK} from '../constant/routs';

const AuthStack = createStackNavigator<StackParameterList>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NAVIGATION_STACK.LOGIN as keyof StackParameterList}>
      <AuthStack.Screen
        name={NAVIGATION_STACK.LOGIN as keyof StackParameterList}
        component={Login}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
