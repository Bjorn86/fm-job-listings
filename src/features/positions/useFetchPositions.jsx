// IMPORT PACKAGES
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// IMPORT ACTIONS
import { addPositions } from './positionSlice';

// OTHER IMPORTS
import data from '../../assets/data/data.json';

// USE FETCH POSITIONS HOOK
export const useFetchPositions = () => {
  // HOOKS
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
};
