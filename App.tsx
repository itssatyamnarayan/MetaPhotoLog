import React, {useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './src/navigation/RootNavigation';
import store from './src/store/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
