import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const LevelPage = () => {
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [coins, setCoins] = useState(5);

  const handleAnswer = (isCorrect: boolean) => {
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) setCoins((prev) => prev + 1);
  };

  return (
    <View className="absolute inset-0 z-50 bg-white">
      {/* Header Row */}
      <View className="absolute left-[62px] top-[74px] z-50 flex flex-row items-center space-x-6">
        {/* Close Button */}
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <Image source={require('public/images/x.png')} />
        </TouchableOpacity>

        {/* Progress Bar */}
        <Image
          source={require('public/images/progressbar.png')}
          className="object-contain pl-[22px]"
        />

        {/* Coins */}
        <View className="flex-row items-center gap-1">
          <Image source={require('public/images/coin.png')} />
          <Text
            className="text-right font-[WorkSans] text-[20px] font-bold text-[#D49000]"
            style={{ fontFamily: 'Work Sans' }}>
            {coins}
          </Text>
        </View>
      </View>

      {/* PennyBank Logo Text */}
      <Text className="font-nunito absolute left-[144px] top-[50px] text-[16px] font-extrabold text-[#79CA40]">
        PennyBank
      </Text>

      {/* Question */}
      <Text className="absolute left-1/2 top-[90px] w-4/5 -translate-x-1/2 text-center text-2xl font-bold text-black">
        What is the capital of France?
      </Text>

      {/* Choice Buttons */}
      <View className="absolute bottom-28 left-4 right-4 flex-col justify-between gap-4">
        {['Paris', 'London', 'Berlin', 'Rome'].map((option, index) => (
          <TouchableOpacity
            key={index}
            className="w-full rounded-2xl bg-gray-200 py-6"
            onPress={() => handleAnswer(option === 'Paris')}>
            <Text className="text-center text-xl font-semibold text-black">{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      {answerStatus && (
        <View
          className={`absolute bottom-0 w-full items-center py-4 ${
            answerStatus === 'correct' ? 'bg-[#58CC02]' : 'bg-red-500'
          }`}>
          <Text className="text-lg font-bold text-white">
            {answerStatus === 'correct' ? '✅ Correct!' : '❌ Incorrect'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LevelPage;
