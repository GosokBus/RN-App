import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Group from '../components/Group';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
import {BoardStackParamList} from '../navigators/BoardStackNavigator';

type BoardDetailScreenProps = {
  route: RouteProp<BoardStackParamList, 'Detail'>;
};

const BoardDetailScreen = ({route}: BoardDetailScreenProps) => {
  const {title, content} = route.params;
  return (
    <View
      style={{flex: 1, backgroundColor: colors.WHITE, padding: 24, gap: 20}}>
      <Group justify="space-between" align="flex-end">
        <Typograph size={16} weight={'bold'} color={colors.PRIMARY_ORANGE}>
          {title}
        </Typograph>
        <Typograph size={8}>관리자</Typograph>
      </Group>
      <Typograph size={16} style={{paddingHorizontal: 8}}>
        {content}
      </Typograph>
    </View>
  );
};

export default BoardDetailScreen;
