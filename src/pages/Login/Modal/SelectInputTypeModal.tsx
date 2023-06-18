import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import CloseButton from '../../../assets/CloseButton.svg';
import BaseModal from '../../../common/universal/BaseModal';
import {NText} from '../../../common/universal/NText';
import {Margin} from '../../../common/universal/Margin';
import {Divider} from '../../../common/universal/Divider';
import {colors} from '../../../common/universal/Color';
import {OneToOneHeader, OneToOneView} from '../../../styles/ModalStyles';
import {setIsSelectInputTypeModalVisible} from '../../../app/Slices/diarySlice';
import {SRowContainer} from '../../../common/universal/Basic';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../MainNavigator';
import {useNavigation} from '@react-navigation/native';

const SelectInputTypeModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const {isSelectInputTypeModalVisible} = useSelector(
    (state: RootState) => state.diaryPage,
  );

  return (
    <BaseModal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={isSelectInputTypeModalVisible}
      onBackdropPress={() => dispatch(setIsSelectInputTypeModalVisible(false))}>
      <OneToOneView>
        <OneToOneHeader style={{paddingHorizontal: 24}}>
          <TouchableOpacity
            onPress={() => dispatch(setIsSelectInputTypeModalVisible(false))}>
            <CloseButton />
          </TouchableOpacity>
          <NText.SB17 text="일기 작성 방식" color={colors.textButtonGray} />
          <View />
        </OneToOneHeader>
        <Margin._25 />
        <Divider borderColor={colors.lineGray} />
        <Margin._24 />
        <NText.SM15
          text={'원하는 일기 작성 방식을 선택해주세요.'}
          color={colors.textTop}
        />
        <Margin._20 />
        <SRowContainer
          style={{
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: '#3F3D56', borderRadius: 8}}
            onPress={() => {
              dispatch(setIsSelectInputTypeModalVisible(false));
              navigation.navigate('CreateDiaryWithText');
            }}>
            <NText.SB15 text={'직접 입력'} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: '#E97777', borderRadius: 8}}
            onPress={() => {
              dispatch(setIsSelectInputTypeModalVisible(false));
              navigation.navigate('CreateDiaryWithImage');
            }}>
            <NText.SB15 text={'사진 입력'} color={colors.white} />
          </TouchableOpacity>
        </SRowContainer>
        <Margin._20 />
      </OneToOneView>
    </BaseModal>
  );
};

export default SelectInputTypeModal;
