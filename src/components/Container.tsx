import React from 'react';
import {ScrollView, View, ViewProps, ViewStyle} from 'react-native';
import {colors} from '../constants/Colors';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  paddingH: ViewStyle['paddingHorizontal'];
  paddingV: ViewStyle['paddingVertical'];
  scrollable?: boolean;
}

const Container = ({
  children,
  paddingH,
  paddingV,
  scrollable = false,
  ...props
}: ContainerProps) => {
  return scrollable ? (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: paddingH,
        paddingVertical: paddingV,
      }}>
      {children}
    </ScrollView>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: paddingH,
        paddingVertical: paddingV,
      }}>
      {children}
    </View>
  );
};

export default Container;
