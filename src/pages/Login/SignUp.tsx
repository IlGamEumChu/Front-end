import React, {useState} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Margin} from '../../common/universal/Margin';
import {NText} from '../../common/universal/NText';
import {colors} from '../../common/universal/Color';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParamList} from './LoginNavigator';
const SignUp = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [pwConfirm, setPwConfirm] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#3F3D56', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'회원가입'} color={colors.white} />
        <NText.SB14 text={'간단한 정보만 입력하고,'} color={colors.white} />
        <NText.SB14 text={'다양한 기능을 사용해보세요.'} color={colors.white} />
      </View>
      <Margin._40 />
      <View style={{width: '100%', paddingHorizontal: 16}}>
        <NText.SB10
          text="아이디"
          color={colors.white}
          style={{marginLeft: 4, marginTop: 16}}
        />
        <TextInput
          style={{
            borderRadius: 20,
            height: 48,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
            marginTop: 4,
          }}
          value={id}
          onChangeText={v => setId(v)}
        />
        <NText.SB10
          text="비밀번호"
          color={colors.white}
          style={{marginLeft: 4, marginTop: 16}}
        />
        <TextInput
          style={{
            borderRadius: 20,
            height: 48,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
            marginTop: 4,
          }}
          value={pw}
          onChangeText={v => setPw(v)}
        />
        <NText.SB10
          text="비밀번호 확인"
          color={colors.white}
          style={{marginLeft: 4, marginTop: 16}}
        />
        <TextInput
          style={{
            borderRadius: 20,
            height: 48,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
            marginTop: 4,
          }}
          value={pwConfirm}
          onChangeText={v => setPwConfirm(v)}
        />
        <NText.SB10
          text="닉네임"
          color={colors.white}
          style={{marginLeft: 4, marginTop: 16}}
        />
        <TextInput
          style={{
            borderRadius: 20,
            height: 48,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF5E4',
            marginTop: 4,
          }}
          value={nickname}
          onChangeText={v => setNickname(v)}
        />
        <Margin._40 />
        <TouchableOpacity
          style={{
            borderRadius: 20,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E97777',
          }}
          onPress={() => navigation.navigate('IdentityVerification')}>
          <NText.SB18 text={'다음'} color={colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
