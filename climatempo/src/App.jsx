import NavBar from './components/NavBar/NavBar.jsx';
import SearchContext, { SearchContextProvider } from './contexts/SearchContext.jsx';
import Search from './Pages/Search/Search.jsx';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <SearchContextProvider>    
        <NavBar />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/search' element="Resultados: "/>
        </Routes>
      </SearchContextProvider>
    </>
  )
}

export default App
