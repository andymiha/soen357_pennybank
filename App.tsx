import { StatusBar } from 'expo-status-bar';
import HomeScreen from 'screens/Home/HomeScreen';
import './global.css';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
