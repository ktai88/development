import { createRoot } from "react-dom/client";
import "./index.css";
import "@astron-sdc/design-system/styles.css";
import App from "./App";


createRoot(document.getElementById('root')!).render(
    <App />,
)
