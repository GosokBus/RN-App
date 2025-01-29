import React from 'react';
import {View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Container from '../components/Container';
import Group from '../components/Group';
import HorizontalBarChart from '../components/HorizonBarChart';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
import {useExp} from '../hooks/useExp';
import {ExpContents} from './HomeScreen';

const ExpListScreen = () => {
  const pastProgress = useSharedValue(0.7);
  const progress = useSharedValue(0.3);
  const {allExpQuery} = useExp();
  const expData = allExpQuery.data;
  return (
    <Container paddingH={24} paddingV={28} scrollable>
      <Stack
        style={{
          paddingVertical: 23,
          paddingHorizontal: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#B6B5B9',
        }}
        justify="center"
        align="center">
        <ExpContents />
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#B6B5B9',
            marginTop: 36,
          }}
        />
        <Stack gap={12} style={{paddingTop: 20}}>
          <Group gap={20} align="center">
            <Typograph size={12} weight={'bold'}>
              작년 누적 경험치
            </Typograph>
            <HorizontalBarChart
              width={180} // 전체 바 길이
              height={6} // 전체 바 높이
              progress={pastProgress} // 0 ~ 1
              backgroundColor="#FFEFEB" // 배경 막대 색
              fillColor={colors.PRIMARY_ORANGE} // 채워질 섹션 색
            />
          </Group>
          <Group gap={20} align="center">
            <Typograph size={12} weight={'bold'}>
              올해 획득 경험치
            </Typograph>
            <HorizontalBarChart
              width={180} // 전체 바 길이
              height={6} // 전체 바 높이
              progress={progress} // 0 ~ 1
              backgroundColor="#FFEFEB" // 배경 막대 색
              fillColor={colors.PRIMARY_ORANGE} // 채워질 섹션 색
            />
          </Group>
        </Stack>
      </Stack>
      <Stack>{}</Stack>
    </Container>
  );
};

export default ExpListScreen;
