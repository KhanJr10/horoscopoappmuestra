import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {primary} from '../../paletteColors.json';

interface IRowItemModal {
  text: string;
  onClick: () => void;
}

const RowItemModal: React.FC<IRowItemModal> = ({text, onClick}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default memo(RowItemModal);

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: primary.black,
    justifyContent: 'center',
  },
  text: {
    color: primary.black,
    fontSize: 16,
    flexShrink: 1,
    maxHeight: 45,
    fontWeight: 'bold',
  },
});
