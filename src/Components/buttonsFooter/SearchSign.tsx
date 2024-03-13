import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  Keyboard,
  ListRenderItemInfo,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IZodialSings, TZodialSings} from '../../Services/interfaces';
import {RootState} from '../../Redux/store';
import RowItemModal from '../RowItemModal';
import {addItemSelected} from '../../Redux/Slice/itemSelectedSlice';
import {primary} from '../../../paletteColors.json';

interface ISearchSign {
  handleCloseModal: () => void;
}

const SearchSign: React.FC<ISearchSign> = ({handleCloseModal}) => {
  const dispatch = useDispatch();
  const [localQuery, setLocalQuery] = useState<string>('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);
  const data = useSelector<RootState, TZodialSings>(
    state => state.horoscopo.zodiac_signs,
  );

  const arrayList = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    if (!localQuery) {
      return data;
    }
    return data.filter(f =>
      Object.entries(f)
        .filter(([key, _]) => ['name'].includes(key))
        .some(([_, value]) =>
          value?.toString().toLowerCase().includes(localQuery.toLowerCase()),
        ),
    );
  }, [data, localQuery]);

  const handleClickRow = useCallback(
    (row: IZodialSings) => {
      dispatch(addItemSelected(row));
      handleCloseModal();
    },
    [dispatch, handleCloseModal],
  );

  const renderItem = useCallback(
    (item: ListRenderItemInfo<IZodialSings>) => (
      <RowItemModal
        text={item.item.name}
        onClick={(): void => handleClickRow(item.item)}
      />
    ),
    [handleClickRow],
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (): void => setIsKeyboardOpen(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      (): void => setIsKeyboardOpen(false),
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={isKeyboardOpen ? styles.containerOpen : styles.containerClose}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        onChangeText={setLocalQuery}
        value={localQuery}
        maxLength={20}
      />
      <FlatList data={arrayList} renderItem={renderItem} />
    </View>
  );
};

export default memo(SearchSign);

const styles = StyleSheet.create({
  containerOpen: {height: '85%'},
  containerClose: {height: '90%'},
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: primary.black,
    padding: 10,
    color: primary.black,
  },
});
