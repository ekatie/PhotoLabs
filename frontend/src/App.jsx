import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <PhotoList/>
  </div>
)

export default App;