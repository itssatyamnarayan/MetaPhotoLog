import {memo} from 'react';
import Authenticate from '../components/Authenticate';

const Login = () => {
  return (
    <Authenticate
      headerText="Welcome Back!"
      btnName="Login"
      isLogin={true}
      isAcc="Don't have an account?"
    />
  );
};

export default memo(Login);
