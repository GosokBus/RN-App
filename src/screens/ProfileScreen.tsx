import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Modal, Pressable, TouchableWithoutFeedback} from 'react-native';
import Container from '../components/Container';
import Group from '../components/Group';
import Icon from '../components/Icons';
import Stack from '../components/Stack';
import Typograph from '../components/Typograph';
import {colors} from '../constants/Colors';
import {ProfileStackParamList} from '../navigators/ProfileStackNavigator';

type ProfileScreenProps = {
  navigation: StackNavigationProp<ProfileStackParamList, 'Main'>;
};

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container paddingH={18} paddingV={24}>
      <Stack gap={18}>
        <Stack>
          <Typograph size={16} color={colors.PRIMARY_ORANGE} weight={'bold'}>
            내 정보
          </Typograph>
          <Group gap={15}>
            <Icon name="Woman5" />
            <Stack gap={8}>
              <Group>
                <Typograph size={12} weight={'bold'} color={colors.BLACK}>
                  성함
                </Typograph>
                <Typograph
                  size={12}
                  color={colors.BLACK}
                  style={{position: 'absolute', left: 48}}>
                  홍길동
                </Typograph>
              </Group>
              <Group>
                <Typograph size={12} weight={'bold'} color={colors.BLACK}>
                  레벨
                </Typograph>
                <Typograph
                  size={12}
                  color={colors.BLACK}
                  style={{position: 'absolute', left: 48}}>
                  F2-|||
                </Typograph>
              </Group>
              <Group>
                <Typograph size={12} weight={'bold'} color={colors.BLACK}>
                  사번
                </Typograph>
                <Typograph
                  size={12}
                  color={colors.BLACK}
                  style={{position: 'absolute', left: 48}}>
                  2023010101
                </Typograph>
              </Group>
              <Group>
                <Typograph size={12} weight={'bold'} color={colors.BLACK}>
                  소속
                </Typograph>
                <Typograph
                  size={12}
                  color={colors.BLACK}
                  style={{position: 'absolute', left: 48}}>
                  음성1센터
                </Typograph>
              </Group>
              <Group>
                <Typograph size={12} weight={'bold'} color={colors.BLACK}>
                  입사일
                </Typograph>
                <Typograph
                  size={12}
                  color={colors.BLACK}
                  style={{position: 'absolute', left: 48}}>
                  2023/03/28
                </Typograph>
              </Group>
            </Stack>
          </Group>
        </Stack>
        <Group justify="space-between" style={{marginRight: 25}}>
          <Typograph size={12} weight={'bold'} color={colors.BLACK}>
            획득한 뱃지
          </Typograph>

          <Group style={{width: 200, flexWrap: 'wrap'}} gap={20}>
            <Icon name="Badge_orange" />
            <Icon name="Badge_purple" />
            <Icon name="Badge_orange" />
            <Icon name="Badge_blue" />
            <Icon name="Badge_orange" />
            <Icon name="Badge_purple" />
            <Icon name="Badge_orange" />
          </Group>
        </Group>
        <Pressable
          style={{
            backgroundColor: colors.PRIMARY_ORANGE,
            paddingVertical: 12,
            width: 300,
            marginHorizontal: 'auto',
            borderRadius: 40,
          }}
          onPress={() => setModalOpen(true)}>
          <Group align="center" justify="center" gap={8}>
            <Icon name="Pencil" fill={colors.WHITE} />
            <Typograph size={16} weight={'bold'} color={colors.WHITE}>
              프로필 편집하기
            </Typograph>
          </Group>
        </Pressable>
      </Stack>
      <Modal visible={modalOpen} transparent>
        <Pressable
          onPress={() => setModalOpen(false)}
          style={{
            backgroundColor: 'rgba(255,255,255,0.4)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback>
            <Stack
              style={{
                backgroundColor: '#322F35',
                paddingHorizontal: 95,
                paddingTop: 12,
                paddingBottom: 12,
              }}
              align="center">
              <Typograph size={14} weight={'bold'} color={colors.WHITE}>
                프로필 수정하기
              </Typograph>
              <Typograph size={14} color={colors.WHITE}>
                어떤 정보를 변경할까요?
              </Typograph>
              <Group>
                <Pressable
                  style={{paddingHorizontal: 12, paddingVertical: 10}}
                  onPress={() => {
                    setModalOpen(false);
                    requestAnimationFrame(() => {
                      navigation.navigate('Edit', {type: 'charactor'});
                    });
                  }}>
                  <Typograph size={14} color={colors.PRIMARY_ORANGE}>
                    캐릭터
                  </Typograph>
                </Pressable>
                <Pressable
                  style={{paddingHorizontal: 12, paddingVertical: 10}}
                  onPress={() => {
                    setModalOpen(false);
                    requestAnimationFrame(() => {
                      navigation.navigate('Edit', {type: 'password'});
                    });
                  }}>
                  <Typograph size={14} color={colors.PRIMARY_ORANGE}>
                    비밀번호
                  </Typograph>
                </Pressable>
              </Group>
            </Stack>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>
    </Container>
  );
};

export default ProfileScreen;
