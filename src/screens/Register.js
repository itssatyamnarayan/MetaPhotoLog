import {memo} from 'react';
import Authenticate from '../components/Authenticate';

const Register = () => {
  return (
    <Authenticate
      headerText="Join Us Today!"
      btnName="Create Account"
      isLogin={false}
      isAcc="Already have an account?"
    />
  );
};

export default memo(Register);
