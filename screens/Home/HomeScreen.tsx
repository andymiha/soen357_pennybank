import React, { useState } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import Account from '../../components/Account';
import MapView from '../../components/MapView';
import BottomNav from '../../components/BottomNav';
import LevelPage from '../../components/LevelPage';

const HomeScreen = () => {
  const [showLevel, setShowLevel] = useState(false);

  return (
    <View className="flex-1 bg-gray-50" style={{ position: 'relative' }}>
      {!showLevel && (
        <>
          <View className="absolute top-[40px] z-10 w-full items-center">
            <Header />
          </View>

          <View className="absolute left-[11px] top-[134px] z-10">
            <Account />
          </View>

          <View className="relative flex-1 bg-[#79CA40]">
            <MapView onStart={() => setShowLevel(true)} />
          </View>

          <View className="absolute bottom-0 z-10 w-full">
            <BottomNav />
          </View>
        </>
      )}

      {showLevel && <LevelPage onGoBack={() => setShowLevel(false)} />}
    </View>
  );
};

export default HomeScreen;
