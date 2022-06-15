import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Login,
  Users,
  Error404,
} from './routes';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
