import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import WhiteLogo from '../assets/logo_white.svg';
import Icon from '../components/Icons';
import {colors} from '../constants/Colors';
import BoardScreen from '../screens/BoardScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QuestScreen from '../screens/QuestScreen';
const RootNavigator = () => {
  const RootTabs = createBottomTabNavigator();
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
        },
      }}>
      <RootTabs.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Home" tabFocused={focused} color="#49454F" />
          ),
        }}
      />
      <RootTabs.Screen
        name="퀘스트"
        component={QuestScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Quest" tabFocused={focused} color="#49454F" />
          ),
        }}
      />
      <RootTabs.Screen
        name="게시판"
        component={BoardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Board" tabFocused={focused} color="#49454F" />
          ),
        }}
      />
      <RootTabs.Screen
        name="내정보"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="Profile" tabFocused={focused} color="#49454F" />
          ),
        }}
      />
    </RootTabs.Navigator>
  );
};

export default RootNavigator;
