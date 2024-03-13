import React, {ReactElement, memo, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {IZodialSings, TZodialSings} from '../../Services/interfaces';
import CardListVertical from '../../Components/CardListVertical';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import CardListHorizontal from '../../Components/CardListHorizontal';

const List: React.FC = () => {
  const data = useSelector<RootState, TZodialSings>(
    state => state.horoscopo.zodiac_signs,
  );

  const position = useSelector<RootState, boolean>(
    state => state.position.horizontal,
  );

  const arrayList = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    return data;
  }, [data]);

  const renderItem = useCallback(
    (item: ListRenderItemInfo<IZodialSings>): ReactElement =>
      !position ? (
        <CardListVertical row={item.item} />
      ) : (
        <CardListHorizontal row={item.item} />
      ),
    [position],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayList}
        showsHorizontalScrollIndicator={false}
        horizontal={position}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(List);

const styles = StyleSheet.create({
  container: {height: '35%'},
});
