import { View, Image } from 'react-native';
import StartLevelChip from './StartLevelChip';
import LockedLevelChip from './LockedLevelChip';

const MapViewComponent = ({ onStart }: { onStart: () => void }) => {
  return (
    <View className="relative">
      <Image
        source={require('public/images/map.png')}
        className="h-full w-full"
        resizeMode="contain"
      />

      <StartLevelChip containerClassName="absolute bottom-[160px] left-[172px]" onPress={onStart} />

      <LockedLevelChip containerClassName="absolute bottom-[247px] left-[11px]" />
      <LockedLevelChip containerClassName="absolute bottom-[347px] left-[109px]" />
      <LockedLevelChip containerClassName="absolute bottom-[375px] left-[292px]" />

      <Image
        source={require('public/images/chest.png')}
        className="absolute bottom-[465px] left-[141px]"
      />

      <LockedLevelChip containerClassName="absolute bottom-[642px] left-[223px]" />
    </View>
  );
};

export default MapViewComponent;
