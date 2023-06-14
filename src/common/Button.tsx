import React from 'react';
import {TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}></TouchableOpacity>
    </View>
  );
};
