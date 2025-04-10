import { View, Image, TouchableOpacity } from 'react-native';

const Account = () => {
  return (
    <View className="">
      <TouchableOpacity>
        <Image
          source={require('public/images/avatar.png')}
          className="h-[120px] w-[120px]"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Account;
