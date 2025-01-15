import moment from 'moment';
import {colors} from './../../../Dohands/src/constants/Colors';

interface WeekAcheive {
  type: 'week' | 'month';
  acheive: 'MID' | 'MAX';
  weekNum: number;
}
function GetISOWeek({type, weekNum, acheive}: WeekAcheive) {
  const startMoment = moment().isoWeek(weekNum).startOf('isoWeek');
  const endMoment = moment().isoWeek(weekNum).endOf('isoWeek');
  const startDate = startMoment.format('YYYY-MM-DD');
  const endDate = endMoment.format('YYYY-MM-DD');
  const weekData = {
    [startDate]: {
      color: colors[acheive],
    },
    [endDate]: {
      color: colors[acheive],
    },
  };
  for (
    let middleMoment = startMoment.add(1, 'd');
    middleMoment < endMoment;
    middleMoment.add(1, 'd')
  ) {
    const middleDate = middleMoment.format('YYYY-MM-DD');
    weekData[middleDate] = {
      color: colors[acheive],
    };
  }
  return weekData;
}
const useCalendar = () => {
  return GetISOWeek;
};
export default useCalendar;
