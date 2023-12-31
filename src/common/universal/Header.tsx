/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Source} from 'react-native-fast-image';
import styled from 'styled-components/native';
import {ImageIcon} from './Basic';
import {colors} from './Color';
import {pixel} from './Margin';
import {NText} from './NText';

interface HeaderContainerProps {
  height: number;
  backgroundColor: string;
  hasGoBack: boolean;
}

const HeaderContainer = styled.View<HeaderContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${pixel(48)}px;
  padding-left: ${props => (props.hasGoBack ? 0 : 24)}px;
  padding-right: 14px;
  background-color: ${props => props.backgroundColor};
`;

interface HeaderProps {
  title?: string;
  // optional cmpnt
  subTitle?: string;
  titleImgSource?: Source | number;
  height?: number;
  hasGoBack: boolean;
  hasColorChip?: boolean;
  onPressGoBack?: () => void;
  headerLeftCmpnt?: JSX.Element; // headerCenter, headerRight 사용 안한다고 가정하고 flex: 1 로 잡음.
  headerRightCmpnt?: JSX.Element;
  headerCenterCmpnt?: JSX.Element;
  headerRetroCmpnt?: JSX.Element;
  backgroundColor?: string;
  onPressTitle?: () => void;
  titleColor?: string;
  retroHeader?: boolean;
}
export const Header = ({
  title,
  titleImgSource,
  height,
  hasGoBack,
  onPressGoBack,
  headerLeftCmpnt,
  headerRightCmpnt,
  headerCenterCmpnt,
  headerRetroCmpnt,
  backgroundColor,
  onPressTitle,
  retroHeader,
}: HeaderProps) => {
  const goBackBoxView: ViewStyle = useMemo(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
    }),
    [],
  );
  const goBackButtonStyle: ViewStyle = useMemo(
    () => ({
      height,
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 10,
    }),
    [height],
  );
  const titleImgStyle: ViewStyle = useMemo(
    () => ({
      justifyContent: 'center',
      paddingRight: 7,
    }),
    [],
  );
  const leftCmpntStyle: ViewStyle = useMemo(
    () => ({
      height,
      flex: 1, // headerCenter, headerRight 사용 안한다고 가정하고 flex: 1 로 잡음.
      justifyContent: 'center',
    }),
    [height],
  );
  const centerCmpntStyle: ViewStyle = useMemo(
    () => ({
      position: 'absolute',
      width: '100%',
      height,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [height],
  );
  const rightCmpntStyle: ViewStyle = useMemo(
    () => ({height: 48, justifyContent: 'center'}),
    [],
  );
  const retroCmptStyle: ViewStyle = useMemo(
    () => ({
      width: '100%',
      flex: 1,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [],
  );

  return (
    <HeaderContainer backgroundColor={backgroundColor} hasGoBack={hasGoBack}>
      {/* 뒤로가기 & 타이틀 */}
      <View style={goBackBoxView}>
        {hasGoBack && (
          <TouchableOpacity onPress={onPressGoBack} style={goBackButtonStyle}>
            <Image
              source={require('../../assets/image/left_arrow.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: retroHeader && colors.primary,
              }}
            />
          </TouchableOpacity>
        )}
        {titleImgSource ? (
          <View style={titleImgStyle}>
            <ImageIcon
              source={titleImgSource}
              width={28}
              height={2}
              resizeMode="contain"
            />
          </View>
        ) : null}
        {title ? (
          <>
            <TouchableOpacity onPress={onPressTitle} activeOpacity={1}>
              <NText.SB23 text={title} color={'black'} numberOfLines={1} />
            </TouchableOpacity>
          </>
        ) : null}
      </View>

      {headerLeftCmpnt ? (
        <View style={leftCmpntStyle}>{headerLeftCmpnt}</View>
      ) : null}

      {headerCenterCmpnt ? (
        <View style={centerCmpntStyle} pointerEvents={'none'}>
          {headerCenterCmpnt}
        </View>
      ) : null}

      {headerRightCmpnt ? (
        <View style={rightCmpntStyle}>{headerRightCmpnt}</View>
      ) : null}

      {headerRetroCmpnt ? (
        <View style={retroCmptStyle}>{headerRetroCmpnt}</View>
      ) : null}
    </HeaderContainer>
  );
};
