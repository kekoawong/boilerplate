import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types'

function FAB(props) {
  const br = props.style.borderRadius ? props.style.borderRadius : 50;

  return (
    <Button 
      title="Create Event" 
      raised
      containerStyle={{...props.style, borderRadius: br}}
      buttonStyle={{...props.style, borderRadius: br}}
      icon={
        <Icon
          name="calendar-plus"
          size={25}
          color="white"
          margin={50}
        />
      }
    />
  );
}

// Specifies the default values for props:
FAB.defaultProps = {
  title: '',
  icon: {},
  style: {
    borderRadius: 50,
    backgroundColor: '#8947ed'
  }
};

FAB.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  fabContainer: {
    borderRadius: 50, 
    maxWidth: '40%',
    marginLeft: 10
  },
  fab: {
    borderRadius: 50,
    backgroundColor: '#8947ed'
  }
});

export default FAB;