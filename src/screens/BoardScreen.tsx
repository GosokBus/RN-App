import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
import {useBoard} from '../hooks/useBoard';
import {BoardStackParamList} from '../navigators/BoardStackNavigator';

interface BoardItemProps {
  title: string;
  content: string;

  onPressFn: () => void;
}

const BoardItem = ({title, content, onPressFn}: BoardItemProps) => {
  return (
    <Pressable style={styles.boardItemContainer} onPress={onPressFn}>
      <Stack gap={5}>
        <Typograph
          size={16}
          weight={'bold'}
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{width: 200}}>
          {title}
        </Typograph>
        <Typograph
          size={12}
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{width: 200}}>
          {content}
        </Typograph>
      </Stack>
      <Typograph size={8}>관리자</Typograph>
    </Pressable>
  );
};

type BoardScreenProps = StackScreenProps<BoardStackParamList, 'List'>;

const BoardScreen = ({navigation, route}: BoardScreenProps) => {
  const boardQuery = useBoard();
  console.log(boardQuery.data);
  return (
    <Stack style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#49454F',
          paddingLeft: 24,
          paddingTop: 24,
          paddingBottom: 18,
        }}>
        <Typograph size={16} color={colors.PRIMARY_ORANGE} weight={'bold'}>
          게시판
        </Typograph>
      </View>
      <ScrollView>
        {boardQuery.data?.map(
          item =>
            item.title &&
            item.content && (
              <BoardItem
                title={item.title}
                content={item.content}
                key={item.id}
                onPressFn={() => {
                  navigation.navigate('Detail', {
                    title: item.title,
                    content: item.content,
                  });
                }}
              />
            ),
        )}
      </ScrollView>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  boardItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: 22,
    paddingRight: 34,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
});

export default BoardScreen;
