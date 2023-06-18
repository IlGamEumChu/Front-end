import React, {useEffect, useState} from 'react';
import LoginNavigator from './src/pages/Login/LoginNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/app/store';
import {defaultAxios} from './src/api';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native';
import LoginMainImage from './src/assets/LoginMainImage.svg';

const App = () => {
  useEffect(() => {
    defaultAxios();
  }, []);
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      console.log('After Splashed 3seconds');
      setIsAppLoading(false);
      SplashScreen.hide();
    }, 3000);
  }, []);

  return isAppLoading ? (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FEFCF3', alignItems: 'center'}}>
      <LoginMainImage />
    </SafeAreaView>
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
