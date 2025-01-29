import {Path, Skia} from '@shopify/react-native-skia';
import React from 'react';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

type HorizontalBarPathProps = {
  width: number;
  height: number;
  fillColor: string;
  progress: SharedValue<number>; // 0 ~ 1
};

const HorizontalBarPath = ({
  width,
  height,
  fillColor,
  progress,
}: HorizontalBarPathProps) => {
  /**
   * 1개 섹션만 그린다고 생각하면,
   * - start = 0 (왼쪽 시작)
   * - end = progress.value (실제 진행도)
   *
   * 도넛차트와 동일하게 withTiming()으로 애니메이션.
   */
  const path = Skia.Path.Make();
  path.moveTo(0, height / 2);
  path.lineTo(width, height / 2);

  const start = useDerivedValue(() => {
    // 0%에서 시작 (왼쪽)
    return withTiming(0, {duration: 1000});
  }, []);

  const end = useDerivedValue(() => {
    // progress.value 까지 채우기
    // 예) progress.value = 0.7 => 왼쪽에서 70% 만큼
    return withTiming(progress.value, {duration: 1000});
  }, []);

  return (
    <Path
      path={path}
      color={fillColor}
      style="stroke"
      strokeWidth={height}
      strokeJoin="round"
      strokeCap="round"
      start={start}
      end={end}
    />
  );
};

export default HorizontalBarPath;
