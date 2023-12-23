import { useEffect, useReducer } from "react";

export const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_FAVOURITE: 'ADD_FAVOURITE',
  REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
  TOGGLE_ALERT: 'TOGGLE_ALERT'
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favouritePhotos: [],
  displayAlert: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.photo };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case ACTIONS.ADD_FAVOURITE:
      return { ...state, favouritePhotos: [...state.favouritePhotos, action.photo.id] };
    case ACTIONS.REMOVE_FAVOURITE:
      const newPhotos = state.favouritePhotos.filter(id => id !== action.photo.id);
      return { ...state, favouritePhotos: newPhotos };
    case ACTIONS.TOGGLE_ALERT:
      return { ...state, displayAlert: state.favouritePhotos.length !== 0 };
    default:
      return state;
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const addFavouritePhoto = (photo) => {
    dispatch({ type: ACTIONS.ADD_FAVOURITE, photo });
  };

  const removeFavouritePhoto = (photo) => {
    dispatch({ type: ACTIONS.REMOVE_FAVOURITE, photo });
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.TOGGLE_ALERT });
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