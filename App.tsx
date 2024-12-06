import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './src/navigation/RootNavigation';

function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <RootNavigation />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
