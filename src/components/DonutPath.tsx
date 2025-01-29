import {Path, Skia} from '@shopify/react-native-skia';
import React from 'react';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

type DonutPathProps = {
  strokeWidth: number;
  outerStrokeWidth: number;
  gap: number;
  radius: number;
  color: string;
  decimals: SharedValue<number[]>;
  index: number;
};

// -90도 회전된 Path를 만들어주는 헬퍼
const createRotatedPath = (radius: number, outerStrokeWidth: number) => {
  const innerRadius = radius - outerStrokeWidth / 2;
  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  // 회전 행렬
  const matrix = Skia.Matrix();
  matrix.translate(radius, radius);
  matrix.rotate(4.7);
  matrix.translate(-radius, -radius);

  path.transform(matrix);
  return path;
};

const DonutPath = ({
  radius,
  gap,
  strokeWidth,
  outerStrokeWidth,
  color,
  decimals,
  index,
}: DonutPathProps) => {
  // -90도 회전된 단일 섹션용 Path
  const path = createRotatedPath(radius, outerStrokeWidth);

  // start(시작점) = 0 (12시)
  const start = useDerivedValue(() => {
    return withTiming(0, {duration: 1000});
  }, []);

  // end(끝점) = decimals.value[index]
  const end = useDerivedValue(() => {
    const value = decimals.value[index] ?? 0;
    return withTiming(value, {duration: 1000});
  }, []);

  return (
    <Path
      path={path}
      color={color}
      style="stroke"
      strokeJoin="round"
      strokeWidth={strokeWidth}
      strokeCap="round"
      start={start}
      end={end}
    />
  );
};

export default DonutPath;
