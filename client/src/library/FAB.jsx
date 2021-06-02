import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

function FAB(props) {
  const br = props.style.borderRadius ? props.style.borderRadius : 50;
  const bc = props.style.backgroundColor ? props.style.backgroundColor : '#8947ed';

  return (
    <Button 
      title={props.title}
      raised
      containerStyle={{...props.style, backgroundColor: bc, borderRadius: br}}
      buttonStyle={{backgroundColor: bc, borderRadius: br, padding: 12}}
      icon={props.icon}
      onPress={props.onPress}
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
  style: PropTypes.object,
  onPress: PropTypes.func
}

export default FAB;