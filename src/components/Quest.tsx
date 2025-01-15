import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {colors} from '../constants/Colors';
import useCalendar from '../hooks/useCalendar';
import Group from './Group';
import Icon from './Icons';
import Stack from './Stack';
import Typograph from './Typograph';

interface QuestProps {
  title: string;
  max: string;
  mid: string;
  isLast?: boolean;
  type: 'week' | 'month';
}

const MonthItem = ({month}: {month: string}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.MAX,
      }}>
      <Typograph size={20} color={'#49454F'}>
        {month}
      </Typograph>
    </View>
  );
};

const monthes = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];
interface CustomCalendarProps {
  type: 'week' | 'month';
}
const CustomCalendar = ({type}: CustomCalendarProps) => {
  const [tmpDate, setTmpDate] = useState(new Date());
  const GetISOWeek = useCalendar();
  const markedDates = {
    ...GetISOWeek({type: type, weekNum: 2, acheive: 'MAX'}),
    ...GetISOWeek({type: type, weekNum: 1, acheive: 'MID'}),
  };

  return type === 'week' ? (
    <View style={{paddingVertical: 10}}>
      <Calendar
        key={tmpDate.toISOString()}
        current={tmpDate.toISOString()}
        style={{
          backgroundColor: '#FFF7F5',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }}
        theme={{
          weekVerticalMargin: 0,
          calendarBackground: '#FFF7F5',
        }}
        firstDay={1}
        customHeader={() => (
          <Group
            align="center"
            style={{
              width: '100%',
              backgroundColor: '#FFE6E1',
              borderColor: '#B6B5B9',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Group>
              <Typograph size={8} weight={'bold'} style={{padding: 5}}>
                {tmpDate.getFullYear()}년
              </Typograph>
              <View
                style={{width: 1, height: 20, backgroundColor: '#B6B5B9'}}
              />
            </Group>
            <Group justify="center" style={{flex: 1}}>
              <Group align="center" justify="space-between" width={60} gap={10}>
                {tmpDate.getMonth() > 0 ? (
                  <Pressable
                    onPress={() => {
                      setTmpDate(
                        new Date(tmpDate.setMonth(tmpDate.getMonth() - 1)),
                      );
                    }}>
                    <Icon name="CalendarLeft" />
                  </Pressable>
                ) : (
                  <View style={{width: 6}} />
                )}
                <Typograph size={12}>{tmpDate.getMonth() + 1}월</Typograph>
                {tmpDate.getMonth() < 11 ? (
                  <Pressable
                    onPress={() => {
                      setTmpDate(
                        new Date(tmpDate.setMonth(tmpDate.getMonth() + 1)),
                      );
                    }}>
                    <Icon name="CalendarRight" />
                  </Pressable>
                ) : (
                  <View style={{width: 6}} />
                )}
              </Group>
            </Group>
          </Group>
        )}
        markingType="period"
        markedDates={markedDates}
        monthFormat="M월"
      />
      <Group
        justify="space-between"
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
          backgroundColor: '#FFF7F5',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Group gap={5}>
          <Stack align="center">
            <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: colors.MID,
              }}
            />
            <Typograph size={8}>MID</Typograph>
          </Stack>
          <Stack align="center">
            <View
              style={{
                width: 12,
                height: 12,
                backgroundColor: colors.MAX,
              }}
            />
            <Typograph size={8}>MAX</Typograph>
          </Stack>
        </Group>
        <Typograph size={8} weight={'bold'}>
          월 특근{' '}
          {
            <Typograph size={8} color={colors.PRIMARY_ORANGE}>
              총{' '}
              {
                <Typograph size={12} color={colors.PRIMARY_ORANGE}>
                  300
                </Typograph>
              }
              점
            </Typograph>
          }{' '}
          달성!
        </Typograph>
      </Group>
    </View>
  ) : (
    <Stack width={'100%'} style={{paddingHorizontal: 15}}>
      <Stack
        width={'100%'}
        gap={2}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 15,
          flexWrap: 'wrap',
          borderRadius: 10,
          marginBottom: 12,
          backgroundColor: '#FFF7F5',
        }}>
        <Group justify="flex-start" width={'100%'} gap={15}>
          <Typograph size={8}>2024년</Typograph>
          <Group style={{flexWrap: 'wrap'}} gap={15} width={210}>
            {monthes.map(item => (
              <MonthItem month={item} key={item} />
            ))}
          </Group>
        </Group>
        <Group>
          <Group gap={5}>
            <Stack align="center">
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: colors.MID,
                }}
              />
              <Typograph size={8}>MID</Typograph>
            </Stack>
            <Stack align="center">
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: colors.MAX,
                }}
              />
              <Typograph size={8}>MAX</Typograph>
            </Stack>
          </Group>
        </Group>
      </Stack>
    </Stack>
  );
};

const Quest = ({title, max, mid, isLast = false, type}: QuestProps) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleQuestPress = () => {
    setCalendarOpen(prev => !prev);
  };
  return (
    <Stack style={{paddingHorizontal: 14}}>
      <Pressable
        style={{paddingVertical: 16, gap: 5}}
        onPress={handleQuestPress}>
        <Group align="flex-end" justify="space-between" width={'100%'}>
          <Typograph size={16} weight={'bold'} color={'#49454F'}>
            {title}
          </Typograph>
          <Icon
            name="Dropdown"
            style={calendarOpen && {transform: [{rotate: '180deg'}]}}
          />
        </Group>
        <Typograph size={12} color={'#49454F'} style={{paddingLeft: 12}}>
          MAX 기준 {max}, MID 기준 {mid}
        </Typograph>
      </Pressable>
      {calendarOpen && <CustomCalendar type={type} />}
      {!isLast && (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#B6B5B9',
          }}
        />
      )}
    </Stack>
  );
};

export default Quest;
