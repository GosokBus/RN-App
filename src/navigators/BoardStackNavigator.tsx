import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {Pressable} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../components/Icons';
import {colors} from '../constants/Colors';
import BoardDetailScreen from '../screens/BoardDetailScreen';
import BoardScreen from '../screens/BoardScreen';

export type BoardStackParamList = {
  List: undefined;
  Detail: {title: string; content: string};
};

const BoardStackNavigator = () => {
  const BoardStack = createStackNavigator<BoardStackParamList>();
  const inset = useSafeAreaInsets();
  return (
    <BoardStack.Navigator
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
      <BoardStack.Screen name="List" component={BoardScreen} />
      <BoardStack.Screen
        name="Detail"
        component={BoardDetailScreen}
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
    </BoardStack.Navigator>
  );
};

export default BoardStackNavigator;
