import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../components/Icons';
import {colors} from '../constants/Colors';
import EditScreen from '../screens/EditScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type ProfileStackParamList = {
  Main: undefined;
  Edit: {type: 'charactor' | 'password'};
};

const ProfileStackNavigator = () => {
  const ProfileStack = createStackNavigator<ProfileStackParamList>();
  const inset = useSafeAreaInsets();
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen name="Main" component={ProfileScreen} />
      <ProfileStack.Screen
        name="Edit"
        component={EditScreen}
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
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
