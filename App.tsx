import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './components/Navigation';
import { ThemeProvider } from './Theme/ThemeProvider';

const App = () => {

  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
}




export default App
