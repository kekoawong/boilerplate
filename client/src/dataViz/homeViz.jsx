import React from 'react';
import { VictoryBar, 
        VictoryHistogram,
        VictoryChart, 
        VictoryAxis,
        VictoryTheme, 
        VictoryStack } from 'victory-native';

// dummy data for bar chart
const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
  ];
  
// for histograms, data must only have one x property, instead of an x and y property
  const datah1 = [
    { x: 1 },
    { x: 2 },
    { x: 2 },
    { x: 4 },
    { x: 4 },
    { x: 5 }
  ];
  
  const datah2 = [
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
        <VictoryAxis/>
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
              data={datah1}
            />
            <VictoryHistogram
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              data={datah2}
            />
        </VictoryStack>
    </VictoryChart>
  );
}