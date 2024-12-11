import {NavigationContainer} from '@react-navigation/native';
import {memo} from 'react';
import StackNavigation from './StackNavigation';
import {useSelector, useDispatch} from 'react-redux';
import IsLoginNavigation from './IsLoginNavigation';

const RootNavigation = ({}) => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {loggedIn ? <StackNavigation /> : <IsLoginNavigation />}
    </NavigationContainer>
  );
};

export default memo(RootNavigation);
