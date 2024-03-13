import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary} from '../../paletteColors.json';
import CustomModal from './CustomModal';
import ChangeVista from './buttonsFooter/ChangeVista';
import SearchSign from './buttonsFooter/SearchSign';
import OrderBy from './buttonsFooter/OrderBy';

const ButtonsFooter: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [buttonSelected, setButtonSelected] = useState<string>('');

  const handleCloseModal = useCallback((): void => setOpenModal(false), []);

  const handleOpenModal = useCallback((selected: string): void => {
    setOpenModal(true);
    setButtonSelected(selected);
  }, []);

  const height = useMemo<DimensionValue>(
    () =>
      buttonSelected === 'Vista'
        ? 180
        : buttonSelected === 'Ordenar'
        ? 250
        : '90%',
    [buttonSelected],
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={(): void => handleOpenModal('Ordenar')}>
            <Text style={styles.text}>Ordenar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, styles.buttonCenter]}
            onPress={(): void => handleOpenModal('Buscar')}>
            <Text style={styles.text}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={(): void => handleOpenModal('Vista')}>
            <Text style={styles.text}>Vista</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomModal
        open={openModal}
        onClose={handleCloseModal}
        height={height}
        children={
          buttonSelected === 'Vista' ? (
            <ChangeVista handleCloseModal={handleCloseModal} />
          ) : buttonSelected === 'Buscar' ? (
            <SearchSign handleCloseModal={handleCloseModal} />
          ) : (
            <OrderBy handleCloseModal={handleCloseModal} />
          )
        }
      />
    </>
  );
};

export default memo(ButtonsFooter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: primary.white,
    width: '80%',
    height: '60%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    width: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  buttonCenter: {borderLeftWidth: 1, borderRightWidth: 1},
  text: {color: primary.black, fontSize: 16, flexShrink: 1},
});
