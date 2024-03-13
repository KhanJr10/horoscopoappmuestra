import React, {memo, useCallback} from 'react';
import {View} from 'react-native';
import RowItemModal from '../RowItemModal';
import {useDispatch} from 'react-redux';
import {changePosition} from '../../Redux/Slice/scrollList';

interface IChangeVista {
  handleCloseModal: () => void;
}

const ChangeVista: React.FC<IChangeVista> = ({handleCloseModal}) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (position: boolean) => {
      handleCloseModal();
      dispatch(changePosition(position));
    },
    [dispatch, handleCloseModal],
  );

  return (
    <View>
      <RowItemModal text="Horizontal" onClick={() => handleClick(true)} />
      <RowItemModal text="Vertical" onClick={() => handleClick(false)} />
    </View>
  );
};
export default memo(ChangeVista);
