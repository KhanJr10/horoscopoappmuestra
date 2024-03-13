import React, {memo, useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primary} from '../../paletteColors.json';
import CardPrincipal from './PrincipalPage/CardPrincipal';
import List from './PrincipalPage/List';
import ButtonsFooter from '../Components/ButtonsFooter';
import {useGetList} from '../Services/Query';
import {addVideo} from '../Redux/Slice/videoSlice';
import {useDispatch} from 'react-redux';
import {IVideo, TZodialSings} from '../Services/interfaces';
import {addHoroscopo} from '../Redux/Slice/horoscopoSlice';
import {useNearestObject} from '../Services/hooks';
import {addItemSelected} from '../Redux/Slice/itemSelectedSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useGetList();

  const arrayData = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    return data.zodiac_signs;
  }, [data]);

  const video = useMemo<IVideo | null>(() => {
    if (!data) {
      return null;
    }
    return data.videos[0];
  }, [data]);

  const nearestObject = useNearestObject(arrayData);

  useEffect(() => {
    if (video && arrayData && nearestObject) {
      dispatch(addVideo(video));
      dispatch(addHoroscopo(arrayData));
      dispatch(addItemSelected(nearestObject));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video, arrayData]);

  return (
    <SafeAreaView style={styles.contianer}>
      <CardPrincipal />
      <List />
      <ButtonsFooter />
    </SafeAreaView>
  );
};
export default memo(Home);

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: primary.black,
    flex: 1,
  },
});
