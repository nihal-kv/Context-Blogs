
import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';

function App() {
  const {fetchBlogs, loading}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogs();
  }, [])

  return (
    <div className="App">
      <Header/>
      { 
        loading?<Spinner/>:
        <Blogs/>
      }
      <Pagination/>
    </div>
  );
}

export default App;
