import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface RealLifeScenarioProps {
  onGoBack: () => void;
}

const RealLifeScenario = ({ onGoBack }: RealLifeScenarioProps) => {
  const [timeLeft, setTimeLeft] = useState(6 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString(); // no padStart, so 6:00 instead of 06:00
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View className="relative mt-[76px] flex-1">
      {/* Header */}
      <Text className="font-nunito absolute left-1/2 top-[-24px] -translate-x-1/2 text-[16px] font-extrabold text-[#79CA40]">
        PennyBank
      </Text>
      <View className="mt-[4px] flex-row items-center justify-between px-[20px]">
        {/* Left: X button */}
        <TouchableOpacity onPress={onGoBack}>
          <Image source={require('public/images/x.png')} />
        </TouchableOpacity>
        {/* Middle: Progress bar with manual spacing */}
        <View className="ml-[22px] mr-[-8px]">
          <Image
            source={require('public/images/progressbar.png')}
            className="object-contain"
            resizeMode="contain"
          />
        </View>
        {/* Right: Timer with clock icon */}
        <View className="relative w-[80px] items-end">
          <Text
            className="pr-6 text-right text-[20px] font-bold text-[#D49000]"
            style={{ fontFamily: 'Work Sans' }}>
            {formatTime(timeLeft)}
          </Text>
          <Image
            source={require('public/images/clock.png')}
            className="absolute right-[-8px] top-1/2 h-[20px] w-[20px] -translate-y-1/2"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Question */}
      <View className="mt-10 items-start px-6">
        <View className="mb-2 flex-row items-center gap-2">
          <View className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#A2DB7C] p-[4px]">
            <Image
              source={require('public/images/newconcepticon.png')}
              className="h-full w-full object-contain"
            />
          </View>
          <Text className="font-nunito text-[14px] font-extrabold tracking-[-0.56px] text-[#A2DB7C]">
            REAL-LIFE SCENARIO
          </Text>
        </View>
      </View>

      {/* Game Grid with PNGs replacing containers */}
      <View className="flex-1">
        <View className="flex-row p-1">
          {/* Left Column with 3 stacked PNGs */}
          <View className="flex-1 flex-col gap-[5px]">
            <Image source={require('public/images/Container1.png')} />
            <Image source={require('public/images/Container2.png')} />
            <Image source={require('public/images/Container3.png')} />
          </View>

          {/* Right Column: Container4 PNG */}
          <View className="">
            <Image source={require('public/images/Container4.png')} />
          </View>
        </View>

        {/* Bottom Section: Message and Avatar */}
        <View className="px-6 pb-6">
          <Text className="mb-4 text-center text-lg font-semibold">
            Boost your income with better ingredients!
          </Text>
          <View className="flex-row items-end">
            <Image source={require('public/images/avatar.png')} className="" resizeMode="cover" />
            <View className="ml-2 flex-1 rounded-2xl bg-white p-4 shadow-sm">
              <Text className="text-lg">The oven broke! We need to pay 15$ in repair costs!</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RealLifeScenario;
