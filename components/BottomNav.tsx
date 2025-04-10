import { View, TouchableOpacity, Text, Image } from 'react-native';

const BottomNav = () => {
  return (
    <View className="flex-row items-center justify-around bg-[#295980] p-4">
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
          className="mb-1 h-[52px] w-[52px]"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Image
          source={require('public/images/money.png')}
          className="mb-1 h-[52px] w-[52px]"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Image
          source={require('public/images/settings.png')}
          className="mb-1 h-[52px] w-[52px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
