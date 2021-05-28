import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { VictoryLabel, 
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
    { x: 3 },
    { x: 5 }
  ];

// proptypes
HomeViz.propTypes = {
  height: PropTypes.number ? PropTypes.number : 300,
  width: PropTypes.number ? PropTypes.number : 450
}

export default function HomeViz(props) {

    // for formatting ticks to only ints
    const tickValueFormat = (tick) => tick % 1 ? '' : Math.round(tick);

    return (
      <View style={styles.outerContainer}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={0}
          padding={60}
          style={styles.container}
          width={props.width}
          height={props.height}
        >
          <VictoryAxis
            label="Date"
            style={{...sharedAxisStyles}}
          />
          <VictoryAxis
            label="Events"
            style={{...sharedAxisStyles}}
            dependentAxis
            tickFormat={tickValueFormat}
          />
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
        </VictoryChart>
      </View>
    );
}


// style object for Axis
const sharedAxisStyles = {
  tickLabels: {
    fill: "grey",
    fontSize: 14
  },
  axisLabel: {
    fill: "grey",
    padding: 36,
    fontSize: 15,
    fontStyle: "italic"
  }
};

// stlyes
const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center'
  },
  container: {
    padding: 15
  }
});