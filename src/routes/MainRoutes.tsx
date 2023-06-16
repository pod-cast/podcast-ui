import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
