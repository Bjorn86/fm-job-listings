// IMPORT PACKAGES
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
      <PageContent>
        <JobList />
      </PageContent>
    </div>
  );
}

export default App;
