import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import HorizontalBarPath from './HorizontalBarPath';

type HorizontalBarChartProps = {
  width: number; // 전체 막대의 가로 길이
  height: number; // 전체 막대의 세로 높이 (strokeWidth로 활용)
  progress: SharedValue<number>; // 0 ~ 1 사이의 값 (ex: 0.7)
  backgroundColor: string; // 배경 막대 색상 (ex: #FFEFEB)
  fillColor: string; // 채워질 막대 색상 (ex: #FF5B35)
};

const HorizontalBarChart = ({
  width,
  height,
  progress,
  backgroundColor,
  fillColor,
}: HorizontalBarChartProps) => {
  /**
   * 1) 배경용 Path (좌->우로 일직선)
   *    - start=0, end=1로 전체 그려주기
   */
  const basePath = Skia.Path.Make();
  // (x0, y0) -> (x1, y1)
  // 막대 가운데를 기준선으로 잡기 위해 y는 height/2로
  basePath.moveTo(0, height / 2);
  basePath.lineTo(width, height / 2);

  return (
    <View style={{width, height}}>
      <Canvas style={styles.container}>
        {/* 1) 배경 막대 */}
        <Path
          path={basePath}
          color={backgroundColor}
          style="stroke"
          strokeWidth={height}
          strokeJoin="round"
          strokeCap="round"
          start={0}
          end={1}
        />
        {/* 2) 애니메이션되는 전면(채워지는) 막대 */}
        <HorizontalBarPath
          width={width}
          height={height}
          fillColor={fillColor}
          progress={progress}
        />
      </Canvas>
    </View>
  );
};

export default HorizontalBarChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
