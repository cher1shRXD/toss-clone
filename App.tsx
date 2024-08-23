import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import TabScreen from './components/Navigation';
import TabBar from './components/TabBar';
import { ThemeProvider } from './Theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
          <TabScreen />
          <TabBar />
      </NavigationContainer>
    </ThemeProvider>
  );
}




export default App
