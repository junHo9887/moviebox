import * as React from 'react'
import { Reset } from 'styled-reset'
import './style/App.css';
import './style/Header.css';
import{Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Login from './pages/Login';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <React.Fragment>
    <Reset />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
  </React.Fragment>
)

export default App;
