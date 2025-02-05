import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Welcome } from "./Welcome.jsx";
import { Message } from "./Message.jsx";
import { Age } from "./Età.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <App />
  <Welcome/>
  <Message/>
  <Age Age={25}/>
  </>
 
);
