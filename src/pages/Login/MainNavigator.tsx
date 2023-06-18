import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from '../Main/MainMenu';
import DiaryResult from '../Main/DiaryResult';
import CreateDiaryWithText from '../Main/CreateDiaryWithText';
import CreateDiaryWithImage from '../Main/CreateDiaryWithImage';

export type MainStackParamList = {
  MainMenu: undefined;
  DiaryResult: undefined;
  CreateDiaryWithText: undefined;
  CreateDiaryWithImage: undefined;
};
const MainNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'MainMenu'}>
      <MainStack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{gestureEnabled: true}}
      />
      <MainStack.Screen
        name="DiaryResult"
        component={DiaryResult}
        options={{gestureEnabled: true}}
      />
      <MainStack.Screen
        name="CreateDiaryWithText"
        component={CreateDiaryWithText}
        options={{gestureEnabled: true}}
      />
      <MainStack.Screen
        name="CreateDiaryWithImage"
        component={CreateDiaryWithImage}
        options={{gestureEnabled: true}}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
