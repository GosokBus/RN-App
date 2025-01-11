import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {colors} from '../constants/Colors';
import BoardScreen from '../screens/BoardScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QuestScreen from '../screens/QuestScreen';

const RootNavigator = () => {
  const RootTabs = createBottomTabNavigator();
  return (
    <RootTabs.Navigator
      screenOptions={{
        headerTitle: 'DOHANDS',
        headerStyle: {backgroundColor: colors.PRIMARY_ORANGE, height: 58},
      }}>
      <RootTabs.Screen name="Home" component={HomeScreen} />
      <RootTabs.Screen name="Quest" component={QuestScreen} />
      <RootTabs.Screen name="Board" component={BoardScreen} />
      <RootTabs.Screen name="Profile" component={ProfileScreen} />
    </RootTabs.Navigator>
  );
};

export default RootNavigator;
