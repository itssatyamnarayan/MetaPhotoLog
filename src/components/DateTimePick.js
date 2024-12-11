import {memo} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DateTimePick = ({visible, onCancel, onConfirm, mode}) => {
  return (
    <DateTimePicker
      isVisible={visible}
      mode={mode}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default memo(DateTimePick);
