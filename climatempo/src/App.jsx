import NavBar from './components/NavBar/NavBar.jsx';
import SearchContext, { SearchContextProvider } from './contexts/SearchContext.jsx';
import Search from './Pages/Search/Search.jsx';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Weather from './Pages/Weather/Weather.jsx';

function App() {
  return (
    <>
      <SearchContextProvider>    
        <NavBar />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/weather' element={<Weather/>}/>
        </Routes>
      </SearchContextProvider>
    </>
  )
}

export default App
