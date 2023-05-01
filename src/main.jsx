import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//StrictMode de React renderiza 2 veces los componentes (de forman intencional) para ayudarte a detectar efectos secundarios de la renderización. Sólo ocurre durante el desarrollo
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
//Puedes retirarlo para probar el uso de localStorage
ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
