import NavBar from './components/NavBar/NavBar.jsx';
import { SearchContextProvider } from './contexts/SearchContext.jsx';
import Search from './Pages/Search/Search.jsx';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Weather from './Pages/Weather/Weather.jsx';
import { WeatherContextProvider } from './contexts/WeatherContext.jsx';
import ThemeContext, { ThemeContextProvider } from './contexts/ThemeContext.jsx';
import { StyledMain } from './style.jsx';
import { useContext } from 'react';

function App() {
  return (
    <ThemeContextProvider>
      <WeatherContextProvider>
        <SearchContextProvider>
          <AppContent/>
        </SearchContextProvider>
      </WeatherContextProvider>
    </ThemeContextProvider>
  )
}

function AppContent() {
  const { bg } = useContext(ThemeContext);

  return (
    <StyledMain color={bg}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </StyledMain>
  );
}

export default App
