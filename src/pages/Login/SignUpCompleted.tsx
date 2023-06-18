import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NText} from '../../common/universal/NText';
import {colors} from '../../common/universal/Color';
import {Margin} from '../../common/universal/Margin';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParamList} from './LoginNavigator';
import {SRowContainer} from '../../common/universal/Basic';
import LoginMainImage from '../../assets/LoginMainImage.svg';

const IdentityVerification = () => {
  const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#3F3D56', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'회원가입이 완료되었습니다.'} color={colors.white} />
        <NText.SB14
          text={'당신만의 일기를 만들어나가보아요.'}
          color={colors.white}
        />
        <SRowContainer>
          <NText.SB14 text={'일감음추'} color={'#E97777'} />
          <NText.SB14 text={'가 도와줄게요.'} color={colors.white} />
        </SRowContainer>
      </View>
      <Margin._40 />
      <View style={{width: '100%', paddingHorizontal: 16}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LoginMainImage />
        </View>
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
