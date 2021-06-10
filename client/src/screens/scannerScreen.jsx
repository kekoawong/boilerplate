import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ActionModal from 'library/actionModal';


export default function ScannerScreen() {

  // set hooks
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const modulize = useRef();
  const navigation = useNavigation();

  // get permission when screen mounts
  useEffect(() => {
    // get permission
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    // open modal on screen load
    modulize.current?.open();

  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{flex: 1}}>
      <ActionModal
        ref={modulize}
        onClose={() => navigation.goBack()}
        >
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
      </ActionModal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});