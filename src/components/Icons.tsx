import React from 'react';

import {View} from 'react-native';
import * as Icons from '../assets/index';
import {colors} from '../constants/Colors';

interface IconProps {
  name: keyof typeof Icons;
  tabFocused?: boolean;
  color?: string;
}

const Icon = ({name, tabFocused = false, color = '#000000'}: IconProps) => {
  const Icon = Icons[name];
  return tabFocused ? (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 20,
        backgroundColor: colors.PRIMARY_ORANGE,
        borderRadius: 16,
      }}>
      <Icon fill={colors.WHITE} />
    </View>
  ) : (
    <Icon fill={color} />
  );
};

export default Icon;
