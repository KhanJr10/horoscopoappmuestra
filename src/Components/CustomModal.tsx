import React, {ReactElement, memo} from 'react';
import {
  DimensionValue,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary} from '../../paletteColors.json';

interface ICustomModal {
  open: boolean;
  children: ReactElement;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  onClose: () => void;
}

const CustomModal: React.FC<ICustomModal> = ({
  open,
  children,
  height = '80%',
  width = '80%',
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={open}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={{...styles.modal, width, height}}>
          {children}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.text}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default memo(CustomModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    borderRadius: 20,
    backgroundColor: primary.white,
    borderWidth: 1,
    borderColor: primary.black,
    padding: '2%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: primary.purple,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: primary.text,
  },
});
