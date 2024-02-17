import { Route, Routes, useSearchParams} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Vehicle from '../pages/Vehicle';
import System from '../pages/System';

const Routers = () => {
  return ( 
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/system" element={<System />} />
      </Routes>
  );
};
export default Routers;
