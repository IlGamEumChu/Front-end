import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NText} from '../../../common/universal/NText';
import {RootState} from '../../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../MainNavigator';
import BaseModal from '../../../common/universal/BaseModal';
import {Margin} from '../../../common/universal/Margin';
import {Divider} from '../../../common/universal/Divider';
import {colors} from '../../../common/universal/Color';
import CloseButton from '../../../assets/CloseButton.svg';
import {OneToOneHeader, OneToOneView} from '../../../styles/ModalStyles';
import {setIsCompletedModalVisible} from '../../../app/Slices/diarySlice';
import {SRowContainer} from '../../../common/universal/Basic';

const CompletedModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const {isCompletedModalVisible} = useSelector(
    (state: RootState) => state.diaryPage,
  );
  return (
    <BaseModal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={isCompletedModalVisible}
      onBackdropPress={() => dispatch(setIsCompletedModalVisible(false))}>
      <OneToOneView>
        <OneToOneHeader style={{paddingHorizontal: 24}}>
          <TouchableOpacity
            onPress={() => dispatch(setIsCompletedModalVisible(false))}>
            <CloseButton />
          </TouchableOpacity>
          <NText.SB17 text="일기 작성 방식" color={colors.textButtonGray} />
          <View />
        </OneToOneHeader>
        <Margin._25 />
        <Divider borderColor={colors.lineGray} />
        <Margin._24 />
        <NText.SM15
          text={'일기 작성이 완료되었습니다.'}
          color={colors.textTop}
        />
        <Margin._20 />
        <SRowContainer
          style={{
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: '#3F3D56',
              borderRadius: 8,
            }}
            onPress={() => {
              dispatch(setIsCompletedModalVisible(false));
              navigation.goBack();
            }}>
            <NText.SB15 text={'확인'} color={colors.white} />
          </TouchableOpacity>
        </SRowContainer>
        <Margin._20 />
      </OneToOneView>
    </BaseModal>
  );
};

export default CompletedModal;
