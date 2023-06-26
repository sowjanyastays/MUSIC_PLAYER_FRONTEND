import './App.css';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';

import FileUploadComponent from './components/FileUploadComponent/FileUploadComponent';
import SongGalleryComponent from './components/SongGalleryComponent/SongGalleryComponent';

function App() {
  return (
    <Router>
    <div className="App">
     <div className='container'>
     <h1 id='heading'>Song Player</h1>
        <nav className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/admin/upload'>Add Songs</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<SongGalleryComponent />} />
          <Route path='/admin/upload' element={<FileUploadComponent />} />
        </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
