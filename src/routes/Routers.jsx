import { Route, Routes, useSearchParams} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Vehicle from '../pages/Vehicle';
import System from '../pages/System';
import Semi from '../pages/Semi';
import Finance from '../pages/Finance';
import Garantia from '../pages/Garantia';
import Landing from '../pages/Landing';
import ViewPort from '../pages/ViewPort';
import Credito from '../pages/Credito';
import Renta from '../pages/Renta';

const Routers = () => {
  return ( 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/system" element={<System />} />
        <Route path="/semi" element={<Semi />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/garantia" element={<Garantia />} />
        <Route path="/view" element={<ViewPort />} />
        <Route path="/credito" element={<Credito />} />
        <Route path="/renta" element={<Renta />} />
      </Routes>
  );
};
export default Routers;
