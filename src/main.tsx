import React from "react";
import ReactDOM from "react-dom/client";
import "@assets/styles/index.css";
import { Providers } from "@app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Providers />
	</React.StrictMode>
);

