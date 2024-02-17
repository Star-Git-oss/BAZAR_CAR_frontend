import Routers from "./routes/Routers";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => (
  <>
    <GoogleOAuthProvider clientId="99233915233-o5ogspkgt9ic3ej9fc4od98snoqk87ls.apps.googleusercontent.com">
      <Routers />
    </GoogleOAuthProvider>
  </>
);

export default App;
