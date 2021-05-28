import React from 'react';
import { VictoryLegend, 
        VictoryHistogram,
        VictoryChart, 
        VictoryAxis,
        VictoryTheme, 
        VictoryStack } from 'victory-native';

  
// for histograms, data must only have one x property, instead of an x and y property
  const eventsAttended = [
    { x: 1 },
    { x: 2 },
    { x: 2 },
    { x: 4 },
    { x: 4 },
    { x: 5 }
  ];
  
  const Attendance = [
    { x: 3 },
    { x: 7 },
    { x: 6 },
    { x: 4 },
    { x: 3 },
    { x: 5 }
  ];

export default function HomeViz() {

    return (
        <Histogram />
    );
}

function Histogram() {

  return (
      <VictoryChart
      theme={VictoryTheme.material}
    >
        <VictoryAxis
        animate={{
          duration: 2000,
          easing: "bounce"
        }}/>
        <VictoryAxis
          dependentAxis
        />
        <VictoryStack
          colorScale={"warm"}
        >
            <VictoryHistogram
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              data={eventsAttended}
              style={{
                data: {
                  fill: "red"
                }
              }}
            />
        </VictoryStack>
    </VictoryChart>
  );
}