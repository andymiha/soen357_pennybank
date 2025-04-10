import { View, TouchableOpacity, Text, Image } from 'react-native';

const BottomNav = () => {
  return (
    <View className="flex-row items-center justify-center justify-around bg-[#295980] p-4">
      <TouchableOpacity className="items-center">
        <Image
          source={require('public/images/home.png')}
          className="mb-1 h-[52px] w-[52px]"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Image
          source={require('public/images/achievements.png')}
          className="mb-1 h-[57px] w-[57px]"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Image
          source={require('public/images/money.png')}
          className="bottom-1 mb-1 h-[54px] w-[54px]"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Image
          source={require('public/images/settings.png')}
          className="mb-1 h-[53px] w-[53px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
