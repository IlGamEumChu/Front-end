import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MainNavigator from './MainNavigator';
import IdentityVerification from './IdentityVerification';

export type LoginStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainNavigator: undefined;
  IdentityVerification: undefined;
};

const LoginNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Onboarding'}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{gestureEnabled: true}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{gestureEnabled: true}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{gestureEnabled: true}}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{gestureEnabled: true}}
      />
      <Stack.Screen
        name="IdentityVerification"
        component={IdentityVerification}
        options={{gestureEnabled: true}}
      />
    </Stack.Navigator>
  );
};
export default LoginNavigator;
