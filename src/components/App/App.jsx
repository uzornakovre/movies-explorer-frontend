import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="page__content">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }/>
        <Route path="/movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        }/>
        <Route path="/saved-movies" element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        }/>
        <Route path="/profile" element={
          <>
            <Header />
            <Profile />
            <Footer />
          </>
        }/>
        <Route path="/signin" element={
          <>
            <Header />
            <Login />
            <Footer />
          </>
        }/>
        <Route path="/signup" element={
          <>
            <Header />
            <Register />
            <Footer />
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App;
