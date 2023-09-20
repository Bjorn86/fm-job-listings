// IMPORT PACKAGES
import { Route, Routes } from 'react-router-dom';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import PageContent from '../PageContent/PageContent';
import JobList from '../JobList/JobList';

// OTHER IMPORTS
import data from '../../assets/data/data.json';

// APP CORE COMPONENT
function App() {
  return (
    <div className='app__content'>
      <Routes>
        <Route path='/*' element={<PageContent />}>
          <Route index element={<JobList data={data} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
