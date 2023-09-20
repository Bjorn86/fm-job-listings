// IMPORT PACKAGES
import { Outlet, Route, Routes } from 'react-router-dom';

// IMPORT STYLES
import './AppLayout.scss';

// IMPORT COMPONENTS
import Header from '../Header/Header';
import Main from '../Main/Main';
import Filter from '../Filter/Filter';

// PAGE CONTENT COMPONENT
function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Filter />} />
        </Routes>
        <Outlet />
      </Main>
    </>
  );
}

export default AppLayout;
