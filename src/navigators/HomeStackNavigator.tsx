import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../components/Icons';
import {colors} from '../constants/Colors';
import ExpListScreen from '../screens/ExpListScreen';
import HomeScreen from '../screens/HomeScreen';

export type HomeStackParamLists = {
  Main: undefined;
  ExpList: undefined;
};

const HomeStackNavigator = () => {
  const HomeStack = createStackNavigator<HomeStackParamLists>();
  const inset = useSafeAreaInsets();
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => (
          <View
            style={{
              marginTop: inset.top,
              justifyContent: 'center',
              alignItems: 'center',
              height: 58,
              backgroundColor: colors.PRIMARY_ORANGE,
            }}>
            <Icon name="WhiteLogo" />
          </View>
        ),
      }}>
      <HomeStack.Screen name="Main" component={HomeScreen} />
      <HomeStack.Screen
        name="ExpList"
        component={ExpListScreen}
        options={{
          header: ({navigation}) => (
            <View
              style={{
                marginTop: inset.top,
                justifyContent: 'center',
                alignItems: 'flex-start',

                height: 58,
                backgroundColor: colors.PRIMARY_ORANGE,
              }}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={{
                  width: 48,
                  height: 48,
                  marginLeft: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="ArrowLeft" fill={colors.WHITE} />
              </Pressable>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
