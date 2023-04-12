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
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Header page="main"/>
            <Main />
            <Footer />
          </>
        }/>
        <Route path="/movies" element={
          <>
            <Header page="movies"/>
            <Movies />
            <Footer />
          </>
        }/>
        <Route path="/saved-movies" element={
          <>
            <Header page="saved-movies"/>
            <SavedMovies />
            <Footer />
          </>
        }/>
        <Route path="/profile" element={
          <>
            <Header page="profile"/>
            <Profile />
            <Footer />
          </>
        }/>
        <Route path="/signin" element={
          <>
            <Header page="signin"/>
            <Login />
            <Footer />
          </>
        }/>
        <Route path="/signup" element={
          <>
            <Header page="signup"/>
            <Register />
            <Footer />
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App;
