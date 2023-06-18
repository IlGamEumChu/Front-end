import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NText} from '../../common/universal/NText';
import {Margin} from '../../common/universal/Margin';
import {colors} from '../../common/universal/Color';
import {MainStackParamList} from '../Login/MainNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CompletedModal from '../Login/Modal/CompletedModal';
import {useDispatch} from 'react-redux';
import {setIsCompletedModalVisible} from '../../app/Slices/diarySlice';

const CreateDiaryWithText = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{flex: 1, backgroundColor: '#FEFCF3', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'일기 작성'} color={'#3F3D56'} />
        <NText.SB14
          text={'일기를 작성하면 자동으로 배경음악을 추천해드려요.'}
          color={'#3F3D56'}
        />
      </View>
      <Margin._50 />
      <View style={{width: '100%', paddingHorizontal: 30}}>
        <NText.SB12 text={'일기 제목'} color={'#3F3D56'} />
        <Margin._10 />
        <TextInput
          style={{
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowColor: 'black',
            shadowOpacity: 0.1,
          }}
          placeholder="일기 제목을 입력해주세요."
          value={title}
          onChangeText={v => setTitle(v)}
        />
        <Margin._20 />
        <NText.SB12 text={'일기 내용'} color={'#3F3D56'} />
        <TextInput
          style={{
            borderRadius: 20,
            height: 300,
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: '#FFFFFF',
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowColor: 'black',
            shadowOpacity: 0.1,
            flexShrink: 1,
          }}
          multiline={true}
          placeholder="일기 제목을 입력해주세요."
          value={title}
          onChangeText={v => setTitle(v)}
        />
      </View>
      <Margin._80 />
      <View style={{width: '70%'}}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3F3D56',
          }}
          onPress={() => {
            dispatch(setIsCompletedModalVisible(true));
          }}>
          <NText.SB18 text={'저장하기'} color={colors.white} />
        </TouchableOpacity>
        <Margin._10 />
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E97777',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <NText.SB18 text={'뒤로가기'} color={colors.white} />
        </TouchableOpacity>
      </View>
      <CompletedModal />
    </SafeAreaView>
  );
};

export default CreateDiaryWithText;
