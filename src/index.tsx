import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.scss";

import { GoogleOAuthProvider } from "@react-oauth/google";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="941479305108-97lco1o7hnprj69122lrcs1505frp1ir.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
