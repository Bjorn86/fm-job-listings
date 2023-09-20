// IMPORT PACKAGES
import { Outlet, Route, Routes } from 'react-router-dom';

// IMPORT STYLES
import './PageContent.scss';

// IMPORT COMPONENTS
import Header from '../Header/Header';
import Filter from '../Filter/Filter';

// APP LAYOUT COMPONENT
function PageContent() {
  return (
    <>
      <Header />
      <main className='page-content'>
        <Routes>
          <Route path='/' element={<Filter />} />
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default PageContent;
