import {StyleSheet, Text, View} from 'react-native';
import RowItemModal from '../RowItemModal';
import React, {memo, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {TZodialSings} from '../../Services/interfaces';
import {primary} from '../../../paletteColors.json';
import {
  sortByMajorDate,
  sortByMinorDate,
  sortByName,
} from '../../Services/hooks';
import {addHoroscopo} from '../../Redux/Slice/horoscopoSlice';

interface IOrderBy {
  handleCloseModal: () => void;
}

const OrderBy: React.FC<IOrderBy> = ({handleCloseModal}) => {
  const dispatch = useDispatch();
  const data = useSelector<RootState, TZodialSings>(
    state => state.horoscopo.zodiac_signs,
  );

  const arrayList = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    return data;
  }, [data]);

  const handleClickAlfabetico = useCallback(() => {
    dispatch(addHoroscopo(sortByName(arrayList)));
    handleCloseModal();
  }, [arrayList, dispatch, handleCloseModal]);

  const handleClickMayFecha = useCallback(() => {
    dispatch(addHoroscopo(sortByMajorDate(arrayList)));
    handleCloseModal();
  }, [arrayList, dispatch, handleCloseModal]);

  const handleClickMinFecha = useCallback(() => {
    dispatch(addHoroscopo(sortByMinorDate(arrayList)));
    handleCloseModal();
  }, [arrayList, dispatch, handleCloseModal]);

  return (
    <View>
      <Text style={styles.text}>Ordenar Por</Text>
      <RowItemModal text="Orden Alfabético" onClick={handleClickAlfabetico} />
      <RowItemModal text="Mayor Fecha" onClick={handleClickMayFecha} />
      <RowItemModal text="Menor Fecha" onClick={handleClickMinFecha} />
    </View>
  );
};

export default memo(OrderBy);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: primary.black,
    textAlign: 'center',
  },
});
