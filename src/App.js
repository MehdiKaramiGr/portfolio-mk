import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
      <Header/>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
