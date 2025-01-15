import React from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';

interface GroupProps extends ViewProps {
  children: React.ReactNode;
  justify?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  gap?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  style?: StyleProp<ViewStyle>;
}

const Group = ({
  children,
  justify,
  align,
  gap,
  width,
  height,
  style,
  ...props
}: GroupProps) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
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

export default Group;
