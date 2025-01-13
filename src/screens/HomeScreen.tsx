import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import ArrowRight from '../assets/arrow_right.svg';
import Trophy from '../assets/trophy.svg';
import Character from '../assets/woman_05.svg';
import Group from '../components/Group';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
const HomeScreens = () => {
  return (
    <Stack gap={16} style={styles.container}>
      <Stack width={'100%'} style={styles.profileContainer}>
        <Group align="flex-end" justify="flex-start" style={{marginBottom: 22}}>
          <Character width={120} height={120} />
          <Stack align="flex-start" style={{marginLeft: 11, marginBottom: 10}}>
            <Group style={{marginBottom: 10}} align="flex-end" gap={10}>
              <Typograph size={32} weight={'bold'}>
                홍길동
              </Typograph>
              <Typograph
                size={20}
                weight={'bold'}
                color={colors.PRIMARY_ORANGE}>
                Lv.F1
              </Typograph>
            </Group>
            <Group gap={6} style={{marginBottom: 2}}>
              <Typograph size={16} weight={'bold'}>
                사번
              </Typograph>
              <Typograph size={16} style={{fontSize: 16}}>
                2023010101
              </Typograph>
            </Group>
            <Group gap={6}>
              <Typograph size={16} weight={'bold'}>
                소속
              </Typograph>
              <Typograph size={16}>음성1센터</Typograph>
            </Group>
          </Stack>
        </Group>
        <View style={styles.divider} />
        <Group style={{marginTop: 15, paddingLeft: 6}} gap={47}>
          <Typograph size={12}>최근 획득 뱃지</Typograph>
          <Group gap={8}>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: colors.PRIMARY_ORANGE,
              }}
            />
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: colors.PRIMARY_ORANGE,
              }}
            />
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: colors.PRIMARY_ORANGE,
              }}
            />
          </Group>
        </Group>
        <View />
      </Stack>
      <Stack gap={18} style={styles.expContainer}>
        <Stack gap={15} width={'100%'}>
          <Group justify="space-between" align="center" width={'100%'}>
            <Group align="center" gap={8}>
              <Trophy />
              <Typograph size={16} weight={'bold'}>
                총 누적 경험치
              </Typograph>
            </Group>
            <ArrowRight />
          </Group>
          <Group
            gap={17}
            align="center"
            style={[
              styles.expContentBox,
              {paddingHorizontal: 22, paddingVertical: 32},
            ]}>
            <ProgressChart
              data={[0.8]}
              width={100}
              height={100}
              radius={40}
              strokeWidth={12}
              chartConfig={{
                backgroundColor: 'white', // 차트 배경 투명
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                color: (opacity = 1) => `rgba(255,91,53,${opacity})`, // Progress Ring 색상
              }}
              hideLegend={true}
            />
            <Stack gap={11}>
              <Group align="flex-end" gap={5}>
                <Typograph size={32} weight={'bold'}>
                  108,000
                </Typograph>
                <Typograph
                  size={18}
                  weight={'bold'}
                  style={{
                    lineHeight: 32,
                  }}>
                  점
                </Typograph>
              </Group>
              <Typograph size={12} style={{marginLeft: 3}}>
                다음 레벨까지는 {'\n'}
                {
                  <Typograph
                    size={16}
                    weight={'bold'}
                    color={colors.PRIMARY_ORANGE}>
                    5000
                  </Typograph>
                }{' '}
                {
                  <Typograph size={12} weight={'bold'}>
                    P
                  </Typograph>
                }{' '}
                더 필요해요!
              </Typograph>
            </Stack>
          </Group>
        </Stack>
        <Stack width={'100%'} gap={5}>
          <Typograph size={12} weight={'bold'}>
            경험치 획득
          </Typograph>
          <Stack
            style={[
              styles.expContentBox,
              {paddingVertical: 10, paddingHorizontal: 14},
            ]}>
            <Typograph size={8}>직무별 퀘스트</Typograph>
            <Typograph size={12}>
              최근 획득 경험치는{' '}
              {
                <Typograph
                  size={16}
                  color={colors.PRIMARY_ORANGE}
                  weight={'bold'}>
                  3000
                </Typograph>
              }{' '}
              {
                <Typograph size={12} weight={'bold'}>
                  P
                </Typograph>
              }{' '}
              입니다!
            </Typograph>
            <Group justify="flex-end" width={'100%'}>
              <Typograph size={8}>2025.01.12</Typograph>
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  profileContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.PRIMARY_ORANGE,
    padding: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#49454f66',
  },
  expContainer: {
    backgroundColor: colors.SECONDARY_ORANGE,
    padding: 22,
    borderRadius: 10,
  },
  expContentBox: {
    backgroundColor: colors.WHITE,
    width: '100%',
    borderRadius: 10,
    // iOS 그림자 설정
    shadowColor: 'rgba(0, 0, 0,1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25, // 알파값
    shadowRadius: 4, // blur 값
    // Android 그림자 설정
    elevation: 4,
  },
});

export default HomeScreens;
