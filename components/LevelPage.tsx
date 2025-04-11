import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface LevelPageProps {
  onGoBack: () => void;
}

const LevelPage = ({ onGoBack }: LevelPageProps) => {
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [coins, setCoins] = useState(5);

  const answers = [
    { label: 'Rent', image: require('public/images/rent.png'), isCorrect: true },
    { label: 'Phone Bill', image: require('public/images/phonebill.png'), isCorrect: false },
    { label: 'Food', image: require('public/images/food.png'), isCorrect: false },
    { label: 'Car Repair', image: require('public/images/carrepair.png'), isCorrect: false },
  ];

  const handleAnswer = (label: string, isCorrect: boolean) => {
    if (answerStatus === null) {
      setSelectedAnswer(label);
      setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) setCoins((prev) => prev + 1);
    }
  };

  return (
    <View className="z-50 flex-1 bg-white">
      {/* Header Row */}
      <View className="relative mt-[74px]">
        <Text className="font-nunito absolute left-1/2 top-[-24px] -translate-x-1/2 text-[16px] font-extrabold text-[#79CA40]">
          PennyBank
        </Text>

        <View className="flex-row items-center justify-between px-[20px]">
          <TouchableOpacity onPress={onGoBack}>
            <Image source={require('public/images/x.png')} />
          </TouchableOpacity>

          <Image source={require('public/images/progressbar.png')} className="object-contain" />

          <View className="flex-row items-center gap-1">
            <Image source={require('public/images/coin.png')} />
            <Text
              className="text-right font-[WorkSans] text-[20px] font-bold text-[#D49000]"
              style={{ fontFamily: 'Work Sans' }}>
              {coins}
            </Text>
          </View>
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
            NEW CONCEPT
          </Text>
        </View>
        <Text className="font-nunito text-left text-[24px] font-extrabold text-[#4C4C4C]">
          Select The Fixed Expense
        </Text>
      </View>

      {/* Choice Buttons */}
      <View className="flex-1 flex-row flex-wrap justify-center gap-4 px-6 py-10">
        {answers.map(({ label, image, isCorrect }, index) => {
          const isSelected = selectedAnswer === label;
          const correct = isCorrect && isSelected;
          const incorrect = !isCorrect && isSelected;

          const bgColor = correct ? 'bg-[#E2F2FF]' : incorrect ? 'bg-[#F9DEDC]' : 'bg-white';

          const borderColor = correct
            ? 'border-[#53ADF0]'
            : incorrect
              ? 'border-[#B3261E]'
              : 'border-[#E5E5E5]';

          const shadowColor = correct
            ? 'shadow-[0px_4px_0px_0px_#53ADF0]'
            : incorrect
              ? 'shadow-[0px_4px_0px_0px_#852221]'
              : 'shadow-[0px_4px_0px_0px_#E5E5E5]';

          const textColor = correct
            ? 'text-[#53ADF0]'
            : incorrect
              ? 'text-[#852221]'
              : 'text-[#4C4C4C]';

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(label, isCorrect)}
              className={`flex h-[210px] w-[158px] flex-col items-center justify-end gap-[47.5px] rounded-[16px] border-2 ${bgColor} ${borderColor} ${shadowColor}`}>
              <Image
                source={image}
                style={label === 'Phone Bill' ? { transform: [{ translateY: 20 }] } : {}}
                className="object-contain"
              />
              <Text
                className={`bottom-[19px] text-center font-[WorkSans] text-[15px] font-medium ${textColor}`}
                style={{ fontFamily: 'Work Sans' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Custom Footer */}
      {answerStatus && (
        <View
          className={`w-full px-6 py-6 ${answerStatus === 'correct' ? 'bg-[#DFFEBF]' : 'bg-[#F9DEDC]'}`}
          style={{ height: 159 }}>
          {/* Icon and Status Text Row */}
          <View className="mb-4 flex-row items-center gap-3">
            <Image
              source={require('public/images/penny.png')}
              className="h-12 w-12 object-contain"
            />
            <Text
              className={`font-nunito text-[24px] font-bold ${answerStatus === 'correct' ? 'text-[#6BA52F]' : 'text-[#B3261E]'}`}>
              {answerStatus === 'correct' ? 'Amazing!' : 'Incorrect'}
            </Text>
          </View>

          {/* Button */}
          {answerStatus === 'correct' ? (
            <TouchableOpacity className="w-[335px] rounded-[10px] bg-[#77C93C] py-[11px] shadow-[0px_4px_0px_0px_#68A62F]">
              <Text className="font-nunito text-center text-[16px] font-extrabold text-white">
                CONTINUE
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity className="w-[335px] rounded-[10px] bg-[#B3261E] py-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <Text className="font-nunito text-center text-[16px] font-extrabold text-white">
                Review With Penny Before Continuing
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default LevelPage;
