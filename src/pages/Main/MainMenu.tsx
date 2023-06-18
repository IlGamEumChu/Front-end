import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NText} from '../../common/universal/NText';
import {Margin} from '../../common/universal/Margin';
import {colors} from '../../common/universal/Color';
import {SRowContainer} from '../../common/universal/Basic';
import {Divider} from '../../common/universal/Divider';
import AddDiaryButton from '../../assets/AddDiaryButton.svg';
import {setIsSelectInputTypeModalVisible} from '../../app/Slices/diarySlice';
import {useDispatch} from 'react-redux';
import SelectInputTypeModal from '../Login/Modal/SelectInputTypeModal';

const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{flex: 1, backgroundColor: '#FEFCF3', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'일기 메뉴'} color={'#3F3D56'} />
        <NText.SB14 text={'당신의 일기를 확인해보세요.'} color={'#3F3D56'} />
      </View>
      <Margin._50 />
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity>
          <NText.SB16 text="일기 제목" color={colors.textTop} />
          <SRowContainer style={{justifyContent: 'space-between'}}>
            <NText.SB14 text="일기 내용 블라블라" color={colors.textTop} />
            <NText.SB14 text="11/2" color={colors.textTop} />
          </SRowContainer>
          <Divider borderColor={colors.lineGray} style={{marginTop: 16}} />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 100,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setIsSelectInputTypeModalVisible(true));
            }}>
            <AddDiaryButton />
          </TouchableOpacity>
        </View>
      </View>
      <SelectInputTypeModal />
    </SafeAreaView>
  );
};

export default MainMenu;
