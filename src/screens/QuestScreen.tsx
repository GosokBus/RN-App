import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Group from '../components/Group';
import Quest from '../components/Quest';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';

const QuestScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack gap={28}>
        <Stack gap={12}>
          <Group align="flex-end" gap={10}>
            <Typograph size={16} color={colors.PRIMARY_ORANGE} weight={'bold'}>
              직무별 퀘스트
            </Typograph>
            <Typograph size={12} color={'#49454F'}>
              음성1센터
            </Typograph>
          </Group>
          <View style={styles.questContainer}>
            <Quest
              title="매주 업무 개선하기"
              max="80점"
              mid="40점"
              isLast={true}
              type="week"
            />
          </View>
        </Stack>
        <Stack gap={12}>
          <Typograph size={16} color={colors.PRIMARY_ORANGE} weight={'bold'}>
            리더부여 퀘스트
          </Typograph>
          <View style={styles.questContainer}>
            <Quest
              title="매주 업무 개선하기"
              max="80점"
              mid="40점"
              type="month"
            />
            <Quest
              title="매주 업무 개선하기"
              max="80점"
              mid="40점"
              type="week"
            />
            <Quest
              title="매주 업무 개선하기"
              max="80점"
              mid="40점"
              type="week"
              isLast={true}
            />
          </View>
        </Stack>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  questContainer: {borderWidth: 1, borderRadius: 10},
});

export default QuestScreen;
