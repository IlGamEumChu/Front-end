import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginMainImage from '../../assets/LoginMainImage.svg';
import {Margin} from '../../common/universal/Margin';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParamList} from './LoginNavigator';
const Onboarding = () => {
  const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FEFCF3', alignItems: 'center'}}>
      <LoginMainImage />
      <Margin._100 />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={{
          borderRadius: 20,
          width: 328,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3F3D56',
        }}>
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>시작하기</Text>
      </TouchableOpacity>
      <Margin._20 />
      <TouchableOpacity
        style={{
          borderRadius: 20,
          width: 328,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E97777',
        }}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>회원가입</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Onboarding;
