/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  BaseModal,
  colors,
  Divider,
  Margin,
  NText,
  SRowContainer,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import CloseButton from '../../assets/image/CloseButton.svg';
import {setIsReconnectModalVisible} from '../../../app/Slices/diarySlice';
import {YellowBox} from '../../styles/ProfileMainStyles';

const ReconnectModal = () => {
  const dispatch = useDispatch();
  const {isReconnectModalVisible} = useSelector((state: RootState) => ({
    isReconnectModalVisible: state.diaryPage.isReconnectModalVisible,
  }));
  return (
    <BaseModal
      isVisible={isReconnectModalVisible}
      onBackdropPress={() => dispatch(setIsReconnectModalVisible(false))}>
      <>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 19,
            paddingTop: 15,
            paddingBottom: 20,
            backgroundColor: colors.white,
            borderRadius: 6,
          }}>
          <Image
            source={require('../../assets/image/right_nanal.png')}
            style={{
              width: 318,
              height: 175,
              position: 'absolute',
              bottom: 0,
              right: -20,
              resizeMode: 'contain',
              zIndex: 2,
            }}
          />
          <Margin._25 />
          <Margin.CustomWidth margin={40} style={{zIndex: 1}} />
          <View style={{alignItems: 'center'}}>
            <NText.SB15 text={'재 로그인 안내'} color={colors.textButtonGray} />
            <View />
          </View>
          <Margin._25 />
          <Divider borderColor={colors.lineGray} />
          <Margin._35 />
          <View style={{alignItems: 'center'}}>
            <NText.SM15
              text={'장기간 미접속으로 인해 로그아웃 되었어요.'}
              color={colors.textTop}
            />
            <NText.SM15
              text={'서비스 이용을 위해 다시 로그인해주세요!'}
              color={colors.textTop}
            />
          </View>
          <Margin._25 />
          <YellowBox
            onPress={() => {
              dispatch(setIsReconnectModalVisible(false));
            }}
            style={{width: '100%', zIndex: 2}}>
            <NText.SB15 text={'계속하기'} color={colors.white} />
          </YellowBox>
          <Margin._25 />
        </View>
      </>
    </BaseModal>
  );
};

export default ReconnectModal;
