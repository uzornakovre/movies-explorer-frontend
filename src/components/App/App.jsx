import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="page__content">
      <Routes>
        <Route path="/" />
        <Route path="/movies" />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </div>
  )
}

export default App;
