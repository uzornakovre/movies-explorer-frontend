import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import Profile from './Profile';
import SavedMovies from './SavedMovies';

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
