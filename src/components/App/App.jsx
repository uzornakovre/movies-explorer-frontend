import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setBurgerMenuOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuOpen(false);
    console.log('asda')
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/movies" element={
          <Movies isBurgerMenuOpen={isBurgerMenuOpen}
                  onBurgerClick={handleBurgerClick}
                  closeBurgerMenu={closeBurgerMenu} /> }/>
        <Route path="/saved-movies" element={
          <SavedMovies isBurgerMenuOpen={isBurgerMenuOpen}
                       onBurgerClick={handleBurgerClick}
                       closeBurgerMenu={closeBurgerMenu} /> }/>
        <Route path="/profile" element={
          <Profile isBurgerMenuOpen={isBurgerMenuOpen}
                   onBurgerClick={handleBurgerClick}
                   closeBurgerMenu={closeBurgerMenu} /> }/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
