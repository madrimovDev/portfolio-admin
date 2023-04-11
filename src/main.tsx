import React from "react";
import ReactDOM from "react-dom/client";
import "@assets/styles/index.css";
import { Providers } from "@app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			
			<Providers />
		</BrowserRouter>
	</React.StrictMode>
);

