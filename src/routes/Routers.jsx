import { Route, Routes, useSearchParams } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Vehicle from "../pages/Vehicle";
import System from "../pages/System";
import Semi from "../pages/Semi";
import Finance from "../pages/Finance";
import Garantia from "../pages/Garantia";
import Landing from "../pages/Landing";
import ViewPort from "../pages/ViewPort";
import Credito from "../pages/Credito";
import Renta from "../pages/Renta";
import Contizadores from "../pages/Cotizadores";
import Logo from "../pages/Logo";
import Quienes from "../pages/Quienes";
import Terminos from "../pages/Terminos";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/vehicle" element={<Vehicle />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/system" element={<System />} />
      <Route path="/semi" element={<Semi />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/garantia" element={<Garantia />} />
      <Route path="/view" element={<ViewPort />} />
      <Route path="/credito" element={<Credito />} />
      <Route path="/renta" element={<Renta />} />
      <Route path="/cotizadores" element={<Contizadores />} />
      <Route path="/quienes" element={<Quienes />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
    // <Routes>
    //   <Route path="/" element={<Landing />} />
    //   <Route path="/signin" element={<SignIn />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route element={<MembershipRoute />}>
    //     <Route element={<Layout />}>
    //       <Route path="/vehicle" element={<Vehicle />} />
    //       <Route path="/system" element={<System />} />
    //       <Route path="/semi" element={<Semi />} />
    //       <Route path="/finance" element={<Finance />} />
    //       <Route path="/garantia" element={<Garantia />} />
    //       <Route path="/view" element={<ViewPort />} />
    //       <Route path="/credito" element={<Credito />} />
    //       <Route path="/renta" element={<Renta />} />
    //     </Route>
    //   </Route>
    // </Routes>
  );
};
export default Routers;
