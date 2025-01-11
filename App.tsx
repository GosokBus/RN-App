import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import LoginScreen from './src/screens/LoginScreen';

function App(): React.JSX.Element {
  const isLoggedin = 0;
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {isLoggedin ? <RootNavigator /> : <LoginScreen />}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
