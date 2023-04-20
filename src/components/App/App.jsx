import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import useFormData from '../../hooks/useFormData';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const formData = useFormData();

  function handleBurgerClick() {
    setBurgerMenuOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuOpen(false);
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
        <Route path="/signin" element={<Login formData={formData} />}/>
        <Route path="/signup" element={<Register formData={formData} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
