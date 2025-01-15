import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import WhiteLogo from '../assets/logo_white.svg';
import Icon from '../components/Icons';
import {colors} from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QuestScreen from '../screens/QuestScreen';
import BoardStackNavigator from './BoardStackNavigator';

type RootBottomTabParamList = {
  Home: undefined;
  Quest: undefined;
  Board: undefined;
  Profile: undefined;
};

const RootNavigator = () => {
  const RootTabs = createBottomTabNavigator<RootBottomTabParamList>();
  const inset = useSafeAreaInsets();
  return (
    <RootTabs.Navigator
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
            <WhiteLogo />
          </View>
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 8,
          color: '#49454F',
        },
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: colors.SECONDARY_ORANGE,
          height: inset.bottom + 80,
          shadowOffset: {width: 0, height: -20},
          shadowRadius: 10,
          shadowOpacity: 0.7,
          shadowColor: colors.WHITE,
        },
      }}>
      <RootTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Home" tabFocused={focused} color="#49454F" />
          ),
          title: '홈',
        }}
      />
      <RootTabs.Screen
        name="Quest"
        component={QuestScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Quest" tabFocused={focused} color="#49454F" />
          ),
          title: '퀘스트',
        }}
      />
      <RootTabs.Screen
        name="Board"
        component={BoardStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Board" tabFocused={focused} color="#49454F" />
          ),
          title: '게시판',
          headerShown: false,
        }}
      />
      <RootTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Profile" tabFocused={focused} color="#49454F" />
          ),
          title: '내정보',
        }}
      />
    </RootTabs.Navigator>
  );
};

export default RootNavigator;
