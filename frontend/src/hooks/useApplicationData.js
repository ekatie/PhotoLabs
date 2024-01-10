import axios from "axios";
import { useEffect, useReducer } from "react";

export const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_FAVOURITE: 'ADD_FAVOURITE',
  REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
  TOGGLE_FAVOURITES: 'TOGGLE_FAVOURITES',
  TOGGLE_ALERT: 'TOGGLE_ALERT',
  SET_TOPICS: 'SET_TOPICS',
  SET_PHOTOS: 'SET_PHOTOS',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  SET_TOPIC_ID: 'SET_TOPIC_ID',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_FILTERED_PHOTOS: 'SET_FILTERED_PHOTOS',
  FIND_SIMILAR_PHOTOS: 'FIND_SIMILAR_PHOTOS',
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
  searchTerm: "",
  filteredPhotos: [],
  similarPhotos: [],
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
    case ACTIONS.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case ACTIONS.SET_FILTERED_PHOTOS:
      return { ...state, filteredPhotos: action.payload };
    case ACTIONS.FIND_SIMILAR_PHOTOS:
      return { ...state, similarPhotos: action.payload };
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

  const setSearchTerm = (term) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: term });
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
        dispatch({ type: ACTIONS.SET_FILTERED_PHOTOS, payload: response.data });
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

  // Filter photos by search term
  useEffect(() => {
    const filteredPhotos = state.photoData.filter(photo =>
      photo.user.username.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      (photo.location && photo.location.city && photo.location.city.toLowerCase().includes(state.searchTerm.toLowerCase())) ||
      (photo.location && photo.location.country && photo.location.country.toLowerCase().includes(state.searchTerm.toLowerCase()))
    );

    dispatch({ type: ACTIONS.SET_FILTERED_PHOTOS, payload: filteredPhotos });
  }, [state.searchTerm, state.photoData]);

  const findSimilarPhotos = (photo) => {
    // Check if photo and photo.similar_photos are defined
    if (!photo || !photo.similar_photos) {
      return [];
    }

    // Extract the IDs from photo.similar_photos
    const similarPhotoIds = photo.similar_photos.map(similarPhoto => similarPhoto.id);

    // Filter state.photoData to get the photos with these IDs
    const similarPhotosFromDb = state.photoData.filter(photo => similarPhotoIds.includes(photo.id));

    return similarPhotosFromDb;
  };

  useEffect(() => {
    // Ensure that the selected photo's similar_photos data is available
    if (state.selectedPhoto && state.selectedPhoto.similar_photos) {
      dispatch({ type: ACTIONS.FIND_SIMILAR_PHOTOS, payload: findSimilarPhotos(state.selectedPhoto.similar_photos) });
    }
  }, [state.selectedPhoto]);

  return {
    state,
    openModalWithPhoto,
    closeModal,
    addFavouritePhoto,
    removeFavouritePhoto,
    getPhotosByTopic,
    toggleFavourites,
    setSearchTerm,
    findSimilarPhotos,
  };

};

export default useApplicationData;