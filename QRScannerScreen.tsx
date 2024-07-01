import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigationTypes'; // Adjust the path if necessary

type QRScannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'QRScanner'>;

type Props = {
  navigation: QRScannerScreenNavigationProp;
};

const QRScannerScreen: React.FC<Props> = ({ navigation }) => {
  const onSuccess = (e: any) => {
    console.log(e.data); // Handle the scanned data
    // Navigate or perform any action you want after scanning the QR code
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={<Text style={styles.centerText}>Scan the QR Code</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
    color: '#000',
  },
});

export default QRScannerScreen;
