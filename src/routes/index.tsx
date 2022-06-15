import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Login,
  Rockets,
  Rocket,
  Error404,
} from './routes';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rocket/:rocketId" element={<Rocket />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
