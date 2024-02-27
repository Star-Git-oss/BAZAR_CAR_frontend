import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  // "pk_test_51OnG87Dg9vv5uXuMTljAKOJyBd4zJV5PHLHWMy6ZQcQShOGOxDprP9S97td4OcED5jxDgEcybc4jDsVNQBlPJWwI00LQCwbSSf" //test
  "pk_live_51OoCVsEkjLcpR4oqGrgc8TCB2Zo50gsHetFm6opbHwlUyZdTDkfTUK5CdJZc6kpSUWi1EQE8M1rqlSVz6Pzc23kX00HMQ454w0"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <HashRouter>
          <App />
        </HashRouter>
      </Elements>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
