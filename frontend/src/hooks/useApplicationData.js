import axios from "axios";
import { useEffect, useReducer } from "react";

export const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_FAVOURITE: 'ADD_FAVOURITE',
  REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
  TOGGLE_ALERT: 'TOGGLE_ALERT',
  SET_TOPICS: 'SET_TOPICS',
  SET_PHOTOS: 'SET_PHOTOS',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  SET_TOPIC_ID: 'SET_TOPIC_ID',
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favouritePhotos: [],
  displayAlert: false,
  photoData: [],
  topicData: [],
  topicId: null,
  showFavourites: false,
};

function reducer(state, action) {
  let newPhotos;
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.photo };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case ACTIONS.ADD_FAVOURITE:
      newPhotos = [...state.favouritePhotos, action.photo];
      localStorage.setItem('favouritePhotos', JSON.stringify(newPhotos));
      return { ...state, favouritePhotos: newPhotos };
    case ACTIONS.REMOVE_FAVOURITE:
      newPhotos = state.favouritePhotos.filter(photo => photo.id !== action.photo.id);
      localStorage.setItem('favouritePhotos', JSON.stringify(newPhotos));
      return { ...state, favouritePhotos: newPhotos };
    case ACTIONS.TOGGLE_FAVOURITES:
      return { ...state, showFavourites: !state.showFavourites };
    case ACTIONS.TOGGLE_ALERT:
      return { ...state, displayAlert: state.favouritePhotos.length !== 0 };
    case ACTIONS.SET_TOPICS:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_PHOTOS:
      return { ...state, photoData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_ID:
      return { ...state, topicId: action.payload };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const initialFavouritePhotos = JSON.parse(localStorage.getItem('favouritePhotos')) || initialState.favouritePhotos;
  const initialStateWithLocalStorage = { ...initialState, favouritePhotos: initialFavouritePhotos };
  const [state, dispatch] = useReducer(reducer, initialStateWithLocalStorage);

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

  const toggleFavourites = () => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITES });
  };

  // Show alert when there are favourited photos
  useEffect(() => {
    dispatch({ type: ACTIONS.TOGGLE_ALERT });
  }, [state.favouritePhotos]);

  // Fetch topics from database
  useEffect(() => {
    axios.get('/api/topics')
      .then(response => {
        dispatch({ type: ACTIONS.SET_TOPICS, payload: response.data });
      })
      .catch(err => console.log(err));
  }, []);

  // Fetch photos from database
  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: response.data });
      })
      .catch(err => console.log(err));
  }, []);

  // Update topic id in state
  const getPhotosByTopic = (id) => {
    dispatch({ type: ACTIONS.SET_TOPIC_ID, payload: id });
  };

  // Fetch photos by topic id
  useEffect(() => {
    if (state.topicId !== null) {
      axios.get(`/api/topics/photos/${state.topicId}`)
        .then(response => {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: response.data });
        })
        .catch(err => console.log(err));
    }
  }, [state.topicId]);

  return {
    state,
    openModalWithPhoto,
    closeModal,
    addFavouritePhoto,
    removeFavouritePhoto,
    getPhotosByTopic,
    toggleFavourites
  };

};

export default useApplicationData;