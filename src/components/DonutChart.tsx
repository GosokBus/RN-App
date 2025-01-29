import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import DonutPath from './DonutPath';

type DonutChartProps = {
  n: number; // 섹션 개수 -> 1
  gap: number; // 섹션 간격 -> 0 (1개이므로 필요없음)
  radius: number; // 반지름
  strokeWidth: number; // 내부 도넛 두께
  outerStrokeWidth: number; // 전체 도넛 두께
  decimals: SharedValue<number[]>; // 섹션별 비율 -> [0.7]
  colors: string[]; // 섹션별 색상 -> ['#FF5B35']
};

// 원을 그린 뒤, -90도(시계 반대 방향) 회전시켜주는 헬퍼 함수
const createRotatedPath = (radius: number, outerStrokeWidth: number) => {
  // 도넛 내부 반지름
  const innerRadius = radius - outerStrokeWidth / 2;

  // 원(도넛) Path 생성
  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  // -90도 회전할 Matrix
  const matrix = Skia.Matrix();
  // 1) 원의 중심( radius, radius )로 이동
  matrix.translate(radius, radius);
  // 2) -90도 회전
  matrix.rotate(-90);
  // 3) 다시 원점 복귀
  matrix.translate(-radius, -radius);

  // Path에 변환 적용
  path.transform(matrix);

  return path;
};

const DonutChart = ({
  n,
  gap,
  decimals,
  colors,
  strokeWidth,
  outerStrokeWidth,
  radius,
}: DonutChartProps) => {
  // -90도 회전된 원(배경용 Path)
  const basePath = createRotatedPath(radius, outerStrokeWidth);

  return (
    <View style={{width: radius * 2, height: radius * 2}}>
      <Canvas style={styles.container}>
        {/* 가장 바깥 베이스(전체 도넛)의 색상 #FFEFEB */}
        <Path
          path={basePath}
          color="#FFEFEB" // 배경색
          style="stroke"
          strokeJoin="round"
          strokeWidth={outerStrokeWidth}
          strokeCap="round"
          start={0}
          end={1}
        />
        {/* 섹션(1개) 렌더링 */}
        {Array.from({length: n}).map((_, index) => (
          <DonutPath
            key={index}
            radius={radius}
            strokeWidth={strokeWidth}
            outerStrokeWidth={outerStrokeWidth}
            color={colors[index]}
            decimals={decimals}
            index={index}
            gap={gap}
          />
        ))}
      </Canvas>
    </View>
  );
};

export default DonutChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
