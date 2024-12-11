import {memo, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {View, StyleSheet} from 'react-native';

const DropDown = ({dataItems, placeholder}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectedValue = value => {
    setSelectedValue(value);
  };
  return (
    <View style={styles.dropDownContainer}>
      <Dropdown
        placeholder={placeholder}
        data={dataItems}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onChange={item => {
          handleSelectedValue(item.value);
        }}
        search
        searchPlaceholder="Search..."
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        inputSearchStyle={styles.searchStyle}
        iconStyle={styles.icon}
        containerStyle={styles.container}
      />
    </View>
  );
};

export default memo(DropDown);

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 5,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    borderRadius: 8,
  },
  placeholder: {
    fontFamily: 'OpenSans-Regular',
    opacity: 0.25,
  },
  selectedText: {
    fontFamily: 'OpenSans-Regular',
  },
  searchStyle: {
    fontFamily: 'OpenSans-Regular',
    borderRadius: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
