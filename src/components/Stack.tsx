import React from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';

interface StackProps extends ViewProps {
  children: React.ReactNode;
  justify?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  gap?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  style?: StyleProp<ViewStyle>;
}

const Stack = ({
  children,
  justify,
  align,
  gap,
  width,
  height,
  style,
  ...props
}: StackProps) => {
  return (
    <View
      style={[
        {
          justifyContent: justify,
          alignItems: align,
          gap: gap,
          width: width,
          height: height,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

export default Stack;
