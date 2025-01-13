import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigators/RootNavigator';
import LoginScreen from './src/screens/LoginScreen';

function App(): React.JSX.Element {
  const isLoggedin = 1;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedin ? <RootNavigator /> : <LoginScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
