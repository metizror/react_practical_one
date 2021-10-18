import {
  GET_LIST_DATA_LOADING,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
} from '../action/actionType';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../network/api';

export const getMyListingApi = (data, startCount) => async (dispatch) => {
  console.log(global.userToken);
  try {
    dispatch({
      type: GET_LIST_DATA_LOADING,
      payload: true,
    });
    new Promise((resolve, reject) => {
      api
        .get('posts?start=' + startCount + '&limit=10', '')
        .then((response) => {
          if (response.body.success) {
            dispatch({
              type: GET_LIST_DATA_SUCCESS,
              payload: response.body,
            });
          } else {
            dispatch({
              type: GET_LIST_DATA_ERROR,
              payload: response.body,
            });
          }
        })
        .catch(reject);
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_DATA_ERROR,
      payload: error,
    });
  }
};
