import { View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View className="absolute top-[-40px]">
      <Image source={require('public/images/ellipse-15.png')} className="" resizeMode="contain" />
      <View className="absolute inset-0 flex items-center justify-center">
        <Text className="font-nunito text-4xl font-black leading-normal text-[#79CA40]">
          PennyBank
        </Text>
      </View>
    </View>
  );
};

export default Header;
