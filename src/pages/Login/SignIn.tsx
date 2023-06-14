import React, {useState} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginMainImage2 from '../../assets/LoginMainImage2.svg';
import {Margin} from '../../common/universal/Margin';
import {NText} from '../../common/universal/NText';
import {colors} from '../../common/universal/Color';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParamList} from './LoginNavigator';
const SocialLogin = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#3F3D56', alignItems: 'center'}}>
      <LoginMainImage2 />
      <View style={{width: '100%', paddingHorizontal: 16}}>
        <NText.SB16
          text="아이디"
          color={colors.white}
          style={{marginLeft: 4}}
        />
        <TextInput
          style={{
            borderRadius: 20,
            height: 48,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
          }}
          value={id}
          onChangeText={v => setId(v)}
        />
        <NText.SB16
          text="비밀번호"
          color={colors.white}
          style={{marginLeft: 4}}
        />
        <TextInput
          style={{
            borderRadius: 20,
            height: 48,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
          }}
          value={pw}
          onChangeText={v => setPw(v)}
        />
        <Margin._50 />
        <TouchableOpacity
          style={{
            borderRadius: 20,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
          }}>
          <Text style={{fontSize: 18, color: '#3F3D56'}}>로그인</Text>
        </TouchableOpacity>
        <Margin._20 />
        <TouchableOpacity
          style={{
            borderRadius: 20,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E97777',
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 18, color: '#FFFFFF'}}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SocialLogin;
