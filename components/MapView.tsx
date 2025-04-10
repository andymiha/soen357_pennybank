import { View, Image, TouchableOpacity } from 'react-native';
import StartLevelChip from './StartLevelChip';
import LockedLevelChip from './LockedLevelChip';

const MapViewComponent = () => {
  return (
    <View className="relative">
      {/* Background map image */}
      <Image
        source={require('public/images/map.png')}
        className="h-full w-full"
        resizeMode="contain"
      />

      {/* One Start Chip */}
      <StartLevelChip containerClassName="absolute bottom-[160px] left-[172px]" />

      {/* Four Locked Chips */}
      <LockedLevelChip containerClassName="absolute bottom-[247px] left-[11px]" />
      <LockedLevelChip containerClassName="absolute bottom-[347px] left-[109px]" />
      <LockedLevelChip containerClassName="absolute bottom-[375px] left-[292px]" />

      <TouchableOpacity>
        <Image
          source={require('public/images/chest.png')}
          className="absolute bottom-[465px] left-[141px]"
        />
      </TouchableOpacity>

      <LockedLevelChip containerClassName="absolute bottom-[642px] left-[223px]" />
    </View>
  );
};

export default MapViewComponent;
