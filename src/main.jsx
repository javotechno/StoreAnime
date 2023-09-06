import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {CartContextProvider} from './context/CartContext.jsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartContextProvider>
    <App />
    </CartContextProvider>
    );
