import React from 'react';
import HomeRoute from 'components/HomeRoute';
import './App.scss';
import photos from './mocks/photos.js';
import topics from 'mocks/topics';

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
  <HomeRoute photos={photos} topics={topics}/>
  </div>
)

export default App;