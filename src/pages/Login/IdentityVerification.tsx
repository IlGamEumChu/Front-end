import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NText} from '../../common/universal/NText';
import {colors} from '../../common/universal/Color';
import {Margin} from '../../common/universal/Margin';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParamList} from './LoginNavigator';
import {SRowContainer} from '../../common/universal/Basic';

const IdentityVerification = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#3F3D56', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'본인인증'} color={colors.white} />
        <NText.SB14 text={'당신의 일기는 소중하니까,'} color={colors.white} />
        <SRowContainer>
          <NText.SB14 text={'일감음추'} color={'#E97777'} />
          <NText.SB14 text={'가 지켜줄게요.'} color={colors.white} />
        </SRowContainer>
      </View>
      <Margin._40 />
      <View style={{width: '100%', paddingHorizontal: 16}}>
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
          value={email}
          onChangeText={v => setEmail(v)}
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
          value={code}
          onChangeText={v => setCode(v)}
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
          onPress={() => navigation.navigate('MainNavigator')}>
          <NText.SB18 text={'다음'} color={colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IdentityVerification;
