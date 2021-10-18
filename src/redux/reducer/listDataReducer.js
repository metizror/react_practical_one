import {
  GET_LIST_DATA_LOADING,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
} from '../action/actionType';
const initialState = {
  getList: {
    isLoading: false,
    isLoggedIn: false,
    listDetails: [],
    loaderMessage: 'Loading...',
    isInternetConnection: false,
  },
};

const listDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_DATA_LOADING:
      return {
        getList: {
          ...state.getList,
          isLoading: true,
          listDetails: [],
          loaderMessage: 'Please wait...',
        },
      };
    case GET_LIST_DATA_SUCCESS:
      return {
        getList: {
          ...state.getList,
          isLoading: false,
          listDetails: action.payload.data,
          isLoggedIn: true,
          loaderMessage: 'Please wait...',
        },
      };
    case GET_LIST_DATA_ERROR:
      return {
        getList: {
          ...state.getList,
          listDetails: action.payload,
          isLoading: false,
          loaderMessage: 'Please wait...',
        },
      };
    default:
      return state;
  }
};

export default listDataReducer;
