import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SRowContainer} from '../../common/universal/Basic';
import {NText} from '../../common/universal/NText';
import {Margin} from '../../common/universal/Margin';
import {colors} from '../../common/universal/Color';

const DiaryResult = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FEFCF3', alignItems: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 17}}>
        <NText.SB26 text={'분석 결과'} color={'#3F3D56'} />
        <NText.SB14 text={'자동으로 음악을 추천해드려요.'} color={'#3F3D56'} />
      </View>
      <Margin._50 />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity>
          <NText.SB16 text="일기 제목" color={colors.textTop} />
          <SRowContainer style={{justifyContent: 'space-between'}}>
            <NText.SB14 text="일기 내용 블라블라" color={colors.textTop} />
            <NText.SB14 text="11/2" color={colors.textTop} />
          </SRowContainer>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DiaryResult;
