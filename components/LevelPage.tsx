import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface LevelPageProps {
  onGoBack: () => void;
  onNext: () => void; // called when all levels are complete
}

interface Answer {
  label: string;
  image: any;
  isCorrect: boolean;
}

interface Level {
  question: string;
  answers: Answer[];
  incorrectText: string;
}

// Define four levels with different content.
// Levels 1–3 use 4 answers; level 4 uses 2 answers.
const levels: Level[] = [
  {
    question: 'Select The Fixed Expense',
    answers: [
      { label: 'Rent', image: require('public/images/rent.png'), isCorrect: true },
      { label: 'Phone Bill', image: require('public/images/phonebill.png'), isCorrect: false },
      { label: 'Food', image: require('public/images/food.png'), isCorrect: false },
      { label: 'Car Repair', image: require('public/images/carrepair.png'), isCorrect: false },
    ],
    incorrectText:
      'A fixed expense is a cost that occurs each period and the amount doesn’t change!',
  },
  {
    question: 'Select The Variable Expense',
    answers: [
      { label: 'Gift', image: require('public/images/gift.png'), isCorrect: false },
      { label: 'Water Bill', image: require('public/images/waterbills.png'), isCorrect: true },
      { label: 'Vacation', image: require('public/images/vacation.png'), isCorrect: false },
      { label: 'Netflix', image: require('public/images/netflix.png'), isCorrect: false },
    ],
    incorrectText: 'A variable expense changes over time and its amount can vary each period!',
  },
  {
    question: 'Select The Irregular Expense',
    answers: [
      { label: 'Mortgage', image: require('public/images/mortgage.png'), isCorrect: false },
      { label: 'Groceries', image: require('public/images/groceries.png'), isCorrect: false },
      { label: 'Car Loan', image: require('public/images/carloan.png'), isCorrect: false },
      {
        label: 'Emergency Vet Visit',
        image: require('public/images/vetvisit.png'),
        isCorrect: true,
      },
    ],
    incorrectText:
      'An irregular expense is a cost that doesn’t occur on a regular schedule, like repairs or gifts!',
  },
  {
    question: 'Paul pays for skating lessons each month! Is this an Irregular or Fixed cost?',
    answers: [
      { label: 'Fixed', image: require('public/images/skatefixed.png'), isCorrect: true },
      { label: 'Irregular', image: require('public/images/skateirregular.png'), isCorrect: false },
    ],
    incorrectText:
      'For a regular monthly expense like skating lessons, the cost remains consistent and is considered fixed!',
  },
  {
    question:
      'Jake had to get his car repaired after his car broke down. Is this a Variable or Irregular cost?',
    answers: [
      { label: 'Fixed', image: require('public/images/carfixed.png'), isCorrect: false },
      { label: 'Irregular', image: require('public/images/carrepair.png'), isCorrect: true },
    ],
    incorrectText:
      'A car repair is an irregular cost because it doesn’t happen regularly and is often unexpected!',
  },
  {
    question:
      'Ella bought a big birthday gift for her best friend. Is this a Variable or Irregular cost?',
    answers: [
      { label: 'Fixed', image: require('public/images/birthdayfixed.png'), isCorrect: false },
      {
        label: 'Irregular',
        image: require('public/images/birthdayirregular.png'),
        isCorrect: true,
      },
    ],
    incorrectText:
      'A birthday gift is an irregular cost because it happens occasionally and isn’t part of a regular spending pattern!',
  },
];

const LevelPage = ({ onGoBack, onNext }: LevelPageProps) => {
  // State to track current level, answer status, selected answer, and coins.
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [coins, setCoins] = useState(5);

  // Get current level data
  const level = levels[currentLevel];

  const handleAnswer = (label: string, isCorrect: boolean) => {
    if (answerStatus === null) {
      setSelectedAnswer(label);
      setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) {
        setCoins((prev) => prev + 1);
      }
    }
  };

  const handleContinue = () => {
    if (currentLevel < levels.length - 1) {
      // Proceed to the next level and reset state
      setCurrentLevel((prev) => prev + 1);
      setAnswerStatus(null);
      setSelectedAnswer(null);
    } else {
      // All levels complete
      onNext();
    }
  };

  return (
    <View className="relative z-50 flex-1 bg-white">
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

      {/* Question Section */}
      <View className="mt-10 items-start px-6">
        <View className="mb-2 flex-row items-center gap-2">
          <View className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#A2DB7C] p-[4px]">
            <Image
              source={require('public/images/newconcepticon.png')}
              className="h-full w-full object-contain"
            />
          </View>
          <Text className="font-nunito text-[14px] font-extrabold tracking-[-0.56px] text-[#A2DB7C]">
            NEW CONCEPT - Level {currentLevel + 1}
          </Text>
        </View>
        <Text className="font-nunito text-left text-[24px] font-extrabold text-[#4C4C4C]">
          {level.question}
        </Text>
      </View>

      {/* Choice Buttons / Level Body */}
      <View className="flex-1 flex-row flex-wrap justify-center gap-4 px-6 py-10">
        {level.answers.map(({ label, image, isCorrect }, index) => {
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

      {/* Chat Bubble Popup for Incorrect Answer */}
      {answerStatus === 'incorrect' && (
        <View className="absolute bottom-[150px] left-6 right-6 z-50 rounded-2xl bg-white p-4 shadow-md">
          <Text className="text-base font-semibold text-black">{level.incorrectText}</Text>
        </View>
      )}

      {/* Footer with Continue Button */}
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
              className={`font-nunito text-[24px] font-bold ${
                answerStatus === 'correct' ? 'text-[#6BA52F]' : 'text-[#B3261E]'
              }`}>
              {answerStatus === 'correct' ? 'Amazing!' : 'Incorrect'}
            </Text>
          </View>
          {/* Continue Button */}
          <TouchableOpacity
            onPress={handleContinue}
            className={`w-[335px] rounded-[10px] ${
              answerStatus === 'correct' ? 'bg-[#77C93C]' : 'bg-[#B3261E]'
            } py-[11px] ${
              answerStatus === 'correct'
                ? 'shadow-[0px_4px_0px_0px_#68A62F]'
                : 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            }`}>
            <Text className="font-nunito text-center text-[16px] font-extrabold text-white">
              {answerStatus === 'correct' ? 'CONTINUE' : 'Review With Penny Before Continuing'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LevelPage;
