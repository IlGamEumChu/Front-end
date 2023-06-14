import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParamList} from './LoginNavigator';
import {NText} from '../../common/universal/NText';

const MainNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FEFCF3', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'일기 작성'} color={'#3F3D56'} />
        <NText.SB14 text={'자동으로 음악을 추천해드려요.'} color={'#3F3D56'} />
      </View>
    </SafeAreaView>
  );
};

export default MainNavigator;
