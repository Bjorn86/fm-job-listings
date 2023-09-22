// IMPORT PACKAGES
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import PageContent from '../PageContent/PageContent';
import JobList from '../JobList/JobList';

// IMPORT ACTIONS
import { addPositions } from '../../store/positions/positionActions';

// OTHER IMPORTS
import data from '../../assets/data/data.json';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const dispatch = useDispatch();

  // FILLING THE STORE
  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);

  return (
    <div className='app__content'>
      <Routes>
        <Route path='/*' element={<PageContent />}>
          <Route index element={<JobList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
