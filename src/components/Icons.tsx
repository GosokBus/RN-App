import React from 'react';

import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import * as Icons from '../assets/index';
import {colors} from '../constants/Colors';

interface IconProps extends SvgProps {
  name: keyof typeof Icons;
  tabFocused?: boolean;
  color?: string;
}

const Icon = ({
  name,
  tabFocused = false,
  color = '#000000',
  ...props
}: IconProps) => {
  const Icon = Icons[name];
  return tabFocused ? (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 20,
        backgroundColor: colors.PRIMARY_ORANGE,
        borderRadius: 16,
      }}>
      <Icon fill={colors.WHITE} {...props} />
    </View>
  ) : (
    <Icon fill={color} {...props} />
  );
};

export default Icon;
