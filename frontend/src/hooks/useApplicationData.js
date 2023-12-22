import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favouritePhotos: [],
  displayAlert: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, selectedPhoto: action.photo };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };
    case 'ADD_FAVOURITE':
      return { ...state, favouritePhotos: [...state.favouritePhotos, action.photo.id] };
    case 'REMOVE_FAVOURITE':
      const newPhotos = state.favouritePhotos.filter(id => id !== action.photo.id);
      return { ...state, favouritePhotos: newPhotos };
    case 'TOGGLE_ALERT':
      return { ...state, displayAlert: state.favouritePhotos.length !== 0 };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModalWithPhoto = (photo) => {
    dispatch({ type: 'OPEN_MODAL', photo });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const addFavouritePhoto = (photo) => {
    dispatch({ type: 'ADD_FAVOURITE', photo });
  };

  const removeFavouritePhoto = (photo) => {
    dispatch({ type: 'REMOVE_FAVOURITE', photo });
  };

  useEffect(() => {
    dispatch({ type: 'TOGGLE_ALERT' });
  }, [state.favouritePhotos]);

  return {
    state,
    openModalWithPhoto,
    closeModal,
    addFavouritePhoto,
    removeFavouritePhoto,
  };

};

export default useApplicationData;