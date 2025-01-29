import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import Container from '../components/Container';
import Group from '../components/Group';
import Icon from '../components/Icons';
import Input from '../components/Input';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
import {ProfileStackParamList} from '../navigators/ProfileStackNavigator';

export type EditScreenProps = {
  route: RouteProp<ProfileStackParamList, 'Edit'>;
};
type CharactorType =
  | 'Man1'
  | 'Man2'
  | 'Woman1'
  | 'Woman3'
  | 'Woman4'
  | 'Woman5';

const EditScreen = ({route}: EditScreenProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedCharactor, setSelectedCharactor] =
    useState<CharactorType>('Man1');
  const CHARACTORS: CharactorType[] = [
    'Man1',
    'Man2',
    'Woman1',
    'Woman3',
    'Woman4',
    'Woman5',
  ];
  const filled = password && confirmPassword && password === confirmPassword;
  return (
    <Container paddingH={24} paddingV={24}>
      {route.params.type === 'password' ? (
        <Stack gap={24}>
          <Typograph size={16} color={colors.PRIMARY_ORANGE} weight={'bold'}>
            비밀번호 변경
          </Typograph>
          <View>
            <Input
              value={password}
              onChangeFn={text => setPassword(text)}
              placeholder="새 비밀번호"
              type="top"
              secureTextEntry
            />
            <Input
              value={confirmPassword}
              onChangeFn={text => setConfirmPassword(text)}
              placeholder="새 비밀번호 확인"
              type="bottom"
              secureTextEntry
            />
          </View>
        </Stack>
      ) : (
        <Stack gap={24}>
          <Typograph size={16} color={colors.PRIMARY_ORANGE} weight={'bold'}>
            캐릭터 변경
          </Typograph>
          <Group style={{flexWrap: 'wrap'}} gap={12} justify="center">
            {CHARACTORS.map(item => (
              <Pressable
                key={`charactor-${item}`}
                onPress={() => setSelectedCharactor(item)}
                style={[
                  {
                    width: 96,
                    height: 96,
                    borderRadius: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  selectedCharactor === item && {
                    backgroundColor: colors.SECONDARY_ORANGE,
                  },
                ]}>
                <Icon name={item} />
              </Pressable>
            ))}
          </Group>
        </Stack>
      )}
      <Group justify="flex-end" style={{marginTop: 54}}>
        <Pressable
          style={{
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 20,
            backgroundColor: colors.PRIMARY_ORANGE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typograph size={14} color={colors.WHITE}>
            확인
          </Typograph>
        </Pressable>
      </Group>
    </Container>
  );
};

export default EditScreen;
