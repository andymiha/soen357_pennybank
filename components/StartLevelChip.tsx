import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

interface StartLevelChipProps {
  onPress?: () => void;
  containerClassName?: string;
}

const StartLevelChip: React.FC<StartLevelChipProps> = ({ onPress, containerClassName = '' }) => {
  return (
    <TouchableOpacity onPress={onPress} className={containerClassName}>
      <View className="relative items-center">
        {/* Startbox */}
        <Image
          source={require('public/images/startbox.png')}
          className="absolute -top-[48px] z-10 object-contain"
        />

        {/* Progress ring  */}
        <Image
          source={require('public/images/progressring.png')}
          className="absolute bottom-[-21px] left-[-14px] h-[93px] w-[98px] object-contain"
        />

        {/* Outer shadow layer: green with solid background */}
        <View className="absolute left-0 top-0 h-[57px] w-[70px] rounded-[31.75px] bg-[#955BCC] shadow-[0px_8px_0px_0px_#58CC02]" />

        {/* Inner chip with star */}
        <View className="flex h-[57px] w-[70px] flex-shrink-0 items-center justify-center rounded-[31.75px] bg-[#955BCC]">
          <Image
            source={require('public/images/star.png')}
            className="h-[35px] w-[42px] object-contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StartLevelChip;
