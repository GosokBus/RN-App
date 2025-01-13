import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface TypographProps extends TextProps {
  children: React.ReactNode;
  size: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'];
  style?: StyleProp<TextStyle>;
}

const Typograph = ({
  children,
  size,
  weight,
  color = '#000',
  style,
  ...props
}: TypographProps) => {
  return (
    <Text
      style={[{fontSize: size, fontWeight: weight, color: color}, style]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typograph;
