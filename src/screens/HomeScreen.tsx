import {StackNavigationProp} from '@react-navigation/stack';
import moment from 'moment';
import React, {useEffect} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import DonutChart from '../components/DonutChart';
import Group from '../components/Group';
import Icon from '../components/Icons';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
import {useExp} from '../hooks/useExp';
import {HomeStackParamLists} from '../navigators/HomeStackNavigator';
import useUserStore from '../store/useUserStore';

type HomeScreenProps = {
  navigation: StackNavigationProp<HomeStackParamLists, 'Main'>;
};

const HomeScreens = ({navigation}: HomeScreenProps) => {
  const {userInfo: user} = useUserStore();
  const {recentExpQuery} = useExp();
  if (recentExpQuery.isLoading) {
    console.log('로딩 중...');
  }

  if (recentExpQuery.isError) {
    console.log('에러발생', recentExpQuery.error);
  }

  return (
    <Stack gap={16} style={styles.container}>
      <Stack width={'100%'} style={styles.profileContainer}>
        <Group align="flex-end" justify="flex-start" style={{marginBottom: 22}}>
          <Icon name="Woman5" width={120} height={120} />
          <Stack align="flex-start" style={{marginLeft: 11, marginBottom: 10}}>
            <Group style={{marginBottom: 10}} align="flex-end" gap={10}>
              <Typograph size={32} weight={'bold'}>
                {user.userName}
              </Typograph>
              <Typograph
                size={20}
                weight={'bold'}
                color={colors.PRIMARY_ORANGE}>
                Lv. {user.level}
              </Typograph>
            </Group>
            <Group gap={6} style={{marginBottom: 2}}>
              <Typograph size={16} weight={'bold'}>
                사번
              </Typograph>
              <Typograph size={16} style={{fontSize: 16}}>
                {user.userId}
              </Typograph>
            </Group>
            <Group gap={6}>
              <Typograph size={16} weight={'bold'}>
                소속
              </Typograph>
              <Typograph size={16}>{user.part}</Typograph>
            </Group>
          </Stack>
        </Group>
        <View style={styles.divider} />
        <Group style={{marginTop: 15, paddingLeft: 6}} gap={47}>
          <Typograph size={12}>최근 획득 뱃지</Typograph>
          <Group gap={8}>
            <Icon name="Badge_orange" />
            <Icon name="Badge_purple" />
            <Icon name="Badge_blue" />
          </Group>
        </Group>
        <View />
      </Stack>
      <Pressable
        style={styles.expContainer}
        onPress={() => {
          navigation.navigate('ExpList');
        }}>
        <Stack gap={15} width={'100%'}>
          <Group justify="space-between" align="center" width={'100%'}>
            <Group align="center" gap={8}>
              <Icon name="Trophy" />
              <Typograph size={16} weight={'bold'}>
                총 누적 경험치
              </Typograph>
            </Group>
            <Icon name="ArrowRight" color={colors.PRIMARY_ORANGE} />
          </Group>
          <Group
            gap={17}
            align="center"
            style={[
              styles.expContentBox,
              {paddingHorizontal: 22, paddingVertical: 32},
            ]}>
            <ExpContents />
          </Group>
        </Stack>
        <Stack width={'100%'} gap={5}>
          <Typograph size={12} weight={'bold'}>
            경험치 획득
          </Typograph>

          {recentExpQuery.isSuccess && recentExpQuery.data && (
            <Stack
              style={[
                styles.expContentBox,
                {paddingVertical: 10, paddingHorizontal: 14},
              ]}>
              <Typograph size={8}>{recentExpQuery.data[0]?.quest}</Typograph>
              <Typograph size={12}>
                최근 획득 경험치는{' '}
                {
                  <Typograph
                    size={16}
                    color={colors.PRIMARY_ORANGE}
                    weight={'bold'}>
                    {recentExpQuery.data[0]?.exp || '빈값'}
                  </Typograph>
                }{' '}
                {
                  <Typograph size={12} weight={'bold'}>
                    DO
                  </Typograph>
                }{' '}
                입니다!
              </Typograph>
              <Group justify="flex-end" width={'100%'}>
                <Typograph size={8}>
                  {moment(recentExpQuery.data?.createdAt).format('YYYY.MM.DD')}
                </Typograph>
              </Group>
            </Stack>
          )}
        </Stack>
      </Pressable>
    </Stack>
  );
};

export const ExpContents = () => {
  const {detailExpQuery} = useExp();

  const decimals = useSharedValue<number[]>([0]); // 초기값 설정

  useEffect(() => {
    if (detailExpQuery.data) {
      decimals.value = [
        detailExpQuery.data.experienceInBucket / detailExpQuery.data.bucketSize,
      ];
    }
  }, [detailExpQuery.data, decimals]);

  if (detailExpQuery.isLoading) {
    return <Typograph size={12}>로딩 중...</Typograph>;
  }

  if (detailExpQuery.isError || !detailExpQuery.data) {
    return (
      <Typograph size={12}>데이터를 불러오는 중 오류가 발생했습니다.</Typograph>
    );
  }

  return (
    !detailExpQuery.isLoading &&
    !detailExpQuery.isError && (
      <>
        <Group align="flex-end" gap={25}>
          <DonutChart
            n={1}
            gap={0}
            decimals={decimals}
            colors={['#FF5B35']}
            strokeWidth={15}
            outerStrokeWidth={15}
            radius={50}
          />
          <Stack gap={15}>
            <Group align="flex-end" gap={5}>
              <Typograph size={32} weight={'bold'}>
                {detailExpQuery.data?.totalExp}
              </Typograph>
              <Typograph
                size={18}
                weight={'bold'}
                style={{
                  lineHeight: 35,
                }}>
                점
              </Typograph>
            </Group>

            <Typograph size={12} style={{marginLeft: 3}}>
              다음 레벨 {detailExpQuery.data?.nextLevelName}까지는 {'\n'}
              {
                <Typograph
                  size={16}
                  weight={'bold'}
                  color={colors.PRIMARY_ORANGE}>
                  {detailExpQuery.data?.remainingExp}
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
      </>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  donutContainer: {
    width: 80, // 2 * radius
    height: 80, // 2 * radius
    justifyContent: 'center',
    alignItems: 'center',
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
    gap: 18,
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
