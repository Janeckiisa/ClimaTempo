import NavBar from './components/NavBar/NavBar.jsx';
import SearchContext, { SearchContextProvider } from './contexts/SearchContext.jsx';
import Search from './Pages/Search/Search.jsx';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Weather from './Pages/Weather/Weather.jsx';
import { WeatherContextProvider } from './contexts/WeatherContext.jsx';

function App() {
  return (
    <>
      <WeatherContextProvider>
        <SearchContextProvider>    
          <NavBar />
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/weather' element={<Weather/>}/>
          </Routes>
        </SearchContextProvider>
      </WeatherContextProvider>
    </>
  )
}

export default App
