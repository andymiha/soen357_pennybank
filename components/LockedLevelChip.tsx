import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

interface LockedLevelChipProps {
  onPress?: () => void;
  containerClassName?: string;
}

const LockedLevelChip: React.FC<LockedLevelChipProps> = ({ onPress, containerClassName = '' }) => {
  return (
    <TouchableOpacity onPress={onPress} className={containerClassName}>
      <View className="relative">
        {/* Outer shadow layer: gray using hex and solid background */}
        <View className="absolute left-0 top-0 h-[57px] w-[70px] rounded-[31.75px] bg-[#E5E5E5] shadow-[0px_8px_0px_0px_#E5E5E5]" />
        {/* Inner chip with lock and solid inner shadow using gray hex */}
        <View className="flex h-[57px] w-[70px] flex-shrink-0 items-center justify-center rounded-[31.75px] bg-[#E5E5E5] shadow-[0px_8px_0px_0px_#CCCCCC]">
          <Image
            source={require('public/images/lock.png')}
            className="top-1 h-[25px] w-[21px] object-contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LockedLevelChip;
